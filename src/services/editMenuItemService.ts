import connectToDB from "@/lib/dbConnect";
import MenuItem from "@/models/MenuItems";
import { NextResponse } from "next/server";

export async function editMenuItemService(
  category: number,
  title: string,
  description: string,
  amount: string,
  _id: string,
  status: boolean
) {
  try {
    await connectToDB();

    const editedItem = await MenuItem.findByIdAndUpdate(_id, {
      category,
      title,
      description,
      amount,
      status,
    });

    if (editedItem) {
      return NextResponse.json(
        { success: true, message: "Item Edited Successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to edit item. Please try again",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.log("An error occured while editing the item");
  }
}
