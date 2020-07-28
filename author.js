#!/usr/bin/env node

const axios = require('axios'),
      path  = require('path'),
      fs    = require('fs'),
      log   = console.log,
      gangtai = { areaid: 35, total: 9, name: 'gangtai-' },
      rihan = { areaid: 36, total: 335, name: 'rihan-' },
      dalu = { areaid: 37, total: 23, name: 'dalu-' },
      oumei = { areaid: 52, total: 45, name: 'oumei-' }

var data, fileName

function author() {
  var files = fs.readdirSync('./data')
  files.forEach((file) => {
    fileName = path.join(__dirname, 'data', file)
    data = fs.readFileSync(fileName).toString('utf8')
    data = JSON.parse(data)
    
    data.UpdateComicItems.forEach((book) => {
      if(book.Author.length > 1) {
        log(`${book.Title}\t${book.Author.join(', ')}`)
      }
    })
  })
}

author()

/*
 * 2 万 7 千多本漫画
 * 有 1501 本漫画书的作者不是一个人
*/
