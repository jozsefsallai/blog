---
title: My Blog Has Dark Mode. Here's How You Can Do It Too!
date: '2020-03-30 12:57:19'
description: In this post I'll talk about a way to add a dark mode switcher to your website using CSS variables, local storage, and a little bit of JavaScript.
tags:
  - development
  - design
  - ux
categories:
  - dev
  - ui/ux
image: dark-theme.png
---

Dark mode is all over the place. It's been a feature in a lot of operating systems, such as Windows, Android, iOS, Mac, etc. But what's the point of having native dark modes if the apps and websites you're using still show up in a blindingly bright fashion, right?

Luckily, a lot of websites and apps have started to adopt the dark theme trend. I've recently done so as well! And I'm going to tell you how I did it using modern technologies.

## The Colors

You've probably already specified the colors of your website in your CSS. But how are you going to change your CSS to use different colors when your users switch to dark mode?

### We can define our colors as CSS variables!

CSS variables are awesome and most (modern) browsers support them, so that's what we're going to use! Here's a short intro on how they work:

First, you need to specify a root class in which your variables will have certain values. Everything under this class will use the variables you've defined there. For example:

```css
.wrapper {
  --variable: #333;
}
```

Then you can refer to this variable using `var(--variable)`:

```css
a {
  color: var(--variable);
}
```

And then you can use this HTML:

```html
<main class="wrapper">
  <a href="#">I am black now!</a>
</main>
```

I think you can see how we're going to implement dark mode now. You'd basically want to have two root classes - one for the light theme and one for the dark theme.

```scss
.light-mode {
  --background: #fff;
  --foreground: #000;

  --title: #111;
  --meta-background: #f5f5f5;
  --meta-border-color: #ddd;
  --read-more-background: #efefef;
  --read-mode-foreground: #222;

  --code-background: #eee;
  --code-shadow: #fff;

  // SCSS users can use variables like this:
  --theme: #{$theme};
  --theme-faint: #{$theme-faint};
}

.dark-mode {
  --background: #111;
  --foreground: #fff;

  --title: #f3f3f3;
  --meta-background: #232323;
  --meta-border-color: #434343;
  --read-more-background: #333;
  --read-mode-foreground: #fefefe;

  --code-background: #333;
  --code-shadow: #121212;

  --theme: #{$theme-dark};
  --theme-faint: #{$theme-dark-faint};
}
```

Later on, you can use the defined variables in your properties:

```css
body {
  margin: 0;
  font: 16px / 1.6 'Nunito', sans-serif;
  background: var(--background);
  color: var(--foreground);
}
```

You can also use the `transition` property to make a transition effect between themes:

```css
body {
  margin: 0;
  font: 16px / 1.6 'Nunito', sans-serif;
  background: var(--background);
  color: var(--foreground);
  transition: background 150ms linear,
              color 150ms linear;
}
```

And now, we can give our `<html>` tag a class of `light-mode`, like this:

```html
<html class="light-mode">
```

If you've done everything correctly, you can see that... nothing has really changed. And that's good! If your site looks just like before, it means that it worked.

You can test if your dark theme works by changing the class of the `<html>` tag, either in your code or in your browser's developer tools.

But how are we gonna implement a way for the users to switch themes?

## The Switch

The way I did it on my blog is that I made a small switch that stays in the top right corner of the screen and lets you switch the themes. You don't have to do it like this, you have complete design freedom here. Just place it wherever you think would be better in a UX/UI perspective for your website.

I'm not gonna go too much into the design part of the switch, but let's have this HTML tag as our implementation example:

```html
<a href="javascript://" id="color-mode-switcher">Switch Theme</a>
```

Our goal is simple: every time you click on the switch, it should replace the current class of the `<html>` tag with the class of the other theme. We can easily achieve this using the following JavaScript code:

```js
const colorModeSwitcher = document.querySelector('#color-mode-switcher');
colorModeSwitcher.onclick = function () {
  const html = document.documentElement;

  if (html.classList.contains('light-mode')) {
    html.classList.replace('light-mode', 'dark-mode');
  } else {
    html.classList.replace('dark-mode', 'light-mode');
  }
};
```

And then you can add your JavaScript in the `<head>` part of your document, but make sure to use the `defer` attribute so that the JavaScript loads after the page finishes loading.

```html
<script src="bundle.js" defer></script>
```

And now the switch should work. If it doesn't, make sure to check your developer console, since it could be very helpful in idenfiying the problem.

That's cool and all, but once you reload, it defaults to the light mode theme. Luckily, there's an easy fix for that!

## The Local Storage

`localStorage` is an awesome addition to data storage in websites and web appliactions. It's basically a key-value store that is easy to access and write to and can store data for an indefinite amount of time. It's almost like cookies, except the values inside of Local Storage won't appear inside of the HTTP requests.

We can easily modify our JavaScript event to write to the localStorage every time you click on the switch.

```js
if (html.classList.contains('light-mode')) {
  html.classList.replace('light-mode', 'dark-mode');
  localStorage.setItem('theme', 'dark-mode');
} else {
  html.classList.replace('dark-mode', 'light-mode');
  localStorage.setItem('theme', 'light-mode');
}
```

If you open up the browser console and type `localStorage`, you can see that the `theme` value has indeed been set.

The next step is to make the page check whether the theme has been set in the Local Storage on load time and set the class name of the `<html>` element if that's the case. This way we can make sure that the page will display the correct theme every time you switch pages or reload the page.

```js
const theme = localStorage.getItem('theme');
if (theme) {
  document.documentElement.className = theme;
}
```

And that's all! You have a fully working light/dark mode switch that remembers your theme selection.

**Note:** you've probably noticed that on every reload/navigation the light theme appears for a split second and it only switches to the dark theme after that. A good way to solve this issue is by inserting the last bit of code as a separate, non-defered `<script>` block in the head of the page, like this:

```html
<script>
  const theme = localStorage.getItem('theme');
  if (theme) {
    document.documentElement.className = theme;
  }
</script>
```

I normally wouldn't do this, since this is content-blocking, but it's the easiest way to achieve what we want.

## Conclusion

We've learned how to easily add dark mode to our websites through the power of CSS variables and local storage. This way we can also implement more complex styling and multiple themes. So be creative and make something awesome! 😄

I'd like to say thanks to **Fireship.io** for inspiring me to do this. He made a [really good video on this subject](https://www.youtube.com/watch?v=rXuHGLzSmSE), so if you prefer video tutorials, this is for you 😄 It also explains some other stuff in that video which I didn't cover but it proves very well how powerful CSS really is.
