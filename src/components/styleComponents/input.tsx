import styled from "styled-components";

interface InputProps {
    width?: string;
    height?:string;
    background?: string;
    border?: string;
    borderRadius?: string;
    paddingLeft?: string;
    fontSize?: string;
    color?: string;
    fontWeight?: string;
    marginTop?: string
}


export const Input = styled.input<{style?: InputProps, placeholder?: string}>`
    width: ${props => props.style?.width || "100%"};
    height: ${props => props.style?.height || "2.5rem"};
    background: ${props => props.style?.background || "var(--input-color-grey)"};
    border: ${props => props.style?.border || "none"};
    border-radius: ${props => props.style?.borderRadius || "0.5rem"};
    padding-left: ${props => props.style?.paddingLeft || "1rem"};
    font-size: ${props => props.style?.fontSize || "1rem"};
    color: ${props => props.style?.color || "var(--input-color-grey2)"};
    font-weight: ${props => props.style?.fontWeight || "500"};
    margin-top: ${props => props.style?.marginTop || "0"};
`;