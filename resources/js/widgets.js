$.widget("custom.window", {
	options: {
		title: "Coming Soon TO OWN ON VHS",
		contents: $('<div><img src="resources/icons/project.ico" alt="" style="display: inline-block;"><p style="display: inline-block; vertical-align: top; margin-left: 3px">Coming Soon</p></div>')
					
	},
	_create: function() {
		this.element
			.addClass("window");
		this.title = $("<div>", {
			"class": "window-title"
		}).appendTo(this.element);

		this.close = $("<div>", {
			"class": "button close",
			text: 'X'
		}).appendTo(this.title);

		this.body = $("<div>", {
			"class": "window-body"
		}).appendTo(this.element);

		//this._setDefaultContent();

		this._setOptions(this.options);
		this.element.draggable({handle: '.window-title'});
		this._setClose(this.element);
	},

	_setOption: function(key, value) {
		this._super( key, value );
	}, 

	_setOptions: function( options ) {
		this._super(options);
		this.refresh();
	},

	_setClose: function(widg) {
		this.close.click(function(){
				widg.hide();
			});
		widg.hide();
	},

	refresh: function() {
		console.log(this.options.contents);
		if (this.options.contents.length > 0) {
			this.options.contents.appendTo(this.body);
		}
		this.title.text(this.options.title);
		this.close.appendTo(this.title);
	}, 

	title: function (value) {
		if (value === undefined) {
			return this.optsion.title;
		}
	}
});



				