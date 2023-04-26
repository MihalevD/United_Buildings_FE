import BasicBox from './basic/BasicBox';
import {ImageContainer} from './basic/ImageContainer';
import {TextContainer} from './basic/TextContainer';
import bs from '../img/bs.jpg';
import sz from '../img/sz.jpg';
import ch from '../img/ch.jpg';
import styled from '@emotion/styled';

const text2 =
  'РАЗГЛЕДАЙТЕ НАЙ-АТРАКТИВНИТЕ КАТЕГОРИИ ЗА ДА ОТКРИЕТЕ СВОЕТО ЖИЛИЩЕ';

const textStylesHeading = {
  color: '#000000',
  fontSize: '30px',
  lineHeight: '32px',
  textAlign: 'left' as const,
  fontWeight: '700',
};

const textStylesSubHeading = {
  color: '#000000',
  fontSize: '25px',
  lineHeight: '32px',
  textAlign: 'left' as const,
  fontWeight: '600',
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 25% 25%;
  height: 331px;
  column-gap: 16px;
  @media (max-width: 1365px) {
    grid-template-columns: 40% 30% 30%;
  }
  @media (max-width: 1000px) {
    height: 600px;
    grid-template-rows: 33% 33% 33%;
    grid-template-columns: 100%;
    row-gap: 16px;
  }
`;

const imgStyles = {
  width: '100%',
  height: 'inherit',
};

const styles = {
  borderRadius: '30px',
  boxShadow: '0px 3px 6px #00000029',
  objectFit: 'cover',
};

export const Locations = () => {
  return (
    <BasicBox
      left='140px'
      right='140px'
      top='73px'
      bottom='614px'
      direction='column'
      style={{width: 'auto'}}>
      <BasicBox bottom='47px' direction='column'>
        <TextContainer
          text={text2}
          textStyles={textStylesSubHeading}></TextContainer>
      </BasicBox>
      <Wrapper>
        <ImageContainer
          imageSrc={bs}
          imageStyles={imgStyles}
          fullHeight
          fullWidth
          tag='Бургас'
          style={styles}
        />
        <ImageContainer
          imageSrc={sz}
          imageStyles={imgStyles}
          fullHeight
          fullWidth
          tag='Созопол'
          style={styles}
        />
        <ImageContainer
          imageSrc={ch}
          imageStyles={imgStyles}
          tag='Черноморец'
          fullHeight
          fullWidth
          style={styles}
        />
      </Wrapper>
    </BasicBox>
  );
};
