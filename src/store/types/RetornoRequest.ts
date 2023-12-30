import { UsuarioState } from './UsuarioState';

export type RespostaCadastro = {
	sucesso: boolean;
	mensagem: string;
	dadoCadastrado?: UsuarioState & { id: string };
};
