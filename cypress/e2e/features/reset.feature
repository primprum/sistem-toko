Feature: Password Reset
    Only registered user should be able to reset their password


Background: User is on sistemtoko.com login page
    Given user is on login page


Scenario Outline: Forgot Password with '<status>' email
  When user clicks 'I forgot my password' links 
  And enters the '<status>' email
  And clicks 'Send Reminder' button
  Then user "<action>" receive an email for password update

Examples:
    | status | action | 
    | registered  | should  | 
    | unregistered  | shouldn't |


