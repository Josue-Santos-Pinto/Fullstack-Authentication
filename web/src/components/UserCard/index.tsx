import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardInfo, Container, TopCardArea, TopCardPhoto, TopCardPhotoArea, UserEmail, UserName } from './styles'
import { faUser } from '@fortawesome/free-solid-svg-icons';

type DataType = {
    data: {
        name: string;
        email: string;
        avatar?: string
    }
}

function UserCard({data}: DataType){
    console.log(data)
    return (
        <Container>
            <TopCardArea>
                <TopCardPhotoArea>
                    {data.avatar ?
                        <TopCardPhoto src={`http://192.168.1.100:3000/media/${data.avatar}`} />
                        :
                        <FontAwesomeIcon icon={faUser} color='#ccc' size='2x' />
                    }
                </TopCardPhotoArea>
            </TopCardArea>
            <CardInfo>
                <UserName>{data.name}</UserName>
                <UserEmail>{data.email}</UserEmail>
            </CardInfo>
        </Container>
    )
}

export default UserCard