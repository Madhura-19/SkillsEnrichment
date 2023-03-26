const express = require("express");
const router = express.Router();
const userContoller = require("../controllers/users");
router.get(["/", "/login"], (req, res) => {
  //res.send("<h1>Hello Tutor Joes Salem</h1>");
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});
router.get("/profile", (req,res) => {
  res.render("profile");
  })
router.get("/home", (req,res) => {
    res.render("home");
    })
router.get("/display", (req,res) => {
      res.render("display");
      })
router.get("/displaylinks", (req,res) => {
        res.render("displaylinks");
        })

router.get("/logout", (req,res) => {
      res.render("login");
      })
   

router.get("/profile", userContoller.isLoggedIn, (req, res) => {
  if (req.user) {
    res.render("profile", { user: req.user });
  } else {
    res.redirect("/login");
  }
});
router.get("/home", userContoller.isLoggedIn, (req, res) => {
  //console.log(req.name);
  if (req.user) {
    res.render("home", { user: req.user });
  } else {
    res.redirect("/home");
  }
});

module.exports = router;