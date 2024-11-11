import "../style/Stroka.css";
import PersonItem from "./PersonItem";

const Stroka = ({ data }) => {
	const family_id_f = "stroka";
	const family_id_m = "stroka";
	const tab = data.filter(item => {
		return (
			item.nazwisko == "stroka" ||
			item.nazwisko == "stroka" ||
			item.z_domu == "stroka"
		);
	});
	const generation1 = tab.filter(item => {
		return item.generation == 1;
	});
	const generation2 = tab.filter(item => {
		return item.generation == 2;
	});
	const generation3 = tab.filter(item => {
		return item.generation == 3;
	});
	const generation4 = tab.filter(item => {
		return item.generation == 4;
	});
	const generation5 = tab.filter(item => {
		return item.generation == 5;
	});

	const generation1items = generation1.map(item => (
		<PersonItem
			key={item.id}
			person={item}
			family_id_f={family_id_f}
			family_id_m={family_id_m}
		/>
	));
	const generation2items = generation2.map(item => (
		<PersonItem
			key={item.id}
			person={item}
			family_id_f={family_id_f}
			family_id_m={family_id_m}
		/>
	));
	const generation3items = generation3.map(item => (
		<PersonItem
			key={item.id}
			person={item}
			family_id_f={family_id_f}
			family_id_m={family_id_m}
		/>
	));
	const generation4items = generation4.map(item => (
		<PersonItem
			key={item.id}
			person={item}
			family_id_f={family_id_f}
			family_id_m={family_id_m}
		/>
	));
	const generation5items = generation5.map(item => (
		<PersonItem
			key={item.id}
			person={item}
			family_id_f={family_id_f}
			family_id_m={family_id_m}
		/>
	));

	return (
		<div className='stroka-container'>
			<div className='stroka1 generation'>{generation1items}</div>
			<div className='stroka2 generation'>{generation2items}</div>
			<div className='stroka3 generation'>{generation3items}</div>
			<div className='stroka4 generation'>{generation4items}</div>
			<div className='stroka5 generation'>{generation5items}</div>
		</div>
	);
};
export default Stroka;
