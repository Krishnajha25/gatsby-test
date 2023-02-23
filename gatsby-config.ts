import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
    siteMetadata: {
        title: `gatsby-zaraz`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        { 
            resolve: `gatsby-plugin-rudderstack`, 
            options: { 
                prodKey: `2M5GgcpiS6nqm7qEQ1uj4kurldf`, 
                trackPage: true, 
                trackPageDelay: 50, 
                dataPlaneUrl: `https://touchlessdysg.dataplane.rudderstack.com`, 
                delayLoad: false, 
                delayLoadTime: 1000, 
                manualLoad: false, 
            } 
        }
    ]
}

export default config
