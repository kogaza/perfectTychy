var plugins = [{
      name: 'gatsby-plugin-sitemap',
      plugin: require('/Users/krzysztofogaza/Documents/perfectTychy/node_modules/gatsby-plugin-sitemap/gatsby-ssr.js'),
      options: {"plugins":[],"output":"/","createLinkInHead":true,"entryLimit":45000,"query":"{ site { siteMetadata { siteUrl } } allSitePage { nodes { path } } }","excludes":[]},
    },{
      name: 'gatsby-plugin-breakpoints',
      plugin: require('/Users/krzysztofogaza/Documents/perfectTychy/node_modules/gatsby-plugin-breakpoints/gatsby-ssr.js'),
      options: {"plugins":[],"queries":{"xs":"(max-width: 320px)","sm":"(max-width: 768px)","md":"(max-width: 1024px)","l":"(max-width: 1536px)"}},
    },{
      name: 'gatsby-plugin-dark-mode',
      plugin: require('/Users/krzysztofogaza/Documents/perfectTychy/node_modules/gatsby-plugin-dark-mode/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-use-dark-mode',
      plugin: require('/Users/krzysztofogaza/Documents/perfectTychy/node_modules/gatsby-plugin-use-dark-mode/gatsby-ssr.js'),
      options: {"plugins":[],"classNameDark":"dark-mode","classNameLight":"light-mode","storageKey":"darkMode","minify":true},
    },{
      name: '@tmttn/gatsby-plugin-hubspot-tracking',
      plugin: require('/Users/krzysztofogaza/Documents/perfectTychy/node_modules/@tmttn/gatsby-plugin-hubspot-tracking/gatsby-ssr.js'),
      options: {"plugins":[],"trackingCode":"21824221","respectDNT":false,"productionOnly":false},
    },{
      name: 'gatsby-plugin-image',
      plugin: require('/Users/krzysztofogaza/Documents/perfectTychy/node_modules/gatsby-plugin-image/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      name: 'partytown',
      plugin: require('/Users/krzysztofogaza/Documents/perfectTychy/node_modules/gatsby/dist/internal-plugins/partytown/gatsby-ssr.js'),
      options: {"plugins":[]},
    }]
/* global plugins */
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`
  }

  throw err
}

export function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      return
    }

    try {
      const result = apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  })

  return results.length ? results : [defaultReturn]
}

export async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      continue
    }

    try {
      const result = await apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  }

  return results.length ? results : [defaultReturn]
}
