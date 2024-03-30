const passport = require("passport")
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const GOOGLE_CLIENT_ID = '501920032434-asfstb6pemob4srs3m6kg9ds76c0821a.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:4000/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

passport.serializeUser(function(user,done){
    done(null,user)
})
passport.deserializeUser(function(user,done){
    done(null,user)
})