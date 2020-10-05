import React from "react"
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

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

export default class WhereForm extends React.Component {
  state = {
    fromStation: "",
    toStation: "",
    station:"",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
        <TextField
          id="station-select"
          select
          name="station-select"
          label={this.props.label}
          value={this.state.station}
          onChange={this.handleInputChange}
          helperText={this.props.helperText}
        >
          {stations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    )
  }
}