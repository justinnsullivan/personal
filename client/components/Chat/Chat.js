var m = require('mithril')
var Script = require('./Script');

var Chat = function(header, theme) {
    this.header = m.prop(header);
    this.theme = m.prop(theme);
}

var here = "Chat Yay!", theme = "dark";
Chat.vm = (function() {
    var vm = {};

    vm.init = function() {
        vm.header = here;
        vm.theme = theme;
    }
    return vm;
}())

Chat.controller = function() {
    Chat.vm.init()
}

Chat.view = function() {
    return m("div", {class: "container--chat"}, [
        m.component(Script)
    ]);
};

module.exports = Chat;