App = Ember.Application.create();

App.Router.map(function() {
    this.resource('about');
    this.resource('emails', function() {
    this.resource('email', { path: ':email_id' });
    });
});

App.EmailsRoute = Ember.Route.extend({
  model: function() {
      return emails;
  }
});

Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).fromNow();
});

var emails = [{
  id: '1',
  title: "title1",
  recipient: { address: "person@email.com" },
  date: new Date('12-27-2012'),
  excerpt: "excerpt1",
  body: "body1",
}, {
  id: '2',
  title: "title2",
  recipient: { address: "person@email.com"},
  date: new Date('12-23-2012'),
  excerpt: "excerpt2",
  body: "body2",
}];
