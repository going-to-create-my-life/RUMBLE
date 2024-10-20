const express = require('express');
const session = require('express-session');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const cors = require('cors'); // Import the cors package
const PORT = process.env.PORT || 5000;
require('./google')
const app = express();
const { Server } = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const SECRET = 'CSMACEMT'; // Your JWT secret key

app.use(cors({
    origin: 'http://localhost:3000'
}));

// Configure session middleware
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
}));

// Initialize Passport.js
app.use(passport.initialize());
app.use(passport.session());
// Route to start the authentication process
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Callback route after Google authentication
app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // Successful authentication, generate JWT
        const token = jwt.sign({ user:req.user.email.substring(0,req.user.email.length-10), pic:req.user.picture, add: "NULL" },SECRET);

        // Redirect to the external website with the JWT as a query parameter
        res.redirect(`http://localhost:3000/home?token=${token}`); // Change to your desired URL
    }
);

app.get('/add', (req, res) => {
    const add = req.query.x;
    const token = req.query.token;

    if (!token || !add) {
        return res.status(400).json({ message: 'Token is required' });
    }
    const decoded = jwt.verify(token, SECRET);
    decoded['add'] = add;
    // Create a JWT token
    const token2 = jwt.sign(decoded, SECRET,);

    // Send the token back to the client
    res.redirect(`http://localhost:3000/dashboard?token=${token2}`);

});

app.get('/authen', (req, res) => {
    const token = req.query.token;
    console.log(token);
    if (!token) {
        return res.status(400).json({ message: 'Token is required' });
    }
    try {
        const decoded = jwt.verify(token, SECRET);
        if(decoded['add'] == "NULL") res.send("WALLET");
        else res.send("SAFE");
    } catch (err) {
        res.send("LOGIN");
    }
});

const io = new Server(server,{
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET","POST"],
    },
});
let waitingUsers = []; 
io.on('connection', (socket) => {
    console.log('User connected: ', socket.id);

    // Listen for the 'choose_level_and_ether' event
    socket.on('choose_level_and_ether', ({ level, ether }) => {
        console.log(`User ${socket.id} chose level ${level} with ether ${ether}`);

        // Check if there is a user already waiting with the same level and ether
        const matchedUserIndex = waitingUsers.findIndex(user => user.level === level && user.ether === ether);

        if (matchedUserIndex !== -1) {
            // If a match is found, retrieve the matched user
            const matchedUser = waitingUsers[matchedUserIndex];
            
            // Inform both users they are matched
            socket.emit('start_game', { opponentId: matchedUser.socketId });
            io.to(matchedUser.socketId).emit('start_game', { opponentId: socket.id });

            // Remove the matched user from the waiting list
            waitingUsers.splice(matchedUserIndex, 1);

        } else {
            // No match found, add the current user to the waiting list
            waitingUsers.push({ socketId: socket.id, level, ether });
            console.log(`User ${socket.id} is waiting for a match on level ${level} with ether ${ether}`);
        }
    });

    // Handle user disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected: ', socket.id);

        // Remove user from waiting list if they disconnect while waiting
        waitingUsers = waitingUsers.filter(user => user.socketId !== socket.id);
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
