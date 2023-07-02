import {
	Table,
	TableContainer,
	TableRow,
	TableHead,
	TableCell,
	TableBody,
	TablePagination,
	Avatar,
} from "@mui/material";
import AsyncPageLoad from "hoc/AsyncPageLoad";
import React, { useState, useMemo, useEffect } from "react";
import { useGetReferenceCurrenciesQuery } from "redux/features/crypto.feature";
import Paper from "@mui/material/Paper";
import noImage from "../assets/images/no_image.jpg";

const ReferenceCurrency = () => {
	const headColumns = ["ID", "Avatar", "Name", "Symbol", "Sign"];
	const [page, setPage] = useState({ coin: 0, fiat: 0 });
	const [rowsPerPage, setRowsPerPage] = useState({ coin: 10, fiat: 10 });
	const {
		isFetching: isFetchingCoin,
		error: errorCoin,
		data: coinData,
	} = useGetReferenceCurrenciesQuery({});
	const {
		isFetching: isFetchingFiat,
		error: errorFiat,
		data: fiatData,
	} = useGetReferenceCurrenciesQuery({ type: "fiat" });

	const handleChangePage = (
		event: unknown,
		newPage: number,
		type: string
	) => {
		setPage({ ...page, [type]: newPage });
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		type: string
	) => {
		setRowsPerPage({
			...rowsPerPage,
			[type]: parseInt(event.target.value, 10),
		});
		setPage({ ...page, [type]: 0 });
	};

	const coinRows = useMemo(
		() =>
			coinData?.data.currencies.slice(
				page.coin * rowsPerPage.coin,
				page.coin * rowsPerPage.coin + rowsPerPage.coin
			),
		[page.coin, rowsPerPage.coin, coinData]
	);

	const fiatRows = useMemo(
		() =>
			fiatData?.data.currencies.slice(
				page.fiat * rowsPerPage.fiat,
				page.fiat * rowsPerPage.fiat + rowsPerPage.fiat
			),
		[page.fiat, rowsPerPage.fiat, fiatData]
	);

	return (
		<div className="reference_wrapper mt-12">
			<AsyncPageLoad
				loading={isFetchingCoin}
				error={errorCoin}
				fulfilled={Boolean(coinData)}
			>
				<div>
					<h2 className="wrapper_title">
						Coins Reference Currencies
					</h2>
					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 650 }} aria-label="simple table">
							<TableHead className="table_header">
								<TableRow>
									{headColumns.map(
										(val: string, index: number) => (
											<TableCell
												key={index * 2}
												align="center"
												sx={{ fontWeight: "600" }}
											>
												{val}
											</TableCell>
										)
									)}
								</TableRow>
							</TableHead>
							<TableBody>
								{coinRows?.map((row: any, index: number) => (
									<TableRow
										className="table_row"
										key={row.uuid}
									>
										<TableCell
											component="th"
											scope="row"
											align="center"
										>
											{index + 1}
										</TableCell>
										<TableCell align="center">
											<div
												style={{ width: "100%" }}
												className="flex justify-center"
											>
												<Avatar
													alt={row.name}
													src={row.iconUrl || noImage}
												/>
											</div>
										</TableCell>
										<TableCell align="center">
											{row.name}
										</TableCell>
										<TableCell align="center">
											{row.symbol}
										</TableCell>
										<TableCell align="center">
											{row?.sign ?? "--"}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
						<TablePagination
							rowsPerPageOptions={[5, 10, 25]}
							component="div"
							count={coinData?.data.currencies.length}
							rowsPerPage={rowsPerPage.coin}
							page={page.coin}
							onPageChange={(e, value) =>
								handleChangePage(e, value, "coin")
							}
							onRowsPerPageChange={(e) =>
								handleChangeRowsPerPage(e, "coin")
							}
						/>
					</TableContainer>
				</div>
			</AsyncPageLoad>
			<AsyncPageLoad
				loading={isFetchingFiat}
				error={errorFiat}
				fulfilled={Boolean(fiatData)}
			>
				<div>
					<h2 className="wrapper_title">Fiat Reference Currencies</h2>
					<TableContainer component={Paper}>
						<Table
							size="small"
							sx={{ minWidth: 650 }}
							aria-label="simple table"
						>
							<TableHead className="table_header">
								<TableRow>
									{headColumns.map(
										(val: string, index: number) => (
											<TableCell
												key={index * 2}
												align="center"
												sx={{ fontWeight: "600" }}
											>
												{val}
											</TableCell>
										)
									)}
								</TableRow>
							</TableHead>
							<TableBody>
								{fiatRows?.map((row: any, index: number) => (
									<TableRow
										className="table_row"
										key={row.uuid}
									>
										<TableCell
											component="th"
											scope="row"
											align="center"
										>
											{index + 1}
										</TableCell>
										<TableCell align="center">
											<div
												style={{ width: "100%" }}
												className="flex justify-center"
											>
												<Avatar
													alt={row.name}
													src={row.iconUrl || noImage}
												/>
											</div>
										</TableCell>
										<TableCell align="center">
											{row.name}
										</TableCell>
										<TableCell align="center">
											{row.symbol}
										</TableCell>
										<TableCell align="center">
											{row?.sign ?? "--"}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
						<TablePagination
							rowsPerPageOptions={[5, 10, 15, 20]}
							component="div"
							count={coinData?.data.currencies.length}
							rowsPerPage={rowsPerPage.coin}
							page={page.coin}
							onPageChange={(e, value) =>
								handleChangePage(e, value, "fiat")
							}
							onRowsPerPageChange={(e) =>
								handleChangeRowsPerPage(e, "fiat")
							}
						/>
					</TableContainer>
				</div>
			</AsyncPageLoad>
		</div>
	);
};

export default ReferenceCurrency;
