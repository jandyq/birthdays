import * as express from 'express';
import Child from '../models/childs';
import ageGroups from '../models/ageGroups';

let router = express.Router();

router.get('/', (req,res) => {
  Child.find().then((foundChilds) => res.json(foundChilds));
});

export default router;
