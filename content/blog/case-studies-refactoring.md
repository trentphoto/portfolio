---
title: "Case Studies: Refactoring for Performance in React"
slug: "case-studies-refactoring"
excerpt: "Taking a look at a few real-world scenarios which we resolved through understanding React's optimization hooks and architectural patterns."
date: '2024-02-22'
---

In React applications, performance isn’t a huge consideration when the app is small and lightweight. 

However, when you start to scale the amount of data, routes, and API calls - the smallest inefficiencies are quickly magnified. 

One passion of mine is finding and fixing these inefficiencies. My brain sees it like a puzzle. The before and after is always my favorite part.

Let's see a few real-world scenarios where performance bottlenecks were identified and mitigated through strategic refactoring.

## Case 1: Unnecessary Rerenders

A significant challenge in optimizing React applications is managing unnecessary re-renders, which can degrade performance, especially in large-scale apps. A key factor contributing to this issue was the insufficient use of optimization techniques compatible with React's functional component paradigm.

Take a look at this code:

```jsx
function DataDisplay({ data }) {
	const [data, setData] = useState([]);
	  useEffect(() => {
	    // Fetch data from an API and update state
	  }, []);
  return (
    <>
	<select>
 	  <option value=1>1</option>
	  <option value=1>1</option>
  	  <option value=1>1</option>
      	</select>
      {data.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </>
  );
}
```

In this simple component, the `DataDisplay` function receives a `data` prop and maps over it to generate some JSX, in addition to a ‘select’ input.

First, anytime the `select` option changes, the entire component will re-render. It would be better to move the [`data.map`](http://data.map) function to its own component such as `<DataList />`.

Second, the API call is a potential performance bottleneck. We’ve done a good job passing the empty array as the second argument of `useEffect`, so it will only run on the initial render.

However, if the `data` prop changes frequently, or if the array is large, this component will still re-render quite often.

We can do better.

If we know that the data prop will not change often, we can memoize it. Thus, anytime the component renders, it will render the cached version rather than mapping over the data again.

```jsx
const DataList = React.memo(({ data }) => {
  return data.map((item, index) => <div key={index}>{item}</div>);
});

function DataDisplay({ data }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch data from an API and update state
  }, []);
  return (
    <>
      <select>
        <option value=1>1</option>
        <option value=2>2</option>
        <option value=3>3</option>
      </select>
      <DataList data={data} />
    </>
  );
}

```

Using **`React.memo`** for functional components prevents unnecessary rerenders if the props and state have not changed. 

In the actual application, the refactoring process was mostly just doing this analysis for many components.

It required a detailed examination of the application's state management practices and an update to the components to use **`React.memo`** and **`useEffect`** efficiently. 

Know how to use useEffect, React.memo, and refactoring components to isolate expensive renders, is totally worth the effort. While it may take time at first, the performance wins are significant.

## Case 2: Inefficient Data Fetching

In another case, a React application was experiencing slow load times due to inefficient data fetching. The application was making multiple API calls to fetch the same data, leading to unnecessary network traffic and slow response times.

Before:

```jsx
// Initial code
function DataFetcher({ id }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData(id)
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, [id]);

  return data ? <div>{data}</div> : null;
}

// Usage in multiple components
function Component1() {
  return <DataFetcher id={1} />;
}

function Component2() {
  return <DataFetcher id={1} />;
}

```

In the above example, both `Component1` and `Component2` are fetching the same data independently. This data could have been fetched once and shared between both components, reducing the number of API calls.

The inefficiency was traced back to the architecture of the application. The application was structured in such a way that multiple components were independently fetching the same data, instead of sharing the data between components.

The solution involved restructuring the application to utilize a central state management system. This allowed the application to fetch data once and then share it among all the components that needed it. This architectural change resulted in a significant reduction in network traffic and improved the application's load times.

Using the above example, this looked like:

After:

```jsx
// Updated code
const DataContext = React.createContext(null);

function DataProvider({ id, children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData(id)
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, [id]);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}

// Usage in multiple components
function Component1() {
  const data = useContext(DataContext);
  return data ? <div>{data}</div> : null;
}

function Component2() {
  const data = useContext(DataContext);
  return data ? <div>{data}</div> : null;
}

// Parent component
function ParentComponent() {
  return (
    <DataProvider id={1}>
      <Component1 />
      <Component2 />
    </DataProvider>
  );
}
```

Here, a new context `DataContext` is created and used to share the fetched data between its children, including `Component1` and `Component2`. The `DataProvider` component fetches the data and provides it to its children through the context. 

The data is fetched only once and then shared between components. This reduces network traffic and load times.

At first glance, this is a less elegant solution. However, the win comes at scale. Component1 and 2 are huge trees that extend across much of the application. Sharing already-fetched data rather than fetching it again is well worth the time spent refactoring.

Context API is also a good answer to [excessive prop drilling](https://dev.to/codeofrelevancy/what-is-prop-drilling-in-react-3kol).

## Case 3: Inefficient Rendering Due to Large Lists

Another common scenario in React applications is inefficient rendering due to handling large lists. 

When components need to render a large amount of data at once, it can lead to sluggish performance and slow response times.

In one case, a React application was experiencing performance issues while rendering a large list of data. 

### **Initial Approach (Inefficient Rendering)**

Initially, we have a React component that renders a large list of items. Here's a simple example without virtualization:

```jsx
import React from 'react';

function LargeList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.content}</li>
      ))}
    </ul>
  );
}
```

The solution involved implementing virtualization by using libraries such as `react-window` or `react-virtualized`. Virtualization allows React to render only what's visible on the screen, drastically reducing the number of components that need to be rendered at once.

Using the library `react-window`, the code above now becomes:

```jsx
import React from 'react';
import { FixedSizeList as List } from 'react-window';

function Row({ index, style, data }) {
  return (
    <div style={style} key={data[index].id}>
      {data[index].content}
    </div>
  );
}

function LargeList({ items }) {
  return (
    <List
      height={500} // Adjust based on the available height for your list
      itemCount={items.length}
      itemSize={35} // Adjust based on the height of each row/item
      width="100%" // Adjust or make responsive based on your layout
      itemData={items} // Data to be passed to each row
    >
      {Row}
    </List>
  );
}
```

With virtualization implemented, the application experienced a significant improvement in performance. 

In this solution, **`FixedSizeList`** is used to create a virtualized list where only the visible rows are rendered. The **`Row`** component renders each row's content, which receives the item's data as props along with a **`style`** object that must be applied for correct positioning and rendering.

Virtualization isn’t for every use case. But in this application, it was the right fit and made a significant difference.
