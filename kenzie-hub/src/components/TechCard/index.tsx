import { StyledLi } from "./style";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { Authorization } from "../../context/Authorization";



export default function TechCard(){
  
  const { deleteTech , userGet} = useContext(Authorization);

 console.log(userGet);
 
 
  return (
    <>
      {userGet!.techs.map(({ id, title, status }) => (
        <StyledLi key={id}>
          <h3>{title}</h3>
          <div>
          <span>{status}</span>
            <button onClick={() => deleteTech(id)}>
              <MdDelete />
            </button>
            
          </div>
        </StyledLi>
      ))}
    </>
  );
}
