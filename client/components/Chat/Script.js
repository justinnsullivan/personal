var m = require('mithril')

// var json = '{"content":"Hi there! Im Justin. Welcome to my personal website","sender":0,"next":[{"content":"I am a Front End Developer from New York and Id love to tell you about myself","sender":0,"next":[{"content":"What would you like to hear about?","sender":0,"next":[{"content":"Your experience!","sender":1,"next":[{"content":"This is some info about jobs wow jobs","sender":0,"next":[{"content":"Moar peas","sender":1,"next":[{"content":"And now Im done!","sender":0,"next":[]}]},{"content":"What about other things?","sender":1,"next":[{"content":"Cool!","sender":0,"next":[]}]}]}]},{"content":"How about School?","sender":1,"next":[]},{"content":"Got any projects?","sender":1,"next":[]},{"content":"GIFS PLEASE!","sender":1,"next":[{"content":"https://media.giphy.com/media/av3t7WMe0t0M8/giphy.gif","sender":0,"next":[]}]}]}]}]}';

var Script = {};
var Message = require('./Message');
var here = require('./story');
// var here = JSON.parse(json);

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

function scrollToRecent() {
    var rep = $('.responses');
    if ($(rep.last()).offset()) {
        $('.messages').animate({
            scrollTop: $('.messages')[0].scrollHeight + 70
        });
    }
}

function hideResps() {
    $('.responses').addClass('fadeOut');
    $('.responses').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function(e) {
            $('.responses').removeClass('fadeOut');
            $('.responses').addClass('waiting');
            setTimeout(scrollToRecent, 300)
        });
}

Script.Messages = Array;
Script.Responses = Array;
var n = 0;
Script.vm = (function() {
    var vm = {};
    vm.messages = new Script.Messages();
    vm.script = new Script();
    vm.responses = new Script.Responses();

    vm.choose = function(response, index) {
        $('.messages').append($('.responses').clone().attr('id', 'newp'));
        var elems = document.getElementsByClassName("messages");
        var elem = elems[elems.length - 1];

        vm.continue(response);

        $('.responses').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function(e) {
                $('#newp').remove();
                setTimeout(vm.stopLoad, 100)
            });

    }

    vm.stopLoad = function() {
        var loaders = $('.activel'),
            boxes = $('.hidden')
        elems = $('.loading')

        if (boxes.length != 0) {
            scrollToRecent();
            setTimeout(function() {
                $(boxes[0]).removeClass('hidden');
            }, 600)
            setTimeout(function() {
                $(loaders[0]).removeClass('activel');
                $(loaders[0]).addClass('killed');
                $(elems[0]).removeClass('loading');
                if (loaders.length == 1) {
                    scrollToRecent();
                }
                vm.stopLoad()
            }, 3000)
        } else {
            // scrollToRecent();
            // setTimeout(function() {
                $('.responses').removeClass('waiting');
                $('.responses').addClass('fadeIn');
                $('.responses').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
                    function(e) {
                        $('.responses').removeClass('fadeIn');
                    });
            // }, 400)
        }
    }

    vm.continue = function(line) {
        hideResps();
        vm.current = line;
        vm.messages.push(lineToMessage(line));

        vm.stopLoad()
        if (line.content() == "What else would you like to know about me?") {
            vm.home = line;
        }
        if (line.next().length == 0) {
            vm.continue(vm.home);
        } else if (line.next().length == 1) {
            vm.continue(line.next()[0]);
        } else {
            var temp = new Script.Responses();
            for (var i = 0; i < line.next().length; i++) {
                temp.push(line.next()[i]);
            }
            vm.responses = temp;
        }
    }

    vm.init = function() {
        vm.script = toScript(here)
        vm.home = vm.script;
        vm.continue(vm.script);
    }

    setTimeout(vm.stopLoad, 500)
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
                    }), m("div", { class: "responses waiting" }, [
                        Script.vm.responses.map(function(resp, index) {
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
