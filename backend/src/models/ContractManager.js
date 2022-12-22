const AbstractManager = require("./AbstractManager");

class ContractManager extends AbstractManager {
  static table = "contract";

  insert(starting_date) {
    console.log("ContractManager", starting_date);
    return this.connection.query(
      `insert into ${this.table} (starting_date) values (?)`,
      [starting_date]
    );
  }

  updateStart(contract, starting_date) {
    return this.connection.query(
      `update ${this.table} set starting_date = ? where id = ?`,
      [starting_date, contract.id]
    );
  }

  updateEnd(contract, ending_date) {
    return this.connection.query(
      `update ${this.table} set ending_date = ? where id = ?`,
      [ending_date, contract.id]
    );
  }

  findbyId(contract) {
    return this.connection
      .query(`select * from ${this.table} where id = ?`, [contract.id])
      .then((res) => res[0]);
  }

  delete(contract) {
    return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [
      contract.id,
    ]);
  }
}

module.exports = ContractManager;
