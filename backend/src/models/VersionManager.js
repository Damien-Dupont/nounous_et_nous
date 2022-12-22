const AbstractManager = require("./AbstractManager");

class VersionManager extends AbstractManager {
  static table = "version";

  insert(contract, starting_date, durations_id, prices_id) {
    console.log(
      "VersionManager",
      contract.id,
      starting_date,
      durations_id,
      prices_id
    );
    return this.connection.query(
      `insert into ${this.table} (contract_id, starting_date, durations_id, prices_id) values (?, ?, ?, ?)`,
      [contract.id, starting_date, durations_id, prices_id]
    );
  }

  update(contract, starting_date, durations_id, prices_id, regulation) {
    return this.connection.query(
      `update ${this.table} set starting_date = ?, durations_id = ?, prices_id = ?, regulation_at_end, where id = ?`,
      [starting_date, durations_id, prices_id, regulation, contract.id]
    );
  }

  findbyName(name) {
    return this.connection
      .query(
        `select * from ${this.table} where (lastname = ? OR firstname = ?)`,
        [name, name]
      )
      .then((res) => res[0]);
  }

  delete(version) {
    return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [
      version.id,
    ]);
  }
}

module.exports = VersionManager;
