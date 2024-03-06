import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { NotificationManager } from './NotificationManager';

const Notification = ({ notifications, removeNotification }) => {
  return (
    <div className="flex flex-col gap-1 w-72 fixed top-2 md:top-auto md:bottom-2 right-2 z-50 pointer-events-none">
      <AnimatePresence>
        {notifications.map(n => (
          <NotificationManager key={n.id} {...n} removeNotification={removeNotification} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export { Notification };
