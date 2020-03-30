const router = require("express").Router();
const bcrypt = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

const users = [];

// @route   Post api/users
// @desc    Register user
// @access  Public
router.post(
  "/register",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please include the valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { name, email, password } = req.body;
      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      const user = { name, email, password: await bcrypt.hash(password, salt) };
      // See if user exists
      const existuser = users.find(user => user.email === email);
      if (existuser) {
        console.log(users);
        return res
          .status(400)
          .json({ errors: [(msg = "User already exists")] });
      }
      users.push(user);
      res.status(200).send("User registered");

      // Return jsonwebtoken
      const payload = {
        user: {
          name: name
        }
      };

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

router.post("/login", async (req, res) => {
  const user = users.find(user => user.username === req.body.username);
  if (user == null) {
    return res.status(400).send("Cannot find user");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("login Successfull");
    } else {
      res.send("Enter valid password");
    }
  } catch {
    res.status(500).send("Login failed");
  }
});

module.exports = router;
