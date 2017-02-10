var m = require('mithril');
var Hamburger = require('./Nav/Hamburger');
var Chat = require('./Chat/Chat');
var Menu = require('./Nav/Menu')

exports.controller = function(options) {}

exports.view = function(ctrl, options) {
   	return (
   		<div>
        	<Hamburger/>
        	<div className="container">
        		<Menu/>
        		<Chat/>
        	</div>
        </div>
    )
}
