"use client";
import React, { useEffect, useState } from "react";
import styles from "./door.module.css"; // Create this CSS file

interface SlidingDoorProps {
  onComplete: () => void; // Callback function to call when the animation is done
}

const SlidingDoor: React.FC<SlidingDoorProps> = ({ onComplete }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClosing(true);
    }, 100); // Delay before starting the closing animation

    const completeTimer = setTimeout(() => {
      onComplete(); // Call the completion handler after the animation
    }, 800); // Duration of the closing animation

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={styles.doorContainer}>
      <div className={`${styles.door} ${isClosing ? styles.closing : ""} ${styles.leftDoor}`} />
      <div className={`${styles.door} ${isClosing ? styles.closing : ""} ${styles.rightDoor}`} />
    </div>
  );
};

export default SlidingDoor;
