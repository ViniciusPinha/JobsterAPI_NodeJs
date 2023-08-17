const { BadRequestError } = require("../errors");

const testUser = async (req, res, next) => {
  if (req.user.testUser) {
    console.log(req.user.testUser);
    throw new BadRequestError("Test user. Read Only");
  }
  next();
};

module.exports = testUser;
