import './Card.css'
function Card({width,height,heading, content , img,hoverClassName}) {

  //hoverClassName hash 3 condition 
  // if it is first-element then increase in right and height only
  // if it is mid-element then increase all direction
  // if it is last-element then increase in right and height only

  return (
    <div className={'card-container '+ hoverClassName} style={{width,height}} >
        <div className="body">
          <h5 className="heading">{heading}</h5>
          <div className='heading-content'>{content}</div>
        </div>
        <div className="img-container">
          <img alt='NOt found' src={img}/>
        </div>
    </div>
  )
}

export default Card