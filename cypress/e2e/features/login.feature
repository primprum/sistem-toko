Feature: Web Login 
    User should only able to login with valid credentials


Background: User is on sistemtoko.com login page
    Given user is on login page


Scenario Outline: Login with '<username>' Username & '<password>' Password
  When user enters '<username>' Username and '<password>' Password
  And clicks "Login" button
  Then user should '<result>' log in

Examples:
    | username |  password | result |
    | correct  | correct  | successfully  |
    | correct  | incorrect  | fail  |
    | incorrect  | correct  | fail  |
    | incorrect  | incorrect  | fail  |







