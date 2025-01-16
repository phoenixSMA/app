import Header from '@/app/components/header/header';
import MainSelect from '@/app/components/mainSelect/mainSelect';
import { selectCompetitionProps } from '@/app/constants/select-competition-props';

import styles from "./page.module.css";

export default function Home() {

	return (
		<div className={styles.page}>
            <Header></Header>
			<MainSelect items={selectCompetitionProps.items}></MainSelect>
		</div>
	);
}
