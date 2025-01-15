import Link from 'next/link';
import styles from "./header.module.css";

export default function Header() {
	return (
		<div>
			<Link className={styles.header} href="/public">Home</Link>
		</div>
	);
}
