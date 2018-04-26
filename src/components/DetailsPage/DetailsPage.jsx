import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import './styles.less';

const propTypes = {
  company: PropTypes.object.isRequired,
  selectCompany: PropTypes.func.isRequired,
};

class DetailsPage extends Component {
  componentDidMount() {
    this.props.selectCompany(this.props.match.params.id)
  }

  render() {
    const { name, address, revenue , phone, employees } = this.props.company;
    const totalEmployees = (employees) ? employees.length : 0;
    const employeeList = (totalEmployees > 0) ? employees.map((employee, index) => <div key={index}  className="details__employees__card">
      <Card header={employee.name}>
        <ul className="details__employees__content">
          <li>
            <h5>Address:</h5>
            <p>{employee.address}</p>
          </li>
        </ul>
      </Card>
    </div>) : <p className="details__employees__content__empty">There are no employees to show.</p>;
    return (
      <div className="details__wrapper">
        <div className="details__profile">
          <Card header="Profile Overview">
            <div className="details__profile__content">
              <ul className="details__profile__content__left">
                <li>
                  <h5>Address:</h5>
                  <p>{address}</p>
                </li>
                <li>
                  <h5>Revenue:</h5>
                  <p>{revenue}</p>
                </li>
                <li>
                  <h5>Phone:</h5>
                  <p>{phone}</p>
                </li>
              </ul>
              <ul className="details__profile__content__right">
                <li>
                  <h5>Total Employees:</h5>
                  <p>{totalEmployees}</p>
                </li>
              </ul>
            </div>
          </Card>
        </div>
        <div className="details__employees">
          <Card header="Employees">
            <div className="details__employees__wrapper">
              {employeeList}
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

DetailsPage.propTypes = propTypes;
export default DetailsPage;