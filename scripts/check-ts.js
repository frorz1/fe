const path = require('path')
const fs = require('fs')
const { execSync, exec } = require('child_process')
const chalk = require('chalk')

const getCommandRetVal = (command) => {
  return execSync(command).toString('utf8').trim()
}

// 根据文件路径向上查找 tsconfig.json
const getTsConfigPath = (filePath) => {
  let currentDir = path.resolve(filePath, '..')
  // 检查文件夹是否存在，删除文件夹时会返回undefined
  while (fs.existsSync(currentDir)) {
    const tsConfigPath = path.resolve(currentDir, './tsconfig.json')
    if (fs.existsSync(tsConfigPath)) {
      return tsConfigPath
    } else {
      currentDir = path.resolve(currentDir, '..')
    }
  }
}

const getToBeCheckedFiles = () => {
  return getCommandRetVal('git diff --cached --name-only')
    .split('\n')
    .map((file) => path.join(__dirname, '..', file))
    .filter((file) => /\.(ts|tsx)$/.test(file))
}

const filesToCheck = getToBeCheckedFiles()

const tsconfigMap = filesToCheck.reduce((acc, file) => {
  const tsconfigPath = getTsConfigPath(file)
  // 删除文件夹时会返回undefined，导致全局tscheck
  if (!tsconfigPath) return acc
  if (acc[tsconfigPath]) {
    acc[tsconfigPath].push(file)
  } else {
    acc[tsconfigPath] = [file]
  }
  return acc
}, {})

Object.keys(tsconfigMap)
  .filter((file) => !!file && !file.endsWith('h5/tsconfig.json'))
  .forEach((tsconfigFile) => {
    const tsconfigLintPath = path.join(tsconfigFile, '..', 'tsconfig-lint.json')
    const devTools = ['**/*.d.ts', '.*.d.ts'] // tsconfigFile.includes("biz/dev-tools")? ["**/*.d.ts", ".*.d.ts"]: []
    const tsconfigLintString = `{
    "extends": "./tsconfig.json",
    "include": [${[...tsconfigMap[tsconfigFile], ...devTools].map(
      (file) => `"${file}"`,
    )}]
  }`

    fs.writeFileSync(tsconfigLintPath, tsconfigLintString)

    exec(`tsc -p ${tsconfigLintPath} --noEmit`, (err, stdout) => {
      const results = stdout
        .split('\n')
        // Highlight filenames and line info
        .map((line) =>
          line
            .replace(/^(\w|-|\[|\]|\/|\.)+tsx?/, (filename) =>
              chalk.bold.cyan(filename),
            )
            .replace(/\([\d]+,[\d]+\)/, (lineRow) => chalk.red(lineRow)),
        )
        // Remove empty lines
        .filter((line) => line)
      if (err && results.length) {
        console.log(results.join('\n'))
        process.exitCode = 1
      } else {
        console.log('✅  Typecheck passed without errors.')
      }
    })
  })
