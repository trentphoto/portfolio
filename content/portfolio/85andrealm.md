---
name: "85 & Realm: Frontend Ecommerce Application"
slug: "85andrealm"
excerpt: "An e-commerce website using React, Redux, AWS, Node.js, and PostgreSQL."
image: "https://res.cloudinary.com/dakfmjumy/image/upload/v1708627452/jamestrent.net/projects/realm_ta0txd.png"
repository: "https://github.com/trentphoto/85andrealm"
site: "https://85andrealm.shop"
date: '2023-03-01'
---

Building this website helped me gain familiarity with PostgreSQL and AWS RDS.

It's built on React using Next.js and Tailwind, with custom API endpoints in Node for the backend. It's hosted on Vercel for quick and flexible deployment.

Some of the things I learned or improved while building this project:

- In React, avoid using state unnecessarily. If something can be calculated from the current props and/or state, just do that and keep it as a constant in your component. Adding additional state variables will unnecessarily increase complexity and create more room for bugs.
- Setting up a Postgres database and making queries to it.
- Working with AWS more, especially RDS which hosts the Postgres database for the site.
- Filtering a list of products on the /shop page using multiple factors such as categories and sort method.
- Using Redux for state management - I'm very familiar with Redux as I've used it for many projects in the past, but in this implementation, I became more comfortable with shopping cart implementation in addition to more basic data structures.
