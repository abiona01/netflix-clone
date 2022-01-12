import styles from "../styles/Browse.module.css";
import Image from "next/image";
const browse = () => {
	return (
		<div className={styles.container}>
			<div className={styles.navbar}>
				<Image src="/img/logo.png" alt="logo" width={120} height={80} />
			</div>
			<div className={styles.content}>
				<h4 className={styles.heading}>Who&apos;s watching?</h4>
				<div className={styles.browse}>
					<div className={styles.profile}>
						<Image src="/img/logo.png" alt="" width={250} height={200} />
						<p>Shayan</p>
					</div>
					<div className={styles.profile}>
						<Image src="/img/logo.png" alt="" width={250} height={200} />
						<p>Shayan</p>
					</div>
					<div className={styles.profile}>
						<Image src="/img/logo.png" alt="" width={250} height={200} />
						<p>Shayan</p>
					</div>
					<div className={styles.profile}>
						<Image src="/img/logo.png" alt="" width={250} height={200} />
						<p>Shayan</p>
					</div>
					<div className={styles.profile}>
						<Image src="/img/logo.png" alt="" width={250} height={200} />
						<p>Shayan</p>
					</div>
				</div>
				<button className={styles.button}>Manage Profiles</button>
			</div>
		</div>
	);
};

export default browse;
