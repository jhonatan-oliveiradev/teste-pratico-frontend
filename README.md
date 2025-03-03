<div align="center">
<h1 style="font-weight: semibold; font-size: 32px;">Tabela de Funcionários</h1>
<h2 align="center">Made with React.js, Typescript and CSS. ⚛</h2>
</div>

<p align="center">
  <a href="#Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Instruções">Instruções</a>
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=04D361&labelColor=281F3D" alt="License" />
  <img src="https://img.shields.io/github/repo-size/jhonatan-oliveiradev/teste-pratico-frontend?label=repo-size&message=MIT&color=04D361&labelColor=281F3D" alt="Repo Size" />
  <img src="https://img.shields.io/github/stars/jhonatan-oliveiradev/teste-pratico-frontend?label=stars&message=MIT&color=04D361&labelColor=14061f" alt="Stars" />
</p>

## 📖 Sobre o projeto

O projeto **Tabela de Funcionários** é uma aplicação web que exibe uma tabela com dados de funcionários, consumindo dados de uma API simulada (`json-server`). A aplicação permite a visualização dos dados em formato de tabela, com colunas para imagem, nome, cargo, data de admissão e telefone, além de oferecer funcionalidade de pesquisa e responsividade para diferentes dispositivos.

## 💻 Tecnologias utilizadas no projeto

- [React.js](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite.js](https://vitejs.dev/)
- [json-server](https://github.com/typicode/json-server)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

## 🌿 Branches

- `main` projeto finalizado.

## 🎨 Protótipo do projeto

O protótipo do projeto foi desenvolvido no Figma e você pode visualizá-lo [aqui](https://www.figma.com/design/kAdhqm42472ATkpfVlhMY9/Teste-T%C3%A9cnico-Frontend-BeTalent-(Copy)?node-id=1-4&m=dev).

## 📝 Licença

Este projeto está sob a licença MIT. Consulte a [LICENÇA](./LICENSE) para obter mais informações.

## ️🗄️ Estrutura de pastas

O projeto está estruturado da seguinte forma:

- 📁`public`
- 📁`src`
  - 📁`components`
    - 📁`layout`
    - ⚛️ `header.tsx`
    - 📁`shared`
    - ⚛️ `loading.tsx`
    - ⚛️ `search-bar.tsx`
    - ⚛️ `spinner.tsx`
    - 📁`table`
    - ⚛️ `employee-table.tsx`
    - ⚛️ `employee-row.tsx`
    - ⚛️ `employee-card.tsx`
  - 📁`hooks`
    - ⚛️ `use-employee.ts`
  - 📁`types`
    - ⚛️ `employee-data.ts`
  - 📁`utils`
    - ⚛️ `format-date.ts`
    - ⚛️ `format-phone.ts`
  - ⚛️ `App.tsx`
  - ⚛️ `main.tsx`
  - `App.css`
  - `index.css`
- `index.html`

## 🛠️ ️Instruções de execução

Siga as instruções abaixo para rodar o projeto em seu ambiente local:

1. Certifique-se de ter o Node.js instalado em seu computador. Você pode baixar a versão mais recente do Node.js [aqui](https://nodejs.org).

2. Clone este repositório em seu computador ou faça o download do código fonte.

```bash
  git clone https://github.com/jhonatan-oliveiradev/teste-betalent-frontend.git
```

3. Abra o terminal e navegue até o diretório raiz do projeto.

4. Instale as dependências do projeto executando o seguinte comando:

```bash
  npm install
```

5. Após a conclusão da instalação das dependências, inicie o servidor de desenvolvimento local com o comando:

```bash
  npm run dev

  ou

  yarn dev
```

6. O servidor local será iniciado e você poderá acessar o projeto no seu navegador através do seguinte endereço (padrão do Vite):

```bash
  http://localhost:5173
```

Caso a porta `5173` esteja em uso, o Vite irá sugerir uma porta alternativa para execução do projeto.

Se desejar alterar a porta padrão do Vite, você pode fazer isso no arquivo `vite.config.ts`:

```ts
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173, //alterar aqui
  },
});
```

7. Para iniciar o servidor da API simulada, abra um novo terminal e execute o seguinte comando:

```bash
  npm run server

  ou

  yarn server
```

8. O servidor da API será iniciado e você poderá acessar os dados da API através do seguinte endereço:

```bash
  http://localhost:3333/employees
```

## 🚀 Deploy

Para realizar o deploy do projeto, você pode seguir as instruções do Vite.js para [deploy de produção](https://vitejs.dev/guide/build.html#production-deployment).

Ou você pode utilizar uma plataforma como a [Vercel](https://vercel.com/) ou [Netlify](https://www.netlify.com/) para realizar o deploy do projeto.

Exemplo de deploy utilizando a Vercel:

1. Acesse o site da [Vercel](https://vercel.com) e crie uma conta.

2. Após criar a conta, clique em "Import Project" e selecione o repositório do projeto.

3. Configure as variáveis de ambiente necessárias para o projeto.

4. Clique em "Deploy" e aguarde o deploy ser finalizado.

Agora você tem o projeto disponível em produção!

## 📝 Melhorias futuras

- [ ] Adicionar funcionalidade de ordenação dos dados da tabela;
- [ ] Adicionar funcionalidade de paginação;
- [ ] Adicionar coluna de edição de dados direto da tabela.

<hr>

<div align="center">

Feito com 💜 por [Jhonatan Oliveira](https://jhonatanoliveira.com).

</div>
