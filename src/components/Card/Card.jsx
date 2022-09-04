import React from 'react';
import styles from './Card.module.scss'

const Card = (props) => {
	return (
		<div>
			<div className={styles.card}>
				<div className={styles.cardTop}>
					<img src="/img/like.png" alt="like" width={25} className={styles.like}/>
					<img src={props.imageURL} height={150} alt="BeerImg"/>
					<div>
						<b>{props.title}</b>
					</div>
				</div>
				<div className={styles.cardPrice}>
					<span>Цена: <span className={styles.price}>{props.price}</span> руб.</span>
					<img src="/img/add.png" width={22} alt="add"/>
				</div>
			</div>
		</div>
	);
};

export default Card;