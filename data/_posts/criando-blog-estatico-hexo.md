---
title: Criando um blog estático com Hexo.io
tags:
date: 2017-06-12 03:06:55
---

Você já pensou em criar um blog e acabou desistindo ao perceber o trabalho que daria manter um site hospedado com Wordpress, por exemplo?

Hoje vou lhe apresentar o [Hexo.io](https://hexo.io/), uma ferramenta simples e poderosa para criar um blog estático, como este que você está lendo agora.

Vamos lá!

## Instalação do Hexo.io

Para criar um blog com o Hexo, vamos precisar ter o Node.js, NPM e o Git instalados em nosso computador. Agora, vamos instalar globalmente o Hexo com o comando:

`npm install -g hexo-cli`

## Criação do nosso projeto

Vamos criar o nosso projeto com o comando: `hexo init blog-pessoal`.

Acesse a pasta `blog-pessoal` criada: `cd blog-pessoal` e execute `npm install` para o NPM instalar as dependências do nosso projeto.

Depois de instaladas as dependências do nosso projeto, já podemos ver o nosso blog rodando localmente executando o comando `hexo server` e acessando a URL [http://localhost:4000/](http://localhost:4000/) em nosso navegador.

## Estrutura do projeto

Aqui, darei uma breve explicação sobre as pastas e arquivos criados em nosso projeto, mas sugiro que você as explore para entender melhor a estrutura de um projeto feito com o Hexo.

- **_config.yml**: Arquivo que terá as configurações do nosso blog
- **package.json**: Arquivo de gerenciamento de dependências do NPM
- **scaffolds**: Arquivos que serão usados como base de template para a criação dos posts do nosso blog.
- **source**: Aqui ficará o conteúdo do nosso blog. As pastas `_drafts` e `_posts` serão utilizadas para armazenar nossos rascunhos e posts publicados, respectivamente.
- **themes**: Pasta onde ficará o tema do nosso blog. Por padrão, o tema inicial é o `landscape`.

## Configuração

Vamos agora modificar algumas configurações básicas de nosso projeto. Para isso, abra o arquivo `_config.yml` em seu editor de texto e altere as configurações das seções `# Site` e `# URL` conforme detalhado abaixo:

### # Site

| Configuração | Descrição |
| ------------ | --------- |
| title | O título do seu site |
| subtitle | O subtítulo do seu site |
| description | A descrição do seu site |
| author | Seu nome |
| language | O idioma do seu site. Utilizando o padrão de duas letras do código [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). O padrão do Hexo é `en` para inglês. Para português, utilize `pt`. |
| timezone | O fuso horário do seu site. O Hexo utiliza a configuração do seu computador por padrão. Você pode encontrar a lista com os fusos horários disponíveis [aqui](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). |

### # URL

| Configuração | Descrição | Padrão |
| ------------ | --------- | ------ |
| url | A URL do seu site. Neste artigo, utilizaremos o endereço de nosso repositório no GitHub, no meu caso será [http://aferreira44.github.io](http://aferreira44.github.io) | |
| root | O diretório raiz do nosso projeto |
| permalink | O formato do link permanente de nossos posts | :year/:month/:day/:title/ |
| permalink_defaults | O valor padrão de cada segmento nos links permanentes |

Confira como ficou o meu arquivo `_config.yml` para estas configurações:

```yml
# Site
title: André Ferreira
subtitle: Blog Pessoal
description: Programação, Blockchain e Marketing Digital
author: André Ferreira
language: pt
timezone: America/Sao_Paulo

# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: http://aferreira44.github.io
root: /
permalink: :year/:month/:day/:title/
permalink_defaults:
```

## Criando um novo post

Antes de criar um novo post, vamos primeiro criar um rascunho do nosso post com seguinte comando:

`hexo new draft primeiro-post`

O Hexo criará o arquivo `primeiro-post.md` na pasta `source/_drafts` e será guardado como um rascunho. Edite o conteúdo do seu rascunho e, quando quiser publicá-lo, execute o comando:

`hexo publish post primeiro-post`

Seu arquivo `primeiro-post.md` será então movido da pasta `source/_drafts` para a pasta `source/_posts`, onde ficarão guardados todos os seus posts publicados.

Caso você queira criar um post diretamente, sem criar um rascunho antes, execute o seguinte comando:

`hexo new post segundo-post`

Isto fará com que seja criado o arquivo `segundo-post.md` diretamente na pasta `source/_posts` e este já será um post publicado. Fácil não?

## Visualizando alterações

Depois de publicar novos posts, podemos executar o comando `hexo generate` para gerar os novos arquivos em nosso blog. Também podemos executar `hexo generate --watch` para gerar novos arquivos automaticamente sempre que salvarmos as novas alterações feitas no projeto.

Depois de gerar os arquivos de nossas alterações, podemos executar `hexo server` e visualizar o nosso blog novamente em [http://localhost:4000/](http://localhost:4000/).

## Publicando o nosso blog

Legal, temos nosso blog criado e rodando em nosso computador, mas como vamos publicá-lo na Internet? Neste artigo, utilizaremos o GitHub Pages para publicar o nosso blog.

O [GitHub Pages](https://pages.github.com/), é um serviço gratuito do GitHub para hospedagem de arquivos estáticos, como os gerados pelo Hexo.

Para utilizar este serviço, a primeira coisa que devemos fazer é criar uma conta no [GitHub](https://github.com/) e criar um repositório com o nome de usuário seguido do sufixo `.github.io`. Por exemplo, meu nome de usuário no GitHub é `aferreira44`, então o nome do repositório criado para hospedar o meu site deverá ser `aferreira44.github.io`.

*Caso você não tenha experiência com Git e GitHub, recomendo que assista este [curso da Udacity](https://classroom.udacity.com/courses/ud775) e esta [playlist da Webschool](https://www.youtube.com/playlist?list=PL77JVjKTJT2h4aACrIx1ECmr8h9esjh16).*

Depois de criar nosso repositório, vamos alterar as configurações da seção `# Deployment` em nosso arquivo `_config.yml`. Siga o exemplo do meu `_config.yml` alterando o campo `repo` com o endereço do seu repositório criado no GitHub.

```yml
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  branch: master
  repo: https://github.com/aferreira44/aferreira44.github.io
```

Agora, vamos executar o comando `hexo deploy` para fazer o deploy do projeto em nosso repositório no GitHub e acessar o endereço do repositório criado, no meu caso [aferreira44.github.io](http://aferreira44.github.io).

Pronto, nosso blog está criado e publicado na Internet. Em um próximo artigo, vamos ver como definir um domínio próprio para este blog publicado no GitHub.

*Caso não queira hospedar o seu site no GitHub você pode copiar os arquivos gerados na pasta `public/` para o seu servidor ou seguir outras configurações de deploy acessando a [documentação oficial](https://hexo.io/docs/deployment.html) do Hexo.*

Até logo!