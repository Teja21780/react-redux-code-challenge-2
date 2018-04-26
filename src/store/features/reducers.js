import { combineReducers } from 'redux';
import companies from './companies/reducers';
import companySelector from './companySelector/reducers';

const rootReducer = combineReducers({
  companies,
  companySelector
});
export default rootReducer;