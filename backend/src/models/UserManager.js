const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  insert(lastname, firstname, role) {
    console.log("UserManager", lastname, firstname, role);
    return this.connection.query(
      `insert into ${UserManager.table} (lastname, firstname, role) values (?, ?, ?)`,
      [lastname, firstname, role]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set lastname = ? where id = ?`,
      [user.lastname, user.id]
    );
  }

  findbyName(name) {
    return this.connection
      .query(
        `select * from ${UserManager.table} where (lastname = ? OR firstname = ?)`,
        [name, name]
      )
      .then((res) => res[0]);
  }

  delete(user) {
    return this.connection.query(
      `DELETE FROM ${UserManager.table} WHERE id = ?`,
      [user]
    );
  }
}

module.exports = UserManager;
