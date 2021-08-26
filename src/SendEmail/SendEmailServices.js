import * as yup from 'yup';
import Queue from '../email/lib/Queue';
import AppError from '../errors/AppError';

export default {
  async execute({ name, email }) {
    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email(),
    });

    const user = { name, email };

    try {
      await schema.validate({ name, email }, { abortEarly: false });
    } catch (error) {
      throw new AppError(error);
    }

    await Queue.add('RegistrationMail', { user });

    return user;
  },
};
