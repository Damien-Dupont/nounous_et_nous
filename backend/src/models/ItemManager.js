const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  static table = "item";

  insert(item) {
    return this.connection.query(
      `insert into ${ItemManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${ItemManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }

  andOrWhere(sqlQueryToTest) {
    return sqlQueryToTest.includes("WHERE") ? " AND" : " WHERE";
  }

  findAll(query, cookie) {
    const { diplome, promo, job, nomPrenom } = query;
    let sqlQuery = `SELECT lastname, firstname, P.id, W.job, U.is_valid, photo FROM ${this.table} as P`;
    const sqlValue = [];

    sqlQuery += ` INNER JOIN user as U ON P.id = U.id`;
    sqlQuery += ` INNER JOIN profession as W ON P.profession_id = W.id`;

    if (diplome || promo) {
      sqlQuery += ` INNER JOIN profile_diplome as PD ON PD.profile_id = P.id`;
      sqlQuery += ` INNER JOIN diplome as D ON PD.diplome_id = D.id`;
    }

    if (!cookie) {
      sqlQuery += ` ${this.andOrWhere(sqlQuery)} P.is_private = 0`;
    }
    if (cookie.role !== "admin") {
      sqlQuery += ` ${this.andOrWhere(sqlQuery)} U.is_valid = 1`;
    }

    if (diplome) {
      sqlQuery += `${this.andOrWhere(sqlQuery)} PD.diplome_id = ?`;
      sqlValue.push(`${diplome}`);
    }
    if (promo) {
      sqlQuery += `${this.andOrWhere(sqlQuery)} year = ?`;
      sqlValue.push(`${promo}`);
    }
    if (job) {
      sqlQuery += ` ${this.andOrWhere(sqlQuery)} P.profession_id = ?`;
      sqlValue.push(`${job}`);
    }
    if (nomPrenom) {
      sqlQuery += `${this.andOrWhere(
        sqlQuery
      )} P.firstname LIKE ? OR P.lastname LIKE ?`;
      sqlValue.push(`%${nomPrenom}%`, `%${nomPrenom}%`);
    }
    sqlQuery += ` ${this.andOrWhere(sqlQuery)} U.role = 'user'`;
    sqlQuery += ` LIMIT 30`;

    return this.connection.query(sqlQuery, sqlValue).then((res) => res[0]);
  }
}

module.exports = ItemManager;
