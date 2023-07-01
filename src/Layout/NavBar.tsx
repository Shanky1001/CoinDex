import {
	Autocomplete,
	CircularProgress,
	InputAdornment,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useGetCoinsQuery } from "redux/features/crypto.feature";

const NavBar = () => {
	const [open, setOpen] = React.useState(false);
	const navigateTo = useNavigate();
	const { isFetching, isSuccess, error, data } = useGetCoinsQuery("");
	const [options, setOptions] = useState<AutoCompleteOption[]>([]);

	useEffect(() => {
		if (isSuccess) {
			setOptions(
				data?.data?.coins.map((coin: Coin) => ({
					value: coin.name,
					label: coin.name,
					reset: { ...coin },
				}))
			);
		} else {
			setOptions([]);
			console.log(error);
		}
	}, [data]);

	const onSelect = (_: any, value: any) => {
		navigateTo(`/crypto/${value?.reset.uuid}`);
	};

	return (
		<Stack
			width={"100%"}
			direction={"row"}
			alignItems={"center"}
			justifyContent={"space-between"}
		>
			<Stack direction={"row"} alignItems={"flex-end"} gap={1}>
				<img
					src={require("../assets/images/logo.webp")}
					alt="logo"
					width={"25px"}
					height={"25px"}
				/>
				<Typography
					variant="h6"
					noWrap
					component="div"
					className="title"
				>
					CoinDex
				</Typography>
			</Stack>
			<Stack
				sx={{ minWidth: "200px", width: "500px", maxHeight: "40px" }}
			>
				<Autocomplete
					freeSolo
					size="small"
					disableClearable
					onChange={onSelect}
					options={options}
					loading={isFetching}
					isOptionEqualToValue={(option, value) =>
						option.reset.uuid === value.reset.uuid
					}
					getOptionLabel={(option: any) => option.value}
					renderInput={(params) => (
						<TextField
							sx={{
								border: "1px solid #333",
								borderRadius: "4px",
							}}
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
