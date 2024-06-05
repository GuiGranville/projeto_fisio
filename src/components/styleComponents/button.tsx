import styled from "styled-components";

interface ButtonProps {
    width?: string;
    height?: string;
    background?: string;
    border?: string;
    borderRadius?: string;
    paddingLeft?: string;
    fontSize?: string;
    color?: string;
    fontWeight?: string;
    focusColor?: string;
}

export const Button = styled.button<{style?: ButtonProps}>`
    width: ${props => props.style?.width || "100%"};
    height: ${props => props.style?.height || "2.5rem"};
    background: ${props => props.style?.background || "var(--buttonColor)"};
    border: ${props => props.style?.border || "none"};
    border-radius: ${props => props.style?.borderRadius || "5px"};
    font-size: ${props => props.style?.fontSize || "1rem"};
    color: ${props => props.style?.color || "white"};
    font-weight: ${props => props.style?.fontWeight || "500"};
    font-family: var(--font-mono);
    display: flex;
    align-items: center;
    justify-content: center;
    &:active{
        transition: 5ms;
        background-color: ${props => props.style?.focusColor || ""};
    }
    cursor: pointer;
`;