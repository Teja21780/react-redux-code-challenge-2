import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Route, Link } from "react-router-dom";
import Card from '../Card';
import './styles.less';

const propTypes = {
	companies: PropTypes.array.isRequired,
	addCompany: PropTypes.func.isRequired,
	addPerson: PropTypes.func.isRequired,
};

class HomePage extends Component {
	constructor() {
		super();
		this.state = {
			companyName: '',
			companyAddress: '',
			companyRevenue: '',
			companyPhone: '',
			personName: '',
			personAddress: '',
			personCompany: '',
		}
		this.infoChange = this.infoChange.bind(this);
		this.handleCompanySubmit = this.handleCompanySubmit.bind(this);
		this.handlePersonSubmit = this.handlePersonSubmit.bind(this);
	}

	infoChange(event) {
		this.setState({ [event.target.id]: event.target.value });
	}

	handleCompanySubmit(event) {
		event.preventDefault();
		this.props.addCompany({
			name: this.state.companyName,
			address: this.state.companyAddress,
			revenue: this.state.companyRevenue,
			phone: this.state.companyPhone
		});
		this.setState({
			companyName: '',
			companyAddress: '',
			companyRevenue: '',
			companyPhone: '',
		});
	}

	handlePersonSubmit(event) {
		event.preventDefault();
		this.props.addPerson({
			name: this.state.personName,
			address: this.state.personAddress,
			company: this.state.personCompany,
		});
		this.setState({
			personName: '',
			personAddress: '',
			personCompany: '',
		})
	}

	render() {
		const {	addCompany, companies } = this.props;
		const companyList = companies.map((company, index) =>
		  	<li key={index}>
				<Card header={company.name} footer={<Link to={"/details/"+index}>Company Overview</Link>}>
					<ul className="home__company-list__company-detail">
						<li>
							<h5>Address:</h5>
							<p>{company.address}</p>
						</li>
						<li>
							<h5>Revenue:</h5>
							<p>{company.revenue}</p>
						</li>
						<li>
							<h5>Phone:</h5>
							<p>{company.phone}</p>
						</li>
					</ul>
				</Card>
			</li>
		);
		const companyOptions = companies.map((company, index) => <option key={index} value={index}>{company.name}</option>);
		return (
			<React.Fragment>
				<div className="home__wrapper">
					<div className="home__container">
						<div className="home__company-list">
							<ul>
								<li className="home__company-list__header">Companies</li>
								{companyList}
							</ul>
							{(companies.length === 0) && <h4 className="home__company-list__message">There are currently no companies to review</h4>}
						</div>
						<div className="home__create-forms">
							<form onSubmit={this.handleCompanySubmit}>
								<p className="home__create-forms__header">Create New Company</p>
								<div>
									<label htmlFor="companyName">Name:</label>
									<input
										type="text"
										name="companyName"
										id="companyName"
										onChange={this.infoChange}
										required
										value={this.state.companyName}
									/>
								</div>
								<div>
									<label htmlFor="companyAddress">Address:</label>
									<input
										type="text"
										name="companyAddress"
										id="companyAddress"
										onChange={this.infoChange}
										required
										value={this.state.companyAddress}
									/>
								</div>
								<div>
									<label htmlFor="companyRevenue">Revenue:</label>
									<input
										type="number"
										min="0"
										name="companyRevenue"
										id="companyRevenue"
										onChange={this.infoChange}
										required
										value={this.state.companyRevenue}
									/>
								</div>
								<div>
									<label htmlFor="companyPhone">Phone:</label>
									<input
										type="text"
										name="companyPhone"
										id="companyPhone"
										onChange={this.infoChange}
										required
										value={this.state.companyPhone}
									/>
								</div>
								<input className="btn" type="submit" value="Save" />
							</form>
							{(companies.length > 0) && <form onSubmit={this.handlePersonSubmit}>
								<p className="home__create-forms__header">Create New Person</p>
								<div>
									<label htmlFor="personName">Name:</label>
									<input
										type="text"
										name="personName"
										id="personName"
										required
										onChange={this.infoChange}
										value={this.state.personName}
									/>
								</div>
								<div>
									<label htmlFor="personAddress">Address:</label>
									<input
										type="text"
										name="personAddress"
										id="personAddress"
										required
										onChange={this.infoChange}
										value={this.state.personAddress}
									/>
								</div>
								<div>
									<select required id="personCompany" value={this.state.personCompany} onChange={this.infoChange}>
									  <option value="">Select Employer</option>
									  {companyOptions}
									</select>
								</div>
								<input className="btn" type="submit" value="Save" />
							</form>}
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

HomePage.propTypes = propTypes;
export default HomePage;