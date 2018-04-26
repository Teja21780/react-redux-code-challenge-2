import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const propTypes = {
	header: PropTypes.string,
	children: PropTypes.object,
	footer: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

class Card extends Component {
	render () {
		const { header, children, footer } = this.props;
		return (
			<div>
				<h4 className="header">{header}</h4>
				{children}
				<div className="footer">{footer}</div>
			</div>
		)
	}
}
Card.propTypes = propTypes;
export default Card;
