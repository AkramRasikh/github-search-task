import React from "react";
import { getRepos } from "./api-calls";
import { RepoSearchResultItem } from "./types";
import RepoContainer from "./middleware/repo-container";
import { Tabs, Header } from "./components";
import daysFromX from "./utils/days-from-x";

export interface RepoSearchItem {
  id: number;
  name: string;
  description: string;
  stargazersCount: number;
  htmlUrl: string;
}

function App() {
  const [favouritesState, setFavouritesState] = React.useState<
    RepoSearchItem["id"][]
  >(JSON.parse(localStorage.getItem("favouriteRepos") || "[]"));
  const [reposState, setReposState] = React.useState<RepoSearchItem[]>([]);
  const [errorState, setErrorState] = React.useState<string>();
  const [showFavouriteSectionState, setShowFavouriteSectionState] =
    React.useState<boolean>(false);

  const sortRepoData = async () => {
    const dateToday = new Date();
    const formattedDateAWeekAgo = daysFromX(dateToday, -7);
    try {
      const { items } = await getRepos(
        `?q=created:%3E${formattedDateAWeekAgo}&sort=stars&order=desc`
      );

      const mappedGithubRepos = items.map(
        ({
          id,
          name,
          description,
          stargazers_count,
          html_url,
        }: RepoSearchResultItem) => ({
          id,
          name,
          description,
          stargazersCount: stargazers_count,
          htmlUrl: html_url,
        })
      );
      setReposState(mappedGithubRepos);
    } catch (error) {
      setErrorState("Error loading Github repos 🤕");
    }
  };

  React.useEffect(() => {
    sortRepoData();
  }, []);

  React.useEffect(() => {
    if (favouritesState.length === 0) {
      setShowFavouriteSectionState(false);
    }
    localStorage.setItem("favouriteRepos", JSON.stringify(favouritesState));
  }, [favouritesState]);

  const addToFavorites = (id: number) => {
    setFavouritesState((prev) => [...prev, id]);
  };

  const removeFromFavorites = (id: number) => {
    setFavouritesState((prev) => prev.filter((favItemId) => favItemId !== id));
  };

  const favouritedItems = React.useMemo(
    () =>
      reposState.filter((repoItem) => favouritesState.includes(repoItem.id)),
    [reposState, favouritesState]
  );

  const showAllRepos =
    favouritesState?.length === 0 ||
    (reposState?.length && !showFavouriteSectionState);

  const showFavouriteRepos =
    showFavouriteSectionState && favouritesState?.length > 0;

  const tabsAvailable = [
    {
      text: "Show search",
      onClick: () => setShowFavouriteSectionState(false),
      selected: !!showAllRepos,
    },
    {
      text: "Show favourites",
      onClick: () => setShowFavouriteSectionState(true),
      selected: showFavouriteRepos,
    },
  ];

  return (
    <div>
      {!errorState ? (
        <>
          <Header>Favourites: {favouritesState.length}</Header>
          <Tabs tabs={tabsAvailable} />
          {showAllRepos ? (
            <RepoContainer
              repoItems={reposState}
              favouriteItems={favouritesState}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
            />
          ) : null}
          {showFavouriteRepos ? (
            <RepoContainer
              dataTestId='repos-favourite-container'
              repoItems={favouritedItems}
              removeFromFavorites={removeFromFavorites}
            />
          ) : null}
        </>
      ) : (
        <Header>{errorState}</Header>
      )}
    </div>
  );
}

export default App;
