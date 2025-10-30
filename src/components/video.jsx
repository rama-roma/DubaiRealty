import React, { useRef, useState } from 'react';
import preview from '../assets/1f00868824090e23d6d453d1eac2912c35acf99b.png';
import videoFile from '../assets/Запись 2025-10-18 153734.mp4'; 

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  return (
    <section className="flex justify-center mb-20 relative">
      <video
        ref={videoRef}
        src={videoFile}
        className="rounded-2xl w-[80%]"
        poster={preview}
        controls={isPlaying} 
        onPause={() => setIsPlaying(false)}
      ></video>

      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     bg-[#FCD54C] text-white rounded-full p-4 hover:scale-110 transition"
        >
          ▶
        </button>
      )}
    </section>
  );
}
