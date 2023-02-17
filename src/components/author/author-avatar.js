import { Image } from "react-datocms/image";

export function AuthorAvatar(props) {
  const { avatar, alt } = props;

  return (
    <div className="w-16 h-16">
      <Image
        data={avatar.responsiveImage}
        alt={alt}
        className="object-fill object-center"
      />
    </div>
  );
}
