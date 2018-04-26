import { connect } from 'react-redux';
import HomePage from 'components/HomePage';
import actions from 'store/features/companies/actions';

const mapStateToProps = state => ({
  companies: state.companies,
});

const mapDispatchToProps = dispatch => ({
	addCompany: (company) => dispatch(actions.addCompany(company)),
	addPerson: (person) => dispatch(actions.addPerson(person)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

