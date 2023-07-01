import {Autocomplete, CircularProgress, InputAdornment, Stack, TextField, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<Film[]>([]);
  const navigateTo = useNavigate();
  // const [loading, setLoading] = useState(false);
  let loading = open && options.length === 0;

  useEffect(() => {
    // setLoading(() => true);
    setTimeout(async () => {
      setOptions([...top100Films]);
    }, 2000);
    // setLoading(() => false);
  }, [loading]);

  return (
    <Stack width={"100%"} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
      <Stack direction={"row"} alignItems={"flex-end"} gap={1}>
        <img src={require("../assets/images/logo.webp")} alt="logo" width={"25px"} height={"25px"} />
        <Typography variant="h6" noWrap component="div" className="title">
          CoinDex
        </Typography>
      </Stack>
      <Stack sx={{minWidth: "200px", width: "500px", maxHeight: "40px"}}>
        <Autocomplete
          freeSolo
          size="small"
          disableClearable
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          options={options}
          loading={loading}
          isOptionEqualToValue={(option, value) => option.title === value.title}
          getOptionLabel={(option:any) => option.title}
          renderInput={(params) => (
            <TextField
              sx={{border: "1px solid #333", borderRadius: "4px"}}
              {...params}
              label=""
              placeholder="Search Coin"
              InputProps={{
                ...params.InputProps,
                type: "search",
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </Stack>
    </Stack>
  );
};

export default NavBar;

interface Film {
  title: string;
  year: number;
}
const top100Films = [
  {title: "The Shawshank Redemption", year: 1994},
  {title: "The Godfather", year: 1972},
  {title: "The Godfather: Part II", year: 1974},
  {title: "The Dark Knight", year: 2008},
  {title: "12 Angry Men", year: 1957},
  {title: "Schindler's List", year: 1993},
  {title: "Pulp Fiction", year: 1994},
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  {title: "The Good, the Bad and the Ugly", year: 1966},
  {title: "Fight Club", year: 1999},
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  {title: "Forrest Gump", year: 1994},
  {title: "Inception", year: 2010},
];
