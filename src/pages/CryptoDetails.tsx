import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCoinHistoryQuery } from "redux/features/crypto.feature";
import { useGetFeedsQuery } from "redux/features/news.feature";

const CryptoDetails = () => {
	const params = useParams();
	const [timePeriod, setTimePeriod] = useState("24h");

	const { isFetching, error, data } = useGetCoinDetailsQuery({
		coinId: params?.coinId,
	});

	const {
		isFetching: isFetchingHistory,
		error: errorHistory,
		data: history,
	} = useGetCoinHistoryQuery({
		coinId: params?.coinId,
		timePeriod,
	});

	const {
		isFetching: feedsFetching,
		error: feedError,
		data: feeds,
	} = useGetFeedsQuery({
		query: "Cryptocurrencies",
		count: 6,
	});
	return <div>CryptoDetails</div>;
};

export default CryptoDetails;
