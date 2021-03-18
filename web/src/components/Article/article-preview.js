import { Link } from 'gatsby'
import React from 'react'
import { cn, buildImageObj } from '../../lib/helpers'
import { urlFor } from '../../lib/image-url'
import BlockText from '../block-text'
import { GatsbyImage } from "gatsby-plugin-image"
import styles from '../project-preview.module.css'
import { responsiveTitle3, responsiveTitle4 } from '../typography.module.css'
import Layout from '../layout'
import Container from '../container'
import imageUrlBuilder from '@sanity/image-url'


function ArticlePreview(props) {
    console.log("article props", props)
    return (
        <Link className={styles.root} to={props.url}>
            <div className={styles.leadMediaThumb}>
                    <img
                        src={urlFor(props.image)
                            .width(600)
                            .height(Math.floor((9 / 16) * 600))
                            .url()}
                        alt={props.headline}
                    />
            </div>
            <h3 className={cn(responsiveTitle3, styles.title)}>{props.headline}</h3>
            <p className={cn(responsiveTitle4, styles.excerpt)}>for {props.publication}</p>
            {/* {props._rawExcerpt && (
                <div className={styles.excerpt}>
                    <BlockText blocks={props.publication} />
                </div>
            )} */}
        </Link>
    )
}

export default ArticlePreview
