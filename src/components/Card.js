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
        let { keywords } = this.props.thesis;
        keywords = keywords.map(keyword => keyword ? keyword.keyword : null);
        let selectedKeywords = [];

        if (keywords) {
            const length = keywords.length
            if (length >= 3) {
                for (let i = 0; i < 3; i++) {
                    if (keywords[i] !== 'Klíčová slova' && keywords[i] !== 'Kľúčové slová' && keywords[i] !== ' ' && keywords[i] !== '') {
                        selectedKeywords.push(keywords[i])
                    }
                }
            } else if (keywords[0] !== '') {
                for (const keyword of keywords) {
                    selectedKeywords.push(keyword)
                }
            }
        } else {
            return { message: 'no keywords' }
        }
        return { keywords: selectedKeywords }
    }

    getTagComponents() {
        let all = [];
        let thesis = [{ year: this.props.thesis.year }, { department: this.props.thesis.department }, { type: this.props.thesis.type }, { score: this.props.thesis.score }]
        thesis = thesis.map((tag, key) => {
            if (tag) {
                for (const type in tag) {
                    return <div key={key} className={styles[type]}><span>{Object.values(tag)}</span></div>
                }
            }
        });

        let keywords = [...this.state.keywords];
        keywords = keywords.map((tag, key) => {
            if (tag && tag.length < 30) {
                return <div key={key} onClick={() => this.props.search(tag)} className={styles.keywords}><span>{tag}</span></div>
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

