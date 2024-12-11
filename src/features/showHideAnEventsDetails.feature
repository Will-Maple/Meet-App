Feature: Show/hide Event Details
  Scenario: User can expand an event to see its details
    Given a list of events is presented
    When a user clicks on show details
    Then the user should recieve more details.

  Scenario: User can collapse an event to hide details
    Given a list of events is presented
    When a user clicks on show details and then hide details
    Then the user should hide details the details presented.