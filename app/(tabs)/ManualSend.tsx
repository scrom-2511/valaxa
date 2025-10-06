import HeaderCommon from "@/components/HeaderCommon";
import InitializeComponent from "@/components/InitializeComponent";
import { TokenName } from "@/types/types";
import { router } from "expo-router";
import React from "react";
import { Control, Controller, FieldErrors, useForm, useWatch } from "react-hook-form";
import { Pressable, Text, TextInput, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

type formFields = {
  to: string | null;
  token: TokenName | null;
  totalAmount: number | null;
};

const ManualSend = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<formFields>({
    defaultValues: {
      to: null,
      token: null,
      totalAmount: null,
    },
  });

  return (
    <InitializeComponent scrollable={false}>
      <HeaderCommon title="Send Tokens" />
      <InputForm control={control} errors={errors} />
      <View className="flex-auto justify-between">
        <TransactionDetails control={control} />
        <Pressable className="bg-bgPrimaryBtn p-4 px-3 rounded-2xl flex items-center" onPress={() => router.push("/(tabs)/ManualSendDetails")}>
          <Text className="text-text font-roboto">SEND</Text>
        </Pressable>
      </View>
    </InitializeComponent>
  );
};

export default ManualSend;

const TransactionDetails = ({ control }: { control: Control<formFields> }) => {
  const { to, token, totalAmount } = useWatch({
    control,
  });
  return (
    <View>
      <Text className="text-text font-poppinsSemiBold text-md mb-2 mt-5">Transaction Details</Text>
      <EachDetail label="To:" value={to!} />
      <EachDetail label="Total Amount:" value={totalAmount!} />
      <EachDetail label="Token" value={token!} />
    </View>
  );
};

const InputForm = ({ control, errors }: { control: Control<formFields>; errors: FieldErrors<formFields> }) => {
  const onSubmit = (data: object) => console.log(data);
  return (
    <View className="flex gap-5">
      <Controller
        control={control}
        rules={{
          required: "Recepients address is required.",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border-text border rounded-2xl h-16 text-text focus:outline-none p-5 placeholder:text-textMuted"
            placeholder="Enter reciepients address"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value?.toString()}
          />
        )}
        name="to"
      />
      {errors.to && <Text>{errors.to.message}</Text>}
      <Controller
        control={control}
        rules={{
          required: "Enter the amount you want to send.",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            keyboardType="numeric"
            className="border-text border rounded-2xl h-16 text-text focus:outline-none p-5 placeholder:text-textMuted"
            placeholder="Enter the amount"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value?.toString()}
          />
        )}
        name="totalAmount"
      />
      {errors.totalAmount && <Text>{errors.totalAmount.message}</Text>}
      <Controller
        control={control}
        rules={{
          required: "Enter the amount you want to send.",
        }}
        render={({ field: { onChange, onBlur, value } }) => <DropdownComponent onChange={onChange} onBlur={onBlur} value={value} />}
        name="token"
      />
      {errors.token && <Text>{errors.token.message}</Text>}
    </View>
  );
};

const DropdownComponent = ({ onChange, onBlur, value }: { onChange: () => void; onBlur: () => void; value: string | null | undefined }) => {
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
      placeholder="Select token"
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

const EachDetail = ({ label, value }: { label: string; value: string | number }) => {
  return (
    <View className="flex-row justify-between">
      <Text className="text-text font-poppinsSemiBold text-md mb-2">{label}</Text>
      <Text className="text-text font-poppins text-md mb-2">{value}</Text>
    </View>
  );
};
