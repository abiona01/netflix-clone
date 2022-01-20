import styles from "../styles/Home.module.css";
import Image from "next/image";

const home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.navbar}>
				<div className={styles.imageBox}>
					<Image src="/logo.png" alt="logo" layout="fill" />
				</div>
				<div className={styles.menu}></div>
			</div>
		</div>
	);
};

export default home;
