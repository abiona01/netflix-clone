import styles from "../../styles/Main.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
const Main = () => {
	return (
		<div className={styles.container}>
			<div className={styles.mainChild}>
				<h2 className={styles.heading}>
					Unlimited Movies, TV shows, and more.
				</h2>
				<p className={styles.subHeading}>Watch anywhere. Cancel anytime</p>
				<p>
					Ready to watch? Enter your email to create or restart your membership.
				</p>
				<div className={styles.inputBox}>
					<input
						type="email"
						name="email"
						id="email"
						className={styles.input}
						placeholder="Email address"
					/>
					<button className={styles.button}>
						Get Started
						<AiOutlineArrowRight className={styles.arrow} />{" "}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Main;
