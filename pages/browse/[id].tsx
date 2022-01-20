import styles from "../../styles/ManageProfile.module.css";
import Image from "next/image";
import Link from "next/link";
const manageProfiles = () => {
	return (
		<div className={styles.container}>
			<div className={styles.navbar}>
				<Image src="/img/logo.png" alt="logo" width={120} height={80} />
			</div>
			<div className={styles.containerChild}>
				<div className={styles.headingBox}>
					<h4 className={styles.heading}>Edit Profile</h4>
				</div>
				<div className={styles.bodyBox}>
					<div className={styles.imageBox}>
						<Image src="/img/logo.png" alt="avatar" layout="fill" />
					</div>
					<div className={styles.detailsBox}>
						<input
							type="text"
							name="username"
							id="username"
							className={styles.input}
						/>
						<div className={styles.selectBox}>
							<p className={styles.label}>Language</p>
							<select
								name="language"
								id="language"
								className={styles.select}
							></select>
						</div>
						<div className={styles.selectBox}>
							<p className={styles.label}>Maturity Settings: </p>
							<div className={styles.value}>Maturity</div>
							<p>Show title of all mature ratings for this profile.</p>
							<button className={styles.button}>Edit</button>
						</div>
						<div className={styles.selectBox} style={{ borderBottom: "none" }}>
							<p className={styles.label}>Autoplay controls </p>
							<div className={styles.checkbox}>
								<input className={styles.check} type="checkbox" name="" id="" />
								<p>Autoplay next episode in a series on all devices</p>
							</div>
							<div className={styles.checkbox}>
								<input className={styles.check} type="checkbox" name="" id="" />
								<p>Autoplay previews while browsing on all devices</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.buttonBox}>
					<button className={styles.save}>Save</button>
					<button className={styles.cancel}>Cancel</button>
					<button className={styles.delete}>Delete Profile</button>
				</div>
			</div>
		</div>
	);
};

export default manageProfiles;
