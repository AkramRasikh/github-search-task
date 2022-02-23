export const getRepos = async (params: string) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_GITHUB_SEARCH}${params}`);
    return res.json();
  } catch (error) {
    return error;
  }
};
