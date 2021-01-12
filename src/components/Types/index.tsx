import React from 'react';

import { Background, Container } from './styles';
interface TypeProps {
  attribute: string;
  name: string;
  move?: string;
}
const Types: React.FC<TypeProps> = (props) => {
  const contentType = props.attribute;
  return (
    <Container>
      {contentType === 'type' ? (
        <Background type={props.name} attribute={props.attribute}>
          <p>{props.name}</p>
        </Background>
      ) : (
        <Background type={props.name}  attribute={props.attribute} >
            {props.move}
           <p> ({props.name})</p>
            </Background>
      )}
    </Container>
  );
};

export default Types;
