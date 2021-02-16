const title = 'Goyave'
const description = 'Goyave is a Golang REST API framework aiming at cleanliness, fast development and power.'

module.exports = {
    theme: "goyave",
    title: title,
    description: description,
    dest: './docs',
    head: [
        ['link', { rel: 'icon', type: "image/png", sizes: "16x16", href: `/goyave_16.png` }],
        ['link', { rel: 'icon', type: "image/png", sizes: "32x32", href: `/goyave_32.png` }],
        ['link', { rel: 'icon', type: "image/png", sizes: "64x64", href: `/goyave_64.png` }],
        ['link', { rel: 'icon', type: "image/png", sizes: "128x128", href: `/goyave_128.png` }],
        ['link', { rel: 'icon', type: "image/png", sizes: "256x256", href: `/goyave_256.png` }],
        ['link', { rel: 'icon', type: "image/png", sizes: "512x512", href: `/goyave_512.png` }],
        // Handled in each page
        // ['meta', { property: 'twitter:title', content: title }],
        ['meta', { property: 'twitter:description', content: description }],
        ['meta', { property: 'twitter:image:src', content: `https://goyave.dev/goyave_banner.png` }],
        ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
        // Handled in each page
        // ['meta', { property: 'og:title', content: title }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:description', content: description }],
        ['meta', { property: 'og:image', content: `https://goyave.dev/goyave_banner.png` }],
        ['meta', { property: 'og:site_name', content: "Goyave" }],
    ],
    themeConfig: {
        repo: 'System-Glitch/goyave',
        editLinks: true,
        docsRepo: 'go-goyave/goyave.dev',
        docsDir: 'src',
        smoothScroll: true,
        activeHeaderLinks: false,
        logo: '/goyave_64.png',
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: require('./nav/en'),
                sidebar: {
                    '/guide/': getGuideSidebar(),
                }
            }
        },
        becomeSponsorLink: "https://github.com/sponsors/System-Glitch/",
        sponsors: []
    },
    extraWatchFiles: [
        '.vuepress/nav/en.js',
    ]
    
}

function getGuideSidebar () {
    return [
        {
            title: 'Guide',
            collapsable: true,
            children: [
                '',
                'changelog',
                'installation',
                'upgrade-guide',
                'configuration',
                'architecture-concepts',
                'deployment',
                'contribution-guide',
            ]
        },
        {
            title: 'The Basics',
            collapsable: true,
            children: [
                'basics/routing',
                'basics/middleware',
                'basics/requests',
                'basics/controllers',
                'basics/responses',
                'basics/database',
                'basics/validation',
            ]
        },
        {
            title: 'Advanced',
            collapsable: true,
            children: [
                'advanced/helpers',
                'advanced/authentication',
                'advanced/localization',
                'advanced/testing',
                'advanced/multi-services',
                'advanced/cors',
                'advanced/status-handlers',
                'advanced/logging',
                'advanced/rate-limiting',
                'advanced/websocket',
            ]
        }
    ]
}