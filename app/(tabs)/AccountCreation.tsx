import AccountCreationHeader from "@/components/accountCreation/AccountCreationHeader";
import AccountCreationOptionsList from "@/components/accountCreation/AccountCreationOptionsList";
import InitializeComponent from "@/components/InitializeComponent";
import React from "react";

const AccountCreation = () => {
  return (
    <InitializeComponent>
      <AccountCreationHeader></AccountCreationHeader>
      <AccountCreationOptionsList></AccountCreationOptionsList>
    </InitializeComponent>
  );
};

export default AccountCreation;
