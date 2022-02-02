export default function Image({ src, ...props }) {
  return (
    <picture>
      <source srcSet={`${src}?webp`} type="image/webp" />
      <source srcSet={`${src}?png`} type="image/png" />
          
      <img src={src} {...props} />
    </picture>
  );
}