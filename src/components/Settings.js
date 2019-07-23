import React from 'react';
import RangeSlider from './RangeSlider';
import MultipleSelect from './MultipleSelect';
import styles from '../Table.module.scss';

const Settings = props => {
    return (
        <div className={styles.settingsBar}>
            <RangeSlider
                yearRange={props.yearRange}
                changeYear={props.changeYearRange}
            />
            <MultipleSelect
                selectData={props.department}
                changeFunction={props.changeSchool}
                menu={['FSS', 'FSV']}
            />
            {/* <MultipleSelect
                selectData={props.typeOfWork}
                changeFunction={props.changeType}
                menu={['Bc', 'Mgr', 'PhD']}
            /> */}
        </div>
    )
}

export default Settings;