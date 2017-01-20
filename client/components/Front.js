var m = require('mithril')
var Chat = require('./Chat/Chat');
var Hamburger = require('./Hamburger');
var Menu = require('./Menu')

exports.controller = function (options) {}

exports.view = function (ctrl, options) {
  return m('.my-component', [
  	m.component(Hamburger),
  	m('div',{class:"container"},[
  		m.component(Menu),
  		m.component(Chat)
  		])
  ])
}
