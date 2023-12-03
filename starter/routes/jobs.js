const express = require('express');
const router = express.Router();
const {
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
  getJob,
} = require('../controllers/jobs');

//// second way of doing router things
router.route('/').post(createJob).get(getAllJobs);
router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob);

module.exports = router;
