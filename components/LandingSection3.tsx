import styles from "../styles/LandingSection3.module.css";

export const LandingSection3 = () => {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<h2 className={styles.heading}>Watch everywhere.</h2>
				<p className={styles.text}>
					Stream unlimited movies and TV shows on your phone, tablet, laptop,
					and TV.
				</p>
			</div>
			<div className={styles.right}></div>
		</div>
	);
};
