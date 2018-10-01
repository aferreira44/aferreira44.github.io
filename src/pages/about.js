import React from 'react'
import {Helmet} from "react-helmet";
import PageLayout from "../layouts/PageLayout"

export default () => (
  <PageLayout>
    <Helmet>
      <title>About : André Ferreira</title>
    </Helmet>
    <h1>Sobre mim</h1>
    <p>André Ferreira, 28 anos, morando atualmente em Curitiba / PR. Formado em Comunicação Social – Publicidade, Propaganda e Marketing, atuei por 4 anos em agências de comunicação no planejamento e execução de campanhas de mídias sociais, links patrocinados e SEO para empresas nacionais e multinacionais. Também possuo certificação em Google Analytics pelo Google Partners desde 2014.</p>
    <p>Neste período cresceu o meu interesse por tecnologias de desenvolvimento, o que me levou a realizar o curso de Tecnologia em Sistemas para Internet para aprimorar os meus conhecimentos nesta área.</p>
    <p>Nos tempos atuais, a publicidade e o marketing andam lado a lado com a tecnologia e dominar ambas as áreas me permitem desenvolver as soluções adequadas para atingir os objetivos de cada negócio.</p>
    <p>Atualmente, trabalho como desenvolvedor web na NegocieCoins, uma plataforma de negociação de Bitcoin, que está transformando o modo como lidamos com dinheiro no mundo.</p>
    <p>Entre em contato através do e-mail <a href="mailto:contato@andreferreira.me">contato@andreferreira.me</a>.</p>
  </PageLayout>
)