import Link from "next/link";
import styles from "../styles/Home.module.css";

const projects = () => {
	return (
		<div className={styles.pagesContainer}>
			<div className="container-fluid text-center">
				<div className="container-fluid">
					<h1 className="display-1">Projects</h1>
				</div>
				<p>
					This is projects Page
					<br />
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
					numquam.
					<br />
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
					numquam.
					<br />
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
					numquam.
					<br />
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
					numquam.
				</p>
				<Link href="/">
					<button className="btn btn-dark">Back to Homepage</button>
				</Link>
			</div>
		</div>
	);
};

export default projects;
