import React from 'react'
import "./style.css"
const Temp = () => {
  return (
    <>
     <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
           // value={searchValue}
            //onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button" > Search
          </button>
        </div>
      </div>
     <article className='widget'>
      <div className='weatherIcon'>
      <i className='wi wi-day-sunny'></i>
      </div>
      <div className='weatherInfo'>
       <div className='temperature'>
        <span> 23.4&deg;</span>
       </div>
       <div className='description'>
        <div className='weatherCondition'>Sunny</div>
        <div className='place'>Godda, India</div>
       </div>
      </div>
      <div className='date'>{new Date().toLocaleString()}</div>

      <div className='extra-temp'>
        <div className='temp-info-minmax'>
        <div className='two-sided-section'>
           <h6 ><i className='wi wi-sunset'></i> </h6>
            <h6 className='extra-info-leftside'>
              6:30PM <br />
              sunset
            </h6>
          </div>
          <div className='weather-extra-info'>
          <div className='two-sided-section'>
           <h6 ><i className='wi wi-sunset'></i> </h6>
            <h6 className='extra-info-leftside'>
              6:30PM <br />
              sunset
            </h6>
          </div>
          
          </div>
          <div className='weather-extra-info'>
          <div className='two-sided-section'>
           <h6 ><i className='wi wi-sunset'></i> </h6>
            <h6 className='extra-info-leftside'>
              6:30PM <br />
              sunset
            </h6>
          </div>
          
          </div>
          <div className='weather-extra-info'>
          <div className='two-sided-section'>
           <h6 ><i className='wi wi-sunset'></i> </h6>
            <h6 className='extra-info-leftside'>
              6:30PM <br />
              sunset
            </h6>
          </div>
          
          </div>
        </div>
      </div>
     </article>
      
    </>
  )
}

export default Temp