import React from 'react';
import { LinksCollection } from '../models/links';
import { useFind, useSubscribe } from '@meteor-vite/react-meteor-data';

export function Info() {
  const isLoading = useSubscribe('links');
  const links = useFind(() => LinksCollection.find());

  if (isLoading()) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-8">
      <h2 className="text-lg font-bold leading-7 text-gray-700">
        Learn Meteor!
      </h2>
      <ul role="list" className="divide-y divide-gray-100">
        {links.map((link) => (
          <li key={link.url} className="flex gap-x-4 py-5">
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                <a href={link.url} target="_blank">{link.title}</a>
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                <a href={link.url} target="_blank">{link.url}</a>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
