import React from "react"
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { styled } from '@material-ui/core/styles';

const stations = [
    {
        value: 'TRD',
        label: 'Trondheim',
    },
    {
        value: 'OSL',
        label: 'Oslo',
    },
    {
        value: 'TBG',
        label: 'Tønsberg',
    },
    {
        value: 'BGN',
        label: 'Bergen',
    },
    ];  

  const NrSelector = styled(TextField)({
    background: '#C4C4C4',
    border: 0,
    borderRadius: 0,
    color: '#F3FAA0',
    height: 48,
    padding: '0 30px',
  });

export default function WhereForm({label, helperText, fieldValue, setFieldValue}) {
  const handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    setFieldValue(value)
  }


    return (
        <NrSelector
          id="station-select"
          select
          name="station-select"
          label={label}
          value={fieldValue}
          onChange={handleInputChange}
          helperText={helperText}
          color='secondary'
          size='medium'
        >
          {stations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </NrSelector>
    )
}