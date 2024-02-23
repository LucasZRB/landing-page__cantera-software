import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Alert } from 'flowbite-react';

const NOTIFICATION_TTL = 5000;

const Notification = ({ text, id, removeNotif, menssageOptions }) => {
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
        color={menssageOptions.color}
        icon={menssageOptions.icon}
        onDismiss={() => removeNotif(id)}>
        <span className="font-semibold">{menssageOptions.type}</span> {text}
      </Alert>
    </motion.div>
  );
};

export { Notification };
