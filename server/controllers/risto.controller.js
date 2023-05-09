const db = require("../models");
const Risto = db.risto;
const Task = db.taskOffice;
const Comment = db.commentOffice;

// Create and Save a new Risto
exports.createRisto = (req, res) => {

  // console.log("REQ: ", req);
  // Validate request
  if (!req.body.userId) {
    res.status(400).send({
      message: "User id Content can not be empty!"
    });
    return;
  }

  // Save Risto in the database
  Risto.create({
    userId: req.body.userId,
    name: req.body.name,
    description: req.body.description,
  })
    .then(risto => {
      res.json(risto);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Risto."
      });
    });
};

// Retrieve all Offices from the database with doctorId.
exports.retriveAll = (req, res) => {
  console.log("XXXXXXXXXX RETRIVEALL")
  const userId = req.body.userId;
  
  Risto.findAll({
    include:[
      { model: Comment },
      { model: Task }
  ],
    where: {
      userId: userId
    },
    order: [["updatedAt", "DESC"]]
  })
    .then(risto => {
      res.json(risto);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving offices."
      });
    });
};
// gets a single risto to see details
exports.getRisto = (req, res, next) => {
  console.log("get risto");

  //da inserire nuovamente forse
  //const userId = req.body.userId;
  const ristoId = req.body.id;
  
  Risto.findAll({
    include:[
      { model: Comment },
      { model: Task }
  ],
    where: {
      id: ristoId,
    }
  })
    .then(risto => {
      res.send(risto[0]);
    })
    .catch(err => console.log(err));
};

// post updated project
exports.postUpdateOffice = (req, res, next) => {
  const ristoId = req.body.id;
  const userId = req.body.userId;
  const name = req.body.name;
  const description = req.body.description;

  console.log(
    "UPDATING... NAME",
    name,
    "description",
    description,
  );
    Risto.update(
      {
        userId: userId,
        name: req.body.name,
        description: req.body.description,
      },
      { where: { id: ristoId } }
    )
      .then(response => {
        res.json(response);
      })
      .catch(err => console.log(err));
};

// delete risto
exports.deleteOffice = (req, res, next) => {
  console.log("SONO IN DELETE RISTO");
  console.log("req.body.id:", req.body.id);
  const ristoId = req.body.id;
  //const userId = req.user.id;
  // above i might use req.params instead, idk yet
  Risto.destroy({
    where: {
      id: ristoId
      // userId: userId
    }
  })
    .then(result => {
      console.log("destroyed risto");
      res.json(result);
    })
    .catch(err => console.log(err));
};