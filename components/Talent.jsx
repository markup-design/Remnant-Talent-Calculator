import React from 'react';

import Icons from './libs/Icons';
import Icon from './Icon';

import style from './Talent.st.css';

export class Talent extends React.Component {

	constructor() {
		super();

		this._addPoint = this._addPoint.bind(this);
		this._subtractPoint = this._subtractPoint.bind(this);
		this._renderEffect = this._renderEffect.bind(this);
	}

	_addPoint() {
		if (this.props.onAddPoint) {
			this.props.onAddPoint(this.props.talentKey);
		}
	}

	_subtractPoint() {
		if (this.props.onSubtractPoint) {
			this.props.onSubtractPoint(this.props.talentKey);
		}
	}

	_renderEffect() {
		let effectAmount = this.props.increase * this.props.points;
		if (this.props.symbol) {
			effectAmount = effectAmount.toString() + this.props.symbol;
		}
		return this.props.effect.replace('{}', effectAmount);
	}

	_renderIcon() {
		if (!this.props.icon) {
			return <Icon name={Icons.default}/>;
		}

		return <Icon name={this.props.icon}/>;
	}

	render() {
		return (
			<div {...style('root')}>
				<div>{this.props.name}</div>
				<div className={style.obtained}>{this.props.obtained}</div>
				<div className={style.icon}>{this._renderIcon()}</div>
				<div>{this._renderEffect()}</div>
				<div className={style.adjusters}>
					<Icon
						className={style.item}
						name={Icons.subtract}
						onClick={this._subtractPoint}
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
