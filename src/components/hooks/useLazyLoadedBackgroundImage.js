import { useEffect, useState } from 'react';

function LazyLoadedBackgroundImage(style) {
  const [loaded, setLoaded] = useState(false);
  const { backgroundImage } = style;

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLoaded(true);
    };
    img.src = backgroundImage.split("'")[1];
  }, []);

  const backgroundImageStyle = {
    ...style,
    backgroundImage: loaded ? backgroundImage : 'none'
  };

  return backgroundImageStyle;
}

export default LazyLoadedBackgroundImage;
