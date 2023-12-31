# AdScribe Fullstack Task

## Introduction

> Congratulations on reaching this stage of the interview process!

In this exercise, we will be building a fullstack feature using React,
TypeScript, Express and Prisma.

### Requirements

You should have the following installed in your environment
- NPM

### Setup

1. Clone the repository

From the root directory

1. `npm i`
2. `cd ./client && npm i`
3. `cd ../server && npm i`
4. `npx prisma migrate --dev --name "init"`
5. `cd ../`
6. `npm run dev`

Please message me on LinkedIn if you have any questions.

## The Task

Build an autocomplete that allows users to search and select a country.

The requirements are as follows:

1. The user should select the country via an autocomplete component
2. The autocomplete should present 10 countries matching the search query
3. The search results should match either the country code or the country name (case insensitive) - *the country code column does not exist on the Country table so you will have to add it*
4. The user should be able to select a country from the list
5. The user should be able to clear the autocomplete

Don't worry about styling for now.

Good luck!
