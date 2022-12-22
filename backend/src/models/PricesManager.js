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
    prices,
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
        prices.id,
      ]
    );
  }

  findbyId(prices) {
    return this.connection
      .query(`select * from ${this.table} where id_prices = ?`, [prices.id])
      .then((res) => res[0]);
  }

  delete(prices) {
    return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [
      prices.id,
    ]);
  }
}

module.exports = PricesManager;
