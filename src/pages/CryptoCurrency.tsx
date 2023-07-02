import CryptocurrenciesList from 'components/CryptocurrenciesList';
import AsyncPageLoad from 'hoc/AsyncPageLoad';
import React from 'react'
import { useGetCoinsQuery } from 'redux/features/crypto.feature';

const CryptoCurrency = () => {
	const { isFetching, error, data } = useGetCoinsQuery('');

  return (
    <AsyncPageLoad  loading={isFetching} error={error} fulfilled={Boolean(data)}>
			{Boolean(data) && 
      <div className='currencies_wrapper mt-12'>
        <h1 className="wrapper_title">
          Top 50 Currencies List
        </h1>
        <CryptocurrenciesList coins={data.data.coins} />
      </div>
      }
    </AsyncPageLoad>
  )
}

export default CryptoCurrency