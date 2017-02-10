var m = require('mithril');

var Responses = function(resps) {
    this.resps = m.prop(resps);
    this.class = 'responses waiting';
    this.changeContent = function(con) {
        this.content = m.prop(con);
    }
    this.addClass = function(new_class) {
        if (this.class.indexOf(new_class) == -1) {
            var temp = this.class;
            this.class = temp + ' ' + new_class;
        }
    }
    this.removeClass = function(remove_class) {
        var temp = this.class;
        this.class = temp.replace(remove_class, '');
    }
    this.appear = function() {
        this.addClass('fadeIn');
        this.removeClass('waiting');
        m.redraw();
    }
    this.reset = function(){
        this.removeClass('fadeIn');
        this.removeClass('fadeOut');
        this.addClass('waiting')
    }
    this.disappear = function() {
        this.removeClass('fadeIn');
        this.addClass('fadeOut');
    }
}

module.exports = Responses;
