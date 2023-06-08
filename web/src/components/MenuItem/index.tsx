import {Button, Container,  MenuText} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useNavigate, useLocation } from 'react-router-dom';

type MenuButtonPropsType = {
    icon: IconProp;
    link: string;
}

function MenuItem({icon, link}: MenuButtonPropsType) {

    const navigate = useNavigate()
    const location = useLocation()

    const isActive = location.pathname == link

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        navigate(link)
    }
   

    return (       
            <Container href={link} onClick={handleLinkClick} active={isActive} >
                <FontAwesomeIcon icon={icon} size='3x'  color="#fff" />
            </Container>
         
    )
}

export default MenuItem