import React from 'react';
import { CustomDiv } from '../../styles/kiosk.style';
import styled from 'styled-components';
import MuscleMan from '../MuscleMan';
import MuscleWoman from './../MuscleWoman';
import moment from 'moment';

const DateDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1vh;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Pretendard-Regular';
  border: solid 0.125rem transparent;
  border-radius: 30px;
  background-image: linear-gradient(#fff, #fff), linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  width: 20vw;
  color: #92a3fd;
`;

const StatsMuscle = ({ muscle, date }) => {
  const user = { isMale: false, muscles: muscle };
  const history = moment(date).format('MM-DD');
  const diff = () => {
    for (const day of Range(0, 10)) {
      if (moment().subtract(day, 'day').format('MM-DD') === history) {
        if (day === 0) {
          return <DateDiv>'오늘'</DateDiv>;
        } else return <DateDiv>{day}일 전</DateDiv>;
      }
    }
  };
  return (
    <CustomDiv
      bgMain="white"
      divWidth={740}
      divHeight={800}
      ml={10}
      mr={10}
      borderRadius="10px"
      displayDiv="flex"
      flexDirection="column"
      alignItems="center"
    >
      {diff()}
      {/* {console.log(user.muscles)} */}
      {user.isMale ? <MuscleMan muscles={user.muscles} /> : <MuscleWoman muscles={user.muscles} />}
    </CustomDiv>
  );
};

export default StatsMuscle;
