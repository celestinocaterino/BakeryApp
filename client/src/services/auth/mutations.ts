import http from '../../utils/http.utils';

export const login = async (values: { email: string, password: string }) => {
  const response = await http.store('auth/login', values);

  return response;
};