const AbstractManager = require("./AbstractManager");

class EventTypeManager extends AbstractManager {
  static table = "event_type";

  insert(id_event_type, type, unit, is_paid) {
    console.log("EventTypeManager", id_event_type, type, unit, is_paid);
    return this.connection.query(
      `insert into ${this.table} (id_event_type, type, unit, is_paid) values (?, ?, ?, ?, ?)`,
      [id_event_type, type, unit, is_paid]
    );
  }

  update(id_event_type, type, unit, is_paid) {
    return this.connection.query(
      `update ${this.table} set is_paid = ?, unit = ?, type = ?, creation_date =?, where id = ?`,
      [is_paid, unit, type, id_event_type]
    );
  }

  findbyEventType(id_event_type) {
    return this.connection
      .query(`select * from ${this.table} as where id_event_type = ?`, [
        id_event_type,
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
