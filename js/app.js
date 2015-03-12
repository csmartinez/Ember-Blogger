App = Ember.Application.create();

App.Router.map(function() {
    this.resource('about');
    this.resource('home');
    this.resource('projects', function() {
    this.resource('project', { path: ':project_id' });
    });
});

App.ProjectsRoute = Ember.Route.extend({
  model: function() {
      return projects;
  }
});

Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).fromNow();
});

var projects = [{
  id: '1',
  title: "Food Market",
  recipient: { address: "http://protected-retreat-6501.herokuapp.com" },
  date: new Date('12-27-2012'),
  excerpt: "Ruby",
  body: "Description of project...",
}, {
  id: '2',
  title: "Concert Tracker",
  recipient: { address: "http://floating-beach-7010.herokuapp.com"},
  date: new Date('12-23-2012'),
  excerpt: "Ruby",
  body: "Description of project...",
}];
