import React, { useState } from 'react';

import Talents from './Talents';

import style from './Main.st.css';

export const Main = () => {
    return (
        <div {...style('root')}>
			<h1>Remnant Talent Calculator</h1>
			<Talents/>
		</div>
    );
};

export default Main;
