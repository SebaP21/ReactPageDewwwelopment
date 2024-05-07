import { FC } from "react";

export type ProductProps = {
	sectionId: string;
	className?: string;
	sectionTitle: string;
	productTitle?: string;
	productDescription: any;
	productImg: string;
	productPrice: string;
};

export const ProductComponent: FC<ProductProps> = ({
	sectionId,
	className,
	sectionTitle,
	productTitle,
	productDescription,
	productImg,
	productPrice,
}) => {
	return (
		<section
			id={sectionId}
			className={className + " offer-box"}
		>
			<div className='section-h4-title'>
				<h4>{sectionTitle}</h4>
			</div>
			<div className='offer-wrapper'>
				<div className='offer-description'>
					{productTitle}
					{productDescription}
				</div>
				<div className='offer-media'>
					<img src={productImg}></img>
				</div>
			</div>
			<div className='offer-price'>
				<h4>{productPrice}</h4>
			</div>
		</section>
	);
};
