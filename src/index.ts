import * as cli from 'commander'
import { a } from 'modules/s'

const world = '🗺️'

export function hello(word: string = world): string {
  return `Hello ${world}! `
}

cli.version('1.0.0')

a()
