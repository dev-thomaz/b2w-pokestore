import styled, { css } from 'styled-components';

import bugType from '../../assets/types/bug.png';
import darkType from '../../assets/types/dark.png';
import dragonType from '../../assets/types/dragon.png';
import electricType from '../../assets/types/electric.png';
import fairyType from '../../assets/types/fairy.png';
import fightingType from '../../assets/types/fighting.png';
import fireType from '../../assets/types/fire.png';
import flyingType from '../../assets/types/flying.png';
import ghostType from '../../assets/types/ghost.png';
import grassType from '../../assets/types/grass.png';
import groundType from '../../assets/types/ground.png';
import iceType from '../../assets/types/ice.png';
import normalType from '../../assets/types/normal.png';
import poisonType from '../../assets/types/poison.png';
import psychicType from '../../assets/types/psychic.png';
import rockType from '../../assets/types/rock.png';
import steelType from '../../assets/types/steel.png';
import waterType from '../../assets/types/water.png';
interface LogoTypeProps {
    type:string
  }

export const Container = styled.div`
  
`;
export const LogoTypeStyle = styled.div<LogoTypeProps>`
${(props) => props.type === 'poison' && css`
background: url(${poisonType});
`}
${(props) => props.type === 'flying' && css`
background:url(${flyingType});
`}
${(props) => props.type === 'normal' && css`
background:url(${normalType});
`}
${(props) => props.type === 'ghost' && css`
background:url(${ghostType});
`}
${(props) => props.type === 'dark' && css`
background:url(${darkType});
`}
${(props) => props.type === 'fairy' && css`
background:url(${fairyType});
`}
${(props) => props.type === 'fire' && css`
background:url(${fireType});
`}
${(props) => props.type === 'fighting' && css`
background:url(${fightingType});
`}
${(props) => props.type === 'psychic' && css`
background:url(${psychicType});
`}
${(props) => props.type === 'ice' && css`
background:url(${iceType});
`}
${(props) => props.type === 'rock' && css`
background:url(${rockType});
`}
${(props) => props.type === 'electric' && css`
background:url(${electricType});
`}
${(props) => props.type === 'steel' && css`
background:url(${steelType});
`}
${(props) => props.type === 'water' && css`
background:url(${waterType});
`}
${(props) => props.type === 'bug' && css`
background:url(${bugType});
`}
${(props) => props.type === 'grass' && css`
background:url(${grassType});
`}
${(props) => props.type === 'dragon' && css`
background:url(${dragonType});
`}
${(props) => props.type === 'ground' && css`
background:url(${groundType});
`}
background-repeat: no-repeat;
  background-size: 65px 65px;
  height:65px;
  width:65px;
`