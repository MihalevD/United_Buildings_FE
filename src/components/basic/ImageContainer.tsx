import styled from '@emotion/styled';
import React from 'react';
import Colors from '../../tokens/Colors';
import BasicBox from './BasicBox';
import {TextContainer} from './TextContainer';

export const ImageContainer: React.FC<{
  imageStyles?: {[name: string]: string};
  imageSrc?: string;
  imgText?: string;
  fullWidth?: boolean;
}> = ({imageSrc, imageStyles, fullWidth, imgText}) => {
  return (
    <Wrapper fullWidth={fullWidth}>
      {!!imageSrc && (
        <ImageComponent imageSrc={imageSrc} imageStyles={imageStyles} />
      )}

      {imgText && (
        <TextContainer
          text={imgText}
          customStyles={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
          }}
        />
      )}
    </Wrapper>
  );
};
const Wrapper = styled(BasicBox)`
  position: relative;
`;

export const ImageComponent: React.FC<{
  imageStyles?: {[name: string]: string};
  imageSrc: string;
}> = ({imageSrc, imageStyles}) => {
  return <img src={imageSrc} alt={'static img'} {...imageStyles}></img>;
};
