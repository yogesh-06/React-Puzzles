import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBox from "@mui/icons-material/CheckBox";
import { FormControlLabel } from "@mui/material";

const CheckboxExample = () => {
  const [checked, setChecked] = useState(true);
  return (
    <>
      <FormControlLabel
        control={
          <CheckBox
            checked={checked}
            icon={<DeleteIcon />}
            checkedIcon={<SaveIcon />}
            onChange={(e) => setChecked(e.target.checked)}
            color="primary"
            inputProps={{
              "aria-label": "secondary checkbox",
            }}
          />
        }
        label=" Testing Checkbox"
      />
    </>
  );
};

const MaterialUI = () => {
  return (
    <div className="text-center my-4">
      <CheckboxExample /> <br />
      <ButtonGroup variant="contained" color="primary">
        <Button startIcon={<SaveIcon />}>Hello World</Button>
        <Button startIcon={<DeleteIcon />}>Hello World</Button>
      </ButtonGroup>
    </div>
  );
};
export default MaterialUI;
