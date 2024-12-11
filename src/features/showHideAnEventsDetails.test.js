import { loadFeature, defineFeature } from 'jest-cucumber';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import { getEvents } from '../api';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let EventComponent;
  let allEvents

  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {

    given('a list of events is presented', () => {

    });

    when('a user clicks on show details', async () => {
      const user = userEvent.setup();
      const showDetails = EventComponent.queryByText('show details');
      await user.click(showDetails);
    });

    then('the user should recieve more details.', () => {
      expect(EventComponent.getByTestId("event-details")).toBeInTheDocument();
    });
  });

  test('User can collapse an event to hide details', ({ given, when, then }) => {

    given('a list of events is presented', () => {

    });

    when('a user clicks on show details and then hide details', async () => {
      const user = userEvent.setup();
      const showDetails = EventComponent.queryByRole('show details');
      const hideDetails = EventComponent.queryByRole('hide details');
      await user.click(showDetails);
      await user.click(hideDetails);
    });

    then('the user should hide details the details presented.', () => {
      expect(EventComponent.queryByText(allEvents[0].description)).not.toBeInTheDocument();
    });
  });

});