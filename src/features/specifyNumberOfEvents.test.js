import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('The user recieves the number of events they specify.', ({ given, when, then }) => {
    let AppComponent;
    let AppDOM;
    let allRenderedEventItems;
    let NOEInput;


    given('a user is presented with a list of events', () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;

      const NOEDOM = AppDOM.querySelector('#number-of-events');
      NOEInput = within(NOEDOM).queryByRole('textbox');
    });

    when('the user changes the number of events to see', async () => {
      const user = userEvent.setup();
      await user.type(NOEInput, "{backspace}{backspace}10");

      const EventListDOM = AppDOM.querySelector('#event-list');
      allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
    });

    then('the user should see the number of events that they input.', () => {
      expect(allRenderedEventItems.length).toBe(10);
    });
  });
});