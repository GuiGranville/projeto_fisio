
import styled from "styled-components";
import { Select } from "../../select";

const Wrapper = styled.section`
  display: flex ;
  flex-direction: column;
`;
const Title = styled.p`
    color: #000000;
`;

interface listaItensProps{
  value: string
  label: string
}
interface props{
  title: string
  inputWidth?: string
  inputHeight?: string
  wrapperWidth?: string
  placeholder?: string
  fnEdit?: (e) => void
  listaItens?: listaItensProps[]
  value?: string | number
  name?: string
}

export function SelectWithTitle(props: props) {
  return (
    <Wrapper style={{width: props.wrapperWidth, height: props.inputHeight}}>
      <Title>{props.title}</Title>
      <Select name={props.name} value={props.value} onChange={props.fnEdit} placeholder={props.placeholder} style={{height: props.inputHeight}}>
        {props.listaItens?.map((item, index) => (
          <option key={index} value={item.value}>{item.label}</option>
        ))}
      </Select>
    </Wrapper>
  );
}