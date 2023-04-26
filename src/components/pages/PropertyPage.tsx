import {useParams} from 'react-router-dom';
import BasicBox from '../basic/BasicBox';
import {useState} from 'react';
import {items} from '../../helper/constants';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {TextContainer} from '../basic/TextContainer';
import styled from '@emotion/styled';
import {ImageContainer} from '../basic/ImageContainer';
import bkg from '../../img/apart2.jpg';

const CustomText = styled(TextContainer)`
  text-align: left;
  font: normal normal normal 20px/27px Segoe UI;
  letter-spacing: 0px;
  color: #000000;
`;
export const PropertyPage = () => {
  const {id} = useParams();
  const [data, setData] = useState(items.find(elem => elem.id === Number(id)));

  const goBack = () => {
    window.history.back();
  };
  return (
    <BasicBox
      left='100px'
      right='100px'
      fullWidth
      style={{boxSizing: 'border-box'}}
      direction='column'
      bottom='500px'>
      <BasicBox onClick={goBack} align='center'>
        <KeyboardBackspaceIcon /> <CustomText text={'Назад'} />
      </BasicBox>
      <BasicBox fullWidth>
        <ImageContainer
          imageSrc={bkg}
          style={{
            width: '100%',
            borderRadius: '30px',
            clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 25%, 89% 0)',
          }}
        />
      </BasicBox>
    </BasicBox>
  );
};
