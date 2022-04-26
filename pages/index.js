import Link from "next/link"
import styles from "../styles/Home.module.css"

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeBox}>
        <h1>Welcome to the Multiverse of Next!</h1>
        <p>Explore everything about your favorite heroes and, why not, villains?</p>
        <Link href="/characters">
          <a>Click to discover</a>
        </Link>
      </div>
    </div>
  )
}

export default Home