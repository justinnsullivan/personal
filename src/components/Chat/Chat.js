var m = require('mithril')
var Script = require('./Script');

var Chat =  {}

var here = "Chat Yay!",
    theme = "dark";
Chat.vm = (function() {
    var vm = {};

    vm.init = function() {
        vm.header = here;
        vm.theme = theme;
    }
    return vm;
}())

Chat.controller = function() {
    Chat.vm.init();
}


Chat.view = function() {
    return(
        <div className="container--chat main">
            <Script/>
        </div>
        );
};

module.exports = Chat;