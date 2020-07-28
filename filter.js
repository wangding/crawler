#!/usr/bin/env node

const path  = require('path'),
      fs    = require('fs'),
      log   = console.log

var data, fileName, bk = { max: 5, title: '1', UrlKey: '' }, i=1

function all() {
  var files = fs.readdirSync('./data-bak')
  files.forEach((file) => {
    fileName = path.join(__dirname, 'data-bak', file)
    data = fs.readFileSync(fileName).toString('utf8')
    data = JSON.parse(data)
    
    data.UpdateComicItems.forEach((book) => {
      filter(book)
    })
  })
}

all()

function filter(book) {
  if(book.Title.length < bk.max && book.Star >= 4) {
    log(`${i++} ${book.Title} ${book.LastUpdateTime}`)
  }
}
