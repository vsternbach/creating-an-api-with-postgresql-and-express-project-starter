import db from "../db";

export default class ContactsService {
  static async getById(id: string) {
    const results = await db.query(``);
    return results.rows;
  }
  static async getAll() {
    const results = await db.query(`SELECT * FROM contacts`);
    return results.rows;
  }
  static async close() {
    await db.end();
  }
}
