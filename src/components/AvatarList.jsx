import Avatar from './Avatar';

function AvatarList ({dataArray}) {
    return dataArray.map(data => <Avatar {...data}/>)
}

export default AvatarList;