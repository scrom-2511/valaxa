import React from 'react'
import InitializeComponent from '../InitializeComponent'
import ConnectedAccountsYourAccounts from './ConnectedAccountsYourAccounts'
import HeaderYourAccounts from './HeaderYourAccounts'
import TopCardsYourAccounts from './TopCardsYourAccounts'

const MainYourAccounts = () => {
  return (
    <InitializeComponent scrollable={true}>
        <HeaderYourAccounts />
        <TopCardsYourAccounts/>
        <ConnectedAccountsYourAccounts/>
    </InitializeComponent>
  )
}

export default MainYourAccounts