const AbstractManager = require("./AbstractManager");

class CycleManager extends AbstractManager {
  static table = "cycle";

  insert(
    week,
    monday_start,
    tuesday_start,
    wednesday_start,
    thursday_start,
    friday_start,
    monday_duration,
    tuesday_duration,
    wednesday_duration,
    thursday_duration,
    friday_duration
  ) {
    console.log(
      "CycleManager",
      week,
      monday_start,
      tuesday_start,
      wednesday_start,
      thursday_start,
      friday_start,
      monday_duration,
      tuesday_duration,
      wednesday_duration,
      thursday_duration,
      friday_duration
    );
    return this.connection.query(
      `insert into ${this.table} (week, monday_start, tuesday_start, wednesday_start, thursday_start, friday_start, monday_duration, tuesday_duration, wednesday_duration, thursday_duration, friday_duration) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        week,
        monday_start,
        tuesday_start,
        wednesday_start,
        thursday_start,
        friday_start,
        monday_duration,
        tuesday_duration,
        wednesday_duration,
        thursday_duration,
        friday_duration,
      ]
    );
  }

  update(
    week,
    monday_start,
    tuesday_start,
    wednesday_start,
    thursday_start,
    friday_start,
    monday_duration,
    tuesday_duration,
    wednesday_duration,
    thursday_duration,
    friday_duration
  ) {
    return this.connection.query(
      `update ${this.table} set monday_start = ?, tuesday_start = ?, wednesday_start = ?, thursday_start = ?, friday_start = ?, monday_duration = ?, tuesday_duration = ?, wednesday_duration = ?, thursday_duration = ?, friday_duration = ?, where id = ?`,
      [
        monday_start,
        tuesday_start,
        wednesday_start,
        thursday_start,
        friday_start,
        monday_duration,
        tuesday_duration,
        wednesday_duration,
        thursday_duration,
        friday_duration,
        week.id,
      ]
    );
  }

  // findbyId(prices) {
  //   return this.connection
  //     .query(`select * from ${this.table} where id_prices = ?`, [prices.id])
  //     .then((res) => res[0]);
  // }

  delete(cycle) {
    return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [
      cycle.id,
    ]);
  }
}

module.exports = CycleManager;
