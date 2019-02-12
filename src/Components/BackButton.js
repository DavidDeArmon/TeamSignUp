import React from  "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function BackButton() {
return (
    <div>
    <Link to="/">
      <Button variant="contained" color="primary">
        Back
      </Button>
    </Link>
  </div>
   )
}
export default BackButton;
