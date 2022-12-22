const AbstractManager = require("./AbstractManager");

class KidManager extends AbstractManager {
  static table = "kid";

  insert(lastname, firstname, birthdate) {
    console.log("KidManager", lastname, firstname, birthdate);
    return this.connection.query(
      `insert into ${KidManager.table} (lastname, firstname, birthdate) values (?, ?, ?)`,
      [lastname, firstname, birthdate]
    );
  }

  update(kid, birthdate, firstname, lastname) {
    return this.connection.query(
      `update ${KidManager.table} set lastname = ?, firstname = ?, birthdate = ? where id = ?`,
      [lastname, firstname, birthdate, kid.id]
    );
  }

  findbyName(name) {
    return this.connection
      .query(
        `select * from ${KidManager.table} where (lastname = ? OR firstname = ?)`,
        [name, name]
      )
      .then((res) => res[0]);
  }

  delete(kid) {
    return this.connection.query(
      `DELETE FROM ${KidManager.table} WHERE id = ?`,
      [kid]
    );
  }
}

module.exports = KidManager;
