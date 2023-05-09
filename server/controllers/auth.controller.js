const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Office = db.office;
const Spec = db.spec;

// const Op = db.Sequelize.Op;

const Email = require("../../email");
const email = new Email();

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  
  console.log("MANNAGGIA AL CLERO BODY:", req.body);

  User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email.toLowerCase(),
    password: bcrypt.hashSync(req.body.password, 8),
    terms: req.body.terms,
    country: req.body.country,
    state: req.body.state,
    city: req.body.city,
    address: req.body.address,
    phone: req.body.phone,
    bornOn: req.body.bornOn
  })
    .then(user => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: req.body.roles
          }
        }).then(roles => {
          user.setRoles([1, roles[0].id]).then(() => {
            console.log("Roles was registered successfully!");
            // res.send({ message: "Roles was registered successfully!" });
          });
        });

      };
      
      if(req.body.roles === 'Doctor'){
        Spec.findAll({
          where: {
            name: req.body.specs
          }
        }).then(specs => {
          user.setSpecs([specs[0].id]).then(() => {
            
            console.log("Specs was registered successfully!");
          });
        });

        Office.create({
          userId: user.id,
          name: req.body.officename,
          address: req.body.addressoffice
        }).then(() => {
          console.log("Office created!");
        });
      }
      email.emailNewUsers(req.body.email.toLowerCase());
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(401).send({ message: "User Not found." });
      }

      if (user.checkemail === "notActive") {
        return res.status(401).send({ message: "User Not active." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];
      user.getRoles().then(values => {
        for (let i = 0; i < values.length; i++) {
          authorities.push(values[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          roles: authorities,
          accessToken: token,
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.logout = (req, res) => {
  req.user = null;
  res.status(200).send({
    roles: null,
    accessToken: null,
    auth: null,
    user: null,
    message: 'Logged Out',
  });
};


exports.activation = (req, res) => {
  User.update({
    checkemail: "active",
  },
  {
    where: { email: req.body.email },
  })
};