var TrackView = Backbone.View.extend({

	tagName: "tr",

	template: 	JST["track"],

	render: function() {

		var data = this.model.toJSON();
		data.duration = this.formatDuration(data.duration);
		this.$el.html (
			this.template( data )
		);
		return this;
	},

	formatDuration: function(duration) {
		//convert the milliseconds to minutes
		duration = duration / 1000 / 60; // seconds // minutes
		//get mins and sec
		var minutes = Math.floor(duration);
		var seconds = Math.round((duration - minutes) * 60);
		//add a 0 if seconds is less than 10
		if (seconds < 10) {
			seconds = "0" + seconds.toString();
		}
		//combine the values
		duration = minutes.toString() + ":" + seconds.toString();
		return duration;
	}

});

var TrackCollectionView = Backbone.View.extend ({

	tagName: "table",
	className: "track-list",
	template: JST["track_collection"],

	render: function() {
		this.$el.html( this.template() );
		//rows
		var $tbody = this.$("tbody");
		this.collection.each(function(model){

			var view = new TrackView({model: model});
			$tbody.append(view.render().el);
		});
		return this;
	}
});

var HeaderView = Backbone.View.extend({
  template: JST["header"],
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

var CategoryNavView = Backbone.View.extend({
	  events: {
    "click a" : "onClick"
  },
  template: JST["category_nav"],
  render: function() {
    this.$el.html(this.template());
    return this;
  },
    onClick: function(e) {
    e.preventDefault();
    var name = this.$(e.currentTarget).data("name");
    var href = this.$(e.currentTarget).attr("href");

    this.trigger("link:click", {
      name: name, 
      href: href
      });
    }
});