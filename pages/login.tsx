import styles from "../styles/SignIn.module.css";
import Image from "next/image";

const login = () => {
	return (
		<div className={styles.container}>
			<div className={styles.navbar}>
				<Image src="/img/logo.png" alt="logo" width={120} height={80} />
			</div>
			<div className={styles.signin}>
				<h4 className={styles.heading}>Sign In</h4>
				<input className={styles.signinCred} type="email" name="" id="" />
				<input className={styles.signinCred} type="password" name="" id="" />
				<button type="submit" className={styles.button}>
					Sign In
				</button>
				<div className={styles.loginText}>
					<div className={styles.check}>
						<input type="checkbox" name="remember" id="remember" />
						<p>Remember me</p>
					</div>
					<p>Need help?</p>
				</div>
				<div className={styles.socials}>
					<Image
						src="/img/facebook.png"
						alt="facebook logo"
						width={15}
						height={15}
					/>
					<p className={styles.facebook}>Login with facebook</p>
				</div>
				<div className={styles.siginInfo}>
					<p className={styles.infoText}>New to netflix?</p>
					<h4>Sign up now</h4>
				</div>
				<div className={styles.siginInfo2}>
					<p>
						This page is protected by Google reCAPTCHA to ensure you&apos;re not
						a bot.{" "}
					</p>
					<a href="" className={styles.more}>
						Learn more.
					</a>
				</div>
			</div>
			<div className={styles.footer}>
				<p className={styles.footerHead}>Questions? Contact Us</p>
				<div className={styles.contact}>
					<div className={styles.item}>
						<p>FAQ</p>
						<p>Cookie Preferences</p>
					</div>
					<div className={styles.item}>
						<p>Help Center</p>
						<p>Corporate Information</p>
					</div>
					<div className={styles.item}>
						<p>Terms of use</p>
					</div>
					<div className={styles.item}>
						<p>Privacy</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default login;
