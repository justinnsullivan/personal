var m = require('mithril')
var Script = {};
var Message = require('./Message');
var Responses = require('./Responses');
var here = require('./story');

var Script = function(content, sender, next) {
    this.content = m.prop(content);
    this.next = m.prop(next);
    this.sender = m.prop(sender);
    this.editContent = function(new_c) {
        this.content = m.prop(new_c);
    }
}

function toScript(data) {
    if (data["next"] == []) {
        return new Script(data["content"], data["sender"], data["next"])
    } else {
        return new Script(data["content"], data["sender"], data["next"].map(toScript))
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
    vm.script = new Script();
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
            }, 3000)
        } else {
            vm.responses.appear();
        }

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
        if (line.sender() == 0) {
            vm.messages.push(lineToMessage(line));
        }
        if (line.content() == "What else would you like to know about me?") {
            vm.home = line;
        }

        vm.animateChat()
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
    }

    vm.init = function() {
        vm.script = toScript(here)
        vm.home = vm.script;
        vm.continue(vm.script);
    }
    return vm
}())

Script.controller = function() {
    Script.vm.init()
}

Script.view = function() {
    return m("div", [
        m("div", { class: "chat" }, [
            m("div", { class: "chat__header" }, "Justin Sullivan"),
            m("div", { class: "chat__conversation" }, [
                m("div", { class: "messages" }, [
                    Script.vm.messages.map(function(mess, index) {
                        return mess.craftElement(index, Script.vm.messages);
                    }), m("div", { class: Script.vm.responses.class }, [
                        Script.vm.responses.resps().map(function(resp, index) {
                            var words = resp.content();
                            return m("div", {
                                class: "response",
                                onclick: Script.vm.choose.bind(Script.vm.choose, resp, index)
                            }, words);
                        })
                    ])

                ])
            ])
        ]),
    ]);
};

module.exports = Script;
