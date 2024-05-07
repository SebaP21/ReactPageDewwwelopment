import { FC } from "react";
// import Onepage from "../../../../../assets/icons/web-programming-2.svg";
// import Advanced from "../../../../../assets/icons/coding-1.svg";
// import ecommerce from "../../../../../assets/icons/ecommerce-1.svg";
// import Individual from "../../../../../assets/icons/star-2.svg";
// import Training from "../../../../../assets/icons/graduate-1.svg";
// import Support from "../../../../../assets/icons/settings-2.svg";
// export const images: string[] = [
//   Onepage,
//   Advanced,
//   ecommerce,
//   Individual,
//   Training,
//   Support,
// ];

type OfferIconProps = {
  imgSrc: string;
};
export const OfferIcon: FC<OfferIconProps> = ({ imgSrc }) => {
  return (
    <i className="services-box-icons">
      <img src={imgSrc} alt="" />
    </i>
  );
};
