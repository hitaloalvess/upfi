<h1 align="center">
  <img alt="logo upfi" title="upfi" src=".github/logo.svg" width="400px" />
</h1>

<h2 align="center"> 
<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/hitaloalvess/nextauth">
<img alt="GitHub language count" src="https://img.shields.io/github/languages/top/hitaloalvess/nextauth">
<img alt="GitHub language count" src="https://img.shields.io/github/repo-size/hitaloalvess/nextauth">
<!--<img src="https://img.shields.io/badge/Status-Termidado-green">
<img alt="GitHub language count" src="https://img.shields.io/github/license/hitaloalvess/nextauth">-->
</h2>

<!-- <h2 align="center">
        <img src=".github/login-web.PNG" alt="tela login web demo" />
</h2> -->

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-usar?">Como usar?</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

## 🛠 Tecnologias 🚀

Este projeto foi desenvolvido com as seguintes tecnologias:

- <a href="https://pt-br.reactjs.org/">Nextjs</a>
- <a href="https://chakra-ui.com/">Chakra UI</a>
- <a href="https://fauna.com/">Faunadb</a>
- <a href="https://react-hook-form.com/">React-hook-form</a>
- <a href="https://react-query.tanstack.com/">React-query</a>
- <a href="https://github.com/jquense/yup">Yup</a>
- <a href="https://www.typescriptlang.org/">Typescript</a>
- <a href="https://yarnpkg.com/">Yarn</a>

## 💻 Projeto

<p>Upfi é um projeto que tem como objetivo a realização de upload e listagem de imagens.</p>
<p>A aplicação utilizou-se de diversas tecnologias para sua criação toda parte de layout foi desenvolvida através da biblioteca Chakra UI.</p>
<p>Para parte de formulários optou-se pela utilização do React Hook Form</p>
<p>As tarefas de busca e listagem dos dados foram executadas com o uso da biblioteca React Query.</p>
<p>Enquanto que para o armazenamento das imagens utilizou-se da combinação do banco de imagens ImgBB e do banco Faunadb. A lógica para o armazenamento de arquivos foi realizada da seguinte maneira, os arquivos das imagens são armazendos pelo imgBB, enquanto as referências apontando para cada arquivo ficou armazenado dentro do faunaDB.</p>

## ⌨ Como usar?

Em primeiro lugar, clone o repositório responsável pelo backend:

```bash
# Clonando o repositório
git clone https://github.com/hitaloalvess/upfi.git

# Instale as dependências:
yarn install

#Copie e altere o nome do arquivo .env.example e adicione as keys necessárias
cp .env.example .env.local 

# Inicie a aplicação front-end
yarn dev
```

---
Made with ♥ by Hitalo 🚀