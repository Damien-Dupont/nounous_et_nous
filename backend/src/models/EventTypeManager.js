const AbstractManager = require("./AbstractManager");
const EventManager = require("./EventManager");

class EventTypeManager extends AbstractManager {
  static table = "event_type";

  // insert(id_event_type, type, unit, is_paid) {
  //   console.log("EventTypeManager", id_event_type, type, unit, is_paid);
  //   return this.connection.query(
  //     `insert into ${this.table} (id_event_type, type, unit, is_paid) values (?, ?, ?, ?, ?)`,
  //     [id_event_type, type, unit, is_paid]
  //   );
  // }

  // update(id_event_type, type, unit, is_paid) {
  //   return this.connection.query(
  //     `update ${this.table} set is_paid = ?, unit = ?, type = ?, creation_date =?, where id = ?`,
  //     [is_paid, unit, type, id_event_type]
  //   );
  // }

  findbyEventType(id_event_type) {
    return this.connection
      .query(`select * from ${EventManager.table} as where event_type_id = ?`, [
        id_event_type,
      ])
      .then((res) => res[0]);
  }

  // delete(event_id) {
  //   return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [
  //     event_id,
  //   ]);
  // }
}

module.exports = EventTypeManager;
