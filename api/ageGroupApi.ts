import * as express from 'express';
import AgeGroup from '../models/ageGroups';

let router = express.Router();

router.get('/', (req, res) => {
  AgeGroup.find().then((foundAgeGroups) => res.json(foundAgeGroups));
  });

  router.post('/', (req, res) => {
  let ageGroup = new AgeGroup();
  ageGroup.class = req.body.class;
  ageGroup.classroom = req.body.classroom;
  ageGroup.teacher = req.body.teacher;
  ageGroup.save().then((savedAgeGroup) => res.json(savedAgeGroup));
  });

export default router;
