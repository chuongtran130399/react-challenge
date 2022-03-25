import React, { useState } from "react";
import ValidationForm from "./ValidationForm";
import {
  Information,
  _InformationContext,
} from "./Context/information-context";
import DisplayTable from "./DisplayTable";

export const ValidationFormPage = () => {
  const [informations, setInformations] = useState<Array<Information>>([]);
  const saveToLocalStorage = (informations: Array<Information>) => {
    localStorage.setItem("informations", JSON.stringify(informations));
  };
  const addInformation = (information: Information) => {
    const addedInformation = informations.concat(information);
    setInformations(addedInformation);
    saveToLocalStorage(addedInformation)
  };
  const deleteInformation = (index: number) => {
    setInformations(informations.filter((_, i) => i != index));
  };
  return (
    <>
      <_InformationContext.Provider
        value={{
          informations: informations,
          addInformation: addInformation,
          deleteInformation: deleteInformation,
        }}
      >
        <ValidationForm />
        <DisplayTable />
      </_InformationContext.Provider>
    </>
  );
};
