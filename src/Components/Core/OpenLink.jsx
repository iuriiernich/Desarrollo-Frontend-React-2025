// eslint-disable-next-line react/prop-types
const OpenLink = ({redirectURL, logoImage, altValue}) => {
    return (
        <div>
                <a href={redirectURL} target="_blank">
                    <img src={logoImage} className="logo" alt={`${altValue} logo`}/>
                </a>
        </div>
    );
};

export default OpenLink;