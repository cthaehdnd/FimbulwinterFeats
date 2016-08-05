var searchCardTemplate = _.template(`
	<div class="search-card">
		<input type="text" placeholder="Search for feats..." class="search-bar">
		<div class="search-dummy">text</div>
	</div>
`);

var headerTemplate = _.template(`
	<div class="header-bar">
		<div class="title">Fimbulwinter Feats:</div>
		<div class="header-wrapper">
			<a class="attribute-selector" href=#Fortitude>Fortitude</a>
			<a class="attribute-selector" href=#Agility>Agility</a>
			<a class="attribute-selector" href=#Combat>Combat</a>
			<a class="attribute-selector" href=#Artistry>Artistry</a>
			<a class="attribute-selector" href=#Cunning>Cunning</a>
			<a class="attribute-selector" href=#Charisma>Charisma</a>
		<div>
	</div>
`);