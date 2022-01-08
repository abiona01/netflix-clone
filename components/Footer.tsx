import styles from "../styles/Footer.module.css";
export const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.containerChild}>
				<div className={styles.textBox}>
					<p className={styles.text}> Questions? Contact us.</p>
				</div>
				<div className={styles.itemBox}>
					<div className={styles.item}>
						<p className={styles.itemText}>FAQ</p>
						<p className={styles.itemText}>Investor Relations</p>
						<p className={styles.itemText}>Privacy</p>
						<p className={styles.itemText}>Speed Test</p>
					</div>
					<div className={styles.item}>
						<p className={styles.itemText}>Help Center</p>
						<p className={styles.itemText}>Jobs</p>
						<p className={styles.itemText}>Cookie Preferences</p>
						<p className={styles.itemText}>Legal Notices</p>
					</div>
					<div className={styles.item}>
						<p className={styles.itemText}>Account</p>
						<p className={styles.itemText}>Ways to Watch</p>
						<p className={styles.itemText}>Corporate Information</p>
						<p className={styles.itemText}>Only on Netflix</p>
					</div>
					<div className={styles.item}>
						<p>Media Center</p>
						<p>Terms of Use</p>
						<p>Contact Us</p>
					</div>
				</div>
				<div className={styles.textBox}>
					<p className={styles.itemText}> Netflix Nigeria</p>
				</div>
			</div>
		</div>
	);
};
