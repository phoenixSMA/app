import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import styles from './select-competition.module.css'

export default function SelectCompetition() {
	return (
		<Box
			sx={{ padding: '1rem' }}
		>
			<FormControl fullWidth>
				<InputLabel id="competition-select-label" className={styles.selectLabel}>Competition</InputLabel>
				<Select
					labelId="competition-select-label"
					id="competition-select"
					className={styles.select}
					value={'E0'}
				>
					<MenuItem value="E0" className={styles.selectItem}>England Premier League</MenuItem>
					<MenuItem value="D1" className={styles.selectItem}>Germany Bundesliga</MenuItem>
					<MenuItem value="ES1" className={styles.selectItem}>Spain LaLiga</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
