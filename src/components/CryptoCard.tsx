import {
	Avatar,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
    Typography,
} from "@mui/material";
import { readableNumber } from "pages/helper";
import React from "react";
import { Link } from "react-router-dom";

const CryptoCard = ({ coin }: any) => {
	return (
		<Card elevation={6} className="crypto_card">
			<CardHeader
				title={<Typography variant="h3" sx={{fontSize:"16px",fontWeight:"600"}}>{coin.name}</Typography>}
				avatar={
					<Avatar
						src={coin.iconUrl}
						aria-label={coin.name}
						alt={coin.name}
					/>
				}
			/>
			<CardContent>
				<p className="flex justify-between my-1">
					<span className="text-lg font-medium"> Price </span>
					<span>{readableNumber(parseFloat(coin.price))}</span>
				</p>
				<p className="flex justify-between my-1 ">
					<span className="text-lg font-medium"> Market Cap </span>
					<span>{readableNumber(parseFloat(coin.marketCap))}</span>
				</p>
				<p className="flex justify-between my-1 ">
					<span className="text-lg font-medium"> Daily Change </span>
					<span>{readableNumber(parseFloat(coin.change))}</span>
				</p>
			</CardContent>
			<CardActions sx={{ width: "100%",display:"flex",alignItems:"center",justifyContent:"space-between" }}>
				<Link to={`/market/${coin.uuid}`} key={`/market/${coin.uuid}`}>
					<Button className="action_btn">View Markets</Button>
				</Link>
				<Link
					to={`/exchange/${coin.uuid}`}
					key={`/exchange/${coin.uuid}`}
				>
					<Button className="action_btn">View Exchanges</Button>
				</Link>
			</CardActions>
		</Card>
	);
};

export default CryptoCard;
