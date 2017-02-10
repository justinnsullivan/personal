var browserify = require('browserify-middleware')
var express = require('express')
var Path = require('path')

var routes = express.Router()

routes.get('/app-bundle.js',
  browserify('./src/app.js'))

routes.get('/api/tags-example', function(req, res) {
  res.send(['node', 'express', 'browserify', 'mithril'])
})

var assetFolder = Path.resolve(__dirname, '../dist')
routes.use(express.static(assetFolder))


if (process.env.NODE_ENV !== 'test') {
  routes.get('/*', function(req, res){
    res.sendFile( assetFolder + '/index.html' )
  })
  var app = express()
  app.use( require('body-parser').json() )
  app.use('/', routes)
  var port = process.env.PORT || 3000
  app.listen(port)
  console.log("Listening on port", port)
}
else {
  module.exports = routes
}
