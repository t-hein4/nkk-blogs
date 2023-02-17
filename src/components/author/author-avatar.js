import Image from 'next/image';

export function AuthorAvatar(props) {
  const { src, alt, width, height } = props;

  return (
    <div className="w-fit h-fit rounded-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        className="object-center object-cover"
        width={width}
        height={height}
      />
    </div>
  );
}
