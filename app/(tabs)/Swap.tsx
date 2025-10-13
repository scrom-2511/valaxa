 import HeaderCommon from "@/components/HeaderCommon";
import InitializeComponent from "@/components/InitializeComponent";
import { getAllTokensSwap } from "@/reqHandlers/getAllTokensSwap";
import { getQuoteSwap } from "@/reqHandlers/quoteSwap";
import { lifiToken } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Control, Controller, FieldErrors, useForm, useWatch } from "react-hook-form";
import { Pressable, Text, TextInput, View } from "react-native";
import { DropdownComponent } from "../../components/Dropdown";
import { useSelectedAccountDetails } from "../zustand/store";

type formFields = {
  swapFromAmount: number;
  swapToAmount: number;
  swapFromToken: lifiToken | undefined;
  swapToToken: lifiToken | undefined;
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
  const { swapFromAmount, swapFromToken, swapToAmount, swapToToken } = useWatch({ control });
  const { selectedAccount } = useSelectedAccountDetails();
  const { data, isFetching, error, refetch } = useQuery({
    queryKey: ["getQuoteSwap", swapFromToken, swapToToken, swapFromAmount],
    queryFn: () => {
      return getQuoteSwap(swapFromToken, swapToToken, String(swapFromAmount));
    },
    enabled: !!swapFromAmount && Number(swapFromAmount) > 0 && !!swapFromToken && !!swapToToken
  });
  const allTokens = useQuery({
    queryKey: ["getAllTokensSwap"],
    queryFn: getAllTokensSwap,
  });
  
  const dataa = allTokens.data?.map((token) => ({
    label: token.name!,
    value: token.address!,
    token: token as lifiToken,
  }));
  

  return (
    <View className="flex gap-5">
      <Controller
        control={control}
        rules={{
          required: "Enter the amount you want to send.",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <DropdownComponent data={dataa} placeholder="Swap From" onChange={onChange} onBlur={onBlur} value={value} />
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
          <DropdownComponent data={dataa} placeholder="Swap To" onChange={onChange} onBlur={onBlur} value={value} />
        )}
        name="swapToToken"
      />
      {errors.swapToToken && <Text>{errors.swapToToken.message}</Text>}

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
            onChangeText={(text) => {
              onChange(text);
              refetch();
              if (!isFetching) console.log(data);
            }}
            value={value?.toString()}
          />
        )}
        name="swapFromAmount"
      />
      {errors.swapFromAmount && <Text>{errors.swapFromAmount.message}</Text>}

      <Controller
        control={control}
        rules={{
          required: "Recepients address is required.",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            keyboardType="numeric"
            className="border-text border rounded-2xl h-16 text-text focus:outline-none p-5 placeholder:text-textMuted"
            placeholder=""
            onBlur={onBlur}
            onChangeText={onChange}
            value={isFetching ? "Loading" : JSON.stringify(data) || ""}
          />
        )}
        name="swapToAmount"
      />
      {errors.swapToAmount && <Text>{errors.swapToAmount.message}</Text>}
    </View>
  );
};

export default Swap;
