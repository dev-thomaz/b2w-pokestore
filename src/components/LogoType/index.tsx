import React from 'react';


import { Container, LogoTypeStyle } from './styles';

interface LogoTypeProps {
  type: string;
}

const LogoType: React.FC<LogoTypeProps> = (props) => {
 

 

  return (
    <Container>
      <LogoTypeStyle type={props.type} />
    </Container>
  );
};

export default LogoType;
