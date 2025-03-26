import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("https://zerodha-7iky.onrender.com/orders");
			const data = await res.json();
			setOrders(data);
		};
		fetchData();
	}, []);

	return (
		<div className="orders">
			{!orders && (
				<div className="no-orders">
					<p>{"You haven't placed any orders today"}</p>

					<Link to={"/"} className="btn">
						Get started
					</Link>
				</div>
			)}

			<div className="order-table">
				<table>
					<tr>
						<th>Name</th>
						<th>Qty</th>
						<th>Price</th>
						<th>Mode</th>
					</tr>

					{orders &&
						orders.map((order, index) => (
							<tr key={index} className="order">
								<td>{order.name}</td>
								<td>{order.qty}</td>
								<td>{order.price}</td>
								<td>{order.mode}</td>
							</tr>
						))}
				</table>
			</div>
		</div>
	);
};

export default Orders;

