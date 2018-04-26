import types from './types';

function selectCompany(companyIndex) {
  return {
    type: types.SELECT_COMPANY,
    payload: companyIndex,
  }
}

export default {
  selectCompany,
};