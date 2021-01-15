import React from 'react';
import './seasondisplay.css';

const getseason = (lat, mounth) => {
    if (mounth > 2 && mounth < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}
const SeasonDisplay = props => {
    const season = getseason(props.lat, new Date().getMonth());
    const icon = season === 'winter' ? 'snowflake' : 'sun';
    return (
        <div className={`season-display ${season}`}>
            <i className={` icon-left massive ${icon} icon `} />

            <h1>{season === 'winter' ? 'burr,it is  cold ' : "let's hit the beach"}</h1>
            <i className={`icon-right massive ${icon} icon`} />

        </div>
    );
};

export default SeasonDisplay;