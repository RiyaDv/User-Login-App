const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  // Get the token from the header
  const headerObj = req.headers;

  const token = headerObj.authorization?.split(" ")[1];

  // Verify token
  const verifyToken = jwt.verify(token, "anyKey", (err, decoded) => {
    if (err) {
      return false;
    } else {
      return decoded;
    }
  });

  if (verifyToken) {
    //save the user into req.obj
    req.user = verifyToken.id;
    next();
  } else {
    const err = new Error("Token expired please login again");
    next(err);
  }
};

const isAdmin = (req, res, next) => {
  const headerObj = req.headers;

  const token = headerObj.authorization?.split(" ")[1];
  console.log(token);

  const decoded = jwt.verify(token, "anyKey");
  console.log(decoded);

  req.user = decoded;
  console.log(decoded.role);

  if (decoded.role === "admin") {
    next();
  } else {
    const err = new Error("Access Denied. Admin Only");
    next(err);
  }
};

module.exports = { isAuthenticated, isAdmin };
