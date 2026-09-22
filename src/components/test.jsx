import { Label, ListBox, Select } from "@heroui/react";

const floors = [
  { id: "Floor 1", name: "Floor 1" },
  { id: "Floor 2", name: "Floor 2" },
  { id: "Floor 3", name: "Floor 3" },
  { id: "Floor 4", name: "Floor 4" },
  { id: "Floor 5", name: "Floor 5" },
  { id: "Floor 6", name: "Floor 6" },
];

export function Default() {
  return (
    <Select name="floor"  defaultValue={floors[0].id}>
      <Label>Floor</Label>

      <Select.Trigger >
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>

      <Select.Popover >
        <ListBox>
          {floors.map((floor) => (
            <ListBox.Item
              key={floor.id}
              id={floor.id}
              textValue={floor.name}
            >
              {floor.name}
              <ListBox.ItemIndicator />
            </ListBox.Item>
          ))}
        </ListBox>
      </Select.Popover>
    </Select>
  );
}