import styled from 'styled-components';

const StyledButton = styled.button`
margin:${p => p.theme.space[1]};
paddind: ${p => p.theme.space[1]};
`;

export const Button = ({ type = 'button', children }) => {
    return <StyledButton type={type}>{children}</StyledButton>;
};