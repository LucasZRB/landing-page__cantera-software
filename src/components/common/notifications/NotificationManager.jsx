import React, { useEffect } from 'react';
import { Alert } from 'flowbite-react';
import { motion } from 'framer-motion';
import { FiCheckSquare, FiAlertTriangle } from 'react-icons/fi';

const NOTIFICATION_TTL = 5000;

const menssageTypes = {
  success: {
    color: 'success',
    icon: FiCheckSquare,
    type: 'Hecho!'
  },
  warning: {
    color: 'warning',
    icon: FiAlertTriangle,
    type: 'Advertencia!'
  },
  error: {
    color: 'failure',
    icon: FiAlertTriangle,
    type: 'Error!'
  }
};

const NotificationManager = ({ type, id, text, removeNotif }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, []);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="pointer-events-auto">
      <Alert
        color={menssageTypes[type].color}
        icon={menssageTypes[type].icon}
        onDismiss={() => removeNotif(id)}>
        <span className="font-semibold" aria-hidden>
          {menssageTypes[type].type}
        </span>{' '}
        {text}
      </Alert>
    </motion.div>
  );
};

export { NotificationManager };
