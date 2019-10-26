import React, { useState } from 'react';

import {TalentList} from './libs/TalentList';

import Talent from './Talent';

export class Talents extends React.Component {

	constructor() {
		super();

		this.state = {
			availableTalents: 350,

			talents: TalentList
		};

		this._addPoint = this._addPoint.bind(this);
	}

	_addPoint(talentKey) {
		const newTalents = Object.assign({}, this.state.talents);
		newTalents[talentKey].amount = newTalents[talentKey].amount++;

		this.setState(talents: newTalents);
	}

	_renderTalents() {
		return Object.keys(TalentList).map((talentKey) => {
			console.log(talentKey);
			return (
				<Talent
					effect={TalentList[talentKey].effect}
					key={talentKey}
					name={TalentList[talentKey].name}
					points={TalentList[talentKey].points}
					obtained={TalentList[talentKey].obtained}
					onAddPoint={this._addPoint}
					/>
			);
		});
	}

	render() {
		return (
			<div>
				<div>{'Available Talents:' + this.state.availableTalents}</div>
				{this._renderTalents()}
			</div>
		);
	}
};

export default Talents;
