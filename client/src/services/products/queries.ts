import http from '../../utils/http.utils';

export const getProducts = async () => {
  const response = await http.get('products');

  return response.data;
};

export const getProduct = async (id: string) => {
  const response = await http.get('products/' + id);

  return response.data;
};