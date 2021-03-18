import { Link } from 'gatsby'
import React from 'react'
import { cn, buildImageObj } from '../../lib/helpers'
import { urlFor } from '../../lib/image-url'
import BlockText from '../block-text'
import { GatsbyImage } from "gatsby-plugin-image"
import styles from '../project-preview.module.css'
import { responsiveTitle3 } from '../typography.module.css'
import Layout from '../layout'
import Container from '../container'
import imageUrlBuilder from '@sanity/image-url'


function ArticlePreview(props) {
    // const article = props.node
    console.log("article props", props)
    return (
        <>
            <Link className={styles.root} to={props.url}>
                <div className={styles.leadMediaThumb}>
                    {/* {props.mainImage && props.mainImage.asset && ( */}
                        <img
                            src={urlFor(props.image)
                                .width(600)
                                .height(Math.floor((9 / 16) * 600))
                                .url()}
                            alt={props.headline}
                        />
                </div>
                <h3 className={cn(responsiveTitle3, styles.title)}>{props.headline}</h3>
                {props._rawExcerpt && (
                    <div className={styles.excerpt}>
                        <BlockText blocks={props._rawExcerpt} />
                    </div>
                )}
            </Link>
            {/* <Layout>
                <Container>
                    <ul style={{
                    listStyle: 'none', 
                    display: 'flex', 
                    alignItems: 'space-betweetn', 
                    padding: 0}}>
                      <li key={props.node.slug.current} style={{
                          flex: '1 45%', 
                          maxWidth: '45%',
                          margin: '1rem',
                          flexWrap: 'wrap'}}>
                        <h2 style={{ fontSize: '24px'}}>{props.node.headline}</h2>
                        <GatsbyImage fluid={props.node.image.asset.fluid} alt={props.node.headline} />
                        <a href={props.node.url}  style={{
                          display: 'block',
                          marginTop: '1rem'
                        }}>for {props.node.publication}</a>
                      </li>  
                </ul>
                </Container>
            </Layout> */}
        </>
    )
}

export default ArticlePreview
