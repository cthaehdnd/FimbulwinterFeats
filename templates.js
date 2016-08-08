var searchBarTemplate = _.template(`
	<div class="feat-title"><%= feattype%> Feats: </div>
	<input type="text" placeholder="Filter feats by name" class="search-bar-input">
	<div class="feat-bin"></div>
`);

var headerTemplate = _.template(`
	<a class="title" href=#All>Fimbulwinter Feats</a>
	<div class="header-wrapper">
		<a class="attribute-selector" href=#Fortitude>Fortitude</a>
		<a class="attribute-selector" href=#Agility>Agility</a>
		<a class="attribute-selector" href=#Combat>Combat</a>
		<a class="attribute-selector" href=#Artistry>Artistry</a>
		<a class="attribute-selector" href=#Cunning>Cunning</a>
		<a class="attribute-selector" href=#Charisma>Charisma</a>
	<div>
`);

var levelTemplate = _.template(`
	<div class="level-header" value="<%= rank%>">Level <%= rank%>:</div>
	</div>
`);

var featTemplate = _.template(`
	<div class="feat" data-attribute="<%= attribute%>">
		<div class="feat-header">
			<%= name%>
		</div>
		<div class="feat-body" style="display:none;">
			<div class="feat-info-header">
				<div class="feat-info-element" id="feat-attribute">
					Required Attribute: <%= attribute%> <%= rank%>
				</div>
				<div class="feat-info-element" id="feat-prof">
					<% if (proficiency) { %>
					    Requires Proficiency: <%= proficiency%>
					<% } %>
				</div>
				<div class="feat-info-element" id="feat-precursors">
					<% if (precursors.length>0) { %>
					    Required Feats:
					    <% _.each(precursors, function(ele){ %>
				            <%= ele %>
				        <% }); %>
					<% } %>
				</div>
			</div>
			<div class="feat-description">
				<%= desc %>
			</div>
		</div>
	</div>
`);