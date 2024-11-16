import { Link } from "react-router-dom";

const Item = ({ item }) => {
	return (
		<>
			<Link to='/single'>
				<img
					src={`${item.path}${item.foto_name}`}
					alt='brak zdjęcia'
					style={{ width: "210px", marginTop: "20px" }}
				/>
			</Link>
			<figcaption style={{ fontSize: "14px", width: "200px" }}>
				{item.caption}
			</figcaption>
		</>
	);
};
export default Item;
