import db from "../db";
import {CustomerDTO} from "./dto";

export default class CustomersService {
  static async create(customer: CustomerDTO) {
    const results = await db.query(`
    INSERT INTO customers(customer_id, customer_name)
    VALUES (default, 'test')`);
    return results.rows;
  }
  static async getById(id: string): Promise<CustomerDTO> {
    const results = await db.query(``);
    return results.rows[0];
  }
  static async getAll() {
    const results = await db.query(``);
    return results.rows;
  }
  static async find(query: string) {
    const results = await db.query(``);
    return results.rows;
  }
}
