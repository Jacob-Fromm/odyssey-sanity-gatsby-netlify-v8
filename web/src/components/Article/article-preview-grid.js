import { Link } from 'gatsby'
import React from 'react'
import ArticlePreview from './article-preview'

import styles from '../project-preview-grid.module.css'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs'

function ArticlePreviewGrid(props) {
    console.log("article-preview-grid props", props)
    const articles = props.nodes
    return (
        <div className={styles.root}>
            <h2 className={styles.title}>{props.title}</h2>
            <ul className={styles.grid}>
                {props.nodes &&
                    props.articles.map(node => (
                        <li key={node.id}>
                            <ArticlePreview {...node.node} />
                        </li>
                    ))}
            </ul>
            {props.browseMoreHref && (
                <div className={styles.browseMoreNav}>
                    <Link to={props.browseMoreHref}>Browse more</Link>
                </div>
            )}
        </div>
    )
}

ArticlePreviewGrid.defaultProps = {
    headline: '',
    nodes: [],
    browseMoreHref: ''
}

export default ArticlePreviewGrid
