export async function deleteMenuItem(id: string | null) {
  const response = await fetch("/api/menu", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  const data = await response.json();

  return { data };
}
