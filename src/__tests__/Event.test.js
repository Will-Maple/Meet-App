import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import { getEvents } from '../api';

describe('<Event /> component', () => {
  let EventComponent;
  let allEvents

  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test('Event has a summary', () => {
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });

  test('Event has a starttime', () => {
    expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
  });

  test('Event has a location', () => {
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
  });

  test('renders event details button with the title (show details)', () => {
    expect(EventComponent.queryByText('show details')).toBeInTheDocument();
  });

  test('Details are hidden by default', () => {
    expect(EventComponent.queryByText(allEvents[0].description)).not.toBeInTheDocument();
  });

  test('Details are shown after show details is clicked', async () => {
    const user = userEvent.setup();
    const showDetails = EventComponent.queryByRole('show details');
    await user.click(showDetails);

    expect(EventComponent.queryByText(allEvents[0].description)).toBeInTheDocument();
  });

  test('Details are hidden after hide details is clicked', async () => {
    const user = userEvent.setup();
    const showDetails = EventComponent.queryByRole('show details');
    const hideDetails = EventComponent.queryByRole('hide details');
    await user.click(showDetails);
    await user.click(hideDetails);

    expect(EventComponent.queryByText(allEvents[0].description)).not.toBeInTheDocument();
  })

});