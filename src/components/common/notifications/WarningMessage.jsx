import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { FiAlertTriangle } from 'react-icons/fi';
import { Notification } from './Notification';

const WarningMessage = ({ notifications, removeNotif }) => {
  const warningMessageOptions = {
    color: 'warning',
    icon: FiAlertTriangle,
    type: 'Advertencia!'
  };

  return (
    <div className="flex flex-col gap-1 w-72 fixed bottom-2 right-2 z-50 pointer-events-none">
      <AnimatePresence>
        {notifications.map(n => (
          <Notification
            removeNotif={removeNotif}
            {...n}
            key={n.id}
            menssageOptions={warningMessageOptions}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export { WarningMessage };
