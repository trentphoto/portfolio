---
title: "jQuery in 2024: Still in Your Toolkit?"
slug: "jquery-2024"
excerpt: "Let's take a look at jQuery and its relevance in our toolkit today."
date: '2024-01-16'
---

If you’ve spent any amount of time around the frontend development space in the last 10 years, you’re likely familiar with jQuery. 

For many, including myself, it was our first foray into the world of JavaScript after dabbling in HTML/CSS. 

I remember jQuery was the answer when I wanted to hack unnecessary frontend embellishments onto my early Wordpress sites. Those were the days…. 

## Still going strong

Released in 2006, it’s been a highly popular framework for almost 20 years now. But is it still relevant in the age of React, Angular and SPAs?

The answer is a resounding yes. In the [Stack Overflow 2023 Developer Survey](https://survey.stackoverflow.co/2023/), it sat among the top JS frameworks, beating out many popular and modern frameworks and libraries like Next, Svelte, Angular, and Vue. 

This alone shows that it’s still a major player in the space.

## Why jQuery?

jQuery’s strengths from 15 years ago are the same today. It’s excellent for quick DOM traversal, event handling, and UI modification.

To illustrate how efficient jQuery can be for developer experience, consider the following vanilla JS example:

```jsx
document.querySelectorAll('.myClass').forEach(function(el) {
  el.classList.add('anotherClass');
});
```

Pretty simple. But in jQuery, it’s barely one line:

```jsx
$('.myClass').addClass('anotherClass');
```

There are many more examples of efficiency and dev experience, but that’s not the only advantage of it.

The fact is, there are millions of projects right now that use jQuery, and often, for continued work, it’s simply most efficient to continue development in jQuery.

Combined with its excellent cross-browser support and commonly-cached CDN ubiquity, its advantages are still as strong as ever today.

A quick search reveals many major companies still using jQuery as part of their stack. Thus, learning it is definitely worthwhile, although for those new to the frontend world I always recommend learning vanilla JS deeply before moving on to frameworks and libraries.

And with the recent release of jQuery 4.0, moving to ES modules and adding formData support, it’s continuing to be supported and improved, ensuring it will remain a major player in the coming years.

## Downsides of jQuery

Of course, many new frameworks and libraries have arisen in recent years. Many of these, such as SolidJS, rival the performance of pure vanilla JS. They also offer a additional abstractions and design patterns that better support scaled front-end and full-stack enterprise applications.

In addition, vanilla JS has improved in many of the areas that jQuery once offered a more significant improvement - so the difference is smaller in many areas.

## Should I learn it?

My answer is yes, BUT learn vanilla JS first. If you’re thinking of taking a course or building a project with jQuery, my first question would be - could you learn vanilla JS better if you stuck to that? And instead took a vanilla JS course or built your project with it alone.

However, for more seasoned developers or those looking to build a product - I think this is where jQuery would have some more consideration. You’d want to weigh it against other options such as React, Angular, and others, of course. Depending on the needs of the project, it could be the right choice.
