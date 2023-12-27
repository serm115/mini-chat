import gulp from 'gulp'
import replace from 'gulp-replace'
import rename from 'gulp-rename'
import svgmin from 'gulp-svgmin'
import wrap from 'gulp-wrap'
import fs from 'fs'

const svgFilesFolder = './icons-svg',
    destFolder = '../src/components/icons/',
    jsxTemplate = './icon-template.txt'

let iconsComponentList = []

gulp.task('iconsComponents', function () {
    return gulp
        .src([svgFilesFolder + '/*.svg'])
        .pipe(
            svgmin({
                multipass: true,
                full: true,
                plugins: [
                    {
                        name: 'cleanupIDs',
                        params: { remove: true, minify: true },
                    },
                    'removeDoctype',
                    'removeComments',
                    'removeTitle',
                    'removeDimensions',
                    'collapseGroups',
                    {
                        name: 'cleanupNumericValues',
                        params: { floatPrecision: 4 },
                    },
                    {
                        name: 'convertColors',
                        params: { names2hex: true, rgb2hex: true },
                    },
                    'removeStyleElement',
                    'removeEmptyContainers',
                    {
                        name: 'removeAttrs',
                        params: {
                            attrs: [
                                '(filter|fill|stroke|fill-rule|stroke-linecap|stroke-linejoin|stroke-width|transform|style|class|data.*)',
                                'svg:(width|height)',
                            ],
                        },
                    },
                    'removeUselessDefs',
                ],
            })
        )
        .pipe(replace(/<\/?svg(.*?)>/g, ''))
        .pipe(wrap({ src: jsxTemplate, width: 50 }))
        .pipe(
            rename(function (path) {
                iconsComponentList.push(path.basename)
                path.extname = '.tsx'
            })
        )
        .pipe(gulp.dest(destFolder + '/src'))
})

gulp.task('iconsComponentsMain', function (cb) {
    return fs.writeFile(
        destFolder + '/index.ts',
        '/* GENERATED FILE */\n\n' +
            iconsComponentList
                .map((item) => {
                    let moduleName = (item.charAt(0).toUpperCase() + item.substr(1)).replace(
                        /-([a-z])/g,
                        function (g) {
                            return g[1].toUpperCase()
                        }
                    )

                    return `export { default as Icon${moduleName} } from './src/${item}';`
                })
                .join('\n'),
        cb
    )
})

gulp.task('default', gulp.series('iconsComponents', 'iconsComponentsMain'))
