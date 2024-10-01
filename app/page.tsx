import styles from "./home.module.css";
import RedBlackBlocks from "./button";

export default function Home() {

  return (
    <div className={styles.backgroundGif}>
      <RedBlackBlocks />
    </div>
  );
}
