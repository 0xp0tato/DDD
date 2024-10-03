import connectToDB from "@/lib/dbConnect";
import MenuItem from "@/models/MenuItems";
import { NextResponse } from "next/server";

export async function postMenuItemService(
  category: number,
  title: string,
  description: string,
  amount: string
) {
  try {
    await connectToDB();
    const newItem = await MenuItem.create({
      category,
      title,
      description,
      amount,
    });

    if (newItem) {
      return NextResponse.json(
        {
          success: true,
          message: "Item Added Successfully",
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to add new item. Please try again",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.log("An error occured while creating a new menu item");
  }
}
