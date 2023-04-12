import styled from '@emotion/styled';
import BasicBox from './basic/BasicBox';
import useIsMobile from '../helper/isMobile';
import Spacings from '../tokens/Spacings';

export const HomePage = () => {
  const isMobile = useIsMobile();
  return (
    <BasicBox fullWidth direction='column' bottom={Spacings.medium}>
      QK TEXT WOW
    </BasicBox>
  );
};
const ContentWrapper = styled(BasicBox)`
  min-height: calc(100vh - 200px);
`;
