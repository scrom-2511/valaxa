import useIsWeb from "@/app/hooks/useIsWeb";
import React, { useState } from "react";
import { View } from "react-native";
import InitializeComponent from "../InitializeComponent";
import ButtonMnemonic from "./ButtonMnemonic";
import CheckBoxMnemonic from "./CheckBoxMnemonic";
import GridMnemonic from "./GridMnemonic";
import HeaderMnemonic from "./HeaderMnemonic";

const MainMnemonic = ({ input }: { input: boolean }) => {
  const isWeb = useIsWeb();
  const mainClassName = isWeb ? "px-10 items-center py-44 flex-auto" : "px-10 items-center justify-center flex-auto my-64";
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <InitializeComponent scrollable= {false}>
      <View className={mainClassName}>
        <HeaderMnemonic input={input} />
        <GridMnemonic input={input} />
        <CheckBoxMnemonic input={input} isChecked={isChecked} setIsChecked={setIsChecked} />
        <ButtonMnemonic input={input} isChecked={isChecked} />
      </View>
    </InitializeComponent>
  );
};

export default MainMnemonic;
