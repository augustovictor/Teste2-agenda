var Contact = Backbone.Model.extend({

	defaults: {
		'name'    : 'Victor',
		'phone'  : '0000-0000'
	}
});

var Agenda = Backbone.Collection.extend({
	model: Contact
});