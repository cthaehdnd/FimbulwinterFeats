var searchBarView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.html(searchCardTemplate());
		$(".search-bar").change( function(){
			$(this).siblings(".search-dummy").html($(this).val())
		})
		$(".search-bar").keyup( function(){
			$(this).change();
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