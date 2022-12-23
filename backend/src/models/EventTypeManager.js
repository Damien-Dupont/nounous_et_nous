const AbstractManager = require("./AbstractManager");

class EventTypeManager extends AbstractManager {
  static table = "event_type";

  insert(contract_id, event_type_id, starting_date, ending_date) {
    const creation_date = new Date().toLocaleDateString();
    console.log(
      "EventTypeManager",
      contract_id,
      event_type_id,
      starting_date,
      ending_date,
      creation_date
    );
    return this.connection.query(
      `insert into ${this.table} (contract_id, event_type_id, starting_date, ending_date, creation_date) values (?, ?, ?, ?, ?)`,
      [contract_id, event_type_id, starting_date, ending_date, creation_date]
    );
  }

  update(contract_id, event_type_id, starting_date, ending_date) {
    const creation_date = new Date().toLocaleDateString();
    return this.connection.query(
      `update ${this.table} set ending_date = ?, starting_date = ?, event_type_id = ?, creation_date =?, where id = ?`,
      [ending_date, starting_date, event_type_id, creation_date, contract_id]
    );
  }

  findbyContract(contract_id) {
    return this.connection
      .query(`select * from ${this.table} as where contract_id = ?`, [
        contract_id,
      ])
      .then((res) => res[0]);
  }

  findbyContractBetween(contract_id, date_open, date_close) {
    return this.connection
      .query(
        `select * from ${this.table} as where contract_id = ? AND (starting_date >= ? OR ending_date >=?) AND (starting_date <= ? OR ending_date <= ?)`,
        [contract_id, date_open, date_close, date_open, date_close]
      )
      .then((res) => res[0]);
  }

  delete(event_id) {
    return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [
      event_id,
    ]);
  }
}

module.exports = EventTypeManager;
