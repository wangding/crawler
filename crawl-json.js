#!/usr/bin/env node

const axios = require('axios'),
      qs    = require('querystring'),
      path  = require('path'),
      fs    = require('fs'),
      log   = console.log,
      url   = 'http://www.dm5.com/dm5.ashx?t=1594727583098',
      body  = {
        pagesize: 68,
        pageindex: 1,
        tagid: 0,
        areaid: 0,
        status: 0,
        usergroup: 0,
        pay: -1,
        sort: 10,
        char: '',
        sort: 10,
        action: 'getclasscomics'
      },
      gangtai = { areaid: 35, total: 9, name: 'gangtai-' },
      rihan = { areaid: 36, total: 335, name: 'rihan-' },
      dalu = { areaid: 37, total: 23, name: 'dalu-' },
      oumei = { areaid: 52, total: 45, name: 'oumei-' }

async function getList(page, areaid) {
  body.pageindex = page
  body.areaid = areaid

  var rs = await axios.post(url, qs.stringify(body))
  return rs.data
}

async function getAreaData(area) {
  var filename = ''
      data = ''

  for(var i=1; i<=area.total; i++) {
    filename = path.join(__dirname, 'data', area.name + i + '.json')
    data = JSON.stringify(await getList(i, area.areaid))

    fs.writeFileSync(filename, data)
  }
}

async function getAllData() {
  await getAreaData(gangtai)
  await getAreaData(dalu)
  await getAreaData(oumei)
  await getAreaData(rihan)
}

getAllData()
