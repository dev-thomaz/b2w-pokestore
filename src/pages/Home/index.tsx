import React, { useEffect, useState } from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom';
import { Container, Type, Main } from './styles';
import LogoType from '../../components/LogoType';
import Header from '../../components/Header';
const Home: React.FC = () => {
  const [types, setTypes] = useState<any[]>([]);

  useEffect(() => {
    let responseReturn: any[] = [];
    api.get('type').then((response) => {
      const responseTypes = response.data.results;
      responseTypes.map((type: any, index: number) => {
        type.id = index += 1;
        type.name === 'unknown' || type.name === 'shadow'
          ? console.log('')
          : responseReturn.push(type);
      });
      setTypes(responseReturn);
    });
  }, []);
  
  return (
    <Container>
      <Header />
      <Main>
        {types.map((type) => (
          <Link key={type.id} to={`/${type.name}`}>
            <Type type={type.name}>
              <LogoType type={type.name}/>
              <p>{type.name}</p>
            </Type>
          </Link>
        ))}
      </Main>
    </Container>
  );
};

export default Home;
