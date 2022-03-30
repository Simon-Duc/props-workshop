const Avatar = ({image, firstName, lastName}) => (
    <figure className='container'>
        <img src={image} alt={firstName}/>
        <figcaption>{firstName} <span className='capitalized'>{lastName}</span></figcaption>
    </figure>
);

export default Avatar;