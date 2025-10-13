import { lifiToken } from "@/types/types";
import { Dropdown } from "react-native-element-dropdown";

export const DropdownComponent = ({
  onChange,
  onBlur,
  value,
  placeholder,
  data,
}: {
  onChange: (token: lifiToken) => void;
  onBlur: () => void;
  value?: lifiToken;
  placeholder: string;
  data: { label: string; value: string; token: lifiToken }[] | undefined;
}) => {
  return (
    <Dropdown
      data={data ?? []}
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
      placeholderStyle={{ color: "#9ca3af" }}
      selectedTextStyle={{ color: "#ffffff" }}
      inputSearchStyle={{
        color: "#ffffff",
        borderBottomColor: "#ffffff",
        borderBottomWidth: 1,
      }}
      itemTextStyle={{ color: "#ffffff" }}
      containerStyle={{
        backgroundColor: "hsl(220, 6%, 10%)",
        borderRadius: 10,
      }}
      onChange={(item: { label: string; value: string; token: lifiToken }) => {
        onChange(item.token);
      }}
      onBlur={onBlur}
      value={value?.address}
    />
  );
};
