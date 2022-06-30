import {Request, Response} from 'express';
import CustomersService from "./service";

export default class CustomersCtrl {
  static async getById(req: Request, res: Response) {
    const result = await CustomersService.getById(req.params.id);
    res.send(result);
  }
  static async getAll(req: Request, res: Response) {
    const result = await CustomersService.getAll();
    res.send(result);
  }
}
