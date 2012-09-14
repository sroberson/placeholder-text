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
            $(this).blur();
        });
    };
})(jQuery);
