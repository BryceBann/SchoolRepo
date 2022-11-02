const withAuth = (req, res, next) => {
  // TODO: Add a comment describing the functionality of this if statement
  //if the user is not loged in send the user to log in page or continue with next
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
