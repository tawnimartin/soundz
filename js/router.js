var Router = Backbone.Router.extend ({

	routes: {
		"genre/:genre" : "loadGenre"
	},

	initialize: function() {

		//views

		this.headerView     	= new HeaderView();
		this.categoryNavView  = new CategoryNavView();
		this.tracks 					= new TrackCollection();
		this.tracksView 			= new TrackCollectionView({
			collection: this.tracks
		});

		//initial structure

		$("header").html( this.headerView.render().el );
		$(".main").html( this.categoryNavView .render().el );
		$(".right").html(this.tracksView.el);

		//listeners

		this.listenTo(this.categoryNavView, "link:click", function(options){
				switch(options.name) {
        case "rock":
          this.loadGenre(options.name);
        break;
        case "alternative":
          this.loadGenre(options.name);
        break;
        default:
          this.loadGenre(options.name);
        break;
      }
      this.navigate("genre/" + options.href);
    });
		

		this.listenTo(this.tracks, "reset", function() {
			this.tracksView.render();
		});
	},

	loadGenre: function(genre) {
		this.tracks.loadGenre(genre);
	}
});