import styled from "styled-components";
import { RepoSearchItem } from "../App";
import { Button, Link, UListItem, ListItem, RepoContent } from "../components";

const FlexUList = styled(UListItem)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  li {
    @media screen and (min-width: 768px) {
      flex-basis: 40%;
    }
    flex-basis: 70%;
  }
`;

interface RepoContainerProps {
  repoItems: RepoSearchItem[];
  dataTestId?: string;
  removeFromFavorites: (id: number) => void;
  addToFavorites?: (id: number) => void;
  favouriteItems?: RepoSearchItem["id"][];
}

const RepoContainer = ({
  repoItems,
  removeFromFavorites,
  addToFavorites,
  favouriteItems,
  dataTestId,
}: RepoContainerProps) => (
  <FlexUList dataTestId={dataTestId}>
    {repoItems.map(({ id, name, description, stargazersCount, htmlUrl }) => {
      const textContent = [
        `Name: ${name}`,
        description ? `Description: ${description}` : "",
        stargazersCount ? `⭐️: ${stargazersCount}` : "",
      ];

      const showRemoveButton = !addToFavorites || favouriteItems?.includes(id);

      return (
        <ListItem key={id} dataTestId={`repo-${id}`}>
          <RepoContent
            textContent={textContent}
            button={
              showRemoveButton ? (
                <Button onClick={() => removeFromFavorites(id)}>♥</Button>
              ) : (
                <Button onClick={() => addToFavorites(id)}>♡</Button>
              )
            }
            link={
              <Link url={htmlUrl} target='_blank'>
                Check it out!
              </Link>
            }
          />
        </ListItem>
      );
    })}
  </FlexUList>
);

export default RepoContainer;
