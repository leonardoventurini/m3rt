import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/models/links';

async function insertLink({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
  if (await LinksCollection.find().countAsync() === 0) {
    await insertLink({
      title: 'Meteor.js 3.0 Docs',
      url: 'https://v3-docs.meteor.com/',
    });

    await insertLink({
      title: 'Meteor 3.0 Migration Guide',
      url: 'https://v3-migration-docs.meteor.com/',
    });

    await insertLink({
      title: 'Meteor.js Forums',
      url: 'https://forums.meteor.com',
    });
  }

  // We publish the entire Links collection to all clients.
  // In order to be fetched in real-time to the clients
  Meteor.publish("links", function () {
    return LinksCollection.find();
  });
});
