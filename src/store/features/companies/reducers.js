import types from './types';
import { createDefaultReducer } from '../../helpers'

const initialState = [];

const addCompanyHandler = (state, company) => {
  const companies = state;
  companies.push(company);
  return companies
};

const addPersonHandler = (state, person) => {
  const companies = state;
  if (!companies[person.company].employees)
    companies[person.company].employees = [];
  companies[person.company].employees.push({ name: person.name, address: person.address });
  return companies 
};

const resetNumberHandler = (state, payload) => {
  return {
    ...state,
    number: 0
  }
}

const actionMap = {
  [types.ADD_COMPANY]: addCompanyHandler,
  [types.ADD_PERSON]: addPersonHandler,
};

export default createDefaultReducer(actionMap, initialState)