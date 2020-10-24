import React from "react"
import PaymentGrid from "../components/choosePayment"
import { Helmet } from "react-helmet"


export default function Home() {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <Helmet title='payment' />  
      <PaymentGrid
        to1=''
        to2='/prototypePaymentPlaceholder'
        to3='/prototypePaymentPlaceholder'
        to4='/prototypePaymentPlaceholder'
        label1='Choose Method of Payment'
        label2='Vipps'
        label3='VISA'
        label4='Paypal'
      />
    </div>
  );
}