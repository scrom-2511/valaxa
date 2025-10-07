import { Dropdown } from "react-native-element-dropdown";

const DropdownComponent = ({
    onChange,
    onBlur,
    value,
    placeholder,
  }: {
    onChange: () => void;
    onBlur: () => void;
    value: string | null | undefined;
    placeholder: string;
  }) => {
    const data = [
      { label: "Item 1", value: "1" },
      { label: "Item 2", value: "2" },
      { label: "Item 3", value: "3" },
      { label: "Item 4", value: "4" },
      { label: "Item 5", value: "5" },
      { label: "Item 6", value: "6" },
      { label: "Item 7", value: "7" },
      { label: "Item 8", value: "8" },
    ];
    return (
      <Dropdown
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        searchPlaceholder="Search token..."
        placeholder={placeholder}
        style={{
          height: 54,
          borderColor: "#ffffff",
          borderWidth: 1,
          borderRadius: 14,
          paddingHorizontal: 20,
        }}
        placeholderStyle={{
          color: "#9ca3af",
        }}
        selectedTextStyle={{
          color: "#ffffff",
        }}
        inputSearchStyle={{
          color: "#ffffff",
          borderBottomColor: "#ffffff",
          borderBottomWidth: 1,
        }}
        itemTextStyle={{
          color: "#ffffff",
        }}
        containerStyle={{
          backgroundColor: "hsl(220, 6%, 10%)",
          borderRadius: 10,
        }}
        onChange={(item) => {
          console.log(item);
        }}
        onBlur={onBlur}
        value={value}
      />
    );
  };