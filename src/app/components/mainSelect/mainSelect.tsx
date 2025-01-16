import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import styles from './mainSelect.module.css'

export interface SelectItem {
	name: string;
	value: string;
}

export interface SelectProps {
	items: SelectItem[];
}

export default function MainSelect(props: SelectProps) {
	const { items = [] } = props;

	const menuItems = items.map(
		(item, idx) => (<MenuItem key={idx.toString()} value={item.value}>{item.name}</MenuItem>));

	return (
		<div
			className={`${styles.selectContainer}`}
		>
			<FormControl fullWidth>
				<InputLabel
					id="competition-select-label"
					className={styles.selectLabel}
				>Competition
				</InputLabel>
				<Select
					labelId="competition-select-label"
					id="competition-select"
					className={styles.select}
				>
					{menuItems}
					{/*<MenuItem id="E0" value="E0">England Premier League</MenuItem>*/}
					{/*<MenuItem id="D1" value="D1">Germany Bundesliga</MenuItem>*/}
					{/*<MenuItem id="ES1" value="ES1">Spain LaLiga</MenuItem>*/}
				</Select>
			</FormControl>
		</div>
	);
}
