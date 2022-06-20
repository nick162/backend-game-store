var express = require('express');
var router = express.Router();
const { viewSignin, actionSignin, actionLogout, signUpUser } = require('./controller')

router.get('/', viewSignin);
router.post('/', actionSignin);
router.post('/create', signUpUser);
router.get('/logout', actionLogout);
module.exports = router;
