import { MENU_CATEGORY } from "@/utils/constants";
import mongoose from "mongoose";

const categoryValues = MENU_CATEGORY.map((category) => category.value);

const menuItemSchema = new mongoose.Schema({
  category: {
    type: Number,
    required: true,
    enum: categoryValues,
    validate: {
      validator: function (value: number) {
        return categoryValues.includes(value);
      },
      message: (props: { value: number }) =>
        `${props.value} is not a valid category!`,
    },
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const MenuItem =
  mongoose.models.MenuItem || mongoose.model("MenuItem", menuItemSchema);
export default MenuItem;
