var searchBarTemplate = _.template(`
	<div class="feat-title"><%= feattype%> Feats: </div>
	<input type="text" placeholder="Filter feats by name" class="search-bar">
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
	<div class="level-bin">
	</div>
`);

var featTemplate = _.template(`
	<div class="feat">
		<%= name%>
	</div>
`);