import axios from 'axios';

exports.searchProduct = async () => {
  try {
    const product = await axios.get(
      `${process.env.PRODUCT_SEARCH_URL}`,
      {
        headers: {
          Accept: `${process.env.HEADERS_ACCEPT}`,
          'Content-Type': `${process.env.HEADERS_CONTENT_TYPE}`,
        },
      },
    );
    return product.data;
  } catch (error) {
    return error;
  }
};
