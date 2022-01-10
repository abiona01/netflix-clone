import { useState } from "react";
import styles from "../../styles/LandingAccordion.module.css";
import Collapsible from "react-collapsible";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

type TriggerProps = {
	text: string;
};

const LandingAccordion = () => {
	const [isOpen, setIsOpen] = useState(false);
	const Trigger = (props: TriggerProps) => {
		return (
			<div className={styles.trigger}>
				<p>{props.text}</p>
				{isOpen ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
			</div>
		);
	};
	return (
		<div className={styles.container}>
			<div className={styles.containerChild}>
				<h2 className={styles.heading}>FREQUENTLY ASKED QUESTIONS</h2>
				<div className={styles.Collapsible}>
					<Collapsible
						trigger={<Trigger text="What is Netflix" />}
						onOpen={() => {
							setIsOpen(true);
							console.log("bleh");
						}}
					>
						<div className={styles.collapsibleChild}>
							<p className={styles.text}>
								Netflix is a streaming service that offers a wide variety of
								award-winning TV shows, movies, anime, documentaries, and more
								on thousands of internet-connected devices.
							</p>
							<p className={styles.text}>
								You can watch as much as you want, whenever you want without a
								single commercial – all for one low monthly price. There&apos;s
								always something new to discover and new TV shows and movies are
								added every week!
							</p>
						</div>
					</Collapsible>
				</div>
				<div className={styles.Collapsible}>
					<Collapsible trigger={<Trigger text="How much does Netflix cost?" />}>
						<p className={styles.text}>
							Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
							streaming device, all for one fixed monthly fee. Plans range from
							₦1,200 to ₦4,400 a month. No extra costs, no contracts.
						</p>
					</Collapsible>
				</div>

				<div className={styles.Collapsible}>
					<Collapsible trigger={<Trigger text="Where can i watch?" />}>
						<p className={styles.text}>
							Watch anywhere, anytime. Sign in with your Netflix account to
							watch instantly on the web at netflix.com from your personal
							computer or on any internet-connected device that offers the
							Netflix app, including smart TVs, smartphones, tablets, streaming
							media players and game consoles.
						</p>
						<p className={styles.text}>
							You can also download your favorite shows with the iOS, Android,
							or Windows 10 app. Use downloads to watch while you&apos;re on the
							go and without an internet connection. Take Netflix with you
							anywhere.
						</p>
					</Collapsible>
				</div>

				<div className={styles.Collapsible}>
					<Collapsible trigger={<Trigger text="How do i cancel?" />}>
						<p className={styles.text}>
							Netflix is flexible. There are no pesky contracts and no
							commitments. You can easily cancel your account online in two
							clicks. There are no cancellation fees – start or stop your
							account anytime.
						</p>
					</Collapsible>
				</div>

				<div className={styles.Collapsible}>
					<Collapsible trigger={<Trigger text="What can I watch on Netflix" />}>
						<p className={styles.text}>
							Netflix has an extensive library of feature films, documentaries,
							TV shows, anime, award-winning Netflix originals, and more. Watch
							as much as you want, anytime you want.
						</p>
					</Collapsible>
				</div>

				<div className={styles.Collapsible}>
					<Collapsible trigger={<Trigger text="Is Netflix good for kids?" />}>
						<p className={styles.text}>
							The Netflix Kids experience is included in your membership to give
							parents control while kids enjoy family-friendly TV shows and
							movies in their own space.
						</p>
						<p className={styles.text}>
							Kids profiles come with PIN-protected parental controls that let
							you restrict the maturity rating of content kids can watch and
							block specific titles you don’t want kids to see.
						</p>
					</Collapsible>
				</div>
			</div>
			<div className={styles.content}>
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

export default LandingAccordion;
