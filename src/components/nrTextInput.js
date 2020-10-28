import React from "react"
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';


const NrText = styled(TextField)({
  color: '#F3FAA0',
  width: '305px'
});

export default function NrTextInput({ label, helperText, fieldValue, setFieldValue }) {
  const handleInputChange = event => {
    const target = event.target
    const value = target.value
    setFieldValue(value)
  }


  return (
    <NrText
      InputLabelProps={{
        shrink: true,
        required: true,
      }}
      id={label}
      name="station-select"
      label={label}
      value={fieldValue}
      onChange={handleInputChange}
      label-color='secondary'
      size='medium'
    >
      )
    </NrText>
  )
}