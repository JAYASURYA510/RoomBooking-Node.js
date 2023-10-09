import express from 'express'
import { bookARoom, getBookedRooms, findCustomerDetails } from '../Controller/Hall.Controller.js';

const router = express.Router();
  

router.post('/hall/book',bookARoom)
router.get('/hall/getBookedRooms',getBookedRooms)
router.get('/hall/customerdetailes',findCustomerDetails)


export default router;
