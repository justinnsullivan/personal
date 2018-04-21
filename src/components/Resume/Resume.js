var m = require('mithril')
var Hamburger = require('../Nav/Hamburger');
var Menu = require('../Nav/Menu')
var Contact = require('../Contact')

var Resume = {}

Resume.vm = (function() {
    var vm = {};
    vm.init = function() {
        document.title = "Resume - Justin Sullivan"; 
    };
    return vm;
}())

Resume.controller = function (options) {
    Resume.vm.init();
}

Resume.view = function (ctrl, options) {
    return (
        <div>
            <Contact/>
            <Hamburger/>
            <Menu/>
            <div class="container">
                <div className="resume main">
                    <div className="resume__img"></div>
                    <div className="resume__header">
                        <div className="resume__header__name">Justin N. Sullivan</div>
                        <div className="resume__header__contact">
                            <p>justinnsullivan@gmail.com</p>
                            <p>908.812.1119</p>
                            <p>justinnsullivan.com</p>
                            <p>github.com/justinnsullivan</p>
                        </div>
                    </div>
                    <div className="resume__edu">
                        <h1>Education</h1>
                        <span className="resume__line" />
                        <div className="resume__edu__title">
                            <p><span>Tufts University</span>BS in Computer Science - Minor In English</p>
                            <p className="resume__edu__title--date">May 2017</p>
                        </div>
                        <div className="resume__edu__details">
                            <p><span>Course:</span>Computational Theory - Web Engineering - Algorithms - Security - Machine Structure</p>
                            <p><span>Interests:</span>Tufts Wilderness Orientation - Tufts University Beelzebubs - Spirit Of Color Dance Crew - Tufts Bikes</p>
                        </div>
                    </div>
                    <div className="resume__exp">
                        <h1>Professional Experience</h1>
                        <span className="resume__line" />
                        <div className="resume__job">
                            <div className="resume__job__title">
                                <p><span>DataDog</span>Software Engineer</p>
                                <p className="resume__job__title--date">August 2017 - Present</p>
                            </div>
                            <ul className="resume__job__details">
                                <li>As a member of the Alerts team, built the front end of Datadog's new monitor status page, using a modern tech stack and data visualization</li>
                                <li>Rewrote a large portion of the Alerting product's front end testing suite using Puppeteer and Jest</li>
                                <li>Worked closely with designers, project managers, and clients to deliver solidly-coded, performant projects on-time and on-budget</li>
                                <li>As a member of the Developer Efficeny team, maintained and improved developer tooling for the Go and Python code bases</li>
                                <li>Improved the continous integration pipelines, through day to day triage and long term planning and engineering solutions</li>
                                <li>Helped form a developer experience tailored specifically to Datadog engineers through surveys and on call shifts</li>
                            </ul>
                        </div>
                        <div className="resume__job">
                            <div className="resume__job__title">
                                <p><span>Acenna Data</span>Front End Engineer Contractor</p>
                                <p className="resume__job__title--date">Winter 2016</p>
                            </div>
                            <ul className="resume__job__details">
                                <li>Implemented SASS with BEM Methodologies to refactor and streamline their vanilla CSS</li>
                                <li>Built a client list retrieval tool for medical marketers using Angular and Django</li>
                                <li>Established new standards and methods to construct cleaner and more efficient components</li>
                            </ul>
                        </div>
                        <div className="resume__job">
                            <div className="resume__job__title">
                                <p><span>Tufts University</span>TA for Web Engineering and Computational Theory</p>
                                <p className="resume__job__title--date">2016 - 2017</p>
                            </div>
                            <ul className="resume__job__details">
                                <li>Lead lectures on computational theory and proof writing, developed lesson plan</li>
                                <li>Assisted students to construct a development plan of web application projects and performed code reviews</li>
                                <li>Graded computational proofs and web applications in various stages</li>
                                <li>Helped to develop curricula with a focus on student needs and preference</li>
                            </ul>
                        </div>
                        <div className="resume__job">
                            <div className="resume__job__title">
                                <p><span>KidKaching</span>Front End Engineering Intern</p>
                                <p className="resume__job__title--date">Summer 2016</p>
                            </div>
                            <ul className="resume__job__details">
                                <li>Designed and implemented a parallax, narrative homepage catered to encouraging young kids to learn about investing</li>
                                <li>Attended and won the first round of the BNP Paribas International Hackathon, with React Flux demo</li>
                                <li>Mapped out the functionality and UI of the alpha version of the KidKaching platform</li>
                            </ul>
                        </div>
                        <div className="resume__job">
                            <div className="resume__job__title">
                                <p><span>TripleLift</span>Solutions Engineering Intern</p>
                                <p className="resume__job__title--date">Summer 2015</p>
                            </div>
                            <ul className="resume__job__details">
                                <li>On a team of 6 engineers, built interfaces to provide access to integral database information to non-engineering teams</li>
                                <li>Created internal tool to view customizable combinations of marketing metrics for use of Business Development and Sales teams</li>
                                <li>Constructed complex SQL queries to extract new data that had not been fully evaluated</li>
                                <li>Developed internal application to analyze performance of specific advertisements, given a series of queries</li>
                            </ul>
                        </div>
                    </div>
                    <div className="resume__projects">
                        <h1>Projects</h1>
                        <span className="resume__line" />
                        <div className="resume__projects__title">
                            <p><span>Monitor Status Page</span>New Visualization of Monitor Metrics and Status for Datadog </p>
                            
                        </div>
                        <ul className="resume__projects__details">
                            <li>Clouding monitoring, data visualization web app built using d3, React, Redux, and LESS</li>
                            <li>Updated old Monitor Status page to be a more performant, interactive and intuitive tool to manage and view monitors and alerts</li>
                        </ul>
                        <div className="resume__projects__title">
                            <p><span>ESCSS</span>Node ES6 CSS Preprocessor</p>
                            
                        </div>
                        <ul className="resume__projects__details">
                            <li>A node plugin that allows for full usage of ECMAScript 6 functionailty for object oriented CSS</li>
                            <li>Configuration, class based approach to creating application styles</li>
                        </ul>
                        <div className="resume__projects__title">
                            <p><span>Congress Widget</span>Visualization App for Congressional Data</p>
                        </div>
                        <ul className="resume__projects__details">
                            <li>Using ProPublica's official Congress API created a tool for viewing congress data</li>
                            <li>Created with React, Redux and SASS/Susy</li>
                        </ul>
                        <div className="resume__projects__title">
                            <p><span>KidKaching Demo</span>Winner of Round One of BNP International Hackathon 2016</p>
                        </div>
                        <ul className="resume__projects__details">
                            <li>Early phase prototype for adolescent investment app</li>
                            <li>Built using SASS, React Flux</li>
                        </ul>
                    </div>
                    <div className="resume__stack">
                        <h1>Stack</h1>
                        <span className="resume__line" />
                        <p><span>Languages (Most expreince):</span>Python, Javascript (Babel/ES6), Node.js, SASS, PostgreSQL, MySQL</p>
                        <p><span>Tools, Other Languages, Libraries:</span>Bash, Canvas, d3, d3, Express, Flux, Git, Grunt, Jest, jQuery, LESS, Mithril, MongoDB, PHP, Puppeteer, React, Redux, Ruby, SVG, ScrollMagic, Webpack</p>
                        <p><span>Media</span>Sketch, Adobe Photoshop, Final Cut, Microsoft Suite</p>
                        <p><span>Spanish:</span>Full Professional Profciency</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

module.exports = Resume;

