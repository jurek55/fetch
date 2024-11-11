import PersonItem from "./PersonItem.jsx";
import '../style/PersonsList.css'

const PersonsList = ({ data }) => {

	const space = 'no_space'
	const items = data.map(item => <PersonItem key={item.id} person={item} space={space}/>);

	return (
		<>
			<div className = 'persons-list'>{items}</div>
		</>
	);
};

export default PersonsList;
