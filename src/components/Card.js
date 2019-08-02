import React from 'react';
import styles from '../Table.module.scss';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

export default class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.getKeywords();
    }

    componentDidUpdate(prevProps) {
        if (this.props.key !== prevProps.key) {
            this.setState({
                ...this.state,
                keywords: this.getKeywords()
            });
        }
    }

    getKeywords() {
        let keywords = [];
        if (this.props.thesis.keywords) {
            const length = this.props.thesis.keywords.length
            if (length >= 3) {
                for (let i = 0; i < 3; i++) {
                    if (this.props.thesis.keywords[i] !== 'Klíčová slova' && this.props.thesis.keywords[i] !== 'Kľúčové slová' && this.props.thesis.keywords[i] !== ' ' && this.props.thesis.keywords[i] !== '') {
                        keywords.push(this.props.thesis.keywords[i])
                    }
                }
            } else if (this.props.thesis.keywords[0] !== '') {
                for (const keyword of this.props.thesis.keywords) {
                    keywords.push(keyword)
                }
            }
        } else {
            return { message: 'no keywords' }
        }

        return { keywords: keywords }
    }

    getTagComponents() {

        let all = [];

        let thesis = [{ year: this.props.thesis.year }, { department: this.props.thesis.department }]
        thesis = thesis.map((tag, key) => {
            for (const type in tag) {
                return <div key={key} className={styles[type]}><span>{Object.values(tag)}</span></div>
            }
        });

        let keywords = [...this.state.keywords];
        keywords = keywords.map((tag, key) => {
            if (tag.length < 30) {
                return <div key={key} className={styles.keywords}><span>{tag}</span></div>
            }
        });

        all.push(thesis)
        all.push(keywords)

        return all
    }

    render() {
        return (
            <div className={styles.card} key={this.props.index} >
                <span className={styles.title}> {this.props.thesis.title}<a href={this.props.thesis.link} rel="noopener noreferrer" target="_blank"><IconButton
                    size='small'><Icon>link-variant</Icon></IconButton></a></span>
                <div className={styles.labels}>
                    {this.getTagComponents()}
                </div>
            </div >
        )
    }
}

