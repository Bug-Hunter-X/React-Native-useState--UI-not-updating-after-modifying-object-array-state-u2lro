# React Native useState Bug: UI Update Failure

This repository demonstrates a common error when using the `useState` hook in React Native with object or array states. Directly mutating the object or array doesn't trigger UI re-renders because React performs a shallow comparison.  The solution involves creating a new object or array instead of modifying the existing one.

## Bug
The `bug.js` file shows the incorrect approach, directly modifying the state array, leading to the UI not updating.  The `bugSolution.js` file demonstrates the correct way to handle state updates. 