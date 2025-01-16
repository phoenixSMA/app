import styles from "./page.module.css";
import Header from '@/app/components/header/header';
import SelectCompetition from '@/app/components/select-country/select-competition';

export default function Home() {
	return (
		<div className={styles.page}>
            <Header></Header>
			<SelectCompetition></SelectCompetition>
		</div>
	);
}
