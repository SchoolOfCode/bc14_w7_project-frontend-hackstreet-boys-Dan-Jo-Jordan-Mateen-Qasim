const Video = ({ src }) => {
    const urlPattern = /^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;

    if (!urlPattern.test(src)) {
        return <div>{src}</div>;
    }

    return (
        <iframe
            width="560"
            height="315"
            src={src}
            title="Youtube Player"
            frameborder="0"
            allowFullScreen
            alt="video here"
        />
    );
};

export default Video;
