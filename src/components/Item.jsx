import { Link } from "react-router-dom";
// import SinglePhoto from './SinglePhoto'

const Item = ({ item, link }) => {
	return (
		<>
			<Link to={`${link}`}>
				<img src={`${item.path}${item.foto_name}`} alt='brak zdjęcia' style={{ width: "240px", marginTop: '20px' }} />
				<figcaption style={{ fontSize: "14px", width: "220px" }}>
					{item.caption}
				</figcaption>
			
			</Link>
			{/* <SinglePhoto /> */}
		</>
	);
};
export default Item;
