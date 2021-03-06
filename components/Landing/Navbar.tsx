import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
const Navbar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<Image src="/img/logo.png" alt="logo" width="150px" height="100px" />
			</div>
			<div className={styles.item}>
				<button className={styles.signInButton}>
					<Link href="/login">Sign In</Link>
				</button>
			</div>
		</div>
	);
};

export default Navbar;
