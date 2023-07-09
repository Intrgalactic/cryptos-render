
export function Picture({images,children}) {
    return (
        <picture>
            <source srcSet={images[1]} type="image/webp" />
            <source srcSet={images[0]} type="image/jpeg" />
            {children}
        </picture>
    )
}