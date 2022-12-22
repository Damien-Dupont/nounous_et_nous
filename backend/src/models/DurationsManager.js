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

  findbyName(name) {
    return this.connection
      .query(
        `select * from ${this.table} where (lastname = ? OR firstname = ?)`,
        [name, name]
      )
      .then((res) => res[0]);
  }

  delete(kid) {
    return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [
      kid.id,
    ]);
  }
}

module.exports = DurationsManager;
