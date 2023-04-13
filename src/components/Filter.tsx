import {TextContainer} from './basic/TextContainer';
import BasicBox from './basic/BasicBox';
import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';

const textStyles = {
  fontSize: '18px',
  lineHeight: '24px',
  color: '#3f4554',
};
const Wrapper = styled(BasicBox)`
  background: #cdd5b1 0% 0% no-repeat padding-box;
  border-radius: 20px;
  margin-right: 16px;
`;

type FilterTypes = {
  text: string;
  onDelete: () => void;
};

export const Filter = (props: FilterTypes) => {
  return (
    <>
      {props.text && (
        <Wrapper>
          <BasicBox
            left='16px'
            top='6px'
            bottom='10px'
            right='10px'
            align='center'>
            <TextContainer text={props.text} textStyles={textStyles} />
            <BasicBox
              left='15px'
              onClick={props.onDelete}
              style={{cursor: 'pointer'}}>
              <CloseIcon />
            </BasicBox>
          </BasicBox>
        </Wrapper>
      )}
    </>
  );
};
