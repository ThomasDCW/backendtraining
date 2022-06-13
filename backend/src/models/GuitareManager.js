const AbstractManager = require("./AbstractManager");

class GuitareManager extends AbstractManager {
  static table = "guitare";

  insert(guitare) {
    return this.connection.query(
      `insert into ${GuitareManager.table} (title) values (?)`,
      [guitare.title]
    );
  }

  update(guitare) {
    return this.connection.query(
      `update ${GuitareManager.table} set title = ? where id = ?`,
      [guitare.title, guitare.id]
    );
  }
}

module.exports = GuitareManager;
