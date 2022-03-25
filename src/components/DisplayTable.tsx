import React, { useState, useContext } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  Button,
  makeStyles,
} from "@material-ui/core";
import { _InformationContext } from "./Context/information-context";

const useStyles = makeStyles({
  paper: {
    margin: 20,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  button: {
    margin: 5,
  },
});

interface Props {
  text: string;
}

const DisplayTable = () => {
  const classes = useStyles();

  const [isDisplayDetail, setIsDisplayDetail] = useState<string[]>([]);

  const { informations, addInformation, deleteInformation } =
    useContext(_InformationContext);

  const showDetailHandler = (index: number) => {
    if (isDisplayDetail.find((el) => el === `detail-${index}`)) {
      setIsDisplayDetail(
        isDisplayDetail.filter((detail) => detail !== `detail-${index}`)
      );

      return;
    }

    setIsDisplayDetail(isDisplayDetail.concat(`detail-${index}`));
  };

  return (
    <>
      <Paper elevation={3} className={classes.paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>
                <p
                  style={{
                    display: `${isDisplayDetail.length > 0 ? "" : "none"}`,
                  }}
                >
                  Comment
                </p>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {informations.map((informations, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {informations.name}
                </TableCell>
                <TableCell>{informations.description}</TableCell>
                <TableCell>
                  <p
                    style={{
                      display: `${
                        isDisplayDetail.find(
                          (el) => el === `detail-${index}`
                        ) === undefined
                          ? "none"
                          : ""
                      }`,
                    }}
                  >
                    {informations.comment}
                  </p>
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    onClick={() => deleteInformation(index)}
                    className={classes.button}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => showDetailHandler(index)}
                    className={classes.button}
                  >
                    Detail
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};
export default DisplayTable;
