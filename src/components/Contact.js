var m = require('mithril');
var Contact = {};

Contact.vm = (function() {
    var vm = {};
    var docElemStyle = document.documentElement.style;
    var transitionProp = typeof docElemStyle.transition == 'string' ?
        'transition' : 'WebkitTransition';
    vm.isMoved = false;

    vm.toLink = function() {
    	window.location.href = "https://www.linkedin.com/in/justin-sullivan-4a929889";
    }
    vm.toggleContact = function() {
        var items = document.getElementsByClassName('item');
        var contact = document.getElementsByClassName('contact')[0];
        var time = 0;
        if (vm.isMoved == true){
        	time = 1000;
        }
        vm.isMoved = !vm.isMoved;
    	setTimeout(function() {
			contact.classList.toggle('full');
        }, time)
        
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var delay = vm.isMoved ? items.length - i - 1 : i;
            item.style[transitionProp + 'Delay'] = (delay * 50) + 'ms';
            item.classList.toggle('is-moved');
        }
    };
    return vm;
}())

Contact.controller = function() {
}

Contact.view = function() {
	return(
		<div className="contact">
            <div className="grid">
              	<div className="contact__item--email item">
              		<img className="contact__icon--email"/>
              	</div>
              	<div className="contact__item--phone item">
              		<img className="contact__icon--phone"/>
              	</div>
              	<div className="contact__item--github item">
              		<img className="contact__icon--github"/>
              	</div>
              	<div className="contact__item--address item">
              		<img className="contact__icon--address"/>
              	</div>
              	<div className="contact__item--linkedin item">
              		<img className="contact__icon--linkedin"/>
              	</div>
            </div>
        </div>
	)
};

module.exports = Contact;



