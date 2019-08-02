import React from 'react'
import Badge from '@material-ui/core/Badge';
import logo from '../assets/octocat.png';
import styles from '../Footer.module.scss'
import IconButton from '@material-ui/core/IconButton';

const Footer = props => {

    const changeVersion = () => {
        window.localStorage.setItem('version', props.version);
    }

    const checkVersion = (version) => {
        return window.localStorage.getItem('version') === version;
    }

    const showNotification = () => {
        if (!window.localStorage.getItem('version') || !checkVersion(props.version)) {
            return (
                <Badge badgeContent={props.version} color="secondary">
                    <img border="0" src={logo} alt="octocat" height="38" />
                </Badge>
            )
        }
        return <img border="0" src={logo} alt="octocat" height="38" />
    }

    return (
        <div className={styles.container}>
            <a className={styles.octocat} onClick={changeVersion} href="https://github.com/buresj/sociologikon">
                <IconButton aria-label="GitHub" color="inherit">
                    {showNotification()}
                </IconButton>
            </a>
        </div>
    )
}
export default Footer;


