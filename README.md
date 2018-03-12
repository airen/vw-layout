# vw-layout

> Mobile website layout with viewport units.

vw-layout is an NPM package that helps you to create the mobile website layout with viewport units. It dependencies on [postcss-aspect-ration-mini](https://github.com/yisibl/postcss-aspect-ratio-mini),[postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) and [postcss-viewport-units](https://github.com/springuper/postcss-viewport-units).

In addition, to be compatible with more mobile devices, the viewport unit is required to use polyfill from the viewport unit. We can use the [Viewport Units Buggyfill](https://github.com/rodneyrehm/viewport-units-buggyfill).

## Install 

    npm i vw-layout --save

## Usage

If your project uses a webpack, you can add the associated PostCSS plug-in configuration to the `postcssrc.js` file.

    module.exports = {
        "plugins": {
            "postcss-aspect-ratio-mini": {}, 
            "postcss-px-to-viewport": {
                viewportWidth: 750,      // (Number) The width of the viewport.
                viewportHeight: 1334,    // (Number) The height of the viewport.
                unitPrecision: 3,        // (Number) The decimal numbers to allow the REM units to grow to.
                viewportUnit: 'vw',      // (String) Expected units.
                selectorBlackList: ['.ignore', '.hairlines'],  // (Array) The selectors to ignore and leave as px.
                minPixelValue: 1,       // (Number) Set the minimum pixel value to replace.
                mediaQuery: false       // (Boolean) Allow px to be converted in media queries.
            }, 
            "postcss-viewport-units":{},
        }
    }

If your project is not using a webpack, go to the corresponding PostCSS plug-in website and view the configuration.

- [postcss-aspect-ration-mini](https://github.com/yisibl/postcss-aspect-ratio-min) via [@yisibl](https://github.com/yisibl)
- [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) via [@evrone](https://github.com/evrone)
- [postcss-viewport-units](https://github.com/springuper/postcss-viewport-units) via [@springuper](https://github.com/springuper)
- [Viewport Units Buggyfill](https://github.com/rodneyrehm/viewport-units-buggyfill) via [@rodneyrehm](https://github.com/rodneyrehm)

## Thanks

Special thanks to [@yisibl](https://github.com/yisibl)、 [@evrone](https://github.com/evrone) and [@springuper](https://github.com/springuper) for providing such an excellent PostCSS plug-in. Tanks to [@rodneyrehm](https://github.com/rodneyrehm) for providing viewport units polyfill.

## License

MIT.