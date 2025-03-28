import axios from "axios";
import { useEffect, useState } from "react";

const Positions = () => {
	const [positions, setPositions] = useState([]);

	useEffect(() => {
		axios.get("https://zerodha-7iky.onrender.com/positions").then((data) => setPositions(data.data));
	}, []);

	return (
		<>
			<h3 className="title">Positions ({positions.length})</h3>

			<div className="order-table">
				<table>
					<thead>
						<tr>
							<th>Product</th>
							<th>Instrument</th>
							<th>Qty.</th>
							<th>Avg.</th>
							<th>LTP</th>
							<th>P&L</th>
							<th>Chg.</th>
						</tr>
					</thead>
					<tbody>
						{positions.map((stock, index) => {
							const currValue = stock.price * stock.qty;
							const isProfit = currValue - stock.avg * stock.qty >= 0;
							const profLossClass = isProfit ? "profit" : "loss";
							const dayClass = stock.isLoss ? "loss" : "profit";

							return (
								<tr key={index}>
									<td>{stock.product}</td>
									<td>{stock.name}</td>
									<td>{stock.qty}</td>
									<td>{stock.avg.toFixed(2)}</td>
									<td>{stock.price.toFixed(2)}</td>
									<td className={profLossClass}>
										{(currValue - stock.avg * stock.qty).toFixed(2)}
									</td>
									<td className={dayClass}>{stock.day}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Positions;

