var m = require('mithril')
var Hamburger = require('../Nav/Hamburger');
var Menu = require('../Nav/Menu')
var Contact = require('../Contact')

var Projects = {}

Projects.vm = (function() {
    var vm = {};
    vm.toHome = function(){
        m.route("/");
    }
    vm.newTab = function(url){
        window.open(url, '_blank');
    }
    vm.init = function() {
        document.title = "Projects - Justin Sullivan"; 
    };
    return vm;
}())

Projects.controller = function (options) {
    Projects.vm.init();
}

Projects.view = function (ctrl, options) {
    return (
        <div>
            <Hamburger/>
            
            <div className="container">
                <Menu/>
                <div class="projects main">
                    <div class="projects__title">
                        PROJECTS
                    </div>
                    <div class="projects__card" onclick={Projects.vm.newTab.bind(this, 'https://congressapp-2b534.firebaseapp.com/')}>
                        <div class="projects__card__title">
                            <p>Congress App</p>
                            <span>
                                App to analyze Congress data built using React, Redux and SASS
                            </span>
                        </div>
                        <img class="projects__card__img" src="https://i.imgur.com/kpqO0du.png"/>
                    </div>
                    <div class="projects__card" onclick={Projects.vm.newTab.bind(this, 'https://jumbosmash-b5e5e.firebaseapp.com/')}>
                        <div class="projects__card__title">
                            <p>JumboSmash</p>
                            <span>Parllax Landing Page for Tufs Dating App</span>
                        </div>
                        <img class="projects__card__img" src="https://i.imgur.com/gtQY31R.png"/>
                    </div>
                    <div class="projects__card" onclick={Projects.vm.newTab.bind(this, 'https://github.com/justinnsullivan/escss')}>
                        <img class="projects__card__img" src="http://www.devacron.com/wp-content/uploads/2016/02/ES6-ecmascript6-logo.jpg"/>
                        <div class="projects__card__title">
                            <p>EScss</p>
                            <span>CSS Preprocessor to Create Style with ES6</span>
                        </div>
                    </div>
                    <div class="projects__card" onclick={Projects.vm.toHome.bind()}>
                        <div class="projects__card__title">
                            <p>Personal Site</p>
                            <span>Lightweight CYOA Chat App</span>
                        </div>
                        <img class="projects__card__img" src="https://i.imgur.com/i7QSfFY.png"/>
                    </div>
                    <div class="projects__card" onclick={Projects.vm.newTab.bind(this, 'http://kidkaching.herokuapp.com/')}>
                        <div class="projects__card__title">
                            <p>KidKaching</p>
                            <span>Parllax Narrative Landing Page</span>
                        </div>
                        <img class="projects__card__img" src="https://i.imgur.com/fyssA0P.png"/>
                    </div>
                    <div class="projects__card" onclick={Projects.vm.newTab.bind(this, 'https://flat-invest-widget.herokuapp.com/')}>
                        <div class="projects__card__title">
                            <p>Investment Widget</p>
                            <span>Widget to Illustrate Value of Investing</span>
                        </div>
                        <img class="projects__card__img" src="https://i.imgur.com/tOFLBEC.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

module.exports = Projects;

