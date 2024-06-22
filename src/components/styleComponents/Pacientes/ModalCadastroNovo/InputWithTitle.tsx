
import styled from "styled-components";
import { Input } from "../../input";

const Wrapper = styled.section`
  display: flex ;
  flex-direction: column;
`;
const Title = styled.p`
    color: #000000;
`;

interface props{
  title: string
  inputWidth?: string
  inputHeight?: string
  wrapperWidth?: string
  placeholder?: string
  type?: string
  fnEdit?: (e) => void
  value?: string | number
  name?: string
}

export function InputWithTitle(props: props) {
  return (
    <Wrapper style={{width: props.wrapperWidth}}>
      <Title>{props.title}</Title>
      <Input name={props.name} value={props.value} onChange={props.fnEdit} type={props.type} placeholder={props.placeholder} style={{height: props.inputHeight}}/>
    </Wrapper>
  );
}