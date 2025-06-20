/* eslint-disable @typescript-eslint/no-explicit-any */
const ImageCard = ({ image }: any) => {
  return (
    <div className="">
      <div className="aspect-square flex items-center relative justify-center bg-cover bg-no-repeat">
        <img src={image.imageUrl} alt="" />
      </div>
      <div className="mt-3 ml-4">
        <h5 className="text-lg font-semibold"> {image.name}</h5>
        <h5 className="font-normal"> {image.role}</h5>
      </div>
    </div>
  );
};

export default ImageCard;
