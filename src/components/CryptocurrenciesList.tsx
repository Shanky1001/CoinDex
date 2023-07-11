import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import CryptoCard from "./CryptoCard";

const CryptocurrenciesList = (props: {coins: Coin[]; limit: number | null}) => {
  const [coins, setCoins] = useState(props.coins);

  useEffect(() => {
    if (props.limit) {
      setCoins(props.coins.slice(0, props.limit));
    }
  }, [props]);

  return (
    <div className="sm:grid sm:grid-cols-2 md:grid-cols-3">
      {coins.map((coin: Coin) => (
        <div className="col-span-1 m-3" key={coin.uuid}>
          <Link to={`/crypto/${coin.uuid}`}>
            <CryptoCard coin={coin} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CryptocurrenciesList;

CryptocurrenciesList.defaultProps = {
  coins: [],
  limit: null,
};
