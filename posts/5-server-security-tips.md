---
title: 5 Crucial Steps For A More Secure Server
date: '2019-05-11 14:53:15'
description: This article is about some of the security measures I use on my production server and I am certain that you should, too.
tags:
  - security
  - web server
  - server configuration
categories:
  - dev
  - infosec
image: 5-server-security-tips.png
---

There are several ways of protecting a Linux server but there is never a 100% secure method (unless, of course, you disable SSH completely, which you probably don't want to do if you don't have direct access to your server).

## 1. Disable root login

The **root** user is the default super user on Linux systems. It is used for performing tasks that require bigger permissions (e.g.: installing packages, managing systemd services, etc.).

When you first set up your server and logged in via SSH, you've probably entered a command like this:

```sh
ssh root@server_ip
```

to install stuff like a web server, a database server, and make your configurations.

So you might ask, if this user is so important, why disable it? The answer is rather simple. Since the "root" user is the default Linux user with administrative privileges, it is obvious that botnets and hackers will attempt to log in using "root" before any other user. So what we can do is disable direct SSH login using the root user. [Here's a tutorial on how to do it!](https://mediatemple.net/community/products/dv/204643810/how-do-i-disable-ssh-login-for-the-root-user)

## 2. Disable password authentication

Okay, this one might sound a little strange, but you should disable password-based authentication. No matter how strong your password is, there is still a chance that someone will eventually break it. The chance is very little but it still exists.

Instead, you can use SSH keys to log in! To generate an SSH key, you need to have OpenSSH installed locally (or Git for Windows, if you're on Windows). Here's the command to generate a strong SSH key:

```sh
ssh-keygen -t rsa -b 4096 -C "Optional name for the key"
```

It will ask you where you want to save the key. I'd normally go with the home directory, so I'd just press Enter when prompted. If you want an additional layer of protection, you can also enter a passphrase for your key.

Be very careful and don't publish your keys anywhere. Just like regular keys, these are very important and sensitive, and you should keep them in a safe place.

To add the key to your server, you first need to copy the public key:

```sh
cat ~/.ssh/id_rsa.pub
# copy the output
```

And then add it to your user's **authorized_keys** on the server:

```sh
mkdir -p ~/.ssh
echo the_copied_output >> ~/.ssh/authorized_keys
```

The next step is to try to authenticate using your key and disable the password-based authentication. [Here's a tutorial](https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server#authenticate-to-your-server-using-ssh-keys) that tells you what are the next steps you need to do.

## 3. Only allow SSH logins to specific users

You can restrict SSH login to certain users. To do this, open your SSH config file in a text editor:

```sh
sudo nano /etc/ssh/sshd_config
```

Find the section that says "**#AllowUsers**", uncomment it (remove the #) and specify the usernames that are allowed to log in. Don't forget to save the changes.

Once you're done with that, restart the **sshd** service:

```sh
sudo service sshd restart
```

## 4. Use Fail2ban to block nasty attempts

**Fail2ban** is a great tool for keeping out people with negative intentions. Installing it is as easy as installing any other package:

```sh
sudo apt -y install fail2ban
```

More information on [how to configure fail2ban](https://www.linode.com/docs/security/using-fail2ban-for-security/#configure-fail2ban-local).

## 5. Change the default SSH port

Unless you connect through SSH using a different port, you don't normally have to specify a port if you want to log into your server. That's because the default SSH port is **22**, and your SSH service automatically assumes that you want to get in through that port. Just like in the case of the root user, we need to change the port to make sure there will be less people trying to hack their way into our server.

This is something I forgot to do initially, hence the number of users that tried to log in.

Before you change the port, you need to allow connections to that port in your firewall. I use ufw as my firewall, so the command is:

```sh
sudo ufw allow PortNumber
# ex.: sudo ufw allow 20450
```

Once you have enabled the port, you can proceed to the next step. Changing the port is really simple, just open your sshd_config file, find the option that says "**#Port**", uncomment it, and specify any port you want. Since botnets usually don't iterate up to very large port numbers, a port like 2xxxx should be more than enough.

Restart sshd and make sure you can log in to your server using the new port:

```sh
ssh joe@your_server_ip:port
```

If you don't want to specify the port all the time, you can set up a host in your ssh config:

```sh
nano ~/.ssh/config
```

The host should look like this:

```
Host production
  HostName your_server_ip
  Port your_ssh_port
  User joe
  IdentityFile ~/.ssh/id_rsa
```

Now you should be able to log in only by typing `ssh production`.

* * *

That's all the tips for today! Performing these steps is very important, but again, still not 100% secure. If your application is vulnerable, attackers still *can* get access to your server. So make sure to always build secure applications 😎
