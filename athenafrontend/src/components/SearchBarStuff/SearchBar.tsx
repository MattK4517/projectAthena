import { godsDict } from "../constant";
import React, { KeyboardEvent, useContext } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { MainContext } from "../MainContext";
import { captureRejectionSymbol } from "stream";

export default function SearchBar(props: any) {
  const [
    god,
    setGod,
    role,
    setRole,
    rank,
    setRank,
    patch,
    setPatch,
    queueType,
    setQueueType,
    mode,
    setMode,
    matchup,
    setMatchup,
    patches,
    queueTypes,
    modes,
    ranks,
    roles,
    skin,
    setSkin,
    tab,
    setTab,
  ] = useContext(MainContext);

  function handleKeyPress(event: any) {
    setGod((god: string[]) => {
      let index = god.indexOf(event.target.value);
      if (index === -1 && event.charCode === 13) {
        return [...god, event.target.value];
      } else {
        god.splice(index, 1);
        return god;
      }
    });
  }

  return (
    <Stack
      spacing={2}
      sx={{
        width: 300,
        backgroundColor: "white",
        color: "black",
        marginLeft: "15px",
      }}
      className="search-bar"
    >
      <Autocomplete
        freeSolo
        id="god-seach-bar"
        // disableClearable
        options={props.data.map((option: string) => option)}
        defaultValue={""}
        clearOnEscape={true}
        renderOption={(option: any) => (
          <React.Fragment>
            <div
              onClick={() => {
                setGod((god: string[]) => {
                  let index = god.indexOf(option.key);
                  if (index === -1) {
                    return [...god, option.key];
                  } else {
                    god.splice(index, 1);
                    return god;
                  }
                });
              }}
              style={{ cursor: "pointer", color: "black", display: "flex" }}
            >
              <img
                src={`https://webcdn.hirezstudios.com/smite/god-icons/${option.key
                  .toLowerCase()
                  .replaceAll(" ", "-")
                  .replaceAll("'", "")}.jpg`}
                alt={option.key}
                style={{
                  height: "48px",
                  width: "48px",
                  transform: "scale(0.625)",
                  transformOrigin: "0px 0px 0px",
                  marginLeft: "10px",
                }}
              />
              <p>{option.key}</p>
            </div>
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
            }}
            onKeyPress={(e) => handleKeyPress(e)}
            label={"God Select"}
          />
        )}
      />
    </Stack>
  );
}
