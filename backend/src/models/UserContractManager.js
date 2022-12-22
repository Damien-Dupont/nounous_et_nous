const AbstractManager = require("./AbstractManager");

class UserContractManager extends AbstractManager {
  static table = "user_contract";

  insert(contract, user, kid, is_main) {
    console.log(
      "UserContractManager - INSERT",
      contract.id,
      user.id,
      user.role,
      kid.id,
      is_main
    );
    return this.connection.query(
      `insert into ${UserContractManager.table} (contract.id, user.id, kid.id, is_main) values (?, ?, ?, ?)`,
      [contract.id, user.id, kid.id, is_main]
    );
  }

  create(contract, parent, nanny, kid, is_main) {
    console.log(
      "UserContractManager - CREATE",
      contract.id,
      parent.id,
      nanny.id,
      kid.id,
      is_main
    );
    this.insert(contract, parent, kid, is_main);
    this.insert(contract, nanny, kid, is_main);
  }

  update(contract, user, kid, is_main) {
    return this.connection.query(
      `update ${UserContractManager.table} set is_main = ?, user = ?, kid = ? where id = ?`,
      [is_main, user.id, kid.id, contract.id]
    );
  }

  findbyId(user_or_kid) {
    return this.connection
      .query(`select * from ${UserContractManager.table} where id = ?`, [
        user_or_kid.id,
      ])
      .then((res) => res[0]);
  }

  delete(contract) {
    return this.connection.query(
      `DELETE FROM ${UserContractManager.table} WHERE id = ?`,
      [contract.id]
    );
  }
}

module.exports = UserContractManager;
