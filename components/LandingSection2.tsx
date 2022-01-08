import styles from "../styles/LandingSection2.module.css";
export const LandingSection2 = () => {
	return (
		<div className={styles.container}>
			<div className={styles.left}></div>
			<div className={styles.right}>
				<h2 className={styles.heading}>
					Download your shows to watch offline.
				</h2>
				<p className={styles.text}>
					Save your favorites easily and always have something to watch.
				</p>
			</div>
		</div>
	);
};
