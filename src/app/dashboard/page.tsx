"use client";

import ItemCard from "@/components/MenuItems/ItemCard";
import { IItems } from "@/interface/items";
import { addNewMenuItem } from "@/lib/addNewMenuItem";
import { deleteMenuItem } from "@/lib/deleteMenuItem";
import { editMenuItem } from "@/lib/editMenuItem";
import { getAllMenuItems } from "@/lib/getAllMenuItems";
import { postMenuItemService } from "@/services/postMenuItemService";
import { MENU_CATEGORY } from "@/utils/constants";
import { Button, Form, Input, Modal, Select, Switch } from "antd";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [menuItems, setMenuItems] = useState<Array<IItems>>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flags, setFlags] = useState({
    addItemFlag: false,
    editItemFlag: false,
  });

  const [initialValues, setInitialValues] = useState<IItems>({
    category: null,
    title: null,
    description: null,
    amount: null,
    _id: null,
    status: false,
  });

  const fetchMenuItems = async () => {
    const { data } = await getAllMenuItems();
    setMenuItems(data.menuItems);
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  async function handleModalSubmit(values: IItems) {
    if (flags.addItemFlag) {
      await addNewMenuItem(values);
      setFlags({ ...flags, addItemFlag: false });
    } else if (flags.editItemFlag) {
      await editMenuItem({ ...values, _id: initialValues._id });
      setFlags({ ...flags, editItemFlag: false });
    }
    fetchMenuItems();
    setIsModalOpen(false);
  }

  const handleCancel = () => {
    setIsModalOpen(false);
    setInitialValues({
      category: null,
      title: null,
      description: null,
      amount: null,
      _id: null,
      status: false,
    });
    setFlags({
      addItemFlag: false,
      editItemFlag: false,
    });
  };

  return (
    <>
      <h1 className="text-2xl text-center mb-5">Menu Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {menuItems ? (
          menuItems.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              editable={true}
              setInitialValues={setInitialValues}
              setIsModalOpen={setIsModalOpen}
              setFlags={setFlags}
              flags={flags}
            />
          ))
        ) : (
          <div>No items present in the shop</div>
        )}
      </div>
      <button
        type="button"
        onClick={() => {
          setFlags({ ...flags, addItemFlag: true });
          setIsModalOpen(!isModalOpen);
        }}
        className="block ml-auto mr-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Add Item
      </button>
      <Modal
        title={flags.addItemFlag ? "Add New Item" : "Edit Item"}
        onCancel={handleCancel}
        open={isModalOpen}
        footer={null}
        destroyOnClose={true}
      >
        {flags.addItemFlag ||
          (flags.editItemFlag && (
            <Form
              layout="vertical"
              initialValues={initialValues}
              onFinish={handleModalSubmit}
            >
              <Form.Item
                label="Category"
                name="category"
                rules={[{ required: true, message: "Please Select Category" }]}
              >
                <Select options={MENU_CATEGORY} />
              </Form.Item>
              <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: "Please input title" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Description"
                name="description"
                rules={[
                  { required: true, message: "Please input description" },
                ]}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                label="Amount"
                name="amount"
                rules={[{ required: true, message: "Please input amount" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item valuePropName="checked" name="status">
                <Switch
                  checkedChildren="Active"
                  unCheckedChildren="Inactive"
                  className="bg-gray-500"
                />
              </Form.Item>
              <Form.Item>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </Form.Item>
              <button
                type="button"
                onClick={handleCancel}
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Cancel
              </button>
            </Form>
          ))}
      </Modal>
    </>
  );
}
