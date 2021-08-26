import Mail from '../lib/Mail';
import api from '../services/api';

export default {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { user } = data;
    const dados = await api.searchProduct();

    await Mail.sendMail({
      from: 'Codeby <naoresponda@testcodeby.com.br>',
      to: `${user.name} <${user.email}>`,
      subject: 'Solicitação de quantidade de produtos',
      html: `Olá, <strong>Sr.${user.name}</strong>, tudo bem?
      <br>Segue abaixo a quantidade de produtos conforme solicitado. <br><h2>Quantidade de Produtos é ${dados.length}<h2>`,
    });
  },
};
