import axios from "axios";
import { useEffect, useState } from "react";

const Holdings = () => {
	const [holdings, setHoldings] = useState([]);
	useEffect(() => {
		(async () => {
			const data = await axios.get("https://zerodha-7iky.onrender.com/holdings");
			setHoldings(data.data);
		})();
	}, []);

	return (
		<>
			<h3 className="title">Holdings ({holdings.length})</h3>

			<div className="order-table">
				<table>
					<thead>
						<tr>
							<th>Instrument</th>
							<th>Qty.</th>
							<th>Avg. cost</th>
							<th>LTP</th>
							<th>Cur. val</th>
							<th>P&L</th>
							<th>Net chg.</th>
							<th>Day chg.</th>
						</tr>
					</thead>
					<tbody>
						{holdings.map((stock) => {
							const currValue = stock.price * stock.qty;
							const isProfit = currValue - stock.avg * stock.qty >= 0;
							const profLossClass = isProfit ? "profit" : "loss";
							const dayClass = stock.isLoss ? "loss" : "profit";

							return (
								<tr key={stock.name}>
									<td>{stock.name}</td>
									<td>{stock.qty}</td>
									<td>{stock.avg.toFixed(2)}</td>
									<td>{stock.price.toFixed(2)}</td>
									<td>{currValue.toFixed(2)}</td>
									<td className={profLossClass}>
										{(currValue - stock.avg * stock.qty).toFixed(2)}
									</td>
									<td className={profLossClass}>{stock.net}</td>
									<td className={dayClass}>{stock.day}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>

			<div className="row">
				<div className="col">
					<h5>
						29,875.<span>55</span>{" "}
					</h5>
					<p>Total investment</p>
				</div>
				<div className="col">
					<h5>
						31,428.<span>95</span>{" "}
					</h5>
					<p>Current value</p>
				</div>
				<div className="col">
					<h5>1,553.40 (+5.20%)</h5>
					<p>P&L</p>
				</div>
			</div>
		</>
	);
};

export default Holdings;

