const AbstractManager = require("./AbstractManager");

class VacationManager extends AbstractManager {
  static table = "vacation";
}

module.exports = VacationManager;
