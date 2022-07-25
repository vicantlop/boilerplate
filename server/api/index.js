const router = require('express').Router();
const { useSearchParams } = require('react-router-dom');
const { User } = require('../db')

router.use('/users', require('./users'));

router.get('/auth/me', async (req, res, next) => {
  try {
    res.send(await User.findByToken(headers.authorization)); 
  } catch (err) {
    next(err)
  }
})

router.post('/auth/login', async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body)}); 
  } catch (err) {
    next(err)
  }
})

router.post('/auth/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    // console.log(user)
    // const token = await user.generateToken()
    // console.log(token)
    res.send({token: await user.generateToken()})
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;