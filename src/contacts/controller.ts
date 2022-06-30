import {Request, Response} from 'express';
import ContactsService from "./service";

export default class ContactsCtrl {
  static async getAll(req: Request, res: Response) {
    try {
      const result = await ContactsService.getAll();
      res.send(result);
    } catch (e) {
      res.status(400).send('Unknown error')
    }
  }
}
