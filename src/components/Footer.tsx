import styled from '@emotion/styled';
import useIsMobile from '../helper/isMobile';
import BasicBox from './basic/BasicBox';
export const Footer = () => {
  const isMobile = useIsMobile();
  return (
    <FooterWrapper
      fullWidth
      justify='center'
      align='center'
      $isMobile={isMobile}>
      QK TEXT FOOTER WOW
    </FooterWrapper>
  );
};
const FooterWrapper = styled(BasicBox)<{$isMobile: boolean}>`
  position: fixed;
  bottom: 0;
  height: ${({$isMobile}) => ($isMobile ? '50px' : '100px')};
`;
