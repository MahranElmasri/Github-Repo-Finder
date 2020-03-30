# Github Repo Finder

![http://g.recordit.co/7STWSbpglf.gif](http://g.recordit.co/7STWSbpglf.gif)

## dependancies

- node

- npm

## Installation

1. clone the project folder.

2. open the terminal go to project direcrory.

3. install server dependancies by `npm install`.

4. install client dependancies by `cd client` then `npm install`.

## development

1. back to project directory by `cd ..`.

2. run `npm run dev` to run both side server and client.

## API Endpoints Table

Using the endpoints in the following table

| http verb | endpoint | description |

| --------- | ------------------------------------- | ---------------------------------------------------------- |

| GET | `/repos/search/?searchQuery=q`\* | return response {id, name,avatar_url, owner, forks, stars} |

| GET | `/bookmarks/list` | gives list of bookmarked repositories |

| GET | `/bookmarks/bookmark/:repository_id` | allows bookmarking a repository by its id. |

| GET | `/bookmarks/remove/?id=repository_id` | to delete the bookmark of a repository by its id |

| POST | `/userauth/users/regisrer` | register new user with name, username, password |

| POST | `/userauth/users/login` | to login with username, password |