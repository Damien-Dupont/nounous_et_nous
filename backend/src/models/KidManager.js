const AbstractManager = require("./AbstractManager");

class KidManager extends AbstractManager {
  static table = "kid";

  insert(kid) {
    return this.connection.query(
      `insert into ${KidManager.table} (title) values (?)`,
      [kid.title]
    );
  }

  update(kid) {
    return this.connection.query(
      `update ${KidManager.table} set title = ? where id = ?`,
      [kid.title, kid.id]
    );
  }
}

module.exports = KidManager;
