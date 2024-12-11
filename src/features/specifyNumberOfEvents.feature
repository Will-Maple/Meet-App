Feature: Specify number of events
  Scenario: The user recieves the number of events they specify.
    Given a user is presented with a list of events
    When the user changes the number of events to see
    Then the user should see the number of events that they input.
