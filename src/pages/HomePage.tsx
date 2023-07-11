import Stats from "components/Stats";
import AsyncPageLoad from "hoc/AsyncPageLoad";
import React from "react";
import {useGetCoinsQuery} from "redux/features/crypto.feature";
import {useGetFeedsQuery} from "redux/features/news.feature";
import {readableNumber} from "./helper";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SavingsIcon from "@mui/icons-material/Savings";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";
import CryptocurrenciesList from "components/CryptocurrenciesList";
import NewsCompo from "components/NewsCompo";

const HomePage = () => {
  const {isFetching, error, data} = useGetCoinsQuery("");
  const {
    isFetching: feedsFetching,
    error: feedError,
    data: feeds,
  } = useGetFeedsQuery({
    query: "Cryptocurrencies",
    count: 6,
  });
  return (
    <div className="home_wrapper">
      <AsyncPageLoad loading={isFetching} error={error} fulfilled={Boolean(data)}>
        {Boolean(feeds && data) && (
          <div className="homepage_wrapper">
            {/* <h1 className="wrapper_title">Global Crypto Stats</h1> */}
            <div className="mb-10 flex flex-row flex-wrap gap-x-2 gap-y-2 justify-start stats_card_wrapper">
              <Stats
                title="Total Cryptocurrencies"
                value={readableNumber(data.data.stats["total"])}
                icon={<MonetizationOnIcon />}
              />
              <Stats
                title="Total Exchanges"
                value={readableNumber(data.data.stats["totalExchanges"])}
                icon={<CurrencyExchangeIcon />}
              />
              <Stats
                title="Total Market Cap"
                value={readableNumber(data.data.stats["totalMarketCap"])}
                icon={<AccountBalanceIcon />}
              />
              <Stats title="Total 24h Volume" value={readableNumber(data.data.stats["total24hVolume"])} icon={<SavingsIcon />} />
              <Stats
                title="Total Market"
                value={readableNumber(data.data.stats["totalMarkets"])}
                icon={<LocalConvenienceStoreIcon />}
              />
            </div>

            <h3 className="wrapper_title m-3">Top 12 Cryptocurrencies in the world</h3>
            <CryptocurrenciesList coins={data.data.coins} limit={12} />
          </div>
        )}
      </AsyncPageLoad>
      <AsyncPageLoad loading={feedsFetching} error={feedError} fulfilled={Boolean(feeds)}>
        {Boolean(feeds) && (
          <div className="homepage_wrapper">
            <h3 className="wrapper_title">Latest Cryptocurrencies News</h3>
            <NewsCompo feeds={feeds.value} />
          </div>
        )}
      </AsyncPageLoad>
    </div>
  );
};

export default HomePage;
