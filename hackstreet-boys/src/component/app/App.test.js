import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// Testing

  // Test 1: Does the page load
  // Test 2: If enter button is clicked, does it take user to the next page  
  // Test 3: Does the table = true when clicking a week 'node'
  // Test 4: Does the RIGHT table appear when clicking a week
  // Test 5: Does the table contain the expected text for that week

  test('Does the page load', () => {
  render (<App />);
  const actual = screen.getByRole("heading", {name: "The School of Code Roadmap App"})
  expect(actual).toBeInTheDocument()
})


test('Does enter button take user to the next page', () => {
render (<App />);
fireEvent(
  screen.getByText( "Enter"),
  new MouseEvent('click', {
   bubbles: true,
   cancelable: true, 
  })
)

const actual = screen.getByRole('button',  {name: 'Week 1'}) 
expect(actual).toBeInTheDocument()

}
)

