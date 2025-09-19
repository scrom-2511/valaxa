import React from 'react'
import InitializeComponent from '../InitializeComponent'
import BalanceCardWallet from './BalanceCardWallet'
import HeaderWallet from './HeaderWallet'
import OperationsCardWallet from './OperationCardWallet'
import TokensSectionWallet from './TokensSectionWallet'

const MainWallet = () => {
  return (
    <InitializeComponent scrollable={true}>
        <HeaderWallet/>
        <BalanceCardWallet/>
        <OperationsCardWallet/>
        <TokensSectionWallet/>
    </InitializeComponent>
  )
}

export default MainWallet