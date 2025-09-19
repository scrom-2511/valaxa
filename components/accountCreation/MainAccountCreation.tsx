import React from 'react'
import InitializeComponent from '../InitializeComponent'
import AccountCreationHeader from './AccountCreationHeader'
import AccountCreationOptionsList from './AccountCreationOptionsList'

const MainAccountCreation = () => {
  return (
    <InitializeComponent scrollable= {false}>
      <AccountCreationHeader></AccountCreationHeader>
      <AccountCreationOptionsList></AccountCreationOptionsList>
    </InitializeComponent>
  )
}

export default MainAccountCreation