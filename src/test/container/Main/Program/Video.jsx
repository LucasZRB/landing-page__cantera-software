import React, { useRef } from 'react';
import { TitleBar } from './TitleBar';
import { useVideoController } from '../../../hooks/useVideoController';
import './Video.css';

const Video = () => {
  const videoRef = useRef(null);
  useVideoController(videoRef);

  return (
    <div className="video-container__grid">
      <div className="video-container">
        <TitleBar />
        <video
          className="video"
          ref={videoRef}
          autoPlay
          muted
          loop
          loading="lazy">
          <source src="./video/canteraVideo.mp4" type="video/mp4" />
          <track
            label="Español"
            kind="descriptions"
            srcLang="es"
            src="short_video_description.vtt"
          />
          <track
            label="Español"
            kind="captions"
            srcLang="es"
            src="short_video_description.vtt"
          />
        </video>
      </div>
    </div>
  );
};

export { Video };
