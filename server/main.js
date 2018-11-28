import { Meteor } from 'meteor/meteor';
import { DummyCollection } from './startup';

Meteor.methods({
    'startLotsOfFibers': function() {
        this.unblock();

        // This leaks fiber objects that are not reused or garbage collected when 'startLotsOfFibers' is called in quick succession
        for (let i = 0; i < 500; ++i) {
            DummyCollection.findOne({ name: 'Hello' });
        }
    }
});

