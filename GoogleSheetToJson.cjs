const fs = require('fs-extra')
const unflatten = require('flat').unflatten
const { extractSheets } = require('spreadsheet-to-json')
const path = require('path')

extractSheets(
  {
    spreadsheetKey: '1-UkqlahrpspLUklXaHt9aA2C1eozCVfvVghYMTZvrnA',
    credentials: require('./i18n.json'),
    sheetsToExtract: ['UNI']
  },
  (err, data) => {
    if (err) throw err
    const read = [...data['UNI']]
    const result = {}
    const files = []

    for (const key in read[0]) {
      if (key !== 'key') {
        files.push(key)
        result[key] = {}
      }
    }
    read.forEach((el) => {
      for (const file of files) {
        result[file][el.key] = el[file] ? el[file] : ''
      }
    })
    for (const fileName of files) {
      fs.ensureDirSync(
        path.dirname(path.resolve(__dirname, './src/lang', `${fileName}.json`))
      )
      fs.writeJSONSync(
        path.resolve(__dirname, './src/lang', `${fileName}.json`),
        unflatten(result[fileName], { object: true }),
        { spaces: 2 }
      )
    }
  }
)
