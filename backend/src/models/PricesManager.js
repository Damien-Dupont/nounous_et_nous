const AbstractManager = require("./AbstractManager");

class PricesManager extends AbstractManager {
  static table = "prices";

  insert(
    price_hour,
    price_household,
    price_long_household,
    price_meal,
    price_snack,
    price_over_hour
  ) {
    console.log(
      "PricesManager",
      price_hour,
      price_household,
      price_long_household,
      price_meal,
      price_snack,
      price_over_hour
    );
    return this.connection.query(
      `insert into ${this.table} (price_hour, price_household, price_long_household, price_meal, price_snack, price_over_hour) values (?, ?, ?, ?, ?, ?)`,
      [
        price_hour,
        price_household,
        price_long_household,
        price_meal,
        price_snack,
        price_over_hour,
      ]
    );
  }

  update(
    durations,
    price_hour,
    price_household,
    price_long_household,
    price_meal,
    price_snack,
    price_over_hour
  ) {
    return this.connection.query(
      `update ${this.table} set price_hour = ?, price_household = ?, price_long_household = ?, price_meal = ?, price_snack = ?, price_over_hour = ?, where id = ?`,
      [
        price_hour,
        price_household,
        price_long_household,
        price_meal,
        price_snack,
        price_over_hour,
        durations.id,
      ]
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

module.exports = PricesManager;
