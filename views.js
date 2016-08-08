var searchBarView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	attachFeats: function(){
		var hash = window.location.hash.substring(1);
		if (hash==""){
			hash="All";
		}
		$(".search-bar").html(searchBarTemplate({feattype:hash}));

		$.getJSON("feats.json", function(json) {
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
		 	//hide feats accordingly
			if (hash!="All"){
				$(".feat").addClass("type-hidden");
				$(".feat").filter( function(){
					var attribute = $(this).data("attribute");
					return attribute == hash;
				}).removeClass("type-hidden");
			}
			else{
				$(".feat").removeClass("type-hidden");
			}

			//enable card hide/show
			$(".feat").click(function(event){
				event.stopPropagation();
				$(".feat").children(".feat-body").slideUp();
				if ($(this).children(".feat-body").css("display")=="none"){
					$(this).children(".feat-body").slideDown();
				}
			});
		});
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
		window.onhashchange = this.attachFeats;

		//attach feat data
		this.attachFeats();

		//enable search bar functionality
		$(".search-bar-input").on('change', function(event){
			event.stopPropagation();
			$(".feat-header").next().slideUp();
			var val = $(this).val().toLowerCase();
			$(".feat").addClass("filter-hidden");
			$(".feat").filter( function(){
				if (val==""){
					return true;
				}
				//drives search function
				var searchElements=val.split(" ");
				flag=true;
				nbegin=-1;
				var name = $(this).children(".feat-header").text().replace(/\s/g,'').toLowerCase();
				_.each(searchElements, function(ele){
					if(ele){
						var place = name.indexOf(ele);
						if (place>nbegin){
							nbegin=place+ele.length-1;
						}
						else{
							flag=false;
						}
					}
				});
				return flag;
			}).removeClass("filter-hidden");
		}).on('keyup', function(event){
			event.stopPropagation();
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
});