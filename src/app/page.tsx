'use client'
import Header from '@/app/components/header/header';
import MainSelect from '@/app/components/mainSelect/mainSelect';
import { selectCompetitionProps } from '@/app/constants/select-competition-props';
import { ChangeEvent } from 'react';

export default function Home() {

	const onCompetitionChange = (event: ChangeEvent<HTMLSelectElement>) => {
		console.log(event.target.value);
	}

	return (
		<div>
            <Header></Header>
			<MainSelect
				items={selectCompetitionProps.items!}
				label="Select competition"
				onChange={onCompetitionChange}
			></MainSelect>
		</div>
	);
}
