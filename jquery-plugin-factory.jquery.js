(function ($, window, undefined) {
	$.camelToDash = function (str) {
		return str.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
	};

	$.pluginFactory = function (name, defaultOptions, constructor, methods) {

		var jqueryName = name.charAt(0).toLowerCase() + name.slice(1),
			dataName = $.camelToDash(name);

		window[name] = function (element, options) {
			var _self = this;

			_self.element = element;
			_self.$element = $(_self.element);
			_self.options = $.extend({}, defaultOptions, options);
			_self.name = name;
			_self.jqueryName = jqueryName;
			_self.dataName = dataName;

			constructor.apply(_self);
		};

		window[name].prototype = methods;

		$.fn[jqueryName] = function () {

			var args = arguments,
				shift = [].shift,
				options = shift.apply(args);

			return this.each(function () {

				var $this = $(this);

				if (typeof $this.data(dataName) === "undefined") {
					$this.data(dataName, new window[name](this, (typeof options === 'object') ? options : {}));
				}

				var obj = $this.data(dataName);

				if (options !== undefined && typeof obj[options] === 'function') {
					obj[options].apply(obj, args);
				}
			});
		};
	};

})(jQuery, window);