---
title: "Building a Photography Equipment Rental Platform: A Case Study"
slug: "rentals"
excerpt: "An in-depth look at the process of building a full-stack web application with React and Node."
date: '2024-02-16'
---

This project was an exciting one as it’s not just a frontend project, but an entire full-stack web application I built along with a database.This application contains all the logic needed for an online rental platform, and it was a lot of fun to build. 

## Project Overview
When thinking about and designing a project, I like to think about the end user experience point of view first. For this project, the user should be able to:
- visit the DC camera rentals site
- learn about the company
- browse products
- create an account and log in
- select rental duration
- add items to cart
- edit and update the cart
- and finally, check out

From a UX perspective, the site should:
- Load quickly
- Have no errors, bugs, or slow pages
- Serve the desired business goals
- Allow the user to quickly and intuitively perform tasks such as adding to and editing the cart

Simple and straightforward, but of course, making something simple is never quick and easy.

## Wireframing and mockups

I prefer to wireframe with pen and paper and use Adobe XD or Figma to create high-fidelity mockups. For this project, though, I designed the frontend directly in code. This is something I’m working on practicing and improving. I want to be faster and more skilled at building things this way than building mockups first. I’m getting better at it - and I love using tailwindcss for this.

## The frontend tech stack

Aside from Tailwind, other tech used in this project was:
- React: my JS framework of choice for pretty much every project
- Next.js: have been really liking it lately and have built many frontend projects with it, including several static sites. I’m very comfortable with its process now and enjoy using it for many types of projects.
- A lot of dynamic components: this project was built before the switch to Next.js 14 which uses React Server Components and the App Router. Thus, it doesn’t use Server Components, but Next.js 13 does use server-side rendering so the pages are SEO-performant.

## The backend tech stack

I kept the backend simple, using Node and Express. I considered using Python as an experiment since I’ve been using it more lately, but went with Node as it works well as a backend with JS and React. 

Because I wanted to integrate authentication with JWT, this required incorporating JWT into many of the API endpoints. I got the hang of this quickly and was able to build auth checks into the backend functions where needed.

The backend ended up being over 700 lines of code, so I considered it good practice in writing API endpoints in Node.

## The database

I chose SQLite as the database management system. It is easy to use and setup, perfect for a small application like this one.

A relational structure was the right choice for this app’s data management, and I was able to keep the db structure pretty simple - tables for users, equipment, reservations, favorites, and cart. 

Foreign keys played a major role here - for example, the reservations table uses them to link the equipment and users databases. The cart and cart_items tables work in a similar way. The server queries make use of inner joins often to utilize this data schema.

## Known Issues
- Currently the app does not process payments as part of the checkout process.
- Currently only runs locally. I plan to deploy it to a web server in the future.
- There are a few issues with the date picker I would like to tighten up. It works, but a few edge cases need to be accounted for.
- When adding to cart, the Nav doesn't update the Cart count until the next page load. I plan to build out a solution to use the Context API to keep track of the cart, which would solve this issue.
- Auth token expires after 1hr, but the app doesn't immediately log the user out. I would like to implement this but am still thinking on the most elegant way to do it.

## Lessons Learned
- Importance of troubleshooting well. I spent a lot of time debugging, and this taught me the importance of thinking abuot my process and having a specific algorithm and way of going about the troubleshooting process.
- Underestimating the amount of time it takes to build a feature. For example, when I set out to build the favorites feature, I estimated 1hr for it, but it took me almost 6. On the other hand, once I developed a strong mental model for how to implement a certain query, reusing that model or design pattern elsewhere in the app was much quicker (a good example was using the user's JWT token to get the user ID and corresponding data). 

## Concepts practiced
- **JWT authentication**. Creating a user account, logging user in and out with JWTs. Also, the API endpoints don't need the user's ID included in the req url. They look it up using the token to get the user's ID and pass that to whatever SQL query is needed for that particular endpoint. 
- **React strict mode**. Hadn't used this too much previously. The main thing to note here is that in Strict Mode, React renders each component twice instead of once. This threw me off at first (why am I seeing two identical console.logs?) but this was good experience for future work in React.
- **Component-based architcture** for modular, reusable, and scalable UI. Anytime I wrote the same code or copy/pasted anything, I thought about how I could abstract it. I'm particularly proud of how the Account page looks - it's just 22 lines including comments, almost fully abstracted into custom components.
- **React hooks**. I used useEffect and useState a lot, as usual for me. But I also got more familiar with Context, with its Provider component and useContext hook. In the future, one way this app can be improved is by integrating the app's Context state more tightly with the SQL backend - which can be done via the updateContext function in the main createContext file.
- **NextJS router**. Specifically, using the useRouter hook to get the url param for the single product page.
- Creating API routes using Node.js backend. This was very new for me but this project provided extensive practice with all 4 CRUD types.
- **Sqlite database**. Making SQL queries in API endpoint functions and manipulating the data was a lot of fun. The Cart query and the Reservations query both get a little crazy, accessing several tables with several inner joins. Although this was only implemented locally, a future step can be to deploy this to something like AWS, Google Cloud, or DigitalOcean. 
