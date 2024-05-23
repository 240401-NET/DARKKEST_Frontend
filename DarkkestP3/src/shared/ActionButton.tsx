import { useNavigate } from "react-router-dom";
import { SelectedAuthForm } from "./types";

type Props = {
    setSelectedAuthForm: (value: SelectedAuthForm) => void;
}

const ActionButton = ({ setSelectedAuthForm} : Props) => {
    const navigate = useNavigate();
  const handleClick = () => {
    setSelectedAuthForm(SelectedAuthForm.Register);
    navigate("/auth");
  }

  return (
    <button 
        onClick = {handleClick}
        className = "rounded-md bg-secondary-green px-10 py-2 hover:bg:primary-green hover:text-primary-white transition duration-500"  
    >
        Become A Volunteer
    </button>
  )
}

export default ActionButton;