import { Router } from 'express';
import ContactsCtrl from "./controller";

export default Router()
  .get('/', ContactsCtrl.getAll)
