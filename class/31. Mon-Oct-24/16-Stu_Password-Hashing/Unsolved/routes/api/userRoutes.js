const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// TODO: Add comments describing the functionality of this `login` route
router.post('/login', async (req, res) => {
  try {
    //search db for user email
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      //if no email return a err
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }
//compare entered password in db to the user input
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    //if the user password does not maych throw err
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }
    //if the password matches throw message saying user is logged in
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
