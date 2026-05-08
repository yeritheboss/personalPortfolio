import { cp, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const source = resolve(root, 'static')
const target = resolve(root, 'dist', 'static')

if (existsSync(source)) {
  await mkdir(resolve(root, 'dist'), { recursive: true })
  await cp(source, target, { recursive: true })
}
