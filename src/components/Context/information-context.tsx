import React, { createContext } from "react";

export interface Information{
  name: string;
  description: string;
  comment: string;
}

export interface InformationContext {
    informations: Array<Information>;
    addInformation: (information: Information) => void;
    deleteInformation: (index: number) => void
}

export const _InformationContext = React.createContext<InformationContext>({
    informations: [],
    addInformation: () => {},
    deleteInformation: () => {}
});
