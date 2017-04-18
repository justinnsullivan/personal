var m = require('mithril');
var Front = require('./components/Front');;
var Resume = require('./components/Resume/Resume');
var Projects = require('./components/Projects/Projects');
window.App = {};

m.route.mode = 'pathname';
m.route(document.getElementById('app'), '/', {
    '/': {
        view: function(ctrl) {
            return m('.app', [
                <Front/>
            ]);
        }
    },
    '/resume': {
        view: function(ctrl) {
            return m('.app', [
                <Resume/>
            ]);
        }
    },
    '/projects': {
        view: function(ctrl) {
            return m('.app', [
                <Projects/>
            ]);
        }
    }

});
