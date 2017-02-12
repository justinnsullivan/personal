var m = require('mithril');
var Clipboard = require('clipboard');

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
        if (vm.isMoved == true) {
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
    vm.init = function() {
        new Clipboard('.item');
    }
    vm.clipText = '';
    vm.showClipMessage = function(type) {
        var clip = document.getElementsByClassName('contact__clipboard')[0];

        vm.clipText = type;
        if (clip.className.indexOf('open') == -1) {
        	console.log('hey');
            clip.classList.toggle('open');
            setTimeout(function() {
                clip.classList.toggle('open');
            }, 2000)
        }

    }
    return vm;
}())


Contact.controller = function() {
	Contact.vm.init();
}

Contact.view = function() {
	return(
		<div className="contact">
			<div className="contact__clipboard">My {Contact.vm.clipText} has been added to your clipboard</div>
            <div className="grid">
              	<div className="contact__item--email item" onclick={Contact.vm.showClipMessage.bind(Contact.vm.showClipMessage,'email')} data-clipboard-text="justinnsullivan@gmail.com">
              		<img className="contact__icon--email"/>
              	</div>
              	<div className="contact__item--phone item" onclick={Contact.vm.showClipMessage.bind(Contact.vm.showClipMessage,'number')} data-clipboard-text="9088121119">
              		<img className="contact__icon--phone"/>
              	</div>
              	<div className="contact__item--github item" onclick={Contact.vm.showClipMessage.bind(Contact.vm.showClipMessage,'Github')} data-clipboard-text="https://github.com/justinnsullivan">
              		<img className="contact__icon--github"/>
              	</div>
              	<div className="contact__item--linkedin item" onclick={Contact.vm.showClipMessage.bind(Contact.vm.showClipMessage,'Linkedin')} data-clipboard-text="https://www.linkedin.com/in/justin-sullivan-4a929889">
              		<img className="contact__icon--linkedin"/>
              	</div>
            </div>
        </div>
	)
};

module.exports = Contact;



