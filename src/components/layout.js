import React from "react"
import ButtonAppBar from "./header.js"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const nrtheme = createMuiTheme({
  palette: {
    primary: { 
      main: '#255839',
    },
    secondary: {
      main: '#F3FAA0',
    },
  },     
});

export default function Layout({ children }) {
  return (
     <ThemeProvider theme={nrtheme}>
     <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <ButtonAppBar/>
      {children}
    </div>
     </ThemeProvider>
   )
}