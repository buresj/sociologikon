import React from 'react';
import RangeSlider from './RangeSlider';
import MultipleSelect from './MultipleSelect';
import styles from '../Settings.module.scss';

const Settings = props => {
    return (
        <div className={styles.settingsBar}>
            <RangeSlider
                className={styles.year}
                yearRange={props.yearRange}
                changeYear={props.changeYearRange}
            />
            <div>
                <MultipleSelect
                    className={styles.department}
                    selectData={props.department}
                    changeFunction={props.changeSchool}
                    menu={['FSS', 'FSV']}
                />
            </div>
            <div>
                <MultipleSelect
                    className={styles.work}
                    selectData={props.typeOfWork}
                    changeFunction={props.changeType}
                    menu={['Bc', 'Mgr', 'PhD']}
                />
            </div>
        </div>
    )
}

export default Settings;