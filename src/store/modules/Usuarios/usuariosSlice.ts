// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { AxiosError } from 'axios';

// import servicoAPI from '../../../configs/services/api';
// import { RespostaCadastro } from '../../types/RetornoRequest';
// import { Usuario } from '../../types/Usuario';

// export type UsuarioLogado = {
// 	id: string;
// 	nome: string;
// 	email: string;
// 	isLogged: boolean;
// };

// const initialState = {
// 	usuario: {
// 		id: '',
// 		nome: '',
// 		email: '',
// 		senha: '',
// 		isLogged: false,
// 	},
// 	loading: false,
// };

// export const cadastrarUsuario = createAsyncThunk(
// 	'usuarios/cadastro',
// 	async (novoUsuario: Usuario, { dispatch }) => {
// 		try {
// 			const resposta = await servicoAPI.post('/usuarios', novoUsuario);

// 			const respostaAPI = resposta.data as RespostaCadastro;

// 			dispatch(
// 				showNotification({
// 					message: respostaAPI.mensagem,
// 					success: respostaAPI.sucesso,
// 				}),
// 			);

// 			return respostaAPI;
// 		} catch (error) {
// 			if (error instanceof AxiosError) {
// 				const response = error.response?.data as RespostaCadastro;

// 				dispatch(
// 					showNotification({
// 						message: response.mensagem,
// 						success: response.sucesso,
// 					}),
// 				);

// 				return response;
// 			}

// 			return {
// 				sucesso: false,
// 				mensagem: 'Erro inesperado.',
// 			};
// 		}
// 	},
// );

// export const loginUsuario = createAsyncThunk(
// 	'usuarios/login',
// 	async (login: Usuario, { dispatch }) => {
// 		try {
// 			const resposta = await servicoAPI.post('/login', login);

// 			const respostaAPI = resposta.data as RespostaLogin;

// 			dispatch(
// 				showNotification({
// 					success: respostaAPI.sucesso,
// 					message: respostaAPI.mensagem,
// 				}),
// 			);
// 			return respostaAPI;
// 		} catch (error) {
// 			if (error instanceof AxiosError) {
// 				const response = error.response?.data as RespostaLogin;

// 				dispatch(
// 					showNotification({
// 						message: response.mensagem,
// 						success: response.sucesso,
// 					}),
// 				);

// 				return response;
// 			}

// 			return {
// 				sucesso: false,
// 				mensagem: 'Erro inesperado.',
// 			};
// 		}
// 	},
// );

// export const usuarioSlice = createSlice({
// 	name: 'usuario',
// 	initialState: initialState,
// 	reducers: {
// 		setUsuario: (estadoAtual, action) => {
// 			return {
// 				...estadoAtual,
// 				usuario: {
// 					id: action.payload.id,
// 					nome: action.payload.nome,
// 					email: action.payload.email,
// 					senha: action.payload.senha,
// 					isLogged: true,
// 				},
// 			};
// 		},

// 		logoutUsuario: () => {
// 			return initialState;
// 		},
// 	},

// 	extraReducers: (builder) => {
// 		builder.addCase(cadastrarUsuario.pending, (estadoAtual) => {
// 			return {
// 				...estadoAtual,
// 				loading: true,
// 			};
// 		});

// 		builder.addCase(cadastrarUsuario.fulfilled, (estadoAtual, action) => {
// 			const payload = action.payload as RespostaCadastro;

// 			if (payload.sucesso && payload.dadoCadastrado) {
// 				return {
// 					usuario: {
// 						id: payload.dadoCadastrado?.id,
// 						nome: payload.dadoCadastrado.nome,
// 						email: payload.dadoCadastrado?.email,
// 						senha: payload.dadoCadastrado.senha,
// 						isLogged: false,
// 					},
// 					loading: false,
// 				};
// 			}

// 			if (!payload.sucesso) {
// 				return {
// 					...estadoAtual,
// 					loading: false,
// 				};
// 			}
// 		});

// 		builder.addCase(cadastrarUsuario.rejected, (estadoAtual) => {
// 			return {
// 				...estadoAtual,
// 				loading: false,
// 			};
// 		});

// 		//LOGIN
// 		builder.addCase(loginUsuario.pending, (estadoAtual) => {
// 			return {
// 				...estadoAtual,
// 				loading: true,
// 			};
// 		});

// 		builder.addCase(loginUsuario.fulfilled, (estadoAtual, action) => {
// 			const payload = action.payload as RespostaLogin;

// 			if (payload.sucesso && payload.dados) {
// 				localStorage.setItem(
// 					'userLogged',
// 					JSON.stringify(payload.dados),
// 				);

// 				return {
// 					usuario: {
// 						id: payload.dados.id,
// 						nome: payload.dados.nome,
// 						email: payload.dados.email,
// 						senha: '',
// 						isLogged: true,
// 					},
// 					loading: false,
// 				};
// 			}

// 			if (!payload.sucesso) {
// 				return initialState;
// 			}
// 		});

// 		builder.addCase(loginUsuario.rejected, () => {
// 			return initialState;
// 		});
// 	},
// });

// export const { setUsuario, logoutUsuario } = usuarioSlice.actions;

// export default usuarioSlice.reducer;
