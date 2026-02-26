const Image = ({
    name,
    ext = "jpg",
    width,
    height,
    alt = "",
    className = "",
}) => {
    const base = import.meta.env.BASE_URL;

    return (
        <picture>
            {/* WebP */}
            <source
                srcSet={`${base}/assets/images/${name}.webp`}
                type="image/webp"
            />

            {/* Fallback */}
            <img
                src={`${base}/assets/images/${name}.${ext}`}
                alt={alt}
                width={width}
                height={height}
                loading="lazy"
                className={`max-w-full h-auto ${className}`}
            />
        </picture>
    );
};

export default Image;
