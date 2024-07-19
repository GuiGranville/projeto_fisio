
import styled from "styled-components";
import { Input } from "../../input";

const Wrapper = styled.section`
  display: flex ;
  flex-direction: column;
`;
const Title = styled.p`
    color: #000000;
`;

interface styleProps{
  width?: string;
  height?:string;
  background?: string;
  border?: string;
  borderRadius?: string;
  paddingLeft?: string;
  fontSize?: string;
  color?: string;
  fontWeight?: string;
}

interface props{
  title: string
  inputWidth?: string
  inputHeight?: string
  wrapperWidth?: string
  placeholder?: string
  type?: string
  fnEdit?: (e: any) => void
  value?: string | number
  name?: string
  style?: styleProps
}

export function InputWithTitle(props: props) {
  return (
    <Wrapper style={{width: props.wrapperWidth, height: props.inputHeight}}>
      <Title>{props.title}</Title>
      <Input name={props.name} value={props.value} onChange={props.fnEdit} type={props.type} placeholder={props.placeholder} style={{height: props.style?.height, width: props.style?.width}}/>
    </Wrapper>
  );
}