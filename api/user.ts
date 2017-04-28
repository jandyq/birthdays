import * as express from 'express';
import User from '../models/user';

let router = express.Router();

router.get('/', function(req, res, next) {//ask Nick about this code. GET users listing.?
  res.send('respond with a resource');
});
//ask Nick about this code on index.ts. GET home page.
router.get('/', function(req, res, next){
  res.render('index', {title: 'Express'});
});

router.post('/register', (req, res) => {//registering user
  let user = new User();
  user.username = req.body.username; //complaining bcz no interface
  user.password = req.body.password; //complaining bcz no interface
  user.role = 'U';
  user.save()

    .then((savedUser) => res.json({token: savedUser._id, role: savedUser.role}))
    .catch((err) => res.json(err));// complaining about role.
});

router.post('/login',(req, res) => {
  User.findOne({username: req.body.username, password: req.body.password})
    .then((foundUser) => res.json({token: foundUser._id, role: foundUser.role}))
    .catch((err) => res.json(err));//complaining about role.
});


export default router;
