import styled from '@emotion/styled';
import {useState} from 'react';
import {Filter} from './Filter';
import BasicBox from './basic/BasicBox';
import {FilterType} from '../config/types';

const Wrapper = styled(BasicBox)``;

type FiltersRowProps = {
  filters: FilterType;
  onDelete: (filter: FilterType) => void;
};

export const FiltersRow = (props: FiltersRowProps) => {
  const onDelete = (key: keyof FilterType) => {
    let copy = {...props.filters};
    delete copy[key];
    props.onDelete(copy);
  };

  return (
    <Wrapper top='180px'>
      {props.filters &&
        Object.entries(props.filters)?.map(([key, value], index) => {
          return (
            <Filter
              key={index}
              text={value}
              onDelete={() => onDelete(key as keyof FilterType)}
            />
          );
        })}
    </Wrapper>
  );
};
