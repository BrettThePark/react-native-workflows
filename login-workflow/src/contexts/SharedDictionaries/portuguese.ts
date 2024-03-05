import { CommonTranslationsFile } from './types';

const resources: CommonTranslationsFile = {
    translation: {
        ACTIONS: {
            FINISH: 'Concluir',
            NEXT: 'Próximo',
            BACK: 'Anterior',
            CREATE_ACCOUNT: 'Criar Conta',
            OKAY: 'OK',
            CANCEL: 'Cancelar',
            CONTINUE: 'Continuar',
            DONE: 'Concluir',
            LOG_IN: 'Iniciar Sessão',
            LOG_OUT: 'Terminar Sessão',
            CLICK_BUTTON: 'Clique no botão',
            UPDATE_REDUX: 'Clique no botão para atualizar o valor de armazenamento redux!',
            CHANGE_LANGUAGE: 'Alterar idioma aqui!',
            GO_HOME: 'Ir para a Página Principal',
            GO_TEST: 'Ir para a Página de testes',
            RESEND: 'Envie novamente',
            UPDATE: 'Atualizar',
            REMEMBER: 'Lembrar-me',
            SUBMIT: 'Enviar',
            CLOSE: 'Fechar',
        },
        LABELS: {
            EMAIL: 'E-mail',
            USERNAME: 'Nome de Utilizador',
            PASSWORD: 'Palavra-passe',
            CURRENT_PASSWORD: 'Palavra-passe atual',
            NEW_PASSWORD: 'Nova Palavra-passe',
            OPTIONAL: 'Opcional',
            FORGOT_PASSWORD: 'Esqueceu-se da sua palavra-passe?',
            NEED_ACCOUNT: 'Precisa de uma conta?',
            VIEW_ALL_EVENTS: 'Ver todos os {{count}} Eventos',
        },
        MESSAGES: {
            EMAIL_SENT: 'E-mail enviado',
            WELCOME: 'Bem vindo',
            WELCOME_PROJECT: 'Bem vindo ao {{project}}',
            LOGIN_MESSAGE: 'Iniciou sessão!',
            CONGRATS: 'Parabéns!',
            CONTACT: 'Contacte um representante do apoio técnico da Eaton',
            ERROR: 'Erro!',
            EMAIL_ENTRY_ERROR: 'Por favor insira um e-mail válido',
            USERNAME_ENTRY_ERROR: 'Insira um nome de usuário válido',
            SUCCESS: 'Sucesso',
            FAILURE: 'Falha',
            LOADING: 'A carregar...',
            REQUEST_ERROR: 'Pedimos desculpa, existe um problema ao submeter o seu pedido',
            PASSWORD_REQUIRED_ERROR: 'Senha requerida',
            RETRY: 'Tentar novamente',
        },
        FORMS: {
            FIRST_NAME: 'Primeiro Nome',
            LAST_NAME: 'Apelido',
            PHONE_NUMBER: 'Número de telefone',
            PASSWORD: 'Palavra-passe',
            CONFIRM_PASSWORD: 'Confirmar palavra-passe',
            PASS_MATCH_ERROR: 'Palavras-passe não coincidem',
            PASS_MATCH: 'Correspondências de senha',
            TOGGLE_PASSWORD_VISIBILITY: 'Ative a visibilidade da palavra-passe',
            RESET_PASSWORD: 'Redefinir Palavra-passe',
            FIRST_NAME_LENGTH_ERROR: 'O primeiro nome deve ter pelo menos 1 caracteres',
            LAST_NAME_LENGTH_ERROR: 'O sobrenome deve ter pelo menos 1 caracteres',
        },
        PASSWORD_REQUIREMENTS: {
            LENGTH: '8-16 caracteres',
            NUMBERS: 'Um número',
            UPPER: 'Uma letra maiúscula',
            LOWER: 'Uma letra minúscula',
            SPECIAL: 'Um caracter especial',
        },
    },
};
export default resources;
