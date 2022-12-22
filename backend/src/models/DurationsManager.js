const AbstractManager = require("./AbstractManager");

class DurationsManager extends AbstractManager {
  static table = "durations";

  insert(weeks_per_year, weeks_per_cycle, cycle_id) {
    console.log("DurationsManager", weeks_per_year, weeks_per_cycle, cycle_id);
    return this.connection.query(
      `insert into ${this.table} (weeks_per_year, weeks_per_cycle, cycle_id) values (?, ?, ?)`,
      [weeks_per_year, weeks_per_cycle, cycle_id]
    );
  }

  update(durations, weeks_per_year, weeks_per_cycle, cycle_id) {
    return this.connection.query(
      `update ${this.table} set weeks_per_year = ?, weeks_per_cycle = ?, cycle_id, where id = ?`,
      [weeks_per_year, weeks_per_cycle, cycle_id, durations.id]
    );
  }

  findbyId(durations) {
    return this.connection
      .query(`select * from ${this.table} where id_durations = ?`, [
        durations.id,
      ])
      .then((res) => res[0]);
  }

  delete(durations) {
    return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [
      durations.id,
    ]);
  }
}

module.exports = DurationsManager;
