import { Link } from "react-router-dom";

const Item = ({ item }) => {
	return (
		<>
			<Link to={`${item.path_to}${item.foto_name}`}>
				<img
					src={`${item.path_to}${item.foto_name}`}
					alt='brak zdjęcia'
					style={{ width: "240px", marginTop: "20px" }}
				/>
			</Link>
			<figcaption style={{ fontSize: "14px", width: "220px" }}>
				{item.caption}
			</figcaption>
		</>
	);
};
export default Item;
