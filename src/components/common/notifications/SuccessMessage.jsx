import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { FiCheckSquare } from 'react-icons/fi';
import { Notification } from './Notification';

const SuccessMessage = ({ notifications, removeNotif }) => {
  const successMessageOptions = {
    color: 'success',
    icon: FiCheckSquare,
    type: 'Hecho!'
  };

  return (
    <div className="flex flex-col gap-1 w-72 fixed bottom-2 right-2 z-50 pointer-events-none">
      <AnimatePresence>
        {notifications.map(n => (
          <Notification
            removeNotif={removeNotif}
            {...n}
            key={n.id}
            menssageOptions={successMessageOptions}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export { SuccessMessage };
