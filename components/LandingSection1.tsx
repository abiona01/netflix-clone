import styles from "../styles/LandingSection1.module.css";
import Image from "next/image";
const LandingSection1 = () => {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<h2 className={styles.heading}>Enjoy your TV</h2>
				<p className={styles.text}>
					Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
					players, and more.
				</p>
			</div>
			<div className={styles.right}></div>
		</div>
	);
};

export default LandingSection1;
