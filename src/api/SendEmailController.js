import SendEmailServices from './SendEmailServices';

export default {
  async handle(req, res) {
    const { name, email } = req.body;

    const user = await SendEmailServices.execute({ name, email });

    return res.status(200).json(user);
  },
};
