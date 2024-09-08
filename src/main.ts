import * as core from '@actions/core'
import fs from 'fs/promises'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const inputs = {
      keys: core.getInput('keys'),
      output: core.getInput('output')
    }

    const keys = inputs.keys.split(',')
    const content = keys.map(key => `${key}=${process.env[key]}`).join('\n')

    // write content to file in inputs.output path.
    await fs.writeFile(inputs.output, content, {
      encoding: 'utf-8',
      // overwrite the file if it already exists
      flag: 'w'
    })
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
