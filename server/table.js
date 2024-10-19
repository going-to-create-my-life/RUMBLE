const sqlite3 = require('sqlite3').verbose();
// Connect to SQLite database
const db = new sqlite3.Database("./database.db", sqlite3.OPEN_READWRITE,(err)=>{
    if(err) return console.error(err.message);
});
// Create Users table
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS Users (
            username TEXT PRIMARY KEY NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            profile_picture_url TEXT
        )
    `, (err) => {
        if (err) {
            console.error('Error creating Users table:', err.message);
        } else {
            console.log('Users table created successfully.');
        }
    });

    db.run(`PRAGMA foreign_keys = ON;`,(err) => {
        if (err) {
            console.error('Error in Pragma', err.message);
        }
    });

    // Create Battles table
    db.run(`
        CREATE TABLE IF NOT EXISTS Battles (
            battle_id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_1 TEXT NOT NULL,
            user_2 TEXT NOT NULL,
            winner TEXT,
            status TEXT CHECK (status IN ('ongoing', 'completed')) NOT NULL,
            FOREIGN KEY (user_1) REFERENCES Users(username),
            FOREIGN KEY (user_2) REFERENCES Users(username),
            FOREIGN KEY (winner) REFERENCES Users(username)
        )
    `, (err) => {
        if (err) {
            console.error('Error creating Battles table:', err.message);
        } else {
            console.log('Battles table created successfully.');
        }
    });
});
// Close the database connection on exit
process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            console.error('Error closing SQLite database:', err.message);
        } else {
            console.log('SQLite database connection closed.');
        }
        process.exit(0);
    });
});
