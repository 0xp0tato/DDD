import { IItems } from "@/interface/items";

export async function editMenuItem(menuItem: IItems) {
  const response = await fetch("/api/menu", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(menuItem),
  });

  const data = await response.json();

  return { data };
}
