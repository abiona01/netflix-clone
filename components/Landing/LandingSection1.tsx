import styles from "../../styles/LandingSection1.module.css";
import Image from "next/image";

type SectionProps = {
	heading: string;
	text: string;
};
const LandingSection1 = (props: SectionProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<h2 className={styles.heading}>{props.heading}</h2>
				<p className={styles.text}>{props.text}</p>
			</div>
			<div className={styles.right}></div>
		</div>
	);
};

export default LandingSection1;
