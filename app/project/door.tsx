"use client";
import React, { useEffect, useState } from "react";
import styles from "../door.module.css";

interface SlidingDoorProps {
  onComplete: () => void;
}

const SlidingDoor: React.FC<SlidingDoorProps> = ({ onComplete }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClosing(true);
    }, 100); // Delay before starting the closing animation

    const completeTimer = setTimeout(() => {
      onComplete(); // Call the completion handler after the animation
    }, 1000); // Duration of the closing animation

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={styles.doorContainer}>
      <div className={`${styles.door} ${isClosing ? styles.opening : ""} ${styles.leftDoorOpen}`} />
      <div className={`${styles.door} ${isClosing ? styles.opening : ""} ${styles.rightDoorOpen}`} />
    </div>
  );
};

export default SlidingDoor;
