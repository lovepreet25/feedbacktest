import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import FeedbackForms from './FeedbackForms';  

describe("FeedbackForms", () => {
  test("submissions are disabled when score is less than 5 and message is less than 10 characters", () => {
    const handleSubmit = jest.fn();
    render(<FeedbackForms onSubmit={handleSubmit} />);

    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, { target: { value: 4 } });

    const textArea = screen.getByPlaceholderText(/please provide more details/i);
    fireEvent.change(textArea, { target: { value: "Hello" } });
    
    const submitButton = screen.getByRole("button");

   expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
  });
  test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
    const score = "3";
    const msg = "The pizza crust was too thick";
    const handleSubmit = jest.fn();
    render(<FeedbackForms onSubmit={handleSubmit} />);

    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, { target: { value: score } });

    const textArea = screen.getByLabelText(/Message:/);
    fireEvent.change(textArea, { target: { value: msg } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      msg,
  });
  });

  test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
    const score = "9";
    const handleSubmit = jest.fn();
    render(<FeedbackForms onSubmit={handleSubmit} />);

    const rangeInput = screen.getByLabelText(/Score:/)
    fireEvent.change(rangeInput, { target: { value: score } });

    const submitButton = screen.getByRole("button")
    fireEvent.click(submitButton);
    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      msg: ""
    });
  });
}); 
