import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { prettyPrintMemoryUsage } from './console-printer';

export const DummyCollection = new Mongo.Collection('dummyCollection');

Meteor.startup(() => {
    DummyCollection.insert({
        name: 'Hello'
    });

    Meteor.setInterval(prettyPrintMemoryUsage, 2000);
});