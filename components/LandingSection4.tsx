import styles from "../styles/LandingSection4.module.css";

export const LandingSection4 = () => {
	return (
		<div className={styles.container}>
			<div className={styles.left}></div>
			<div className={styles.right}>
				<h2 className={styles.heading}>Create profiles for kids.</h2>
				<p className={styles.text}>
					Send kids on adventures with their favorite characters in a space made
					just for them—free with your membership.
				</p>
			</div>
		</div>
	);
};
