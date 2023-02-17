import { Image } from 'react-datocms';

export function PostDatoCmsCoverImage(props) {
  const { responsiveImage, alt } = props;
  return (
    <Image
      data={responsiveImage}
      alt={`Cover image for ${alt}`}
      className="shadow-cover_img hover:shadow-cover_img_hover transition-all ease-in-out duration-300"
    />
  );
}
