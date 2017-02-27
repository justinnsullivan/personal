var m = require('mithril')
var Message = require('./Message');
var Responses = require('./Responses');
var json = require('./story.json')
var origin;
var Script = {}

var Story = function(content, sender, next) {
    this.content = m.prop(content);
    this.next = m.prop(next);
    this.sender = m.prop(sender);
    this.editContent = function(new_c) {
        this.content = m.prop(new_c);
    }
}

function toScript(data) {
    if (data["next"] == []) {
        return new Story(data["content"], data["sender"], data["next"])
    } else {
        return new Story(data["content"], data["sender"], data["next"].map(toScript))
    }
}

function lineToMessage(line) {
    return new Message(line.content(), line.sender());
}

function isLoading(mess) {
    return mess.class.indexOf("loading") != -1;
}

function scrollToRecent() {
    var elem = document.getElementsByClassName("messages")[0];
    if (elem) {
        elem.scrollTop = elem.scrollHeight;
    }
}

Script.Messages = Array;
Script.Responses = Array;
var n = 0;

Script.vm = (function() {
    var vm = {};
    vm.messages = new Script.Messages();
    vm.script;
    vm.responses = new Responses([], 'responses waiting');
    vm.animateChat = function() {
        scrollToRecent();
        var messages = vm.messages.filter(isLoading);
        if (messages[0]) {
            setTimeout(function() {
                messages[0].removeClass('hidden');
                m.redraw();

            }, 600)
            setTimeout(function() {
                messages[0].removeClass('loading');
                m.redraw();
                vm.animateChat()
            }, 2000)
        } else {
            vm.responses.appear();
        }

    }

    vm.addLine = function() {

    }

    vm.choose = function(response, index) {
        vm.responses.disappear();
        vm.messages.push(lineToMessage(response));
        m.redraw();
        setTimeout(function() {
            vm.responses.reset();

            m.redraw();

            vm.continue(response)
        }, 500)

    }
    vm.continue = function(line) {
        vm.current = line;

        if (line.content() == "What else would you like to know about me?") {
            vm.home = line;
        }
        if (line.sender() == 0) {
            vm.messages.push(lineToMessage(line));
        }
        if (line.next().length == 0) {
            vm.continue(vm.home);
        } else if (line.next().length == 1) {
            vm.continue(line.next()[0]);
        } else {
            var temp = [];
            for (var i = 0; i < line.next().length; i++) {
                temp.push(line.next()[i]);
            }
            vm.responses = new Responses(temp, 'responses waiting')
        }
        vm.animateChat()

    }


    vm.init = function() {
        document.title = "Justin Sullivan";
        if (!vm.script){
            vm.script = toScript(json)
            vm.home = vm.script;
            vm.continue(vm.script);
        }
        else {
            console.log('ihi');
            vm.continue(vm.home);
        }
        
        
    }
    return vm
}())

Script.controller = function() {
    Script.vm.init()
}

Script.view = function() {
    var messages = Script.vm.messages.map(function(mess, index) {
        return mess.craftElement(index, Script.vm.messages);
    });
    var resp_class = Script.vm.responses.class;
    var responses = Script.vm.responses.resps().map(function(resp, index) {
        var words = resp.content();
        return ( <div className = "response"
            onclick = { Script.vm.choose.bind(Script.vm.choose, resp, index) }> { words } </div>
        )
    })
    return ( <div>
        <div className = "chat">
            <div className = "chat__header"> Justin Sullivan </div> 
                <div className = "chat__conversation">
                    <div className = "messages"> 
                        { messages }
                        <div className = { resp_class }>
                            { responses }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

module.exports = Script;
