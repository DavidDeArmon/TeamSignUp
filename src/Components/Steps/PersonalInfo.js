import React, { Component } from "react";
import { Grid, Typography, TextField } from "@material-ui/core";

class PersonalInfo extends Component {
  render() {
    const {personalInfo} = this.props
    return (
      <div>
        <Typography variant="h6" gutterBottom>
          Personal Information
        </Typography>
        <Grid container spacing={24}>
          {(
            <Grid item xs={12}>
              <TextField
                placeholder="Go back and reselect your team"
                value={this.props.team}
                label="Team"
                fullWidth
                autoComplete="false"
              />
            </Grid>
          )}
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={this.props.handleChange}
              value={personalInfo.firstName}
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="fname"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={this.props.handleChange}
              value={personalInfo.lastName}
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={this.props.handleChange}
              value={personalInfo.email}
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={this.props.handleChange}
              value={personalInfo.address1}
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="billing address-line1"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={this.props.handleChange}
              value={personalInfo.address2}
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="billing address-line2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={this.props.handleChange}
              value={personalInfo.city}
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="billing address-level2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={this.props.handleChange}
              value={personalInfo.state}
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={this.props.handleChange}
              value={personalInfo.zip}
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="billing postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={this.props.handleChange}
              value={personalInfo.country}
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="billing country"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default PersonalInfo;
