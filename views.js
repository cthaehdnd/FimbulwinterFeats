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
	attachFeats: function(){
		this.$el.html(featBinTemplate({feats:this.feats}));
	},
	render: function(){
		this.$el.html(searchBarTemplate({feattype:"All"}));

		//scale window dynamically
		$(window).resize( function(){
			var width=Math.max(Math.min(1200,Math.floor((window.innerWidth*.9)/150)*150),200);
			if (width > 900){
				if (width < 1200){
					width=900;
				}
			}
			$(".search-bar").css("width", width);
		});

		//update checks on hash
		window.onhashchange = this.readHash;

		//attach feat data
		$.getJSON("feats.json", function(json) {
		    this.feats=json;
		    var levelMap={};
		    _.each(json, function(feat){
		    	if (!levelMap[feat.rank]){
		    		levelMap[feat.rank]=[];
		    	}
		    	levelMap[feat.rank].push(feat);
		    });
		    _.each(Object.keys(levelMap), function(key){
		    	$(".feat-bin").append(levelTemplate({rank:key}));
		    	_.each(levelMap[key], function(ele){
		    		$("[value="+key+"]").append(featTemplate(ele));
		    	});
		    });
		});

		//enable search bar functionality
		$(".search-bar").change( function(){
			
		});
		$(".search-bar").keyup( function(){
			$(this).change();
		})
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
});