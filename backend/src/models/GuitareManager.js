const AbstractManager = require("./AbstractManager");

class GuitareManager extends AbstractManager {
  static table = "guitare";

  insert(guitare) {
    return this.connection.query(
      `insert into ${GuitareManager.table}(brand, name, img, price) values(?,?,?,?)`,
      [guitare.brand, guitare.name, guitare.img, guitare.price]
    );
  }

  update(guitare) {
    return this.connection.query(
      `update ${GuitareManager.table}(brand, name, img, price) values(?,?,?,?)`,
      [guitare.brand, guitare.name, guitare.img, guitare.price]
    );
  }
}

module.exports = GuitareManager;
