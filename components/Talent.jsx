import React from 'react';

import Icons from './libs/Icons';
import Icon from './Icon';

import style from './Talent.st.css';

export class Talent extends React.Component {

	constructor() {
		super();

		this._addPoint = this._addPoint.bind(this);
	}

	_addPoint() {
		if (this.props.onAddPoint) {
			this.props.onAddPoint(this.props.talentKey);
		}
	}

	render() {
		return (
			<div {...style('root')}>
				<div>{this.props.name}</div>
				<div className={style.obtained}>{this.props.obtained}</div>
				<div><Icon name={this.props.icon}/></div>
				<div className={style.adjusters}>
					<Icon
						className={style.item}
						name={Icons.subtract}
						/>
					<div className={style.item}>{this.props.points}</div>
					<Icon
						className={style.item}
						name={Icons.add}
						onClick={this._addPoint}
						/>
				</div>
			</div>
		);
	}
};

export default Talent;
