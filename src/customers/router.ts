import { Router } from 'express';
import CustomersCtrl from "./controller";

export default Router()
  .get('/', CustomersCtrl.getAll)
  .post('/', CustomersCtrl.create)
  .get('/:id', CustomersCtrl.getById)
