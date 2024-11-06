import PersonItem from "./PersonItem.jsx";
import '../style/PersonsList.css'

const PersonsList = ({ data }) => {
	const items = data.map(item => <PersonItem key={item.id} person={item} />);

	return (
		<>
			<div className = 'persons-list'>{items}</div>
		</>
	);
};

export default PersonsList;
