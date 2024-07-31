import { Mongo } from 'meteor/mongo';

export const LinksCollection = new Mongo.Collection<{ title: string, url: string, createdAt: Date }>('links');
