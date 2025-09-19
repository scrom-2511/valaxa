import React from "react";
import { Text } from "react-native";

const AccountCreationHeader = () => {
  return (
    <>
      <Text className="text-text font-poppinsSemiBold text-2xl mb-5 text-center">
        HOW WOULD YOU LIKE TO CREATE THE ACCOUNT?
      </Text>
      <Text className="text-textMuted font-poppins text-md mb-5 text-center">
        Choose the method that works the best for you.
      </Text>
    </>
  );
};

export default AccountCreationHeader;
