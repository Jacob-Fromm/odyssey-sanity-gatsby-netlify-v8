import { Link } from 'gatsby'
import React from 'react'
import ArticlePreview from './article-preview'

import styles from '../project-preview-grid.module.css'

function ArticlePreviewGrid(props) {
    console.log("article-preview-grid props", props)
    return (
        <div className={styles.root}>
            {props.headline && <h2 className={styles.headline}>{props.headline}</h2>}
            <ul className={styles.grid}>
                {props.nodes &&
                    props.nodes.map(node => (
                        <li key={node.id}>
                            <ArticlePreview {...node} />
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
