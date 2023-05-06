'use client';

import Link from 'next/link';
import Image from 'next/image';

import Stars from '@utils/components/stars';

import Cart from '@utils/cart';

import Icon from '@ui/Icon';

export default function ProductItem({ data }) {
    const add = event => {
        event.preventDefault();
        Cart.add(data._id, 1);
    }

    return <div className='productItem'>
        <div className='product_item-save'><Icon icon='favorite' /></div>

        <Link className='productItem-a' href={`/product/${data._id}`}>
            <img src={`${data.imageart}`} alt={data.designation} width={512} height={512} />
        </Link>

        <div className='flex flex-col p-[8px] sm:p-[16px]'>
            <h3>{data.designation}</h3>
            {process.env.NEXT_PUBLIC_REVIEWS === 'true' && <Stars value={2} total={4} />}

            <div className='productItem-tag'>
                <div className='flex flex-row'>
                    <span className='productItem-tag-price' >{'$' + (data.prix / 100).toFixed(2)}</span>
                    <span className='productItem-tag-price_compare' >{'$' + (data.prix / 100).toFixed(2)}</span>
                </div>

                <button className='productItem-tag-add' onClick={add}>
                    <Icon icon='shopping_cart' />
                </button>
            </div>
        </div>
    </div>
}

/*

Avec Multer

 <Image src={`${process.env.NEXT_PUBLIC_SERVER}/${data.imageart}`} alt={data.designation} width={512} height={512} />

 */