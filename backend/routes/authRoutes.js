const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const {
  register,
  login,
  loginWithGoogle,
} = require("../controllers/authController");
const passport = require("passport");

router.post(
  "/register",
  [
    body("name")
      .notEmpty()
      .withMessage("Name is required"),

    body("email")
      .isEmail()
      .withMessage("Enter a valid email"),

    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  register
);

router.post(
  "/login",
  [
    body("email")
      .isEmail()
      .withMessage("Enter a valid email"),

    body("password")
      .notEmpty()
      .withMessage("Password is required"),
  ],
  login
);
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  (req, res, next) => {
    passport.authenticate(
      "google",
      { session: false },
      (err, user) => {
        if (err) {
          console.error("Google Auth Error:", err);
          return res.status(500).json({
            error: err.message,
          });
        }

        if (!user) {
          return res.status(401).json({
            error: "Google login failed",
          });
        }

        req.user = user;
        next();
      }
    )(req, res, next);
  },
  loginWithGoogle
);

module.exports = router;