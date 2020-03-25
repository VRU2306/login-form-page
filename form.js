import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CardHeader from "@material-ui/core/CardHeader";
import { CardActions } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Form = ({
  email,
  password,
  cPassword,
  errors,
  handleChange,
  handleSubmit,
  handleDirty
}) => (
    <Grid container justify="center">
      <Grid item xs={12} sm={10} md={5}>
        <Card style={{ backgroundColor: "#e0e0e0" }}>
          <CardHeader style={{ textAlign: "center" }} title="EMAIL VERIFICATION" />
          <CardContent style={{ backgroundColor: "#f5f5f5" }}>
            <TextField
              label="Email"
              name="email"
              value={email}
              onChange={handleChange}
              onBlur={handleDirty}
              error={errors && errors.email !== undefined}
              helperText={errors && errors.email}
              margin="normal"
              type="email"
              fullWidth
              variant="outlined"
              required
            />
            <TextField
              label="Password"
              name="password"
              value={password}
              onChange={handleChange}
              onBlur={handleDirty}
              error={errors && errors.password !== undefined}
              helperText={errors && errors.password}
              margin="normal"
              type="password"
              fullWidth
              variant="outlined"
              required
            />
            <TextField
              label=" confirm Password"
              name="cPassword"
              value={cPassword}
              onChange={handleChange}
              onBlur={handleDirty}
              error={errors && errors.cPassword !== undefined}
              helperText={errors && errors.cPassword}
              margin="normal"
              type="password"
              fullWidth
              variant="outlined"
              required
            />
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}>
              VERIFY
          </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );

export default Form;