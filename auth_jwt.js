require('dotenv').config(); // Ensure env vars are loaded if this file is run independently
var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var db = require('./db'); // Modified: using singleton instance

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
// Use UNIQUE_KEY from your .env as the secret key
opts.secretOrKey = process.env.UNIQUE_KEY;

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log("JWT payload received:", jwt_payload);
    var user = db.find(jwt_payload.id);
    if (user) {
        return done(null, user);
    } else {
        console.log("User not found for ID:", jwt_payload.id);
        return done(null, false);
    }
}));

exports.isAuthenticated = passport.authenticate('jwt', { session: false });
exports.secret = opts.secretOrKey;
