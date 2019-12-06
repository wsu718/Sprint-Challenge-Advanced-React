- [ ] Why would you use class component over function components (removing hooks from the question)?

You'd use class components to store state and so you could use lifecycle methods. 

- [ ] Name three lifecycle methods and their purposes.

constructor - where we set up state in class components

render - the function that tells React what to display on the screen

componentDidMount - good for async calls like axios, to fetch data after the page has already rendered

- [ ] What is the purpose of a custom hook?

Custom hooks are useful to DRY out code — they are reusable and can be used across different components. 

- [ ] Why is it important to test our apps?

To be able to build high-quality apps that serve our user’s purposes. We try to test mostly for high priority use cases for the app. 