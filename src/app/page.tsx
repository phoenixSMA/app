import styles from "./page.module.css";
import Header from '@/app/components/header/header';

export default function Home() {
	return (
		<div className={styles.page}>
            <Header></Header>
			<h1>Upcoming Fixtures</h1>
		</div>
	);
}
