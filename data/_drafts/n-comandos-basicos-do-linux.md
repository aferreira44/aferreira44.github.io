---
title: n comandos básicos do Linux
tags:
---

## ls

`ls -l`

`ls -h`

`ls -a`

`ls -lha`

## cd

## cat

## file

http://overthewire.org/wargames/bandit/bandit5.html

`file ./*`

## du

## find

http://overthewire.org/wargames/bandit/bandit6.html

https://unix.stackexchange.com/questions/43148/unix-commands-help-find/43149

`find . -type f -readable -size 1033c ! -executable`

http://overthewire.org/wargames/bandit/bandit7.html

`find . -type f -readable -size 33c -user bandit7 -group bandit6 2>/dev/null` -> Escondendo erros

## grep

http://overthewire.org/wargames/bandit/bandit6.html

https://unix.stackexchange.com/questions/43148/unix-commands-help-find/43149

`find . -type f -readable -size 1033c | grep -c /`

`find . -type f | grep -c /`

http://overthewire.org/wargames/bandit/bandit8.html

`grep -rnw . -e 'millionth'`

## ssh

http://overthewire.org/wargames/bandit/bandit19.html

`ssh bandit18@localhost -i /tmp/andre2/ssh.private -t 'cat ~/readme; bash -l'`

## sort

http://overthewire.org/wargames/bandit/bandit9.html

`sort data.txt | uniq -u`

## uniq

http://overthewire.org/wargames/bandit/bandit9.html

https://pt.wikibooks.org/wiki/Guia_do_Linux/Iniciante%2BIntermedi%C3%A1rio/Comandos_diversos/uniq

`sort data.txt | uniq -u`

## strings

http://overthewire.org/wargames/bandit/bandit10.html

https://serverfault.com/questions/51477/linux-command-to-find-strings-in-binary-or-non-ascii-file

`strings data.txt`

`strings data.txt | grep -e '==='`

## base64

http://overthewire.org/wargames/bandit/bandit11.html

https://stackoverflow.com/questions/3538021/why-do-we-use-base64

https://en.wikipedia.org/wiki/Base64

https://pt.wikipedia.org/wiki/Base64

`base64 -d data.txt`

## tr

http://overthewire.org/wargames/bandit/bandit12.html

https://www.linuxjournal.com/article/2563

`cat data.txt | tr a-zA-Z n-za-mN-ZA-M`

## tar

## gzip

## bzip2

## xxd

## mkdir

## cp

## mv

## hexdump

https://linoxide.com/linux-how-to/linux-hexdump-command-examples/

http://overthewire.org/wargames/bandit/bandit13.html

Hexdump reverso no arquivo ASCII e depois extraindo e verificando tipos dos arquivos extraídos um por um

`hexdump -C data.txt`
`xxd -r data.txt > data2`

`file *`

`mv data2 data2.gz`

`gunzip data2.gz`

`file *`

`mv data2 data2.bz2`

`bunzip2 data2.bz2`

`file *`

`mv data2 data2.tar`

`tar xvf data2.tar`

## telnet

http://overthewire.org/wargames/bandit/bandit15.html

`telnet localhost 30000`

## nc

http://overthewire.org/wargames/bandit/bandit17.html

`nc -zv localhost 31000-32000 2>&1 | grep succeeded!`

`openssl s_client -connect localhost:31691 -ign_eof`

## chmod

https://www.linux.com/learn/understanding-linux-file-permissions

`chmod a-rwx /tmp/andre2/ssh.private`
`chmod u+rwx /tmp/andre2/ssh.private`

### setuid binaries

http://overthewire.org/wargames/bandit/bandit20.html

http://en.wikipedia.org/wiki/Setuid

`./bandit20-do cat /etc/bandit_pass/bandit20`

## openssl

http://overthewire.org/wargames/bandit/bandit14.html

`ssh bandit14@localhost -i sshkey.private`

## s_client

http://overthewire.org/wargames/bandit/bandit16.html

`openssl s_client -connect localhost:30001 -ign_eof`

## diff

http://overthewire.org/wargames/bandit/bandit18.html

`diff passwords.old passwords.new`

## nmap

## bash, screen, tmux, Unix ‘job control’ (bg, fg, jobs, &, CTRL-Z, …)