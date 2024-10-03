import { editMenuItemService } from "@/services/editMenuItemService";
import { getMenuItemsService } from "@/services/getMenuItem";
import { postMenuItemService } from "@/services/postMenuItemService";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const menuItems = await getMenuItemsService();

    return NextResponse.json({ menuItems, success: true }, { status: 200 });
  } catch (error) {
    console.log("An error occured while fetching menu items", error);
    return NextResponse.json(
      { message: "An Error occured while fetching menu items", success: false },
      { status: 400 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { category, title, description, amount } = body;

    if (!category || !title || !description || !amount)
      return NextResponse.json(
        { message: "Missing information", success: false },
        { status: 400 }
      );

    return postMenuItemService(category, title, description, amount);
  } catch (error) {
    console.log("An error occured while adding an item");
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();

    const { category, title, description, amount, _id, status } = body;

    if (
      !category ||
      !title ||
      !description ||
      !amount ||
      !_id ||
      status === undefined
    )
      return NextResponse.json(
        { message: "Missing information", success: false },
        { status: 400 }
      );

    return editMenuItemService(
      category,
      title,
      description,
      amount,
      _id,
      status
    );
  } catch (error) {
    console.log("An error occured while editing item");
  }
}
