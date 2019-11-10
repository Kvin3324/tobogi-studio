import styled from 'styled-components';
import Container from './../../styles/Container';
import helper from './../../styles/helper';

const HeaderSC = styled(Container)`
    align-items: center;
    display: flex;
    height: 10vh;
    justify-content: space-between;
    ${props => (props.windowWidth >= 560 && props.sidebarIsTrue) && "margin: 0"}
    
    h1 {
        font-weight: 900;
        margin: 0;
    }

    nav {
        height: max-content;

        ul {
            display: flex;
            list-style-type: none;
            margin: 0;
            padding-left: 0;

            .is__link__middle {
                margin: 0 2em;
            }

            li {
                a {
                    text-decoration: none;
                    color: ${helper.mainColor};
                    font-size: 17px;
                }
            }
        }
    }

    @media screen and (max-width: 500px) {
        h1 {
            font-size: 1.8em;
        }
    }
`;

export default HeaderSC;