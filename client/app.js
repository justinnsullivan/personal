var m = require('mithril');
var Hamburger = require('./components/Hamburger');
var Chat = require('./components/Chat/Chat');
var Menu = require('./components/Menu');
var Resume = require


//
// Global variable for global state (e.g. currentUser)
//
window.App = {};

//
// Client-side routing
//
m.route.mode = 'pathname';
m.route(document.getElementById('app'), '/', {

    '/': {
        view: function(ctrl) {
            return m('.app', [
                m('.my-component', [
                    m.component(Hamburger),
                    m('div', { class: "container" }, [
                        m.component(Menu),
                        m.component(Chat)
                    ])
                ])
            ]);
        }
    }

});
