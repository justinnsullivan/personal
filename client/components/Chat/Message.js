var m = require('mithril');
// var loader = m("div", { class: "activel loader" }, [
var loader = m("div", { class: "activel loader" }, [
    m("div", { class: "loader__line" }),
    m("div", { class: "loader__line" }),
    m("div", { class: "loader__line" })
])

var Message = function(content, side) {
    this.content = m.prop(content);
    this.side = m.prop(side);
    this.changeContent = function(con) {
        this.content = con;
    }
    this.craftElement = function(index, messages) {
        var cls = "message",
            img_cls = "avatar",
            add,
            element,
            content;

        add = this.side() != 0 ? "--user" : "--bot";
        cls += add;
        img_cls += add;

        var content = this.content()
        if (content.indexOf(".gif") != -1 || content.indexOf(".png") != -1 || content.indexOf(".jpg") != -1){
            content = m("img",{src:content,class:"message__img"});
        }


        if (index == 0 || messages[index - 1].side() != this.side()) {
            cls;
            if (this.side() == 0) {
                element = m("div", { class: 'block' }, [
                    m("div", { class: 'message--imgB hidden' }, [
                        m("img", { class: img_cls }),
                        m("div", { class: cls + ' loading first' }, [
                            m("span", [loader, m("p", content)])
                        ])
                    ])
                ]);
            } else {
                element = m("div", { class: 'block' }, [
                    m("div", { class: 'message--imgU' }, [
                        m("div", { class: cls + ' first' }, [
                            m("span", m("p", content))
                        ]),
                        m("img", { class: img_cls })
                    ])
                ]);
            }
        } else {
            element = m("div", { class: cls + " hidden loading" }, [
                loader,
                m("p", content)
            ]);
        }
        
        return element;
    }
}

module.exports = Message;
