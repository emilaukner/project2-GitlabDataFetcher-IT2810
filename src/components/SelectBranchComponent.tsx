import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  SelectChangeEvent,
  Box,
} from "@mui/material";
import { useContext } from "react";
import { ProjectContext } from "../ProjectContext";
import { SessionStorageClass } from "../WebStorageClass";
import { Branch } from "../types";
import { style } from "../styles/Styles";

const storage = new SessionStorageClass();

//Properties for branch selector component.
interface Props {
  setLoadedBranch: (value: boolean) => void;
  setBranchName: (value: string) => void;
  branches: Branch[];
  selectedBranch: string;
}

//Branch selector component.
export const SelectBranchComponent = (props: Props) => {
  const ctx = useContext(ProjectContext);

  //Event change for selector meny.
  const handleChangeBranch = (event: SelectChangeEvent) => {
    const newBranch = event.target.value;
    if (newBranch != null) {
      props.setBranchName(event.target.value as string);
      storage.setPropValue("branchName", props.selectedBranch);
    }
  };

  return (
    <Box sx={style.commitsSelectBranch}>
      <FormControl style={{ width: 250 }}>
        <InputLabel>Select branch</InputLabel>
        <Select defaultValue={""} onChange={handleChangeBranch}>
          {props.branches.map((branch: Branch) => (
            <MenuItem key={branch.name} value={branch.name}>
              {branch.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
