import { Link } from 'gatsby'
import React from 'react'
import ArticlePreview from './article-preview'

import styles from '../project-preview-grid.module.css'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs'
import Divider from '../../gatsby-theme-cara/src/elements/divider'

function ArticlePreviewGrid(props) {
    console.log("article-preview-grid props", props)
    const articles = props.nodes
    return (
        <Divider
            // bg="divider"
            // clipPath="polygon(0 10%, 100% 4%, 100% 82%, 0 94%)"
            speed={0.2}>
        <div className={styles.root}>
            <Link to='/archive'>
                <h2 className={styles.title}>{props.title}</h2>
            </Link>
            <ul className={styles.grid}>
                {props.nodes &&
                    props.articles.map(article => (
                        <li key={article.id}>
                            <ArticlePreview {...article.node} />
                        </li>
                    ))}
            </ul>
            {props.browseMoreHref && (
                <div className={styles.browseMoreNav}>
                    <Link to={props.browseMoreHref}>Browse more</Link>
                </div>
            )}
        </div>
        </Divider>
    )
}

ArticlePreviewGrid.defaultProps = {
    headline: '',
    nodes: [],
    browseMoreHref: ''
}

export default ArticlePreviewGrid
