import { Link } from 'gatsby'
import React from 'react'
import { cn, buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import BlockText from '../block-text'

import styles from '../project-preview.module.css'
import { responsiveTitle3 } from '../typography.module.css'

function ArticlePreview(props) {
    console.log("article props", props)
    return (
        <Link className={styles.root} to={`/article/${props.slug.current}`}>
            <div className={styles.leadMediaThumb}>
                    <img
                        src={imageUrlFor(buildImageObj(props.image))
                            .width(600)
                            .height(Math.floor((9 / 16) * 600))
                            .url()}
                        alt={props.image.alt}
                    />
            </div>
            <h3 className={cn(responsiveTitle3, styles.title)}>{props.headline}</h3>
            {props._rawExcerpt && (
                <div className={styles.excerpt}>
                    <BlockText blocks={props._rawExcerpt} />
                </div>
            )}
        </Link>
    )
}

export default ArticlePreview
