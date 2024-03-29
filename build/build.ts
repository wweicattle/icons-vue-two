import path from 'node:path'
import consola from 'consola'
import chalk from 'chalk'
import { build } from 'esbuild'
import GlobalsPlugin from 'esbuild-plugin-globals'
import vue from 'unplugin-vue/esbuild'
import { emptyDir } from 'fs-extra'
import { version } from '../package.json'
import { pathOutputModule, pathSrc, pathLibOutput, pathEsOutput } from './paths'
import glob from 'fast-glob'
import type { BuildOptions, Format } from 'esbuild'

const getSvgFiles = async () => {
  const dir = process.cwd()
  let dirs = path.resolve(pathSrc + '/components')
  return glob('*.vue', {
    cwd: dirs,
    absolute: true
  })
}
let getVueDatas = await getSvgFiles()
const buildBundle = () => {
  const getBuildOptions = (format: Format) => {
    const options: BuildOptions = {
      entryPoints: getVueDatas,
      target: 'es2018',
      platform: 'neutral',
      plugins: [
        vue({
          isProduction: true,
          sourceMap: false
        })
      ],
      bundle: true,
      format,
      minifySyntax: true,
      // minifyWhitespace: false,
      banner: {
        js: `/*! Icons Vue v${version} */\n`
      },
      outdir: pathOutputModule
    }
    if (format === 'iife') {
      options.plugins!.push(
        GlobalsPlugin({
          vue: 'Vue'
        })
      )
      options.globalName = 'ElementPlusIconsVue'
    } else {
      options.external = ['vue']
    }

    return options
  }
  const doBuild = async (minify: boolean) => {
    await Promise.all([
      build({
        ...getBuildOptions('esm'),
        entryNames: 'es/' + `[name]/index`,
        minify
      }),
      build({
        ...getBuildOptions('cjs'),
        entryNames: 'lib/' + `[name]/index`,
        outExtension: {
          '.js': '.js'
        },
        minify
      })
    ])
  }
  return Promise.all([doBuild(false)])
}

consola.info(chalk.blue('building... clear lib and es'))
// 清空 lib es
await emptyDir(pathLibOutput)
await emptyDir(pathEsOutput)

// 需要遍历所有的组件打包成各自的文件夹
await buildBundle()
