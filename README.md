# Blog React

Este é um projeto de blog desenvolvido em React.

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Santosren/fiap-blog.git
```

2. Instale as dependências:

```bash
cd fiap-blog
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em [http://localhost:5173](http://localhost:5173).

## Arquivos

### Main

Arquivo principal do projeto. Renderiza o aplicativo React e define as rotas usando o React Router.

### Home

Página inicial do blog. Mostra os últimos posts e categorias.

### Posts

Página de posts do blog. Mostra todos os posts com paginação.

### Layout

Componente de layout compartilhado, incluindo cabeçalho e rodapé.

### Conexão com o Contentful

Este projeto se conecta ao Contentful, um CMS (Content Management System) baseado em nuvem, para buscar e exibir conteúdo dinâmico. A conexão com o Contentful é feita através do cliente `contentful` e das credenciais de acesso fornecidas no arquivo `createClient.js`.

```javascript
import * as contentful from 'contentful'
import { space_id, access_token } from '../constants'

export const client = contentful.createClient({
    space: space_id,
    accessToken: access_token,
})
```

## Dependências

- React
- ReactDOM
- React Router
- Bootstrap
- Contentful (client)

## Avaliação da Disciplina FE-UX
Este projeto foi desenvolvido como parte da avaliação da disciplina de Desenvolvimento Front End e UX da FIAP, dentro do MBA em Eng de Software, na turma 3AOJR.