const express = require('express');
const authRoutes = require('./routes/auth-route');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const profileRoutes = require('./routes/profile-route');
const errorRoutes = require('./routes/error-route');
const trackRoutes = require("./routes/track-route");
const contactRoutes = require("./routes/contact-route");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.use("/track", trackRoutes);
app.use("/contact", contactRoutes);
app.use("/error", errorRoutes);

app.get("/", (req,res) => {
  res.render("splash");
});

app.get("/home", (req, res) => {
  res.render("home", { user: req.user });
});

app.listen(3000, () => {
  console.log("listening for port 3000....");
});
