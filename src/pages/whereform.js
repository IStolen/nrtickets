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

export default class IndexPage extends React.Component {
  state = {
    fromStation: "",
    toStation: "",
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
      <form>
        <TextField
          id="select-from-station"
          select
          name="fromStation"
          label="From"
          value={this.state.fromStation}
          onChange={this.handleInputChange}
          helperText="Where are you travelling from?"
        >
          {stations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="select-from-station"
          select
          name="toStation"
          label="To"
          value={this.state.toStation}
          onChange={this.handleInputChange}
          helperText="Where are you going?"
        >
          {stations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <button type="submit">Submit</button>
      </form>
    )
  }
}