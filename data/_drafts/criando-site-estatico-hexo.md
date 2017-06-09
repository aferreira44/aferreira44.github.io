---
title: Criando um blog estático com Hexo.io
tags:
---

Você já pensou em criar um blog pessoal e acabou desistindo ao perceber o trabalho que daria manter um site hospedado com Wordpress, por exemplo?

Hoje vou lhe apresentar o Hexo.io, uma ferramenta simples e poderosa para criar um blog estático, como este que você está lendo agora.

Vamos lá!

## Instalação do Hexo.io

Para criar um blog com o Hexo.io, vamos precisar ter o Node.js, NPM e o Git instalados em nosso computador.

Depois de instaladas as ferramentas necessárias, vamos instalar globalmente o Hexo com o seguinte comando:

`npm install -g hexo-cli`

## Criação do nosso projeto

Vamos criar o nosso projeto com o comando: `hexo init blog-pessoal`.

Acesse a pasta `blog-pessoal` criada: `cd blog-pessoal`.

E depois, execute `npm install` para o NPM instalar as dependências do nosso projeto.

## Estrutura de pastas e arquivos

- **_config.yml**: Arquivo que terá as configurações do nosso blog
- **package.json**: Arquivo de gerenciamento de dependências do NPM
- **scaffolds**: Arquivos que serão usados como base de template para a criação dos posts do nosso blog.
- **source**: Aqui ficará o conteúdo do nosso blog. As pastas `_drafts` e `_posts` serão utilizadas para armazenar nossos rascunhos e posts publicados, respectivamente.
- **themes**: Pasta onde ficará o tema do nosso blog.

## Configuração

## Criando um novo post

`hexo new post primeiro-post`

## Publicando o nosso blog

`hexo generate`

`hexo server`

`hexo deploy`