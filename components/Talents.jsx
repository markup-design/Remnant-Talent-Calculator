import React, { useState } from 'react';

import {TalentList} from './libs/TalentList';

import Talent from './Talent';

import style from './Talents.st.css';

export class Talents extends React.Component {

	constructor() {
		super();

		this.state = {
			availableTalents: 640,
			talents: TalentList,
			traitsUsed: 0
		};

		this._addPoint = this._addPoint.bind(this);
		this._subtractPoint = this._subtractPoint.bind(this);
	}

	_addPoint(talentKey) {
		const newTalents = Object.assign({}, this.state.talents);

		if (this.state.availableTalents - 1 < 0) {
			return;
		}

		if (newTalents[talentKey].points + 1 > 20) {
			return;
		}

		newTalents[talentKey].points += 1;
		this.setState({
			availableTalents: this.state.availableTalents-1,
			talents: newTalents,
			traitsUsed: this.state.traitsUsed+1
		});
	}

	_subtractPoint(talentKey) {
		const newTalents = Object.assign({}, this.state.talents);

		if (newTalents[talentKey].points - 1 < 0) {
			return;
		}

		newTalents[talentKey].points -= 1;
		this.setState({
			availableTalents: this.state.availableTalents+1,
			talents: newTalents,
			traitsUsed: this.state.traitsUsed-1
		});
	}

	_renderTalents() {

		return Object.keys(TalentList).map((talentKey) => {
			return (
				<Talent
					effect={TalentList[talentKey].effect}
					icon={TalentList[talentKey].icon}
					increase={TalentList[talentKey].increase}
					key={talentKey}
					name={TalentList[talentKey].name}
					points={TalentList[talentKey].points}
					obtained={TalentList[talentKey].obtained}
					symbol={TalentList[talentKey].symbol}
					talentKey={talentKey}
					onAddPoint={this._addPoint}
					onSubtractPoint={this._subtractPoint}
					/>
			);
		});
	}

	render() {
		return (
			<div {...style('root')}>
				<div className={style.availableTalents}>
					<div>{'Available Traits: ' + this.state.availableTalents}</div>
					<div>{'Traits Used: ' + this.state.traitsUsed}</div>
				</div>
				<div className={style.talentList}>{this._renderTalents()}</div>
			</div>
		);
	}
};

export default Talents;
