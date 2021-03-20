import Divider from '@lekoarts/gatsby-theme-cara/src/elements/divider'
import React from 'react'

export default function Podcast(offset){
    return (
            <Divider>
                <h1>The Luminaries Podcast</h1>
                <h2>Subscribe Here</h2>
                <iframe frameborder="0" src="https://playlist.megaphone.fm?p=ADL3471774599" width="100%" height="482"></iframe>
            </Divider>
    )
}