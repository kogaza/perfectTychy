module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-breakpoints/gatsby-browser.js'),
      options: {"plugins":[],"queries":{"xs":"(max-width: 320px)","sm":"(max-width: 768px)","md":"(max-width: 1024px)","l":"(max-width: 1536px)"}},
    },{
      plugin: require('../node_modules/gatsby-plugin-anchor-links/gatsby-browser.js'),
      options: {"plugins":[],"offset":-150},
    },{
      plugin: require('../node_modules/@tmttn/gatsby-plugin-hubspot-tracking/gatsby-browser.js'),
      options: {"plugins":[],"trackingCode":"21824221","respectDNT":false,"productionOnly":false},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
