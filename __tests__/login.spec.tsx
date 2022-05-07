import Login from "../pages/login";
import { render, act, fireEvent } from "@testing-library/react";
import { useAuth } from "../context/authContext";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("../context/AuthContext");
jest.mock("next/router");

describe("Login", () => {
  let expectedEmail: string;
  let expectedPassword: string;
  let expectedLogin: jest.Mock;
  let expectedPush: jest.Mock;
  beforeEach(() => {
    expectedEmail = "admin@rooted.de";
    expectedPassword = "password";
    expectedLogin = jest.fn();
    expectedPush = jest.fn();

    (useAuth as jest.Mock).mockReturnValue({ login: expectedLogin });
    (useRouter as jest.Mock).mockReturnValue({ push: expectedPush });
  });

  it("should redirect to the homepage if successful login", async () => {
    const { getByPlaceholderText, getByText } = render(<Login />);
    const emailInput = getByPlaceholderText("Your Email");
    const passwordInput = getByPlaceholderText("Your Password");
    const submitButton = getByText("Sign in");
    expectedLogin.mockReturnValue({
      id: "123",
      email: expectedEmail,
      password: expectedPassword,
      name: "Admin",
      role: "Admin",
    });

    await act(() => {
      fireEvent.change(emailInput, { target: { value: expectedEmail } });
      fireEvent.change(passwordInput, { target: { value: expectedPassword } });
      fireEvent.click(submitButton);
    });
    expect(expectedLogin).toHaveBeenCalledTimes(1);
    expect(expectedPush).toHaveBeenCalledTimes(1);
    expect(expectedPush).toHaveBeenCalledWith("/");
  });

  it("should clear the form if unsuccessful login", async () => {
    const { getByPlaceholderText, getByText } = render(<Login />);
    const emailInput = getByPlaceholderText("Your Email");
    const passwordInput = getByPlaceholderText("Your Password");
    const submitButton = getByText("Sign in");

    await act(() => {
      fireEvent.change(emailInput, { target: { value: expectedEmail } });
      fireEvent.change(passwordInput, { target: { value: "aklsdjaklsjd" } });
      fireEvent.click(submitButton);
    });
    expect(expectedLogin).toHaveBeenCalledTimes(1);
    expect(emailInput).toHaveValue("");
    expect(passwordInput).toHaveValue("");
  });
});
