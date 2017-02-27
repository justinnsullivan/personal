var m = require('mithril');
var load_m = 
    <div className='activel loader'>
        <div className='loader__line'></div>
        <div className='loader__line'></div>
        <div className='loader__line'></div>
    </div>;

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
            content = <img src={content} className='message__img'/>;
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
                element = 
                    <div className='block'>
                        <div className={temp}>
                            <img className='avatar--bot'/>
                            <div className={this.class}>
                                <span>
                                    {loader}
                                    <p>{content}</p>
                                </span>
                            </div>
                        </div>
                    </div>
            } else {
                var temp = this.class.replace('user', 'imgU');
                element = 
                    <div className='block'>
                        <div className={temp}>
                            <div className={this.class}>
                                <span>
                                    {loader}
                                    <p>{content}</p>
                                </span>
                            </div>
                            <img className='avatar--user'/>
                        </div>
                    </div>
            }
        } else {
            element = 
                <div className={this.class}>
                    {loader}
                    <p>{content}</p>
                </div>;
        }

        return element;
    }
}

module.exports = Message;
