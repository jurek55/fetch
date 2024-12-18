import PersonItem from "./PersonItem.jsx";
import '../style/PersonsList.css'

const PersonsList = ({ data }) => {
const sort_data = data;
function sortByur(a, b){
	return a.ur - b.ur;
}
sort_data.sort(sortByur);
console.log(sort_data);

	const space = 'no_space'
	const items = sort_data.map(item => <PersonItem key={item.id} person={item} space={space}/>);

	return (
		<>
			<div className = 'persons-list'>{items}</div>
		</>
	);
};

export default PersonsList;
