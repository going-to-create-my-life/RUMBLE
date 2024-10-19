const express = require('express');
const session = require('express-session');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const PORT = process.env.PORT || 5000;
require('./google')
const app = express();
const SECRET = 'CSMACEMT'; // Your JWT secret key

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
    res.redirect(`http://localhost:3000/home?token=${token2}`); 

});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
