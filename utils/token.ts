import { METHODS } from "http";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";

export async function getToken(email: string, passwordHash: string) {
  let data = { email, passwordHash };

  try {
    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
    if (result.token && result.user) {
      if (typeof window !== undefined) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));
        return result;
      }
    }
  } catch (err) {
    console.log(err);
  }
  return null;
}
