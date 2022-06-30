import { Router } from 'express';
import CustomersCtrl from "./controller";

export default Router()
  .get('/', CustomersCtrl.getAll)
  .get('/:id', CustomersCtrl.getById)
