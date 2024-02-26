import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { NotificationManager } from './NotificationManager';

const Notification = ({ notifications, removeNotif }) => {
  return (
    <div className="flex flex-col gap-1 w-72 fixed bottom-2 right-2 z-50 pointer-events-none">
      <AnimatePresence>
        {notifications.map(n => (
          <NotificationManager key={n.id} {...n} removeNotif={removeNotif} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export { Notification };
