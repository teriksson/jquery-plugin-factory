```

(function ($, window, undefined) {

  // Create the plugin
	$.pluginFactory(
    // plugin name
		'FancyAccordion',

    // default options
    {
			triggerSelector: '.fancy-accordion-trigger',
			collapseSelector: '.fancy-accordion-collapse',
			toggleSpeed: 200
		},

    // constructor
		function (_self) {
			_self.$out = $();
			_self.init();
		},

    // methods
		{
			init: function(){
				var _self = this;

				_self.$element.find(_self.options.triggerSelector).each(function(){
					_self._prepareTrigger(this);
				});

				_self.$element.on('click', _self.options.triggerSelector, function(){
					var $trigger = $(this),
						$collapse = $trigger.data(_self.dataName + "-collapse");

					if($collapse.is(':visible')){
						_self.collapseToggle();
						return;
					}

					_self.collapseToggle();
					_self.$out = $collapse;

					$collapse
						.slideToggle(_self.options.toggleSpeed);

				});
			},

			collapseToggle: function(){
				var _self = this;

				_self.$out
					.slideToggle(_self.options.toggleSpeed);

				delete _self.$out;
				_self.$out = $();
			},

			_prepareTrigger: function(trigger){
				var _self = this,
					$trigger = $(trigger),
					$collapse = $trigger.next(_self.options.collapseSelector);

				if($collapse.size() < 1) {
					console.warn('No collapse element found for trigger in ' + _self.name)
					return;
				}

				$trigger.data(_self.dataName + "-collapse", $collapse);
			}
		}
	);

  // Init the plugin
  $('[data-fancy-accordion]').fancyAccordion();

  // Run a function
  $('[data-fancy-accordion]').fancyAccordion('collapseToggle');

})(jQuery, window);

```
