import { httpBase } from './httpbase.utils';

function get(endpoint: string, params?: unknown) {
  return httpBase().get(`${endpoint}`, { params });
}

function store(endpoint: string, data?: unknown) {
  return httpBase().post(`${endpoint}`, data);
}

function update(endpoint: string, data?: unknown) {
  return httpBase().patch(`${endpoint}`, data);
}

function updateWithFile(endpoint: string, data?: unknown) {
  return httpBase(true).patch(`${endpoint}`, data);
}

function saveWithFile(endpoint: string, data?: unknown) {
  return httpBase(true).post(`${endpoint}`, data);
}

function remove(endpoint: string) {
  return httpBase(true).delete(`${endpoint}`);
}

const httpUtils = {
  get,
  store,
  update,
  updateWithFile,
  saveWithFile,
  remove
};

export default httpUtils;
