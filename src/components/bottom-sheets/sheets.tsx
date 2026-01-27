import { SheetDefinition, SheetRegister } from "react-native-actions-sheet";
import { DefaultSheetProps } from "./types";
import DefaultSheet from "./DefaultSheet";

declare module "react-native-actions-sheet" {
  interface Sheets {
    "default-sheet": SheetDefinition<DefaultSheetProps>;
  }
}

const Sheets = () => {
  return (
    <SheetRegister
      sheets={{
        "default-sheet": DefaultSheet,
      }}
    />
  );
};

export default Sheets;
