# Sistem Toko

https://sistemtoko.com is a service application for managing the performance of online and offline stores easily, modernly, and with the latest features.

In this project, there's sample end-to-end automation tests for Login web and Reset password feature by using Cypress.

## Table of Contents

- [Sistem Toko](#sistem-toko)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Clone the project](#clone-the-project)
    - [Install the packages](#install-the-packages)
    - [Run the tests](#run-the-tests)
    - [Run all the tests \[headless mode\]](#run-all-the-tests-headless-mode)
    - [Generate reports](#generate-reports)
  - [Sample Tests \[videos\]](#sample-tests-videos)
    - [Feature \[Login Web\]](#feature-login-web)
    - [Feature \[Reset Password\]](#feature-reset-password)
    - [Testing All Features \[Headless Mode\]](#testing-all-features-headless-mode)
    - [Test Reports \[With Screenshots\]](#test-reports-with-screenshots)

## Getting Started

### Clone the project

```bash
git clone https://github.com/primprum/sistem-toko.git
```

### Install the packages

```bash
cd sistem-toko \
npm i
```

### Run the tests

```bash
npm run cy:open
```

### Run all the tests [headless mode]

```bash
npm run cy:run
```

### Generate reports

```bash
npm run report
```

## Sample Tests [videos]

There are 2 features file to test:

- Login Web
- Reset Password

### Feature [Login Web]

The purpose of this test is to make sure that the user should only be able to login with valid credentials.

There are 4 scenarios in this test:

- Login with correct Username and correct Password
- Login with correct Username and incorrect Password
- Login with incorrect Username and correct Password
- Login with incorrect Username and incorrect Password

[![Test Demo](https://img.youtube.com/vi/lEJ3HrbZLOA/maxresdefault.jpg)](https://www.youtube.com/embed/lEJ3HrbZLOA)

### Feature [Reset Password]

The purpose of this test is to make sure that only the registered user should be able to reset their password.

There are 2 scenarios in this test:

- Forgot Password with registered email
- Forgot Password with unregistered email

[![Test Demo](https://img.youtube.com/vi/d8HWCxI_OZA/maxresdefault.jpg)](https://www.youtube.com/embed/d8HWCxI_OZA)

### Testing All Features [Headless Mode]

[![Test Demo](https://img.youtube.com/vi/nQH6gJ7q94s/maxresdefault.jpg)](https://www.youtube.com/embed/nQH6gJ7q94s)

### Test Reports [With Screenshots]

Github Pages => [https://primprum.github.io/sistem-toko/](https://primprum.github.io/sistem-toko/)
