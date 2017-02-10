var m = require('mithril')
var Hamburger = require('../Nav/Hamburger');
var Menu = require('../Nav/Menu')
exports.controller = function (options) {}

exports.view = function (ctrl, options) {
    return (
        <div class="container">
            <Hamburger/>
            <Menu/>
            <div className="resume main">
                <div className="resume__img">_</div>
                <div className="resume__content">
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
                            <p className="resume__edu__title--date">Expected May 2017</p>
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
                                <p><span>Mimir</span>Front End Engineer Contractor</p>
                                <p className="resume__job__title--date">Current</p>
                            </div>
                            <ul className="resume__job__details">
                                <li>Reorganized CSS, converting thier previous system to SASS with a BEM and SMACSS methodology</li>
                                <li>Completed various Front End projects with a combination of Angular and Django</li>
                                <li>Consulted with company on direction and standards for Front End code going forward</li>
                            </ul>
                        </div>
                        <div className="resume__job">
                            <div className="resume__job__title">
                                <p><span>Tufts University</span>Web Engineering and Computational Theory TA</p>
                                <p className="resume__job__title--date">Current</p>
                            </div>
                            <ul className="resume__job__details">
                                <li>Taught lecture on computer theory and proof writing, developed lesson plan</li>
                                <li>Assisted students in debugging code and talking through the direction of web application projects</li>
                                <li>Graded computational proofs and web applications in various stages</li>
                                <li>Helped to craft the courses to keep the students in mind</li>
                            </ul>
                        </div>
                        <div className="resume__job">
                            <div className="resume__job__title">
                                <p><span>KidKaching</span>Front End Engineering Intern</p>
                                <p className="resume__job__title--date">Summer 2016</p>
                            </div>
                            <ul className="resume__job__details">
                                <li>Designed/Created a Parallax homepage with a custom narrative to encourage young kids to learn about investing</li>
                                <li>Attended and won the first round of the BNP Paribas International Hackathon, created a prototype using React</li>
                                <li>Gained experience with and a passion for JS frameworks and SASS</li>
                                <li>Helped map out the functionality and UI of the alpha version of the KidKaching platform</li>
                            </ul>
                        </div>
                        <div className="resume__job">
                            <div className="resume__job__title">
                                <p><span>TripleLift Solutions</span>Engineering Intern</p>
                                <p className="resume__job__title--date">Summer 2015</p>
                            </div>
                            <ul className="resume__job__details">
                                <li>On a team of 6 engineers, worked to create interfaces to provide access to integral database information to non engineering teams</li>
                                <li>Created internal tool to view customizable combinations of marketing metrics for use of Business Development and Sales teams</li>
                                <li>Constructed complex SQL queries to extract new data that had not been fully evaluated</li>
                                <li>Developed internal application to analyze performance of specific advertisements when compared to a selection or type of publishers.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="resume__projects">
                        <h1>Projects</h1>
                        <span className="resume__line" />
                        <div className="resume__projects__title">
                            <p><span>ESCSS</span>Node ES6 CSS Preprocessor</p>
                            
                        </div>
                        <ul className="resume__projects__details">
                            <li>A node plugin that allows for full usage of ECMAScript 6 functionailty for full object oriented CSS</li>
                            <li>Configuration, class based approach to creating styles, perfect for projects in React</li>
                        </ul>
                        <div className="resume__projects__title">
                            <p><span>Mithril CYOA</span>Narrative library for Mithril.js</p>
                        </div>
                        <ul className="resume__projects__details">
                            <li>A choose your own adventure chat library for lightweight JS framework</li>
                            <li>Used to build the chat features of this site</li>
                        </ul>
                        <div className="resume__projects__title">
                            <p><span>KidKaching Prototype</span>Winner of Round One of BNP International Hackathon 2016</p>
                        </div>
                        <ul className="resume__projects__details">
                            <li>Early phase prototype for adolescent investment app</li>
                            <li>Built using SASS, React Flux</li>
                        </ul>
                    </div>
                    <div className="resume__stack">
                        <h1>Stack</h1>
                        <span className="resume__line" />
                        <p><span>Languages:</span>Javascript, JSX, ES6, CSS, SASS, HTML5, MySQL, Python, jQuery, Git, Ruby on Rails, MongoDB, PostgreSQL, C and C++</p>
                        <p><span>Media:</span>Sketch, Adobe Photoshop, Final Cut, Microsoft Suite</p>
                        <p><span>Spanish:</span>Full Professional Profciency</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



