import { IItems } from "@/interface/items";

export async function addNewMenuItem(menuItem: IItems) {
  const response = await fetch("/api/menu", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(menuItem),
  });

  const data = await response.json();

  return { data };
}
