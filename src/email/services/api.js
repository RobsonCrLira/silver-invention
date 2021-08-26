import axios from 'axios';

exports.searchProduct = async () => {
  try {
    const product = await axios.get(
      `${process.env.PRODUCT_SEARCH_URL}`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );
    return product.data;
  } catch (error) {
    return error;
  }
};
