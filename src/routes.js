import express from 'express';
import SendEmail from './email/SendEmail';

const router = express.Router();

router.post('/sendEmail', SendEmail.handle);

export default router;
