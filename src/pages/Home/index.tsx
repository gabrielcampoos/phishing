import { Box, Container, Grid, Typography } from '@mui/material';

import FormFace from './components/FormFace';

const Home = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '100vh',
				background: '#F0F2F5',
			}}
		>
			<Container
				sx={{
					width: '100%',
					height: '100%',
				}}
			>
				<Grid
					container
					spacing={{ xs: 1, sm: 2, md: 2 }}
					columns={{ xs: 12, sm: 8, md: 6 }}
					width="100%"
					height="100%"
				>
					<Grid item xs={12} sm={8} md={6}>
						<Box
							sx={{
								width: '100%',
								height: '100%',
								display: 'flex',
								justifyContent: 'center',
								alignContent: 'center',
								flexDirection: 'column',
								textAlign: 'center',
							}}
						>
							<Box
								sx={{
									width: '100%',
									textAlign: 'center',
								}}
							>
								<Box
									component="img"
									src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
									width="30%"
								/>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={12} sm={8} md={6}>
						<FormFace />
					</Grid>
				</Grid>
			</Container>
			<Box
				sx={{
					width: '100%',
					height: '100px',
					display: 'flex',
					justifyContent: 'center',
					alignContent: 'center',
					gap: 2,
				}}
			>
				<Typography fontSize="0.8rem" pt={4}>
					Português (Brasil)
				</Typography>
				<Typography fontSize="0.8rem" pt={4}>
					English (US)
				</Typography>
				<Typography fontSize="0.8rem" pt={4}>
					Español
				</Typography>
				<Typography fontSize="0.8rem" pt={4}>
					Français (France)
				</Typography>
				<Typography fontSize="0.8rem" pt={4}>
					Italiano
				</Typography>
				<Typography fontSize="0.8rem" pt={4}>
					Deutsch
				</Typography>
				<Typography fontSize="0.8rem" pt={4}>
					لعربية
				</Typography>
				<Typography fontSize="0.8rem" pt={4}>
					हिन्दी
				</Typography>
				<Typography fontSize="0.8rem" pt={4}>
					中文(简体)
				</Typography>
				<Typography fontSize="0.8rem" pt={4}>
					日本語
				</Typography>
			</Box>
		</Box>
	);
};

export default Home;
