import { ILogin } from "@/interface/login";

export async function handleLogin(credentials: ILogin) {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const status = response.status;
  const data = await response.json();

  return { status, data };
}
