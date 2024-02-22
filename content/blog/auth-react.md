---
title: "Authentication in React: Two Approaches"
slug: "auth-react"
excerpt: "An article about authentication with JWT and Clerk."
date: '2024-02-16'
---

Let’s take a quick look at two ways to add authentication in your react project. 

These two ways are simple and performant, and are both good starting points if you haven’t used an Auth solution before.

There are many tools available but the two we will be looking at today are JSONWebToken (JWT) and Clerk.js.

# JWT

To implement JWT, we will first install the *jsonwebtoken* package via npm/yarn. Next, you generate a token on the server-side during user login, then send and store this token on the client-side. This token is then included in the header of any subsequent requests to validate user access.

Let’s take a look step by step.

First, run `npm i jsonwebtoken` or `yarn add jsonwebtoken` to install the package. Then import it into your backend file where the login route is defined.

The first thing we will do is generate a token during login. To do this, require `jsonwebtoken` into the file and use the `jwt.sign` method to create a token.

```jsx
const jwt = require('jsonwebtoken');

// user login route
app.post('/login', (req, res) => {
  const user = { id: 1 }; // this should be the user data retrieved from the database

  jwt.sign({ user }, 'your_secret_key', (err, token) => {
    res.json({ token });
  });
});

```

You will want to store this token on the client-side, and include it in the Authorization header of each request. 

Next we will verify the token within our middleware to ensure it is valid and has not expired, granting or denying access based on the result.

```jsx
// middleware
app.use((req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, 'your_secret_key', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;

    next();
  });
});
```

Alternatively, you can use jwt.verify within specific routes to do custom auth handling within each route.

But let’s say you want to focus on frontend components rather than writing backend routes. If your app is primarily frontend-focused, then a solution that abstracts away most of the backend auth work might be the solution.

Let’s look at one of my favorite solutions: Clerk.js.

# Clerk.js

Clerk.js is a user management and authentication serviceIt provides a fully managed user database, handles sign-up and login forms, session management, and more.

Because Clerk is a hosted solution, they do have paid plan tiers. However, the free tier is generous and more than enough to get started and learn the platform.

## Setup

You’ll first want to create an account on the Clerk website and create a new project. You’ll be given two auto-generated keys to include in your .env file. The setup instructions are easy to follow.

Then, run npm i or yarn add as usual.

Clerk provides many components that are simple and easy to use. You just import them and add them into your JSX.

For example, here’s a user account page I created recently, using SignedIn / SignedOut checks to conditionally display different components:

```jsx
import { SignedIn, SignedOut, UserProfile } from "@clerk/nextjs";

export default function Page() {
    return (
      <>
        <SignedIn>
          <UserProfile />
        </SignedIn>
        <SignedOut>
          <p className="mb-4">Log in here:</p>
          <Link href="/login">Log In</Link>
        </SignedOut>
      </>
    );
}
```

Pretty cool, right?

# Summary

JWT and Clerk.js are just two of many tools available for adding authentication to your React project. 

Hopefully this article gives you an idea of the differences between a custom JWT solution and a hosted, abstracted solution like Clerk.

Have a better way of doing Auth in your React project? Reach out and let me know what you use.