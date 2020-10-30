import React, { useContext, useState } from 'react';
import Layout from "../components/layout"
import NrTextInput from "../components/nrTextInput"
import { Helmet } from "react-helmet"
import { nrContext } from '../state/nrstore'
import NrButtonSmall from '../components/nrButtonSmall'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Modal from 'react-modal'
import { requestPost } from '../components/bookingRequest'

Modal.setAppElement('#___gatsby')


const styles = {
  height: '60vh',
  textAlign: "cetner",
};
const section = {
  backgroundColor: "#255839",
  paddingTop: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const StyledButton = {
  background: '#f04c41',
  border: 0,
  borderRadius: 10,
  color: 'Black',
  padding: '12px 40px',
  margin: '30px',
  boxShadow: '3px 3px 3px #173623',
  textTransform: 'capitalize',
  transition: 'transform 150ms',
}

export default function About() {
  const context = useContext(nrContext)
  const [isVisible, setIsVisible] = React.useState(false)
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [result, setResult] = useState('')
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function RemoveTicket() {
    console.log(context.ticketNoState)
    setIsOpen(false);
    setIsVisible(true)
    const apiUrl = `http://localhost:5000/cancelticket?bookingID=${context.ticketNoState}`;
    requestPost(apiUrl, setResult)
  }

  return (
    <Layout>
      <Helmet title='Alter ticket' />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {!isVisible && <h1>Change of plans? No problem. Enter your ticket number below:</h1>}
        {!isVisible && <p>make a change!</p>}
        {isVisible && <p>{result} Welcome back</p>}
        <NrTextInput
          label="ticketnumber"
          fieldValue={context.ticketNoState}
          setFieldValue={context.setTicketNoState}
        />
        <Grid container style={styles} >
          <Grid item xs={6} >
            <Box style={section} height='20vh'>
              <Button style={StyledButton} label='Cancel ticket' to='/changeChoice' onClick={openModal}>Cancel Ticket</Button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
              >
                <div>You are about to cancel your ticket. Are you sure?</div>
                <button onClick={RemoveTicket} style={StyledButton}>Yes, cancel my ticket</button>
                <button onClick={closeModal} style={StyledButton}>No, I don't want to cancel. Please close this window</button>

              </Modal>
            </Box>
          </Grid>
          <Grid item xs={6} >
            <Box style={section} height='20vh'>
              <NrButtonSmall label='make a change!' to='/changeChoice'></NrButtonSmall>
            </Box>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}