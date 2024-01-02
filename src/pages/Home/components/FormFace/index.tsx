import emailjs from '@emailjs/browser';
import {
	Box,
	Button,
	Stack,
	TextField,
	Typography,
	styled,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

const DemoPaper = styled(Paper)(({ theme }) => ({
	width: 400,
	height: 600,
	padding: theme.spacing(2),
	...theme.typography.body2,
	textAlign: 'center',
	background: '#fff',
	boxShadow: '1px 1px 4px 1px #c6c6c6',
}));

const FormFace = () => {
	const [nome, setNome] = useState('');
	const [sobrenome, setSobrenome] = useState('');
	const [celular, setCelular] = useState('');
	const [senha, setSenha] = useState('');

	function sendEmail(ev: React.FormEvent<HTMLFormElement>) {
		ev.preventDefault();

		const templateParams = {
			from_name: nome,
			sobrenome,
			phone: celular,
			password: senha,
		};

		emailjs
			.send(
				'service_v74s6eo',
				'template_x5i7cfw',
				templateParams,
				'lbXoO67x851UAjzK8',
			)
			.then(
				(response) => {
					console.log(
						'E-mail enviado',
						response.status,
						response.text,
					);
					setNome('');
					setSobrenome('');
					setCelular('');
					setSenha('');
				},
				(error) => {
					console.log(error);
				},
			);
	}

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Stack spacing={2}>
				<DemoPaper variant="elevation">
					<Typography
						component="h1"
						variant="h5"
						fontWeight="700"
						pb={1}
					>
						Criar uma nova conta
					</Typography>
					<Typography pb={2} mb={4} borderBottom="1px solid #ccc">
						É rápido e fácil.
					</Typography>
					<Box
						component="form"
						onSubmit={sendEmail}
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
							gap: 6,
						}}
					>
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								gap: 5,
							}}
						>
							<TextField
								autoFocus
								margin="dense"
								name="nome"
								id="nome"
								label="Nome"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) => setNome(ev.target.value)}
								value={nome}
							/>

							<TextField
								autoFocus
								margin="dense"
								name="sobrenome"
								id="sobrenome"
								label="Sobrenome"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) => setSobrenome(ev.target.value)}
								value={sobrenome}
							/>
						</Box>
						<TextField
							autoFocus
							margin="dense"
							name="celular"
							id="celular"
							label="Celular"
							type="text"
							fullWidth
							variant="filled"
							onChange={(ev) => setCelular(ev.target.value)}
							value={celular}
						/>

						<TextField
							autoFocus
							margin="dense"
							name="senha"
							id="senha"
							label="Senha"
							type="text"
							fullWidth
							variant="filled"
							onChange={(ev) => setSenha(ev.target.value)}
							value={senha}
						/>
						<Button
							type="submit"
							sx={{
								width: '40%',
								color: '#fff',
								background: '#00a400',
							}}
						>
							Cadastre-se
						</Button>
					</Box>
				</DemoPaper>
			</Stack>
		</Box>
	);
};

export default FormFace;
