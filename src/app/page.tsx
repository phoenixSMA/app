import Header from '@/app/components/header/header';
import MainSelect from '@/app/components/mainSelect/mainSelect';
import { selectCompetitionProps } from '@/app/constants/select-competition-props';

export default function Home() {

	return (
		<div>
            <Header></Header>
			<MainSelect items={selectCompetitionProps.items}></MainSelect>
		</div>
	);
}
