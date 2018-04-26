import types from './types';

function addCompany(company) {
  return {
    type: types.ADD_COMPANY,
    payload: company,
  }
}

function addPerson(person) {
  return {
    type: types.ADD_PERSON,
    payload: person,
  }
}

export default {
  addCompany,
  addPerson,
};