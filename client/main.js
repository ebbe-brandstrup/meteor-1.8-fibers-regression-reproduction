import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
    Meteor.setInterval(() => {
        Meteor.call('startLotsOfFibers');
    }, 50);
});