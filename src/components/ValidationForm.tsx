import React, { useState, useContext } from "react";
import { Button, Paper, makeStyles, Grid, TextField } from "@material-ui/core";
import { _InformationContext } from "./Context/information-context";

interface Props {
  text: string;
}

const NAMING_REGEX = `^[a-zA-Z]*$`;

const useStyles = makeStyles({
  paper: {
    margin: 20,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  button: {
    margin: 20,
  },
});

const ValidationForm = () => {
  const classes = useStyles();

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [isNameValid, setIsNameValid] = useState<boolean>(true);
  const { informations, addInformation, deleteInformation } =
    useContext(_InformationContext);

  const nameValidation = (name: string) => {
    name.match(NAMING_REGEX) ? setIsNameValid(true) : setIsNameValid(false);
  };

  const isFormValid = (): boolean => {
    return isNameValid && description.length > 0 && comment.length > 0;
  };

  const clearInformation = () => {
    setName("");
    setDescription("");
    setComment("");
  };

  // console.log(informations)

  return (
    <>
      <Paper elevation={3} className={classes.paper}>
        <Grid container>
          <Grid item xs={3}>
            <TextField
              label="Name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                nameValidation(event.target.value);
              }}
              error={!isNameValid}
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              label="Description"
              value={description}
              fullWidth
              onChange={(event) => setDescription(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Comment"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid container justify="flex-end">
            <Grid item>
              <Button
                className={classes.button}
                variant="contained"
                disabled={!isFormValid()}
                onClick={() => {
                  addInformation({ 
                    name: name,
                    description: description,
                    comment: comment,
                  })
                  clearInformation()
                }
                 
                }
              >
                Add
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.button}
                variant="contained"
                onClick={clearInformation}
              >
                Clear
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ValidationForm;
