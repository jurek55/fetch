import "../style/Kocur.css";
import PersonItem from "./PersonItem";

const Kocur = ({ data }) => {
	console.log(data);
	const family_id_f = "kocur";
	const family_id_m = "kocur";
	const tab = data.filter(item => {
		return item.nazwisko == "kocur" || item.z_domu == "kocur";
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
		<div className='name-container'>
			<div className='kocur1 generation'>{generation1items}</div>
			<div className='kocur2 generation'>{generation2items}</div>
			<div className='kocur3 generation'>{generation3items}</div>
			<div className='kocur4 generation'>{generation4items}</div>
			<div className='kocur5 generation'>{generation5items}</div>
		</div>
	);
};
export default Kocur;
