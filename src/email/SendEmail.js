import * as yup from 'yup';
import api from '../services/api';

export default {
  async handle(req, res) {
    const { name, email } = req.body;
    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email(),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (error) {
      return res.status(400).json(error);
    }

    const result = await api.getProducts();

    return res.status(200).json(result.length);
  },
};
