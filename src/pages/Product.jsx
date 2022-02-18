import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

import Helmet from '../components/Helmet'
import Section, {SectionBody, SectionTitle} from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import ProductView from '../components/ProductView';

import productData from '../assets/fake-data/products'



const Product = (props) => {
  const {slug} = useParams(); 
  // console.log(slug)
  const product = productData.getProductBySlug(slug)
  // console.log(product)
  const relatedProducts = productData.getProducts(8)

  useEffect(()=>{
    window.scrollTo(0,0)
  },[product])

  return (
    <Helmet title={product.title}>
        <Section>
          <SectionBody>
           <ProductView product={product}/>
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>
            kham oha them
          </SectionTitle>
          <SectionBody>
            <Grid
              col={4}
              mdCol={2}
              smCol={1}
              gap={20}
            >
              {
                relatedProducts.map((item, index) => (
                  <ProductCard
                    key={index}
                    img01={item.image01}
                    img02={item.image02}
                    name={item.title}
                    price={Number(item.price)}
                    slug={item.slug}
                  />
                ))
              }
            </Grid>
          </SectionBody>
        </Section>
     
    </Helmet>
  )
}

export default Product