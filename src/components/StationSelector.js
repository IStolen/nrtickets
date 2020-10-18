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
    color: '#F3FAA0',
    width: '305px'
  });

export default function WhereForm({label, helperText, fieldValue, setFieldValue}) {
  const handleInputChange = event => {
    const target = event.target
    const value = target.value
    setFieldValue(value)
  }


    return (
        <NrSelector
          InputLabelProps={{
            shrink: true,
            required: true,
          }}
          id={label}
          select
          name="station-select"
          label={label}
          value={fieldValue}
          onChange={handleInputChange}
          helperText={helperText}
          label-color='secondary'
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