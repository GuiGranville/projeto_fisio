import styled from "styled-components";

interface TitleProps {
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

export const Title = styled.h1<{style?: TitleProps}>`
    border: ${props => props.style?.border || "none"};
    font-size: ${props => props.style?.fontSize || "16px"};
    color: ${props => props.style?.color || "var(--titleHeader-color)"};
    font-weight: ${props => props.style?.fontWeight || "500"};
    font-family: var(--font-mono);
    display: flex;
`;