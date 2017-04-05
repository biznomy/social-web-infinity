import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('sign-up');
  this.route('home');
  this.route('time-line');
  this.route('friends');
  this.route('about');
  this.route('edit-about');
  this.route('profile');
  this.route('search');
  this.route('not-friend-profile');
 
});

export default Router;
