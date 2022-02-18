import React,{useEffect, useState} from 'react'
import { useNavigate  } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button'
import numberWithCommas from '../utils/numberWithCommas'

const ProductView = props => {
    let navigate = useNavigate();

    const product = props.product

    const [previewImg, setPreviewImg] = useState(product.image01)

    const [descriptionExpand, setDescriptionExpand] = useState(false)

    const [color, setColor] = useState(undefined)

    const [size, setSize] = useState(undefined)

    const [quantity, setQuantity] = useState(1)

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
        }
    }

    useEffect(() => {
        setPreviewImg(product.image01)
        setQuantity(1)
        setColor(undefined)
        setSize(undefined)
    },[product])

    const check = () => {
        if (color === undefined) {
            alert('Vui lòng chọn màu sắc!')
            return false
        }

        if (size === undefined) {
            alert('Vui lòng chọn kích cỡ!')
            return false
        }

        return true
    }

    const addToCart = () => {
        if (check()) {
            console.log({color,size,quantity})
        //     let newItem = {
        //         slug: product.slug,
        //         color: color,
        //         size: size,
        //         price: product.price,
        //         quantity: quantity
        //     }
        //     if (dispatch(addItem(newItem))) {
        //         alert('Success')
        //     } else {
        //         alert('Fail')
        //     }
        }
    }

    const goToCart = () => {
        if (check()) {
            navigate("/cart")

            // let newItem = {
            //     slug: product.slug,
            //     color: color,
            //     size: size,
            //     price: product.price,
            //     quantity: quantity
            // }
            // if (dispatch(addItem(newItem))) {
            //     dispatch(remove())
            //     navigate('/cart')
            // } else {
            //     alert('Fail')
            // }
        }
    }

  return (
        <div className='product'>
            <div className='product__images'>
                <div className='product__images__list'>
                    <div className='product__images__list__item' onClick={() =>setPreviewImg(product.image01)}>
                        <img src={product.image01} alt=""/>
                    </div>
                    <div className='product__images__list__item' onClick={() =>setPreviewImg(product.image02)}>
                        <img src={product.image02} alt=""/>
                    </div>
                </div>
                <div className='product__images__main'>
                    <img src={previewImg} alt=""/>
                </div>
                <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
                    <div className='product-description__title'>
                        dhi tiet san pham
                    </div>
                    <div className='product-description__content'>
                        {product.description}
                    </div>
                    <div className='product-description__toggle'>
                        <Button size='sm' onClick={() => setDescriptionExpand(!descriptionExpand) }>
                            {
                                descriptionExpand ? '닫기' : '더보기'
                            }
                        </Button>
                    </div>
                </div>
            </div>
            <div className='product__info'>
                <h1 className='product__info__title'>
                    {product.title}
                </h1>
                <div className='product__info__item'>
                    <span className='product__info__item__price'>
                        {numberWithCommas(product.price)}
                    </span>
                </div>
                {/* color */}
                <div className='product__info__item'>
                    <div className='product__info__item__title'>
                        Color
                    </div>
                    <div className='product__info__item__list'>
                        {
                            product.colors.map((item, index) => (
                                <div key={index} className={`product__info__item__list__item ${color === item ? 'active' : ''}`} onClick={()=>setColor(item)}>
                                    <div className={`circle bg-${item}`}></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* size */}
                <div className='product__info__item'>
                    <div className='product__info__item__title'>
                        Size
                    </div>
                    <div className='product__info__item__list'>
                        {
                            product.size.map((item, index) => (
                                <div key={index} className={`product__info__item__list__item ${size === item ? 'active' : ''}`} onClick={()=>setSize(item)}>
                                   <span className='product__info__item__list__item__size'>
                                       {item}
                                   </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* 수량 */}
                <div className='product__info__item'>
                    <div className='product__info__item__title'>
                        수량
                    </div>
                    <div className='product__info__item__quantity'>
                        <div className='product__info__item__quantity__btn' onClick={() => updateQuantity('minus')}>
                            <i className='bx bx-minus'></i>
                        </div>
                        <div className='product__info__item__quantity__input'>
                            {quantity}
                        </div>
                        <div className='product__info__item__quantity__btn' onClick={() => updateQuantity('plus')}>
                            <i className='bx bx-plus'></i>
                        </div>
                    </div>
                </div>
                {/* 주문 및 장바구니 */}
                <div className="product__info__item">
                    <Button onClick={() => addToCart()}>추가</Button>
                    <Button onClick={() => goToCart()}>카트보기</Button>
                </div>
                {/* 모바일 버전 상품 설명 */}
                <div className={`product-description mobile ${descriptionExpand ? 'expand' : ''}`}>
                <div className="product-description__title">
                    Chi tiết sản phẩm
                </div>
                <div className="product-description__content" dangerouslySetInnerHTML={{__html: product.description}}></div>
                <div className="product-description__toggle">
                    <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                        {
                            descriptionExpand ? 'Thu gọn' : 'Xem thêm'
                        }
                    </Button>
                </div>
                </div>
            </div>
        </div>
  )
}

ProductView.propTypes = {
    product:PropTypes.object.isRequired
}

export default ProductView