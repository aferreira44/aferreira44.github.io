---
title: manage-docker-as-non-root-user
tags:
---

If you don't want to use sudo when you use the docker command, create a Unix group called docker and add users to it. When the docker daemon starts, it makes the ownership of the Unix socket read/writable by the docker group.

Warning: The docker group grants privileges equivalent to the root user. For details on how this impacts security in your system, see Docker Daemon Attack Surface.

To create the docker group and add your user:

1. Create the docker group:

$ sudo groupadd docker

2. Add your user to the docker group:

$ sudo usermod -aG docker $USER

3. Log out and log back in, so that your group membership is re-evaluated.

4. On a desktop Linux environment such as X Windows, log out of your session completely and then log back in.

5. Verify that you can run Docker commands without sudo.

$ docker run hello-world

6. This command downloads a test image and runs it in a container. When the container runs, it prints an informational message and exits.