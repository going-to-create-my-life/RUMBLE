const sqlite3 = require('sqlite3').verbose();
const path = require("path");
const db = new sqlite3.Database("./database.db", sqlite3.OPEN_READWRITE,(err)=>{
    if(err) return console.error(err.message);
});
const jwt = require('jsonwebtoken');

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = "587874548884-k8hi0cs2mi5555t966opochc7dkoj5jd.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:5000/auth/google/callback",
  passReqToCallback: true,
  scope: ['profile', 'email'],
},

function a(req, accessToken, refreshToken, profile, done) {
    // console.log("ENTERED");
    let sql = `SELECT password_hash FROM Users WHERE email = ?`;
    console.log(profile);
    db.all(sql,[profile.email],(err,row)=>{
        if (err) {
            return console.error(err.message);
        }
        else{
          if(row[0] == undefined || row[0]==''){
                console.log(row);
                sql = `INSERT INTO Users(username,email,password_hash,profile_picture_url) VALUES (?,?,?,?)`
                db.run(sql,[profile.email.substring(0,profile.email.length-10),profile.email,"google",profile.picture],(err)=>{
                if(err) return console.error(err.message);
                });
                }
        }
    });
        req._user = profile;
        // console.log(profile);
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});