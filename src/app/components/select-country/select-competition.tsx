import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import styles from './select.module.css'

export default function SelectCompetition() {
	return (
		<Box
			sx={{ padding: '1rem' }}
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
					<MenuItem id="E0" value="E0" className={styles.selectItem}>England Premier League</MenuItem>
					<MenuItem id="D1" value="D1" className={styles.selectItem}>Germany Bundesliga</MenuItem>
					<MenuItem id="ES1" value="ES1" className={styles.selectItem}>Spain LaLiga</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
