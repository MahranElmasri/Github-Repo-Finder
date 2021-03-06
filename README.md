# Github Repo Finder

![http://g.recordit.co/7STWSbpglf.gif](http://g.recordit.co/7STWSbpglf.gif)

## dependancies

- node

- npm

## Installation

1. clone the project folder.

2. open the terminal and write `cd Github-Repo-Finder`.

3. install server dependancies by `npm install`.

4. install client dependancies by `cd client` then `npm install`.

## development

1. back to project directory by `cd ..`.

2. write `npm run dev` to run both server and client.

## API Endpoints Table

Using the endpoints in the following table
| Http verb | Endpoint                                  | Description                                              |
|-----------|-------------------------------------------|----------------------------------------------------------|
| GET       | `/api/repos/search/?q=searchquery`        | endpoint to seach for repository.                        |
| GET       | `/api/bookmarks/list`                     | endpoint to return us a list of bookmarked repositories. |
| GET       | `/api/bookmarks/bookmark/:repository_id`  | add a repository by its id to bookmark list.             |
| GET       | `/api/bookmarks/remove/?id=repository_id` | to delete the bookmark of a repository by its id         |
| POST      | `/api/users/register`                     | register new user with name, username, password          |
| POST      | `/api/users/login`                        | user login with username, password                       |
