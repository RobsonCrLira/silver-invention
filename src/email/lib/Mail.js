import nodemailer from 'nodemailer';
import mailConfig from '../config/email';

export default nodemailer.createTransport(mailConfig);
