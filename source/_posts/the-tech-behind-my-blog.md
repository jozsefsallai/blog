---
title: The Tech Behind My Blog - An Intro To Static Sites
date: 2019-03-12 02:09:30
description: In this article I'm going to write about the tech used for my blog and the importance and usefulness of static websites.
tags:
  - [blogging]
  - [static websites]
  - [development]
categories:
  - [dev]
img: main.png
---

Websites have been an elemental component of our day to day life. In 1993, Tim Berners-Lee has set the basis to what we today call "The World Wide Web", and ever since then, it has been an evergrowing, unlimited source for information and media of all kind. It's a place where people can connect with each other and the world.

## The Internet - A Brief History

At first, websites were simple HTML or text documents that were hosted on a server and could be read by the client computers by dowloading them onto their machine. At that time, the internet was still "read-only". Soon enough though, the need for more user interaction and server-side programming was noticeable, and this is how Web 2.0 was born: a network of interconnected computers ready to talk to each other. 

Web 2.0 has revolutionized the way people looked at the Internet. Soon after its release there have been websites that were more powerful, chat applications, comment systems, manageable content, web stores, and so on. It was a breakthrough change in the online world's infrastructure. It all seems perfect at first glance, but...

## The Problem(s)

Dynamic websites are indeed amazing. Being able to run server-side programs and return the result of their operation onto the client's screen is fascinating. The number of technologies, programming languages, frameworks, and tools made for dynamic websites truly shows how powerful the Internet really is as it is now.

However, for every good there is a bad. 

### Performance

I think it's obvious what I mean by this. Each server needs time to compute the things that you want it to do, and if your website has content from other websites (i.e. scripts, stylesheets, images), it will increase the page's load time even more. In the early days of dynamic websites, this was a problem that people have tried solve... and they did... kinda.

Introducing caching - a method that will put the server-rendered content/pages in a cache to utilize that on the following page loads, instead of re-rendering everything every single time. While this method has increased the load speed of the websites, it certainly couldn't reach the speeds of static websites.

### Security

Opening the gates between the server and user interaction automatically implies that there will be people who would abuse the opportunity. Dynamic websites are vulnerable to hacker attacks, and even if you have done everything that stood in your powers to make your website more secure, there will be, in almost any case, a vulnerability that you haven't discovered, but someone else has.

## The Solution

Sometimes it's better to think backwards. In case you didn't notice, I haven't said anything about low performance or security risks when I was talking about static sites. And that's exactly what the solution is - **static websites**.

You might be thinking to yourself... "wait what? didn't you just say that dynamic websites were a huge step forward?" Yes, I did say that. And it's true. But technology has evolved so far that we can find better alternatives for a lot of things. Not every website needs to be dynamic, even if you plan on serving content on it.

Static sites are always infinitely faster than dynamic websites and also a lot more secure, due to the fact that there is no way for the user to initiate direct requests to the server.

But how could someone manage the content on a static website without hardcoding everything in?

### Static Site Generators

Static site generators are tools that allow you to set up a template with all the things you deem necessary so that you can later on generate static HTML files based on them and the content you provide. 

You have no limitations on how you can customize these templates, how long the content you want to serve is, what kind of content you want to serve... static site generators just don't care about those things. There is no backend or a database that can be hacked into, which means you will always have maximum security (note: not "total" security). You basically get unlimited possibilities and fast and secure websites. It's a win-win scenario!

This blog in itself was made possible by [Hexo](https://hexo.io), a static site generator written in Node.js. It uses a theme that I made specifically for this blog and it's rockin'.

There are other alternatives to Hexo:
  - [Hugo](https://gohugo.io/), which is written in the Go programming language
  - [Jekyll](https://jekyllrb.com/), written in Ruby, preferred blogging system of GitHub Pages
  - [Vuepress](https://vuepress.vuejs.org/), really useful for documentation sites

... and the list continues. I personally prefer using Hexo because it's fast, it has a nice API, and it's fun to work with :D 

Note: Static site generators might be cool and all, but they are certainly not meant for every single website ever. They're really useful for stuff like blogs though, or pages that are only going to serve content. They're not very suitable for large, complex web apps.

However...

### JAMstack

JavaScript + API + Markup. A beautiful combination of tech that allows you to create fast and secure web applications that are scalable and can do whatever you want. However, this is a story for another day...
