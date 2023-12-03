# PlayWright Test Automation by Suman Jayaprakash

Playwright POM Framework - Login Functionality Tests

## Overview
This repository contains automated tests for the login functionality of a web application using the Playwright Page Object Model (POM) framework. The framework is designed to provide a structured and maintainable way to create and manage Playwright tests.

## Prerequisites
Make sure you have the following installed on your machine:

Node.js (https://nodejs.org/)
Playwright (https://playwright.dev/)

Getting Started
## Clone this repository to your local machine:
git clone https://github.com/SumanJayaprakash/test-automation-abn-amro.git
## Install dependencies:
npm install
## Set up your configuration:
Open the playwright.config.ts file and update the URL of your web application.
Application URL:
file://TEST-AUTOMATION-ABN-AMRO/test-automation-abn-amro/src/index.html

## Running Tests and Generating the report
To execute the tests, run the following command:

1.Test Run in VS Code and to generate HTML Report of the test
`npx playwright test --reporter=html`
2.Run Test in UI mode
`npx playwright test --headed`
3.Run Test in Playwright UI
`npx playwright test --ui`
4.Record & Playback through codegen
`npx playwright codegen`
5.To Launch HTML report
`npx playwright show-report`

