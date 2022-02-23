export interface NullableSimpleUser {
  /**
   *
   * @type {string}
   * @memberof NullableSimpleUser
   */
  name?: string | null;
  /**
   *
   * @type {string}
   * @memberof NullableSimpleUser
   */
  email?: string | null;
  /**
   *
   * @type {string}
   * @memberof NullableSimpleUser
   */
  login: string;
  /**
   *
   * @type {number}
   * @memberof NullableSimpleUser
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof NullableSimpleUser
   */
  nodeId: string;
  /**
   *
   * @type {string}
   * @memberof NullableSimpleUser
   */
  avatarUrl: string;
  /**
   *
   * @type {string}
   * @memberof NullableSimpleUser
   */
  gravatarId: string | null;
  /**
   *
   * @type {string}
   * @memberof NullableSimpleUser
   */
  url: string;
  /**
   *
   * @type {string}
   * @memberof NullableSimpleUser
   */
  htmlUrl: string;
  /**
   *
   * @type {string}
   * @memberof NullableSimpleUser
   */
  followersUrl: string;
  /**
   *
   * @type {string}
   * @memberof NullableSimpleUser
   */
  followingUrl: string;
  /**
   *
   * @type {string}
   * @memberof NullableSimpleUser
   */
  gistsUrl: string;
  /**
   *
   * @type {string}
   * @memberof NullableSimpleUser
   */
  starredUrl: string;
  /**
   *
   * @type {string}
   * @memberof NullableSimpleUser
   */
  subscriptionsUrl: string;
  /**
   *
   * @type {string}
   * @memberof NullableSimpleUser
   */
  organizationsUrl: string;
  /**
   *
   * @type {string}
   * @memberof NullableSimpleUser
   */
  reposUrl: string;
  /**
   *
   * @type {string}
   * @memberof NullableSimpleUser
   */
  eventsUrl: string;
  /**
   *
   * @type {string}
   * @memberof NullableSimpleUser
   */
  receivedEventsUrl: string;
  /**
   *
   * @type {string}
   * @memberof NullableSimpleUser
   */
  type: string;
  /**
   *
   * @type {boolean}
   * @memberof NullableSimpleUser
   */
  siteAdmin: boolean;
  /**
   *
   * @type {string}
   * @memberof NullableSimpleUser
   */
  starredAt?: string;
}

export interface FullRepositoryPermissions {
  /**
   *
   * @type {boolean}
   * @memberof FullRepositoryPermissions
   */
  admin: boolean;
  /**
   *
   * @type {boolean}
   * @memberof FullRepositoryPermissions
   */
  maintain?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof FullRepositoryPermissions
   */
  push: boolean;
  /**
   *
   * @type {boolean}
   * @memberof FullRepositoryPermissions
   */
  triage?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof FullRepositoryPermissions
   */
  pull: boolean;
}

export interface InlineResponse20031 {
  /**
   *
   * @type {number}
   * @memberof InlineResponse20031
   */
  totalCount: number;
  /**
   *
   * @type {boolean}
   * @memberof InlineResponse20031
   */
  incompleteResults: boolean;
  /**
   *
   * @type {Array<RepoSearchResultItem>}
   * @memberof InlineResponse20031
   */
  items: Array<RepoSearchResultItem>;
}

