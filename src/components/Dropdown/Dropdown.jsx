import DropdownButton from "../DropdownButton/DropdownButton";
import DropdownContent from "../DropdownContent/DropdownContent";
import "./Dropdown.css";
const Dropdown = ({ buttonText, content, onClick, open }) => {
	return (
		<div className='dropdown'>
			<DropdownButton open={open} onClick={onClick}>
				{buttonText}
			</DropdownButton>
			<DropdownContent open={open}>{content}</DropdownContent>
		</div>
	);
};

export default Dropdown;
