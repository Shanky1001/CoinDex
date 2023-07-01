import Loader from 'components/Loader';
import React from 'react'

const AsyncPageLoad = (props: AsyncPageLoadProps) => {
    if (props.loading) {
		return <Loader />;
	} else if (props.error) {
		return (
			<div>
				{JSON.stringify(props.error)}
			</div>
		);
	} else if (props.fulfilled) {
		return props.children;
	} else {
		return <>Something has happen</>;
	}
}

AsyncPageLoad.defaultValue = {
	loading: true,
	fulfilled: false,
	error: null,
	children: <></>,
};

export default AsyncPageLoad