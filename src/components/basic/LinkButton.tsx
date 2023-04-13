import styled from '@emotion/styled';
import BasicBox from './BasicBox';

type LinkButtonTypes = {
  href: string;
  text: string;
};

const StyledLink = styled.a`
  color: #3f4554;
  text-decoration: none;
  font-size: 20px;
  line-height: 33px;
`;
const Wrapper = styled(BasicBox)``;

export const LinkButton: React.FC<LinkButtonTypes> = ({href, text}) => {
  return (
    <Wrapper right='35px'>
      <StyledLink href={href}>{text}</StyledLink>
    </Wrapper>
  );
};
