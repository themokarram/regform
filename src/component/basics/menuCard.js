import React from 'react'

const menuCard = ({ menuData }) => {
    return (
        <>
            <section className='main-card--cointainer'>
                {
                    menuData.map((curElem) => {
                        const{id,name,category,image,description}= curElem;  /* destructuring */
                        return (
                            <>

                                <div className='card-container' key={curElem}>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <span className='card-number card-circle subtle'>{id}</span>
                                            <span className='card-author subtle'>{category}</span>
                                            <h2 className='card-title'>{name}</h2>
                                            <span className='box-description subtle'>{description}</span>
                                            <div className='card-read'>Read</div>
                                            <img src= {image } alt="image" className='card-media' />
                                            <span className='card-tag'>Order Now</span>
                                        </div>
                                    </div>
                                </div>


                            </>
                        )
                    })
                }
            </section>
        </>
    )
}

export default menuCard