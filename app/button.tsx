"use client";
import React, { useState } from "react";
import styles from "./button.module.css";
import SlidingDoor from "./door";
import { useRouter } from 'next/navigation';

const RedBlackBlocks = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  const handleButtonClick = (route: string) => {
    setIsAnimating(true);
    // Ensure the animation is finished before navigating
    setTimeout(() => {
      if(router)
      router.push(route); // Navigate after the animation completes
    }, 700); // Match this duration with the closing animation duration
  };

  const handleDoorComplete = () => {
      setIsAnimating(false); // Reset the animation state
  };

  return (
    <div className="relative flex items-center justify-center">
      {isAnimating && <SlidingDoor onComplete={handleDoorComplete} />}

      <div className={`bg-red-600 w-64 h-64 ${styles.block}`}>
        {/* later put picture */}
      </div>

      {/* Top Left Block */}
      <div
        className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 rotate-45"
        style={{ top: "-200px", left: "-200px" }}
      >
        <div className="relative">
          <div className="bg-black w-80 h-16 absolute top-2 right-2">
            <div
              className={`${styles["arrow-shadow"]} absolute -bottom-5 -right-8 transform rotate-60`}
            ></div>
          </div>
          <div className={`bg-red-600 w-80 h-16 relative ${styles.block}`} onClick={() => handleButtonClick("https://www.youtube.com/")}>
            Youtube
            
            <div
              className={`${styles["arrow"]} absolute -bottom-5 -right-6 transform rotate-60`}
            ></div>
          </div>
        </div>
      </div>

      {/* Center Left Block */}
      <div
        className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ left: "-230px" }}
      >
        <div className="relative">
          <div className="bg-black w-80 h-16 absolute top-2 right-2">
            <div
              className={`${styles["arrow-shadow"]} absolute -bottom-5 -right-8`}
            ></div>
          </div>
          <div className={`bg-red-600 w-80 h-16 relative ${styles.block}`} onClick={() => handleButtonClick("")}>
            ???
            <div
              className={`${styles["arrow"]} absolute -bottom-5 -right-6`}
            ></div>
          </div>
        </div>
      </div>

      {/* Bottom Left Block */}
      <div
        className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 -rotate-45"
        style={{ bottom: "-200px", left: "-200px" }}
      >
        <div className="relative">
          <div className="bg-black w-80 h-16 absolute top-2 right-2">
            <div
              className={`${styles["arrow-shadow"]} absolute -bottom-5 -right-8 transform -rotate-60`}
            ></div>
          </div>
          <div className={`bg-red-600 w-80 h-16 relative ${styles.block}`} onClick={() => handleButtonClick("")}>
            ???
            <div
              className={`${styles["arrow"]} absolute -bottom-5 -right-6 transform -rotate-60`}
            ></div>
          </div>
        </div>
      </div>

      {/* Top Right Block */}
      <div
        className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 -rotate-45"
        style={{ top: "-200px", right: "-200px" }}
      >
        <div className="relative">
          <div className="bg-black w-80 h-16 absolute top-2 left-2">
            <div
              className={`${styles["arrow-shadow"]} absolute -bottom-5 -left-10 transform -rotate-60`}
            ></div>
          </div>
          <div className={`bg-red-600 w-80 h-16 relative ${styles.block}`} onClick={() => handleButtonClick("/project")}>
            Projects
            <div
              className={`${styles["arrow"]} absolute -bottom-5 -left-6 transform -rotate-60`}
            ></div>
          </div>
        </div>
      </div>

      {/* Center Right Block */}
      <div
        className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2"
        style={{ right: "-230px" }}
      >
        <div className="relative">
          <div className="bg-black w-80 h-16 absolute top-2 left-2">
            <div
              className={`${styles["arrow-shadow"]} absolute -bottom-5 -left-10`}
            ></div>
          </div>
          <div className={`bg-red-600 w-80 h-16 relative ${styles.block}`} onClick={() => handleButtonClick("")}>
            ???
            <div
              className={`${styles["arrow"]} absolute -bottom-5 -left-6`}
            ></div>
          </div>
        </div>
      </div>

      {/* Bottom Right Block */}
      <div
        className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 rotate-45"
        style={{ bottom: "-200px", right: "-200px" }}
      >
        <div className="relative">
          <div className="bg-black w-80 h-16 absolute top-2 left-2">
            <div
              className={`${styles["arrow-shadow"]} absolute -bottom-5 -left-10 transform rotate-60`}
            ></div>
          </div>
          <div className={`bg-red-600 w-80 h-16 relative ${styles.block}`} onClick={() => handleButtonClick("")}>
            ???
            <div
              className={`${styles["arrow"]} absolute -bottom-5 -left-6 transform rotate-60`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedBlackBlocks;
