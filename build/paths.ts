import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const dir = dirname(fileURLToPath(import.meta.url))

export const pathRoot = resolve(dir, '..')
export const pathSrc = resolve(pathRoot, 'src')
export const pathEs = resolve(pathRoot, 'es')
export const pathLib = resolve(pathRoot, 'lib')
export const pathComponents = resolve(pathSrc, 'components')
export const pathOutput = resolve(pathRoot, 'dist')
export const pathLibOutput = resolve(pathRoot, 'lib')
export const pathEsOutput = resolve(pathRoot, 'es')

export const pathOutputModule = resolve(pathRoot)
