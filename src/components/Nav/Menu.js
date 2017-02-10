var m = require('mithril');
var Menu = {};

Menu.vm = (function() {
    var vm = {};
    vm.toRes = function(){
    	m.route("/resume");
    }
    vm.toHome = function(){
    	m.route("/");
    }
    return vm;
}())

Menu.controller = function() {
}

Menu.view = function() {
	return(
		<div className='menu'>
			<div className='menu__button--home' onclick={Menu.vm.toHome.bind()}>HOME</div>
			<div className='menu__button--resume' onclick={Menu.vm.toRes.bind()}>RESUME</div>
			<div className='menu__button--contact'>CONTACT</div>
		</div>
	)
};

module.exports = Menu;
