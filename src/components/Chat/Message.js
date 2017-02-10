var m = require('mithril');
// var loader = m('div', { class: 'activel loader' }, [
var load_m = m('div', { class: 'activel loader' }, [
    m('div', { class: 'loader__line' }),
    m('div', { class: 'loader__line' }),
    m('div', { class: 'loader__line' })
])

var Message = function(content, side) {
    this.content = m.prop(content);
    this.side = m.prop(side);
    this.class = this.side() != 0 ? 'fadeIn message--user' : 'fadeIn message--bot hidden loading';
    this.changeContent = function(con) {
        this.content = m.prop(con);
    }
    this.addClass = function(new_class) {
        var temp = this.class;
        this.class = temp + ' ' + new_class;
    }
    this.containsClass = function(cls) {
        return this.class.indexOf(cls) != -1
    }
    this.removeClass = function(remove_class) {
        var temp = this.class;
        this.class = temp.replace(remove_class, '');
    }
    this.craftElement = function(index, messages) {
        var element, content, loader;
        var content = this.content();
        var loader = load_m;
        if (!this.containsClass('loading')) loader = '';
        if (content.indexOf('.gif') != -1 || content.indexOf('.png') != -1 || content.indexOf('.jpg') != -1) {
            content = m('img', { src: content, class: 'message__img' });
        }
        if (index == 0 || messages[index - 1].side() != this.side()) {
            var temp = this.class.replace('bot ', 'imgB');
            if (!this.containsClass('first')) {
                this.addClass('first')
                this.removeClass('hidden');
                temp = temp.replace('loading', '');
            }
            if (this.side() == 0) {
                var temp = this.class.replace('bot', 'imgB').replace('loading', '');
                element = m('div', { class: 'block' }, [
                    m('div', { class: temp }, [
                        m('img', { class: 'avatar--bot' }),
                        m('div', { class: this.class }, [
                            m('span', [loader, m('p', content)])
                        ])
                    ])
                ]);
            } else {
                var temp = this.class.replace('user', 'imgU');
                element = m('div', { class: 'block' }, [
                    m('div', { class: temp }, [
                        m('div', { class: this.class }, [
                            m('span', m('p', content))
                        ]),
                        m('img', { class: 'avatar--user' })
                    ])
                ]);
            }
        } else {
            element = m('div', { class: this.class }, [
                loader,
                m('p', content)
            ]);
        }

        return element;
    }
}

module.exports = Message;
