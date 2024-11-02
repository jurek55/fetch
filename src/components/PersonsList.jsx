import PersonItem from "./PersonItem.jsx";

const PersonsList = ({ data }) => {

	const items = data.map(item => <PersonItem key={item.id} person={item} />);

	return (
		<>
			<div>
				<h1>Osoby</h1>
			</div>
			<div>drzewo</div>
			{items}
		</>
	);
};

export default PersonsList;
