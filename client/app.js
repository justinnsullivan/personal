var m = require('mithril');
var Front = require('./components/Front');


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
        // Controllers are optional
        // controller: function () {},

        view: function(ctrl) {
            return m('.app', [
                m.component(Front)
                // m.component(MyComponent, { title: 'Welcome to my app!' })
            ]);
        }
    }

});
