import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Testimonial.css'
import { Carousel } from 'react-responsive-carousel'

function Testimonial() {

    const reviews = [
        {
            name: 'Bhadra',
            quote: 'Thank you so much for the beautiful creation. The cake is incredible'
        },
        {
            name: 'Sandra',
            quote: 'Really nice cake, liked it very much'
        },
        {
            name: 'Someone',
            quote: 'Superb and yummy cake, more than I expected, next level'
        },
        {
            name: 'Someone',
            quote: 'Superb cake, everybody likes it, there are somany layers in the cake'
        },
        {
            name: 'Abreedha',
            quote: 'The best home baker in the town'
        },
        {
            name: 'Gayathri',
            quote: 'Superb cake, adipolii!!!'
        }
    ]

    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >
            {
                reviews.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className='testimonial-container'>
                            <img className='testimonial-image' src={`https://ui-avatars.com/api/?name=${item?.name}&length=1&background=random&bold=true`} alt='1' />
                            <div className="myCarousel">
                                <h3>{item.name}</h3>
                                <p>{item.quote}</p>
                            </div>
                        </div>
                    )
                })
            }
        </Carousel>
    )
}

export default Testimonial
