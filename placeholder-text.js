/* usage.....
    $(function() {    
        // call the plugins
        $("input").not('input.file').DefaultInputText();
        $("textarea").DefaultTextareaText(); 
    });
*/


(function ($) {
    $.fn.DefaultInputText = function (options) {
        var $self = this;
        var defaults = {
            inputAttribute: 'placeholder',
            nonErrorClass: 'plain-text',
            errorClass: 'error-text'
        };

        var options = $.extend(defaults, options);

        return $self.each(function () {
            $(this).bind("focus", function () {
                $(this).removeClass(options.errorClass);
                $(this).addClass(options.nonErrorClass);

                if ($(this).val() === $(this).attr(options.inputAttribute)) {
                    $(this).val("");
                }
            });
            $(this).bind("blur", function () {
                if ($(this).val() === $(this).attr(options.inputAttribute)) {
                    $(this).removeClass(options.nonErrorClass);
                    $(this).addClass(options.errorClass);
                } else if ($(this).val() === "") {
                    $(this).val($(this).attr(options.inputAttribute));
                    $(this).addClass(options.errorClass);
                } else {
                    $(this).removeClass(options.errorClass);
                    $(this).addClass(options.nonErrorClass);
                }
            });
            //$(this).blur();
        });
    };
})(jQuery);

(function ($) {
    $.fn.DefaultTextareaText = function (options) {
        var $self = this;
        var defaults = {
            nonErrorClass: 'plain-text',
            errorClass: 'error-text'
        };

        var options = $.extend(defaults, options);

        return $self.each(function () {
            $(this).each(function() {
                $.data(this, 'default', this.value);
            }).focus(function() {
                if (!$.data(this, 'edited')) {
                    this.value = "";
                }
            }).change(function() {
                $.data(this, 'edited', this.value !== "");
            }).blur(function() {
                if (!$.data(this, 'edited')) {
                    this.value = $.data(this, 'default');
                }
            });
        });
    };
})(jQuery);



