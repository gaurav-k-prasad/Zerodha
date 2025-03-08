import {
	BarChartOutlined,
	KeyboardArrowDownRounded,
	KeyboardArrowUpRounded,
	MoreHoriz,
} from "@mui/icons-material";
import { Grow, Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { watchlist } from "../data/data";

const WatchList = () => {
	return (
		<div className="watchlist-container">
			<div className="search-container">
				<input
					type="text"
					name="search"
					id="search"
					placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
					className="search"
				/>
				<span className="counts"> {watchlist.length} / 50</span>
			</div>

			<ul className="list">
				{watchlist.map((item, index) => (
					<WatchListItem key={index} stock={item} />
				))}
			</ul>
		</div>
	);
};

const WatchListItem = ({ stock }) => {
	const [showWatchListActions, setShowWatchListActions] = useState(false);

	const handleMouseEnter = () => {
		setShowWatchListActions(true);
	};

	const handleMouseLeave = () => {
		setShowWatchListActions(false);
	};

	return (
		<li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<div className="item">
				<p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
				<div className="item-info">
					<span className="percent">{stock.percent}</span>
					{stock.isDown ? (
						<KeyboardArrowDownRounded className="down" />
					) : (
						<KeyboardArrowUpRounded className="up" />
					)}
					<span className="price">{stock.price}</span>
				</div>
			</div>
			{showWatchListActions && <WatchListActions uid={stock.name} />}
		</li>
	);
};

const WatchListActions = ({ uid }) => {
	return (
		<span className="actions">
			<span>
				<Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
					<button className="buy">Buy</button>
				</Tooltip>
				<Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
					<button className="sell">Sell</button>
				</Tooltip>
				<Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
					<button className="action">
						<BarChartOutlined className="icon" />
					</button>
				</Tooltip>
				<Tooltip title="More (S)" placement="top" arrow TransitionComponent={Grow}>
					<button className="action">
						<MoreHoriz className="icon" />
					</button>
				</Tooltip>
			</span>
		</span>
	);
};

WatchListItem.propTypes = {
	stock: PropTypes.shape({
		name: PropTypes.string.isRequired,
		isDown: PropTypes.bool.isRequired,
		percent: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
	}).isRequired,
};

export default WatchList;

