import React from 'react';
import PropTypes from 'prop-types';

import style from './Icon.st.css';

export const Icon = (props) => {

    if (!props.display) {
        return null;
    }
    return (
        <i
			{...style('root mdi mdi-'+props.name, {type: props.name}, props)}
			onClick={props.onClick}
			/>
    );
};

Icon.propTypes = {
    /**
     * Name of the icon
     */
    name: PropTypes.string.isRequired,

    /**
     * Whether or not to display the icon.
     */
    display: PropTypes.bool,

	/**
	 * Handle on click events.
	 */
	onClick: PropTypes.func
};

Icon.defaultProps = {
    display: true,
    size: 24
};

export default Icon;
