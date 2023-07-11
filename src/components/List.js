import React  , {useState , useEffect}from "react";
import { BiEditAlt } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { baseURL } from "../utils/constant";
import axios from "axios";
const List = ({ id, task, setUpdateUI, updateMode }) => {
  const [updateUI , changeUpdateUI] = useState(0);

  useEffect(()=>{
      setUpdateUI((prevState) => !prevState);    
  },[updateUI])
  
  const removeTask = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res);
     changeUpdateUI(!updateUI);
    });
  };
  return (
    <li>
      {task}
      <div className="icon_holder">
        <BiEditAlt className="icon" onClick={() => updateMode(id, task)} />
        <BsTrash className="icon" onClick={removeTask} />
      </div>
    </li>
  );
};

export default List;
