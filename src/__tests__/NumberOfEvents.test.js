import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import NumberOfEvents from "../components/NumberOfEvents";

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;
  let NumberOfEventsTextBox;

  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents
      setErrorAlert={() => { }} />);
    NumberOfEventsTextBox = NumberOfEventsComponent.queryByRole('textbox');
  })

  test('renders text input', () => {
    expect(NumberOfEventsTextBox).toBeInTheDocument();
  });

  test('default value is 32', () => {
    expect(NumberOfEventsTextBox.value).toBe("32")
  });

  test('value becomes what user inputs', async () => {
    const user = userEvent.setup();
    NumberOfEventsComponent.rerender(<NumberOfEvents
      setCurrentNOE={() => { }}
      setErrorAlert={() => { }}
    />);
    await user.type(NumberOfEventsTextBox, '{backspace}{backspace}10');

    expect(NumberOfEventsTextBox.value).toBe("10")
  });

})