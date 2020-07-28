#!/usr/bin/env node

const path  = require('path'),
      fs    = require('fs'),
      log   = console.log

var data, fileName, bk = { max: 5, title: '1', UrlKey: '' }, i=1

function author() {
  var files = fs.readdirSync('./data')
  files.forEach((file) => {
    fileName = path.join(__dirname, 'data', file)
    data = fs.readFileSync(fileName).toString('utf8')
    data = JSON.parse(data)
    
    data.UpdateComicItems.forEach((book) => {
      if(book.Title.length < bk.max && book.Star >= 4) {
        log(`${i++}\t${file}\t${book.Title}`)
      }
    })
  })
}

author()

