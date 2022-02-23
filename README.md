## Run the app

REACT_APP_GITHUB_SEARCH=https://api.github.com/search/repositories

### `npm start`

## Run tests

### `npm test`

## Tech stack

- React
- TypeScript
- Styled-components
- React-testing-library

## Architecture

- App.tsx - handles all the logic of the app
- Middleware - scales the data being pass down between App & components to handle abstractions, keeping components dumb. I wouldn’t normally use a middleware folder and would usually tie it to a page’s own components. But given the small scale of thetask I created a middleware folder
- Components - simple/dumb re-usable stateless components
- Api-calls - file to call endpoints. NOTE: deconstruction takes place whether it is called, not in the api-call file itself
- Types - generated types from openapi. However there are a few open issues regarding the automatic camel casing of the types so I had to manual change a couple properties to fit the app (`stargazers_count`, `html_url`) - with more time I would have investigated further. [Example of issue](https://github.com/OpenAPITools/openapi-generator/issues/7080)
- Utils - utils functions

## How I approached the challenge

I first understood the functional requirements of the task. I broke these down in to three general steps.

1. Call & render the data from the API
2. Allow the user to favourite/unfavourite the repos
3. Allow the user to persist favourited repos’ data (local storage)

Given step one, I first wanted to understand the data I was working with and so generated the types using openapi. I then took the types I needed and put them in to a separate types folder to reference when calling the API.

I then wrote my first test case of seeing the repos with the relevant data. I then called the API and deconstructed the relevant data in `App.tsx`, rendering and passing the tests.

I was initially thinking of creating a `isFavourite` flag on the repo data and then saving the whole object to local storage. But because the data can change, I opted to store the ids in a separate state - and local storage.

With this in mind, I knew I would pass down the repo items and check against the favourited ids to determine whether they’d be in the `Show favourite` tab. This also allowed me to treat App as a single page that handles all the logic while the subsections of search & favourites would be stateless.

On load, the app reads from local storage and sets state.

## What I would have done with time …:

- Bonus task
- More research into the fore-mentioned generating types issue (had to resort to generating all types from GitHub and cherry pick what I wanted). This also explains why I removed the content of `generated-sources` folder as it was too bloated
- Add some a couple more tests for clicking between tabs
- Solve the double render on clicking some items
- Move app.tsx logic to custom hook
- Refactor tests (some duplication can be moved to a test-utils)
- Refactor local storage tests
- Disable show favourite tab button if there are no favourites
- Make the app look nice 😆
- Add a loading spinner
