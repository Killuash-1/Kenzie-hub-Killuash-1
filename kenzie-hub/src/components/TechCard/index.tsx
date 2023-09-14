import { StyledLi } from "./style";
import { MdDelete, MdEdit } from "react-icons/md";
import { useContext } from "react";
import { Authorization } from "../../context/Authorization";
import { iUserTechPost } from "../../services/UserTechPost";
import { ModalContext } from "../../context/ModalContext";


export default function TechCard(){
  
  const { deleteTech , userGet} = useContext(Authorization);
  const { toggleUpdateModal } = useContext(ModalContext);
  const handleEdit = (tech: iUserTechPost) => {
    if (tech) toggleUpdateModal(tech)

  }
  
 
  return (
    <>
      {userGet?.techs.map(({ id, title, status }) => (
        <StyledLi key={id}>
          <h3>{title}</h3>
          <div>
             <span>{status}</span>
            <button onClick={() => handleEdit({ id, title, status })}>
              <MdEdit/>
            </button>
            <button onClick={() => deleteTech(id)}>
              <MdDelete />
            </button>
            
          </div>
        </StyledLi>
      ))}
    </>
  );
}
