---
slug: "/blog/RoR"
date: "2017-12-23"
title: "Como uma economia descentralizada ajuda a sociedade"
description: "Descrição para SEO"
---

Processo é um programa em execução

Quando o processo é iniciado, ele recebe um PID (Process Identification)
PID do Init é 1 (Pq é 1º processo a ser executado no Linux)
SystemD

Todo Processo tem:
- PID
- Lifetime
- PPID (Parent Process Identification)
- UID (User Identification)

## Comando ps

- Não é dinâmico
- Coluna User
- Coluna PID
- %CPU, %MEM
- RSS (Quantidade de memória física consumida pelo processo)
- STAT: (R: running, S: sleep, Z: zombie)

Status "Z" (Zombie): continua consumindo recursos, porém não tem mais utilidade
(Normalmente acontece quando o processo pai morre e o processo filho fica órfão)

Status "T" (Stopped)

- TTY: Se está atrelado a algum terminal
- TIME: Tempo total que o processo utilizou de CPU
- COMMAND: processo que está sendo executado

`ps`: Processos em foreground
`ps aux`:
`ps auxwww`: Exibe o path completo do processo que está sendo executado

## Comando top

- É dinâmico
- Cabeçalho completo
- [K]: Kill processes

## Comando htop

## Comando kill

- Enviar sinais para os Processos
- Saber qual o PID do processo
- pgrep

- kill PID (SIGTERM)
- kill -9 PID (Força bruta)
- kill -1 PID (HUP)