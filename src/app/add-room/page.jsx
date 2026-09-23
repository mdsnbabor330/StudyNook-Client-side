"use client";
import {
  FieldError,
  Form,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
  Checkbox,
  CheckboxGroup,
} from "@heroui/react";
import React from "react";
const floors = [
  { id: "1st Floor", name: "1st Floor" },
  { id: "2nd Floor", name: "2nd Floor" },
  { id: "3rd Floor", name: "3rd Floor" },
  { id: "4th Floor", name: "4th Floor" },
  { id: "5th Floor", name: "5th Floor" },
  { id: "6th Floor", name: "6th Floor" },
];
const amenitiesList = [
  "Wi-Fi",
  "Locker",
  "Projector",
  "Power Outlets",
  "Natural Light",
  "Soundproof",
  "Standing Desk",
  "Coffee Machine",
  "Whiteboard",
  "Air Conditioning",
];
const AddRoom = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      ...Object.fromEntries(formData.entries()),
      amenities: formData.getAll("amenities"),
    };
    console.log("Room listing created:", data);
  };
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 sm:py-12 pt-24 sm:pt-28">
      <div className="mb-6">
        <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#2D6A4F] uppercase mb-1">
          NEW LISTING
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
          Add a Study Room
        </h1>
      </div>
      <Form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 bg-card border border-border shadow-xl rounded-2xl p-6 sm:p-8"
        render={(props) => <form {...props} />}
      >
        {/* Room Name */}
        <TextField
          isRequired
          name="roomName"
          type="text"
          validate={(value) => {
            if (!value || value.trim().length < 3) {
              return "Room name must be at least 3 characters";
            }
            return null;
          }}
        >
          <Label className="text-xs sm:text-sm font-medium text-foreground">
            Room Name
          </Label>
          <Input
            className="w-full rounded-xl border border-border bg-background p-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter room name"
          />
          <FieldError className="text-xs text-red-500 mt-1" />
        </TextField>
        {/* Description */}
        <TextField
          isRequired
          name="description"
          validate={(value) => {
            if (!value || value.trim().length < 10) {
              return "Description must be at least 10 characters";
            }
            return null;
          }}
        >
          <Label className="text-xs sm:text-sm font-medium text-foreground">
            Description
          </Label>
          <TextArea
            className="w-full rounded-xl border border-border bg-background p-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
            placeholder="Enter room description"
          />
          <FieldError className="text-xs text-red-500 mt-1" />
        </TextField>
        {/* Image URL */}
        <TextField
          isRequired
          name="image"
          type="url"
          validate={(value) => {
            if (!value || !/^https?:\/\/.+/i.test(value)) {
              return "Please enter a valid image URL (starting with http:// or https://)";
            }
            return null;
          }}
        >
          <Label className="text-xs sm:text-sm font-medium text-foreground">
            Image URL
          </Label>
          <Input
            className="w-full rounded-xl border border-border bg-background p-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="https://example.com/image.jpg"
          />
          <FieldError className="text-xs text-red-500 mt-1" />
        </TextField>
        {/* Floor / Capacity / Hourly Rate */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Floor */}
          <Select name="floor" defaultValue={floors[0].id} isRequired>
            <Label className="text-xs sm:text-sm font-medium text-foreground mb-1 block">
              Floor
            </Label>
            <Select.Trigger className="w-full rounded-xl border border-border bg-background p-3 text-sm flex items-center justify-between">
              <Select.Value />
              <Select.Indicator className="text-muted-foreground" />
            </Select.Trigger>
            <Select.Popover className="bg-card border border-border rounded-xl shadow-lg p-1 z-50">
              <ListBox>
                {floors.map((floor) => (
                  <ListBox.Item
                    key={floor.id}
                    id={floor.id}
                    textValue={floor.name}
                    className="p-2 rounded-lg hover:bg-secondary cursor-pointer text-sm"
                  >
                    {floor.name}
                  </ListBox.Item>
                ))}
              </ListBox>
            </Select.Popover>
            <FieldError className="text-xs text-red-500 mt-1" />
          </Select>
          {/* Capacity */}
          <TextField
            isRequired
            name="capacity"
            type="number"
            validate={(value) => {
              const num = Number(value);
              if (isNaN(num) || num <= 0) {
                return "Capacity must be greater than 0";
              }
              return null;
            }}
          >
            <Label className="text-xs sm:text-sm font-medium text-foreground">
              Capacity
            </Label>
            <Input
              type="number"
              placeholder="2"
              className="w-full rounded-xl border border-border bg-background p-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>
          {/* Hourly Rate */}
          <TextField
            isRequired
            name="hourlyRate"
            type="number"
            validate={(value) => {
              const num = Number(value);
              if (isNaN(num) || num <= 0) {
                return "Hourly rate must be greater than 0";
              }
              return null;
            }}
          >
            <Label className="text-xs sm:text-sm font-medium text-foreground">
              Hourly Rate ($)
            </Label>
            <Input
              type="number"
              placeholder="10"
              className="w-full rounded-xl border border-border bg-background p-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>
        </div>
        {/* Amenities */}
        <div>
          <Label className="text-xs sm:text-sm font-medium text-foreground mb-3 block">
            Amenities
          </Label>
          <CheckboxGroup
            name="amenities"
            className="flex flex-row items-center gap-2.5 flex-wrap"
          >
            {amenitiesList.map((amenity) => (
              <Checkbox
                key={amenity}
                value={amenity}
                className="group cursor-pointer"
              >
                <Checkbox.Content className="rounded-xl border border-border bg-secondary px-3.5 py-2 text-xs sm:text-sm font-medium transition-all group-data-[selected=true]:bg-primary group-data-[selected=true]:text-primary-foreground group-data-[selected=true]:border-primary">
                  <Checkbox.Control className="hidden">
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  {amenity}
                </Checkbox.Content>
              </Checkbox>
            ))}
          </CheckboxGroup>
        </div>
        {/* Submit */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-primary text-primary-foreground text-sm font-semibold shadow-md hover:bg-primary/90 transition-all active:scale-[0.99] cursor-pointer mt-4"
        >
          <span>Publish Room Listing</span>
        </button>
      </Form>
    </div>
  );
};
export default AddRoom;
