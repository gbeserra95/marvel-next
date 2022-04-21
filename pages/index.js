import styles from "../styles/Home.module.css"

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeBox}>
        <h1>Welcome to the Multiverse of Next!</h1>
        <p>Explore everything about your favorite characters!</p>
        <button>Click here to discover!</button>
      </div>
    </div>
  )
}

export default Home