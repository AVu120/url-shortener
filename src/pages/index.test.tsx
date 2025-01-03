import { render, screen, fireEvent } from "@testing-library/react";
import IndexPage from "./index";
import { expect, jest, test, beforeAll } from "@jest/globals";

// Mock window.alert
beforeAll(() => {
  window.alert = jest.fn();
});

test("submitting form should make a POST request to /api/urls", async () => {
  // Mock the fetch function
  const mockFetch = jest.fn();
  const longUrl = "https://example.com";
  const shortUrlID = "abc1234";

  // Mock the response of the fetch function
  mockFetch.mockReturnValue(
    Promise.resolve({
      json: () => Promise.resolve({ shortUrlID: shortUrlID }),
    }),
  );
  global.fetch = mockFetch as typeof fetch;

  // Render the component
  render(<IndexPage />);

  // Get the input element and set its value
  const inputElement = screen.getByLabelText("URL");
  fireEvent.change(inputElement, { target: { value: longUrl } });

  // Get the submit button and click it
  const generateButton = screen.getByText("Generate");
  fireEvent.click(generateButton);

  // Assert that fetch was called with the correct arguments
  expect(mockFetch).toHaveBeenCalledWith("/api/urls", {
    method: "POST",
    body: JSON.stringify({
      url: longUrl,
    }),
  });
});
