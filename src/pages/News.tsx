import NewsCompo from "components/NewsCompo";
import AsyncPageLoad from "hoc/AsyncPageLoad";
import React from "react";
import { useGetFeedsQuery } from "redux/features/news.feature";

const News = () => {
	const { isFetching, error, data } = useGetFeedsQuery({
		query: "Cryptocurrencies",
		count: 15,
	});
	return (
		<div className="news_page_wrapper mt-12">
			<AsyncPageLoad
				loading={isFetching}
				error={error}
				fulfilled={Boolean(data)}
			>
				<h1 className="wrapper_title">
					Top News 
				</h1>
				{Boolean(data) && <NewsCompo feeds={data.value} />}
			</AsyncPageLoad>
		</div>
	);
};

export default News;
