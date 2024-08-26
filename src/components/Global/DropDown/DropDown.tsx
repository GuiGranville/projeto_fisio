import "./styleDropDown.scss";

interface DropDownProps{
  options: { value: string; fn: any }[]; 
  isOpen: boolean 
}

export function DropDown(props: DropDownProps) {


    return (
        <div className="dropdown" style={{display: props.isOpen ? "block" : "none"}}>
        
          <ul className="dropdown-menu">
            {props.options.map((option) => (
              <li key={option.value} onClick={option.fn}>
                {option.value}
              </li>
            ))}
          </ul>
          
        </div>
      );
}