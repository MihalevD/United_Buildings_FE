import BasicBox from '../basic/BasicBox';

const blockStyles = {
  width: '503px',
  height: '423px',
  background: '#FFFFFF 0% 0% no-repeat padding-box',
  boxShadow: '0px 3px 6px #00000029',
  border: '1px solid #707070',
  borderRadius: '30px',
};

export const CarouselBlock = () => {
  return <BasicBox style={blockStyles}></BasicBox>;
};
