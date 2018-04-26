import { connect } from 'react-redux';
import DetailsPage from 'components/DetailsPage';
import actions from 'store/features/companySelector/actions';

const getSelectedCompany = (companies, index) => {
	if (index === '') return {};
	return companies[index];
}

const mapStateToProps = state => ({
  company: getSelectedCompany(state.companies, state.companySelector),
});

const mapDispatchToProps = dispatch => ({
	selectCompany: (index) => dispatch(actions.selectCompany(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);

