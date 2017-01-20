var m = require('mithril')
var Hamburger = {};
Hamburger.controller = function(options) {
    this.click = function() {
        var elems = document.getElementsByClassName('menu');
        elems[0].classList.toggle('extended');
        elems = document.getElementsByClassName('container--chat');
        elems[0].classList.toggle('retracted');
        elems = document.getElementsByClassName('hamburger__line');
        for(var i = 0; i < elems.length; i++) {
            elems[i].classList.toggle('open');
        }
    };
};

Hamburger.view = function(ctrl, options) {
    return m('div', {
        onclick: ctrl.click,
        class: 'hamburger'
    }, [
        m('span', { class: 'hamburger__line one' }),
        m('span', { class: 'hamburger__line twoA' }),
        m('span', { class: 'hamburger__line twoB' }),
        m('span', { class: 'hamburger__line three' }),
    ])
}

module.exports = Hamburger;
