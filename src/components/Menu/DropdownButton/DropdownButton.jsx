import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./DropdownButton.css";

function DropdownButton({ children, open, onClick }) {
	console.log(open);
	return (
		<div
			onClick={onClick}
			className={`dropdown-btn ${open ? "button-open" : null}`}
		>
			{children}{" "}
			<span className='toggle-icon'>
				{open ? <FaChevronUp /> : <FaChevronDown />}
			</span>
		</div>
	);
}

export default DropdownButton;
