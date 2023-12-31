import React from 'react';
import styles from './products.module.scss';
import { BsCartPlus, BsCartXFill } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { addToCartAction } from './../../redux/actions/cartAction';
import { useDispatch } from 'react-redux';

const ProductCard = ({ product }) => {
	const { pathname } = useLocation();
	const isInCart = pathname.includes('cart');
	console.log('is', isInCart);

	const dispatch = useDispatch();

	const addToCart = () => {
		dispatch(addToCartAction(product));
	}

	return (
		<div className={styles['product-card']}>
			{isInCart && (
				<button className={styles['del-product']}>
					<BsCartXFill />
				</button>
			)}
			<img src={product.image} alt={product.name} />
			<div className={styles['product-details']}>
				<h3>
					{product.name}
					{isInCart && <span> x ({product.quantity})</span>}
				</h3>
				<h5>{product.ingredients}</h5>
				<div className={styles['product-footer']}>
					{isInCart ? (
						<>
							<button>
								<AiOutlinePlus />
							</button>
							<h3>{product.price}EGP</h3>
							<button>
								<AiOutlineMinus />
							</button>
						</>
					) : (
						<>
							<h3>{product.price}EGP</h3>
							<button onClick={addToCart}>
								<BsCartPlus />
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
