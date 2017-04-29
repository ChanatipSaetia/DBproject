const requireLogin = (req, res, next) => {
  if (req.isUnauthenticated()) {
    return res.redirect('/login');
  }
  next();
};

const requireLogout = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect('/logout');
  }
  next();
};

module.exports = {
  requireLogin,
  requireLogout
};
