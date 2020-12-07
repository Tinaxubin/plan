var FileStreamRotator = require('file-stream-rotator')
var fs = require('fs')
var path = require('path')

var logDirectory = path.join(__dirname, '../log')
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
var accessLogStream = FileStreamRotator.getStream({
  date_format: 'YYYYMMDD',
  filename: path.join(logDirectory, 'access-%DATE%.log'),
  frequency: 'daily',
  verbose: false
})
module.exports = accessLogStream