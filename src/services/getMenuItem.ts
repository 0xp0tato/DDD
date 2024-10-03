import connectToDB from "@/lib/dbConnect";
import MenuItem from "@/models/MenuItems";

export async function getMenuItemsService() {
  await connectToDB();

  try {
    const menuItems = await MenuItem.find({});

    return menuItems;
  } catch (error) {
    console.log("Error fetching menu items", error);
  }
}
