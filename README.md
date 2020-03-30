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

| Http verb | Endpoint                              | Description                                              |
|-----------|---------------------------------------|----------------------------------------------------------|
| GET       | `/repos/search/?searchQ`              | endpoint to seach for repository.                        |
| GET       | `/bookmarks/list`                     | endpoint to return us a list of bookmarked repositories. |
| GET       | `/bookmarks/bookmark/:repository_id`  | add a repository by its id to bookmark list.             |
| GET       | `/bookmarks/remove/?id=repository_id` | to delete the bookmark of a repository by its id         |
| POST      | `/auth/users/register`                | register new user with name, username, password          |
| POST      | `/auth/users/login`                   | user login with username, password                       |
