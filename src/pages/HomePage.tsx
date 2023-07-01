import React from "react";
import News from "./News";

const HomePage = () => {
	return (
		<div>
			<h1 className="mb-5 mt-10 text-xl">Global Crypto Stats</h1>
			<div className="mb-20 md:grid grid-cols-3">
				<div className="col-span-1 m-3">
					{/* <Statistic
								title='Total Cryptocurrencies'
								value={millify(data.data.stats['total'])}
								prefix={<ExclamationCircleOutlined />}
							/> */}
				</div>
				<div className="col-span-1 m-3">
					{/* <Statistic
								title='Total Exchanges'
								value={millify(data.data.stats['totalExchanges'])}
								prefix={<MoneyCollectOutlined />}
							/> */}
				</div>
				<div className="col-span-1 m-3">
					{/* <Statistic
								title='Total Market Cap'
								value={millify(data.data.stats['totalMarketCap'])}
								prefix={<DollarCircleOutlined />}
							/> */}
				</div>
				<div className="col-span-1 m-3">
					{/* <Statistic
								title='Total 24 Volume'
								value={millify(data.data.stats['total24hVolume'])}
								prefix={<ThunderboltOutlined />}
							/> */}
				</div>
				<div className="col-span-1 m-3">
					{/* <Statistic
								title='Total Market'
								value={millify(data.data.stats['totalMarkets'])}
								prefix={<DollarCircleOutlined />}
							/> */}
				</div>
			</div>

			<h3 className="mt-8">Top 10 Cryptocurrencies in the world</h3>
			{/* <CryptocurrenciesList coins={data.data.coins} limit={10} /> */}

			<h3 className="mt-8">Latest Cryptocurrencies News</h3>
			{/* <News feeds={feeds.value} /> */}
		</div>
	);
};

export default HomePage;
