import React from 'react';

import style from './Talent.st.css';

export const Talent = (props) => {
	return (
		<div {...style('root')}>
			<div>{props.name}</div>
			<div className={style.obtained}>{props.obtained}</div>
			<div></div>
		</div>
	);
};

export default Talent;
