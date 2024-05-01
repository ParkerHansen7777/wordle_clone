import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      
	  <div className={styles.header}>
		<h1>Wordle</h1>
	  </div>
	  
	  <div className={styles.grid_container}>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
		<div className={styles.grid_item}></div>
	  </div>
	  
	  <div className={styles.keyboard}>
		<div className={styles.key_row}>
			<button>Q</button>
			<button>W</button>
			<button>E</button>
			<button>R</button>
			<button>T</button>
			<button>Y</button>
			<button>U</button>
			<button>I</button>
			<button>O</button>
			<button>P</button>
		</div>
		<div className={styles.key_row}>	
			<button>A</button>
			<button>S</button>
			<button>D</button>
			<button>F</button>
			<button>G</button>
			<button>H</button>
			<button>J</button>
			<button>K</button>
			<button>L</button>
		</div>
		<div className={styles.key_row}>
			<button>Enter</button>
			<button>Z</button>
			<button>X</button>
			<button>C</button>
			<button>V</button>
			<button>B</button>
			<button>N</button>
			<button>M</button>
			<button>&lt;--</button>
		</div>
      </div>

    </main>
  );
}
