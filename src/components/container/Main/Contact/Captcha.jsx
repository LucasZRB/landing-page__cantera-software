import React from 'react';
import ReCaptcha from '@matt-block/react-recaptcha-v2';
import { useGetWidthSize } from '../../../hooks/useGetWidthSize';

const Captcha = ({ KEY_CAPTCHA, setValidCaptcha, isNotAvailable, setNotifications }) => {
  const isCompact = useGetWidthSize(460);

  return (
    <>
      {KEY_CAPTCHA && !isNotAvailable ? (
        <ReCaptcha
          siteKey={KEY_CAPTCHA}
          theme="light"
          size={isCompact ? 'compact' : 'normal'}
          onSuccess={() => {
            console.log(`Successful`);
            setValidCaptcha(true);
          }}
          onError={() => {
            setNotifications(pv => [
              {
                type: 'error',
                id: Math.random(),
                text: 'Algo salió mal, revisa tu conexión.'
              },
              ...pv
            ]);
            setValidCaptcha(false);
          }}
          onExpire={() => {
            setNotifications(pv => [
              {
                type: 'warning',
                id: Math.random(),
                text: 'La verificación ha caducado, vuelve a verificarte.'
              },
              ...pv
            ]);
            setValidCaptcha(false);
          }}
        />
      ) : (
        <>
          {console.error('Captcha Error:\n\t\tMissing required parameters')}
        </>
      )}
    </>
  );
};

export { Captcha };
