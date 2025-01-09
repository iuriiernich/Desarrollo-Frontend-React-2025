// eslint-disable-next-line react/prop-types
const OpenLink = ({redirectURL, logoImage, altValue}) => {
    return (
        <>
                <a href={redirectURL} target="_blank">
                    <img src={logoImage} className="logo" alt={`${altValue} logo`}/>
                </a>
        </>
    );
};

export default OpenLink;