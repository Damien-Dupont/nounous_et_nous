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
      `insert into ${this.table} (contract.id, user.id, kid.id, is_main) values (?, ?, ?, ?)`,
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
      `update ${this.table} set is_main = ?, user = ?, kid = ? where id = ?`,
      [is_main, user.id, kid.id, contract.id]
    );
  }

  // findbykid(kid) {
  //   return this.connection
  //     .query(`select * from ${this.table} where id = ?`, [
  //       kid.id,
  //     ])
  //     .then((res) => res[0]);
  // }

  findbyKid(kid) {
    return this.connection
      .query(
        `select * from ${this.table} as UC INNER JOIN kid as K ON kid_id = id_kid where INNER JOIN user as U ON user_id = id_user where id_kid = ?`,
        [kid.id]
      )
      .then((res) => res[0]);
  }

  findbyUser(user) {
    return this.connection
      .query(
        `select * from ${this.table} as UC INNER JOIN kid as K ON kid_id = id_kid where INNER JOIN user as U ON user_id = id_user where user_id = ?`,
        [user.id]
      )
      .then((res) => res[0]);
  }

  delete(contract) {
    return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [
      contract.id,
    ]);
  }
}

module.exports = UserContractManager;
