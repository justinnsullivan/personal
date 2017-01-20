var m = require('mithril');
var Menu = {};

Menu.vm = (function() {
    var vm = {};
    return vm;
}())

Menu.controller = function() {
    // Menu.vm.init()
}

Menu.view = function() {
    return m("div", {class:'menu'}, [
    	m("div",{class:'menu__button--resume'}, "RESUME"),
    	m("div",{class:'menu__button--projects'}, "PROJECTS"),
    	m("div",{class:'menu__button--contact'}, "CONTACT")
    ]);
};

module.exports = Menu;
