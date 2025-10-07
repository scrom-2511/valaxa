import HeaderCommon from "@/components/HeaderCommon";
import InitializeComponent from "@/components/InitializeComponent";
import { TokenName } from "@/types/types";
import React from "react";
import { Control, Controller, FieldErrors, useForm } from "react-hook-form";
import { Pressable, Text, TextInput, View } from "react-native";
import { DropdownComponent } from "../../components/Dropdown";

type formFields = {
  swapFromAmount: number;
  swapFromToken: TokenName;
};

const Swap = () => {
  const {
    control,
    formState: { errors },
  } = useForm<formFields>();
  return (
    <InitializeComponent scrollable={false}>
      <HeaderCommon title="Swap Tokens" />
      <View className="flex-auto justify-between">
      <InputForm control={control} errors={errors} />
      <Pressable className="bg-bgPrimaryBtn p-4 px-3 rounded-2xl flex items-center" onPress={() => console.log("swap clicked")}>
        <Text className="text-text font-roboto">SWAP</Text>
      </Pressable>
      </View>
    </InitializeComponent>
  );
};

const InputForm = ({ control, errors }: { control: Control<formFields>; errors: FieldErrors<formFields> }) => {
  const onSubmit = (data: object) => console.log(data);
  return (
    <View className="flex gap-5">
      <Controller
        control={control}
        rules={{
          required: "Enter the amount you want to send.",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <DropdownComponent placeholder="Swap From" onChange={onChange} onBlur={onBlur} value={value} />
        )}
        name="swapFromToken"
      />
      {errors.swapFromToken && <Text>{errors.swapFromToken.message}</Text>}

      <Controller
        control={control}
        rules={{
          required: "Enter the amount you want to send.",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <DropdownComponent placeholder="Swap To" onChange={onChange} onBlur={onBlur} value={value} />
        )}
        name="swapFromToken"
      />
      {errors.swapFromToken && <Text>{errors.swapFromToken.message}</Text>}

      <Controller
        control={control}
        rules={{
          required: "Recepients address is required.",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            keyboardType="numeric"
            className="border-text border rounded-2xl h-16 text-text focus:outline-none p-5 placeholder:text-textMuted"
            placeholder="Enter swap amount"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value?.toString()}
          />
        )}
        name="swapFromAmount"
      />
      {errors.swapFromAmount && <Text>{errors.swapFromAmount.message}</Text>}
      <View className="border-text border rounded-2xl h-16 text-text focus:outline-none p-5 placeholder:text-textMuted"></View>
    </View>
  );
};

export default Swap;
