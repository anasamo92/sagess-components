sagess-components
========================

Components for focus application.


## Components

## Sources

All the source code is in `src`.

### component spec

Component example structure, with all the directories ans sub directories.
- `index.js` : the component entry point.
- `style`: the style of the component should be written in **sass**.
- `assets`: all the components assets
- `example`: a example directory for your component, should have an `index.html` file. (see build section for more informations).
- `__tests__` : components unit tests

## Build
- First install the dependencies `npm install`, in case of any problem with a proxy or with `node-gyp` have a look at this [gist](https://gist.github.com/pierr/9c35b3657c053d13d373)
- `npm run build` to trigger the complete build
- `npm run build:browser` to trigger only the build for the browser



## Component catalog

In order to build the catalog, your component must be describe under the `components` node in the `package.json` file.

```json
"components": [
    {
      "name": "componentName",
      "path": "componentPath"
    }
  ]
```

When your component has been added to this list, it will automatically be deployed as a single component and testable through the url: [http://localhost:3000](http://localhost:3000) using the `static-server.js` file. You can launch the examples with the command `npm run example`.

## Unit test

In order to launch unit test: `npm run test`


### CSS

[FlexBox](https://css-tricks.com/snippets/css/a-guide-to-flexbox)/

## Lint
`npm run lint` in order to see your errors.


Browser testing done with Browserstack 
