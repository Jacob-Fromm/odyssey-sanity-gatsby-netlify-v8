export default {
    name: 'article',
    title: 'Article',
    type: 'document',
    fields: [
        {
            name: 'headline',
            title: 'Headline',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'headline'
            }
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        },
        {
            name: 'publication',
            title: 'Publication',
            type: 'string'
        },
        {
            name: 'publicationDate',
            title: 'Publication Date',
            type: 'date'
        },
        {
            name: 'image',
            title: 'Article Image',
            type: 'figure'
        },
        // {
        //     name: 'image',
        //     title: 'Article Image',
        //     type: 'image',
        //     hidden: false,
        //     readOnly: false,
        //     description: 'article image',
        //     options: {
        //         hotspot: true
        //     },
        //     fields: [
        //         {
        //             name: 'caption',
        //             type: 'string',
        //             title: 'Caption',
        //             options: {
        //                 isHighlighted: true
        //             }
        //         },
        //         {
        //             name: 'attribution',
        //             type: 'string',
        //             title: 'Attribution',
        //         }
        //     ]
        // },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'person' }
        }
    ]
}

// import { format } from 'date-fns'

// export default {
//     name: 'article',    
//     title: 'Sample Article',
//     type: 'document',
//     fields: [
//         {
//             name: 'headline',    
//             title: 'Headline',
//             type: 'string'
//         },
//         {
//             name: 'slug',    
//             title: 'Slug',
//             type: 'slug',
//             description: 'Some frontend will require a slug to be set to be able to show the project',
//             options: {
//                 source: 'title',    
//                 maxLength: 96
//             }
//         },
//         {
//             name: 'publishedAt',    
//             title: 'Published at',
//             description: 'You can use this field to schedule projects where you show them',
//             type: 'datetime'
//         },
//         {
//             name: 'excerpt',    
//             title: 'Excerpt',
//             type: 'simplePortableText'
//         },
//         {
//             name: 'members',    
//             title: 'Members',
//             type: 'array',
//             of: [{ type: 'projectMember' }]
//         },
//         {
//             name: 'startedAt',    
//             title: 'Started at',
//             type: 'datetime'
//         },
//         {
//             name: 'endedAt',    
//             title: 'Ended at',
//             type: 'datetime'
//         },
//         {
//             name: 'mainImage',    
//             title: 'Main image',
//             type: 'figure'
//         },
//         {
//             name: 'categories',    
//             title: 'Categories',
//             type: 'array',
//             of: [{ type: 'reference', to: { type: 'category' } }]
//         },
//         {
//             name: 'body',    
//             title: 'Body',
//             type: 'projectPortableText'
//         },
//         {
//             name: 'relatedProjects',    
//             title: 'Related projects',
//             type: 'array',
//             of: [{ type: 'reference', to: { type: 'sampleProject' } }]
//         }
//     ],
//     preview: {
//         select: {
//             title: 'title',    
//             publishedAt: 'publishedAt',
//             slug: 'slug',
//             media: 'mainImage'
//         },
//         prepare({ title = 'No title', publishedAt, slug = {}, media }) {
//             const dateSegment = format(publishedAt, 'YYYY/MM')    
//             const path = `/${dateSegment}/${slug.current}/`
//             return {
//                 title,    
//                 media,
//                 subtitle: publishedAt ? path : 'Missing publishing date'
//             }
//         }
//     }
// }


