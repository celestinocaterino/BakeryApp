import http from '../../utils/http.utils';

export const deleteProduct = async (id: number) => {
  const response = await http.remove('products/' + id);

  return response.data;
};

export const updateProduct = async ({id, data} : {id: number, data: object}) => {
  const response = await http.update('products/' + id, data);

  return response.data;
};

export const createProduct = async (data: object) => {
  const response = await http.store('products', data);

  return response.data;
};

