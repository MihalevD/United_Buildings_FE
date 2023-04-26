import styled from "@emotion/styled";
import BasicBox from "./BasicBox";
import { useNavigate } from "react-router-dom";

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

export const LinkButton: React.FC<LinkButtonTypes> = ({ href, text }) => {
  const navigate = useNavigate();
  const handleClick = (e: any, route: string) => {
    e.preventDefault();
    navigate(route);
  };
  return (
    <Wrapper right="35px">
      <StyledLink
        className="header-text"
        href=""
        onClick={(e) => handleClick(e, href)}
      >
        {text}
      </StyledLink>
    </Wrapper>
  );
};
