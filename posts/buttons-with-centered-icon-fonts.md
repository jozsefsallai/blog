---
title: '[How-To] Buttons With Perfectly Centered Icon Fonts'
date: '2020-03-31 20:30:01'
description: Buttons are cool and icon fonts are even cooler! But what if you wanted to combine them both? Some issues can occur if you don't do it the right way.
tags:
  - design
  - ui
  - ux
categories:
  - dev
  - ui/ux
image: buttons-with-centered-icon-fonts.png
---

<style>
@import 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';

.buttons-with-icons {
  padding: 15px;
  text-align: center;
}

.buttons-with-icons a {
  background: #aaa;
  color: #fff;
  font-size: 1.2rem;
}

.buttons-with-icons-incorrect a {
  padding: 1rem;
}

.buttons-with-icons-correct a {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
}

.buttons-with-icons-circular a {
  border-radius: 50%;
}
</style>

Thanks to the power of CSS, you can turn anything into a button, even if it's not an actual `<button>` element. I often end up using `<a>` elements as buttons, mainly for things that will redirect you to a different page. Using text in a button is good in most scenarios, but sometimes, using an icon instead of plain, boring text is more appealing and expressive.

Also thanks to the power of CSS (and webfonts), you can easily implement infinitely customizable icons on your website. Projects such as [FontAwesome](https://fontawesome.com/) and [IcoMoon](https://icomoon.io/) are icon fonts that are very easy to import and use in your projects. Everything in an icon font is basically a character, which means you can style it like you'd style a character. In this example, I'll use FontAwesome v4.7.0 because it's the easiest to demonstrate things with.

Now, what if you wanted to combine these two and make buttons that contain icons for better UI/UX? It's totally fine to do it, but you need to be careful with *how* you do it.

```css
/* incorrect */
.buttons-with-icons a {
  padding: 1rem;
  font-size: 1.2rem;
  background: #aaa;
  color: #fff;
}
```

```html
<div class="buttons-with-icons">
  <a href="#"><i class="fa fa-facebook"></i></a>
  <a href="#"><i class="fa fa-twitter"></i></a>
  <a href="#"><i class="fa fa-linkedin"></i></a>
</div>
```

You may think that you can just treat it like text, so you set a font size to the button, add some padding, and you're done. While this is the easiest way to implement it, it's also an incorrent way to do it. Remember, this *is* a font, and fonts contain variable width characters. Here's how the example above would look like:

<div class="buttons-with-icons buttons-with-icons-incorrect">
  <a href="javascript://"><i class="fa fa-facebook"></i></a>
  <a href="javascript://"><i class="fa fa-twitter"></i></a>
  <a href="javascript://"><i class="fa fa-linkedin"></i></a>
</div>

You can see that the Twitter and LinkedIn icons are wider than the Facebook icon and the Twitter icon is slightly wider than the LinkedIn icon. Using padding will not work in this scenario, so we have to do something else.

If you want all icons to be similar in width and height you should just... explicitly set the width and the height.

Huh? Really?

Yes.

But how would you center the icon itself? For this, we have to use the `line-height` property. In fact, you should set the `width`, `height`, and `line-height` properties to the same value and add `text-align: center` to the button. Something like this:

```css
.buttons-with-icons a {
  display: inline-block; /* we need this for the width and height */
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  font-size: 1.2rem;
  background: #aaa;
  color: #fff;
}
```

And here's how our example looks like now:

<div class="buttons-with-icons buttons-with-icons-correct">
  <a href="javascript://"><i class="fa fa-facebook"></i></a>
  <a href="javascript://"><i class="fa fa-twitter"></i></a>
  <a href="javascript://"><i class="fa fa-linkedin"></i></a>
</div>

Much better, right? Setting the width and the height explicitly may have seemed redundant at first but sometimes you need to look behind to get optimal results. This way we can also easily create circular icons:

```css
.buttons-with-icons.circular a {
  border-radius: 50%;
}
```

<div class="buttons-with-icons buttons-with-icons-correct buttons-with-icons-circular">
  <a href="javascript://"><i class="fa fa-facebook"></i></a>
  <a href="javascript://"><i class="fa fa-twitter"></i></a>
  <a href="javascript://"><i class="fa fa-linkedin"></i></a>
</div>

And now you can have cool buttons with icon fonts 🤞
