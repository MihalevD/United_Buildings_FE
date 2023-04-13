import BasicBox from '../basic/BasicBox';
import {ImageContainer} from '../basic/ImageContainer';
import {TextContainer} from '../basic/TextContainer';
import SquareFootIcon from '@mui/icons-material/SquareFoot';

const blockStyles = {
  width: '430px',
  height: '400px',
  background: '#FFFFFF 0% 0% no-repeat padding-box',
  boxShadow: '0px 3px 6px #00000029',
  //border: '1px solid #707070',
  borderRadius: '30px',
  marginRight: '35px',
  marginBottom: '52px',
};

const imgStyles = {
  width: '100%',
  height: '269px',
};

export type CarouselBlockTypes = {
  id: number;
  imgSrc: string;
  imgAlt: string;
  title: string;
  price: string;
  address: string;
  sqm: string;
  rooms: string;
};

const textStylesHeading = {
  color: '#000000',
  fontSize: '25px',
  lineHeight: '35px',
  textAlign: 'left' as const,
  fontWeight: '600',
};

const textStylesSubHeading = {
  color: '#000000',
  fontSize: '22px',
  lineHeight: '35px',
  textAlign: 'left' as const,
};

export const CarouselBlock = (props: CarouselBlockTypes) => {
  return (
    <BasicBox style={blockStyles} direction='column'>
      <BasicBox fullWidth>
        <ImageContainer
          imageSrc={props.imgSrc}
          imageStyles={imgStyles}
          style={{borderRadius: '30px', border: '1px solid #C9C7C7'}}
          fullWidth
        />
      </BasicBox>
      <BasicBox
        left='24px'
        right='15px'
        direction='column'
        bottom='30px'
        style={{width: 'auto'}}
        fullHeight
        justify='space-between'>
        <BasicBox
          justify='space-between'
          fullWidth
          direction='column'
          top='12px'>
          <BasicBox justify='space-between' fullWidth>
            <TextContainer text={props.title} textStyles={textStylesHeading} />
            <TextContainer
              text={'€ ' + props.price}
              textStyles={textStylesHeading}
            />
          </BasicBox>
          <TextContainer
            text={props.address}
            textStyles={textStylesSubHeading}
          />
        </BasicBox>
        <BasicBox justify='space-between' fullWidth>
          <TextContainer
            text={props.rooms + ' спални'}
            textStyles={textStylesSubHeading}
          />
          <BasicBox>
            <SquareFootIcon />
            <TextContainer text={props.sqm} textStyles={textStylesSubHeading} />
          </BasicBox>
        </BasicBox>
      </BasicBox>
    </BasicBox>
  );
};
