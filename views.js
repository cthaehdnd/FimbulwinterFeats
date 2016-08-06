var searchBarView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	readHash: function(){
		var hash = window.location.hash.substring(1);
		if (hash==""){
			hash="All";
		}
		$(".search-bar").html(searchBarTemplate({feattype:hash}));
	},
	render: function(){
		this.$el.html(searchBarTemplate({feattype:"All"}));
		$(window).resize( function(){
			var width=Math.max(Math.min(1200,Math.floor((window.innerWidth*.9)/150)*150),200);
			if (width > 900){
				if (width < 1200){
					width=900;
				}
			}
			$(".search-bar").css("width", width);
		});
		window.onhashchange = this.readHash;
		$(".search-bar").change( function(){
		});
	}
});



var headerView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.html(headerTemplate());
		$(window).resize( function(){
			//enforce header size bounds even if we resize
			var width=Math.max(Math.min(1200,Math.floor((window.innerWidth*.9)/150)*150),200);
			if (width > 900){
				if (width < 1200){
					width=900;
				}
			}
			$(".header-bar").css("width", width);
		});
	}
})