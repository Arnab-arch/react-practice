React Fundamentals – What I Implemented and Understood

While working on this project, I focused on learning React directly from the official documentation and applying the concepts hands-on instead of just following examples. The goal was to understand how React thinks about UI, not just how to write code.

Component Design and Reusability

I built the UI using functional components, treating each component as an independent and reusable unit. This helped me understand how React encourages breaking the interface into smaller, manageable pieces that are easier to maintain and reason about.


Code Organization with Imports and Exports

I structured the project using ES6 module syntax to keep components in separate files and reuse them where needed. Exporting and importing components properly made the codebase cleaner and more scalable as the project grew.


Writing UI with JSX

Instead of manipulating the DOM directly, I described the UI using JSX. JSX allowed me to combine structure and logic in a readable way while following React’s rules like returning a single root element and keeping the markup declarative.


Using JavaScript Inside JSX

I used JavaScript expressions inside JSX to make the UI dynamic. This included rendering variables, calling functions, and controlling what appears on the screen using expressions wrapped in curly braces.


Passing Data with Props

To share data between components, I relied on props. This reinforced the idea of one-way data flow in React, where parent components control data and child components simply consume it. Treating props as immutable made component behavior predictable.


Handling Conditional UI

I implemented conditional rendering to show or hide elements based on certain conditions. Using logical operators and ternary expressions helped in controlling the UI without introducing unnecessary complexity.


Rendering Dynamic Lists

Whenever the UI needed to display repeated elements, I used array mapping. Assigning unique keys to each item helped React efficiently update the UI and avoid rendering issues.


Keeping Components Predictable

I made sure components stayed pure during rendering by avoiding side effects and external mutations. This ensured that the UI remained consistent and easier to debug as the application state changed.


Understanding React’s UI Structure

Through this project, I started thinking of the UI as a tree of components rather than isolated files. This perspective made it easier to understand how data flows and how changes in one part of the UI affect others.


Final Reflection

This project gave me a solid foundation in React’s core ideas such as declarative UI, component composition, unidirectional data flow, and clean component design, preparing me to move on to state management, hooks, and more complex application logic.