export interface RepoSearchResultItem {
  /**
   *
   * @type {number}
   * @memberof RepoSearchResultItem
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  nodeId: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  fullName: string;
  /**
   *
   * @type {NullableSimpleUser}
   * @memberof RepoSearchResultItem
   */
  owner: NullableSimpleUser | null;
  /**
   *
   * @type {boolean}
   * @memberof RepoSearchResultItem
   */
  _private: boolean;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  htmlUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  description: string | null;
  /**
   *
   * @type {boolean}
   * @memberof RepoSearchResultItem
   */
  fork: boolean;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  url: string;
  /**
   *
   * @type {Date}
   * @memberof RepoSearchResultItem
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof RepoSearchResultItem
   */
  updatedAt: Date;
  /**
   *
   * @type {Date}
   * @memberof RepoSearchResultItem
   */
  pushedAt: Date;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  homepage: string | null;
  /**
   *
   * @type {number}
   * @memberof RepoSearchResultItem
   */
  size: number;
  /**
   *
   * @type {number}
   * @memberof RepoSearchResultItem
   */
  stargazers_count: number; // wrongly generated to camelcase stargazers_count
  /**
   *
   * @type {number}
   * @memberof RepoSearchResultItem
   */
  watchersCount: number;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  language: string | null;
  /**
   *
   * @type {number}
   * @memberof RepoSearchResultItem
   */
  forksCount: number;
  /**
   *
   * @type {number}
   * @memberof RepoSearchResultItem
   */
  openIssuesCount: number;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  masterBranch?: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  defaultBranch: string;
  /**
   *
   * @type {number}
   * @memberof RepoSearchResultItem
   */
  score: number;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  forksUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  keysUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  collaboratorsUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  teamsUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  hooksUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  issueEventsUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  eventsUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  assigneesUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  branchesUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  tagsUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  blobsUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  gitTagsUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  gitRefsUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  treesUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  statusesUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  languagesUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  stargazersUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  contributorsUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  subscribersUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  subscriptionUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  commitsUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  gitCommitsUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  commentsUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  issueCommentUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  contentsUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  compareUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  mergesUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  archiveUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  downloadsUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  issuesUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  pullsUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  milestonesUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  notificationsUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  labelsUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  releasesUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  deploymentsUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  gitUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  sshUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  cloneUrl: string;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  svnUrl: string;
  /**
   *
   * @type {number}
   * @memberof RepoSearchResultItem
   */
  forks: number;
  /**
   *
   * @type {number}
   * @memberof RepoSearchResultItem
   */
  openIssues: number;
  /**
   *
   * @type {number}
   * @memberof RepoSearchResultItem
   */
  watchers: number;
  /**
   *
   * @type {Array<string>}
   * @memberof RepoSearchResultItem
   */
  topics?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  mirrorUrl: string | null;
  /**
   *
   * @type {boolean}
   * @memberof RepoSearchResultItem
   */
  hasIssues: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RepoSearchResultItem
   */
  hasProjects: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RepoSearchResultItem
   */
  hasPages: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RepoSearchResultItem
   */
  hasWiki: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RepoSearchResultItem
   */
  hasDownloads: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RepoSearchResultItem
   */
  archived: boolean;
  /**
   * Returns whether or not this repository disabled.
   * @type {boolean}
   * @memberof RepoSearchResultItem
   */
  disabled: boolean;
  /**
   * The repository visibility: public, private, or internal.
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  visibility?: string;
  /**
   *
   * @type {NullableLicenseSimple}
   * @memberof RepoSearchResultItem
   */
  license: NullableLicenseSimple | null;
  /**
   *
   * @type {FullRepositoryPermissions}
   * @memberof RepoSearchResultItem
   */
  permissions?: FullRepositoryPermissions;
  /**
   *
   * @type {Array<object>}
   * @memberof RepoSearchResultItem
   */
  textMatches?: Array<object>;
  /**
   *
   * @type {string}
   * @memberof RepoSearchResultItem
   */
  tempCloneToken?: string;
  /**
   *
   * @type {boolean}
   * @memberof RepoSearchResultItem
   */
  allowMergeCommit?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RepoSearchResultItem
   */
  allowSquashMerge?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RepoSearchResultItem
   */
  allowRebaseMerge?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RepoSearchResultItem
   */
  allowAutoMerge?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RepoSearchResultItem
   */
  deleteBranchOnMerge?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RepoSearchResultItem
   */
  allowForking?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RepoSearchResultItem
   */
  isTemplate?: boolean;

  html_url?: string;
}

export interface NullableLicenseSimple {
  /**
   *
   * @type {string}
   * @memberof NullableLicenseSimple
   */
  key: string;
  /**
   *
   * @type {string}
   * @memberof NullableLicenseSimple
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof NullableLicenseSimple
   */
  url: string | null;
  /**
   *
   * @type {string}
   * @memberof NullableLicenseSimple
   */
  spdxId: string | null;
  /**
   *
   * @type {string}
   * @memberof NullableLicenseSimple
   */
  nodeId: string;
  /**
   *
   * @type {string}
   * @memberof NullableLicenseSimple
   */
  htmlUrl?: string;
}
