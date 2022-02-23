import { fireEvent, render, screen, within } from "@testing-library/react";
import { getRepos } from "./api-calls";
import App from "./App";
import mockData from "./mock-data";

jest.mock("./api-calls");

const { items: mockItems } = mockData;

test("renders a list of repos with their available details", async () => {
  const getReposMock = getRepos as jest.Mock;
  getReposMock.mockImplementation(() => Promise.resolve(mockData));
  render(<App />);
  const titleText = await screen.findByText(/Favourites: 0/i);
  expect(titleText).toBeInTheDocument();
  mockItems.forEach(({ id, name, description, stargazers_count, html_url }) => {
    const repoBlock = within(screen.getByTestId(`repo-${id}`));
    repoBlock.getByText(`Name: ${name}`);
    if (description) {
      repoBlock.getByText(`Description: ${description}`);
    }
    repoBlock.getByText(`⭐️: ${stargazers_count}`);
    repoBlock.getByText("♡");
    expect(repoBlock.getByRole("link")).toHaveAttribute("href", html_url);
    expect(repoBlock.queryByText("♥")).not.toBeInTheDocument();
  });
});

test("user is able to add, remove & see the repo(s) in favourites", async () => {
  const getReposMock = getRepos as jest.Mock;
  getReposMock.mockImplementation(() => Promise.resolve(mockData));
  render(<App />);
  const getItem = jest.spyOn(Storage.prototype, "getItem");
  const setItem = jest.spyOn(Storage.prototype, "setItem");
  const titleText = await screen.findByText(/Favourites: 0/i);
  expect(titleText).toBeInTheDocument();
  expect(getItem).toHaveBeenCalledWith("favouriteRepos");
  const [firstRepo] = mockItems;
  const repoBlock = within(screen.getByTestId(`repo-${firstRepo.id}`));
  const repoBlockBtnPreFav = repoBlock.getByText("♡");
  fireEvent.click(repoBlockBtnPreFav);
  repoBlock.getByText("♥"); // changes to filled heart
  expect(repoBlock.queryByText("♡")).not.toBeInTheDocument();
  screen.getByText("Favourites: 1");
  expect(setItem).toHaveBeenCalledWith(
    "favouriteRepos",
    JSON.stringify([firstRepo.id])
  );
  // fav section
  fireEvent.click(screen.getByText("Show favourites"));
  expect(screen.queryByTestId("repos-container")).not.toBeInTheDocument();
  screen.getByTestId("repos-favourite-container");
  screen.getByTestId(`repo-${firstRepo.id}`);
  screen.getByText(`Name: ${firstRepo.name}`);
  if (firstRepo?.description) {
    screen.getByText(`Description: ${firstRepo.description}`);
  }
  screen.getByText(`⭐️: ${firstRepo.stargazers_count}`);
  expect(screen.getByRole("link")).toHaveAttribute("href", firstRepo.html_url);
  // back to zero
  const repoBlockBtnFav = screen.getByText("♥");
  fireEvent.click(repoBlockBtnFav);
  screen.getByText("Favourites: 0");
});

test("user can see favourited repos upon render (localStorage)", async () => {
  const getReposMock = getRepos as jest.Mock;
  getReposMock.mockImplementation(() => Promise.resolve(mockData));
  const [firstRepo, secondRepo] = mockItems;
  jest.spyOn(window.localStorage.__proto__, "getItem");
  window.localStorage.__proto__.getItem = jest.fn();
  window.localStorage.__proto__.getItem.mockImplementation(() =>
    JSON.stringify([firstRepo.id, secondRepo.id])
  );
  render(<App />);
  await screen.findByText("Favourites: 2");
  fireEvent.click(screen.getByText("Show favourites"));
  [firstRepo, secondRepo].forEach((repo) => {
    const insideRepo = within(screen.getByTestId(`repo-${repo.id}`));
    screen.getByText(`Name: ${repo.name}`);
    if (repo?.description) {
      screen.getByText(`Description: ${repo.description}`);
    }
    screen.getByText(`⭐️: ${repo.stargazers_count}`);
    expect(insideRepo.getByRole("link")).toHaveAttribute("href", repo.html_url);
  });
});

test("user sees error message if API fails", async () => {
  const getReposMock = getRepos as jest.Mock;
  getReposMock.mockImplementation(() =>
    Promise.reject("Error loading Github repos 🤕")
  );
  render(<App />);
  await screen.findByText("Error loading Github repos 🤕");
});
