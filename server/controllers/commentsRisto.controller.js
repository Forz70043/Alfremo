const db = require("../models");
const Comment = db.commentsRisto;

// Create and Save a new Comment for risto
exports.createCommentRisto = (req, res) => {

  if (!req.body.userId) {
    res.status(400).send({
      message: "User id Content can not be empty!"
    });
    return;
  }

  // Save Risto in the database
  Comment.create({
    userId: req.body.userId,
    text: req.body.text,
    ristoId: req.body.ristoId,
  })
    .then(comment => {
      res.json(comment);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Risto."
      });
    });
};

// 
/**
 * Retrieve all Comments Risto from the database with ristoId.
 * @param {*} req 
 * @param {*} res 
 */
exports.retriveAll = (req, res) => {
  console.log("XXXXXXXXXX RETRIVEALL")
  const ristoId = req.body.ristoId;
  const userId = req.body.userId;
  
  Comment.findAll({
    where: {
      userId: userId,
      ristoId: ristoId
    },
    order: [["updatedAt", "DESC"]]
  })
    .then(comment => {
      res.json(comment);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving comments."
      });
    });
};
// gets a single comment to see details
exports.getComment = (req, res, next) => {
  console.log("get comment");

  //da inserire nuovamente forse
  //const userId = req.body.userId;
  const commentId = req.body.id;
  
  Comment.findAll({
    include:[
      { model: Comment },
  ],
    where: {
      id: commentId,
    }
  })
    .then(comment => {
      res.send(comment[0]);
    })
    .catch(err => console.log(err));
};

// post updated comment
exports.postUpdateComment = (req, res, next) => {
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

// delete comment
exports.deleteComment = (req, res, next) => {
  console.log("SONO IN DELETE COMMENT");
  console.log("req.body.id:", req.body.id);
  const commentId = req.body.id;
  const userId = req.user.userId;
  // above i might use req.params instead, idk yet
  Risto.destroy({
    where: {
      id: commentId,
      userId: userId
    }
  })
    .then(result => {
      console.log("destroyed comment");
      res.json(result);
    })
    .catch(err => console.log(err));
};