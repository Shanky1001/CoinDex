import Stats from "components/Stats";
import AsyncPageLoad from "hoc/AsyncPageLoad";
import React from "react";
import { useGetCoinsQuery } from "redux/features/crypto.feature";
import { useGetFeedsQuery } from "redux/features/news.feature";
import { readableNumber } from "./helper";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SavingsIcon from '@mui/icons-material/Savings';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import News from "./News";
import CryptocurrenciesList from "components/CryptocurrenciesList";

const HomePage = () => {
	const { isFetching, error, data } = useGetCoinsQuery("");
	const {
		isFetching: feedsFetching,
		error: feedError,
		data: feeds,
	} = useGetFeedsQuery({
		query: "Cryptocurrencies",
		count: 6,
	});
	return (
		<AsyncPageLoad
			loading={isFetching || feedsFetching}
			error={error || feedError}
			fulfilled={Boolean(data && feeds)}
		>
			{Boolean(feeds && data) && (
				<div className="homepage_wrapper">
					<h1 className="mb-5 wrapper_title">Global Crypto Stats</h1>
					<div className="mb-10 md:grid grid-cols-3 stats_card_wrapper">
						<div className="col-span-1 m-3">
							<Stats
								title="Total Cryptocurrencies"
								value={readableNumber(data.data.stats["total"])}
								icon={<MonetizationOnIcon />}
							/>
						</div>
						<div className="col-span-1 m-3">
							<Stats
								title="Total Exchanges"
								value={readableNumber(
									data.data.stats["totalExchanges"]
								)}
								icon={<CurrencyExchangeIcon />}
							/>
						</div>
						<div className="col-span-1 m-3">
							<Stats
								title="Total Market Cap"
								value={readableNumber(
									data.data.stats["totalMarketCap"]
								)}
								icon={<AccountBalanceIcon />}
							/>
						</div>
						<div className="col-span-1 m-3">
							<Stats
								title="Total 24h Volume"
								value={readableNumber(
									data.data.stats["total24hVolume"]
								)}
								icon={<SavingsIcon />}
							/>
						</div>
						<div className="col-span-1 m-3">
							<Stats
								title="Total Market"
								value={readableNumber(
									data.data.stats["totalMarkets"]
								)}
								icon={<LocalConvenienceStoreIcon />}
							/>
						</div>
					</div>
					
					<h3 className="mt-5 wrapper_title">
						Top 10 Cryptocurrencies in the world
					</h3>
					<CryptocurrenciesList coins={data.data.coins} limit={12} />

					<h3 className="mt-5 wrapper_title">Latest Cryptocurrencies News</h3>
					<News feeds={feeds.value} />
				</div>
			)}
		</AsyncPageLoad>
	);
};

export default HomePage;
