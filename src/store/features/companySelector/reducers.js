import types from './types';
import { createDefaultReducer } from '../../helpers'

const initialState = "";

const selectCompanyHandler = (state, companyIndex) => {
  return companyIndex
};

const actionMap = {
  [types.SELECT_COMPANY]: selectCompanyHandler,
};

export default createDefaultReducer(actionMap, initialState)