'use client'
import styles from './mainSelect.module.css'
import { ChangeEvent } from 'react';

export interface SelectItem {
	label: string;
	value: string;
}

export interface SelectProps {
	label?: string;
	items: SelectItem[];
	onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export default function MainSelect(props: SelectProps) {
	const { label, items = [], onChange } = props;

	let labelElement;
	if (label !== undefined) {
		labelElement = (<div style={{ display: 'inline-block' }} className={styles.selectLabel}>{label}</div>);
	}


	const options = items.map(item => (
		<option key={item.value} value={item.value}>{item.label}</option>
	))

	return (
		<div
			className={styles.selectContainer}
		>
			{ labelElement !== undefined ? labelElement : null }
			<select
				className={styles.select}
				onChange={onChange}
			>
				{options}
			</select>
		</div>
	);
}
