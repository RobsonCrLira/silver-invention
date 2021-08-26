import express from 'express';
import SendEmail from './SendEmail/SendEmailController';

const router = express.Router();

router.post('/sendEmail', SendEmail.handle);

export default router;
