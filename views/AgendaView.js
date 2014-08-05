var ContactView = Backbone.View.extend({
	tagName: 'div',
	className: 'row',
	template: $('#agenda-template').html(),

	render: function() {
		var template = _.template(this.template);
		this.$el.html(template(this.model.toJSON()));
		return this;
	}

});

var AgendaView = Backbone.View.extend({
	el: $('#contacts'),

	initialize: function() {
		this.collection = new Agenda(contacts);
		this.render();

		this.collection.on('add', this.renderContact, this);
	},

	render: function() {
		var that = this;
		_.each(this.collection.models, function(item) {
			that.renderContact(item);
		});
	},

	events: {
		'click #add' : 'addContact'
	},

	addContact: function(e) {
		e.preventDefault();

		var formData = {};

		$("#addContact div").children('input').each(function (i, el) {
				formData[el.id] = $(el).val();
				console.log(el);
		});


		contacts.push(formData);

		this.collection.add(new Contact(formData));
	},

	renderContact: function(item) {
		var contactView = new ContactView({
			model: item
		});
		this.$el.append(contactView.render().el);
	},
})