export async function getAllMenuItems() {
  const response = await fetch("/api/menu");
  const data = await response.json();

  return { data };
}
