const AbstractManager = require("./AbstractManager");

class PianoManager extends AbstractManager {
  static table = "piano";

  insert(piano) {
    return this.connection.query(
      `insert into ${PianoManager.table} (title) values (?)`,
      [piano.title]
    );
  }

  update(piano) {
    return this.connection.query(
      `update ${PianoManager.table} set title = ? where id = ?`,
      [piano.title, piano.id]
    );
  }
}

module.exports = PianoManager;
