# React Query Demo
This repository serves as a demonstration of different approaches to using the React Query library in a React application. There are three branches available:

- demo-without-abstraction
- demo-with-abstraction
- demo-with-abstraction-and-utils

Each branch showcases a different level of abstraction and organization in using the React Query library, providing a progressive example of how to structure your code for improved maintainability and reusability.

## Branches

1. demo-without-abstraction
   This branch demonstrates the most basic usage of the React Query library. It is a minimalistic implementation without any additional abstraction layers. The primary goal is to show how to perform simple data fetching and manipulation using React Query.

2. demo-with-abstraction
   In this branch, we introduce an abstraction layer by creating custom hooks for fetching data using React Query. This approach promotes code reusability and makes it easier to manage API calls and data retrieval logic.

3. demo-with-abstraction-and-utils
   This branch extends the previous demo-with-abstraction branch by adding a utilities folder (utils/) to showcase how shared utility functions can be used across the codebase. It includes an example logger utility function that demonstrates how to create and use utility functions effectively.

## Usage

To use this branch, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Josh-Karp/react-query-demo.git
```

2. Checkout the demo-without-abstraction branch:

```bash
git checkout demo-without-abstraction / demo-with-abstraction / demo-with-abstraction-and-utils
```

3. Install dependencies:

```bash
yarn
```

Start the development server:

```bash
yarn run dev
```

## Additional Notes

The utils/ folder in the demo-with-abstraction-and-utils branch serves as an example of how you can structure and use utility functions to share common functionality across your application.

If you have any questions or need further assistance, please don't hesitate to reach out.

## Resources

- [React Query](https://tanstack.com/query/v3/docs/react/overview)
