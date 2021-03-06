const express = require('express');
const router = express.Router();

// call controllers

const {
  createQuestion,
  viewQuestions,
  viewQuestion,
  editQuestion,
  deleteQuestion,
} = require('../controllers/question');

const { createTest, viewTests, viewTest, editTest, deleteTest } = require('../controllers/test');

const { createAnswer, viewAnswers, viewAnswer } = require('../controllers/answer.js');

// CRUD Question
router.post('/createQuestion', createQuestion);
router.get('/viewQuestions', viewQuestions);
router.get('/viewQuestion/:id', viewQuestion);
router.patch('/editQuestion/:id', editQuestion);
router.delete('/deleteQuestion/:id', deleteQuestion);

// CRUD Test
router.post('/createTest', createTest);
router.get('/viewTests', viewTests);
router.get('/viewTest/:id', viewTest);
router.delete('/deleteTest/:id', deleteTest);

// CRUD Answer
router.post('/createAnswer', createAnswer);
router.get('/viewAnswers', viewAnswers);
router.get('/viewAnswer/:id', viewAnswer);

module.exports = router;
