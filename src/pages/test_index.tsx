import { render, screen, fireEvent } from "@testing-library/react";
import IndexPage from "./index";

test("submitting form should make a POST request to /api/urls", async () => {
  // Mock the fetch function
  const mockFetch = jest.fn();
  global.fetch = mockFetch;

  // Render the component
  render(<IndexPage />);

  // Get the input element and set its value
  const inputElement = screen.getByLabelText("URL");
  fireEvent.change(inputElement, { target: { value: "https://example.com" } });

  // Get the submit button and click it
  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  // Assert that fetch was called with the correct arguments
  expect(mockFetch).toHaveBeenCalledWith("/api/urls", {
    method: "POST",
    body: JSON.stringify({
      url: "https://example.com",
    }),
  });
});
