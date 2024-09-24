import React, { useEffect, useRef, useState } from "react";
import eyeBackground from "../../assets/Eye-Background.jpg";

const Eyes = () => {
  const [rotateLeft, setRotateLeft] = useState(0);
  const [rotateRight, setRotateRight] = useState(0);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const updateRotation = (eyeRef, setRotation) => {
        if (!eyeRef.current) return;
        const rect = eyeRef.current.getBoundingClientRect();

        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;
        const deltaX = e.clientX - eyeCenterX;
        const deltaY = e.clientY - eyeCenterY;

        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setRotation(angle - 180);
      };
      updateRotation(leftEyeRef, setRotateLeft);
      updateRotation(rightEyeRef, setRotateRight);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-screen">
      <div
        className="w-full h-full bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${eyeBackground})` }}
      >
        <div className="absolute flex gap-12">
          <div className="w-[14.5vw] h-[14.5vw] rounded-full bg-zinc-100 flex justify-center items-center">
            <div className="relative w-[8.5vw] h-[8.5vw] rounded-full bg-zinc-800 text-white font-[Neue_Montreal] flex justify-center items-center">
              PLAY
              <div
                ref={leftEyeRef}
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotateLeft}deg)`,
                }}
                className="line absolute w-full bg-transparent top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] transition-all duration-0"
              >
                <div className="w-[1.2vw] h-[1.2vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>

          <div className="w-[14.5vw] h-[14.5vw] rounded-full bg-zinc-100 flex justify-center items-center">
            <div className="relative w-[8.5vw] h-[8.5vw] rounded-full bg-zinc-800 text-white font-[Neue_Montreal] flex justify-center items-center">
              PLAY
              <div
                ref={rightEyeRef}
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotateRight}deg)`,
                }}
                className="line absolute w-full bg-transparent top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-[1.2vw] h-[1.2vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
