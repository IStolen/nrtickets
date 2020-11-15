import React from "react"
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';

const NrPicker = styled(TextField)({
  color: '#F3FAA0',
  width: 120,
  height: 50,
});

export default function NrTimePicker({ label, type, fieldValue, setFieldValue, defaultValue }) {
  const handleInputChange = event => {
    const target = event.target
    const value = target.value
    setFieldValue(value)
  }

  return (
    <NrPicker
      id={label}
      label={label}
      type={type}
      value={fieldValue}
      onChange={handleInputChange}
    >

    </NrPicker>
  )
}