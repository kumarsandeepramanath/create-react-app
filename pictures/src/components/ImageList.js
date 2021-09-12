import React from 'react'

class ImageList extends React.Component {
render()
{
    console.log(this.props.images)
    const images = this.props.images.map((image) =>{
        return <img key={image.id} src={image.urls.regular} height="300px" width="300px"></img>
    })
    return <div>{images}</div>
}
}

export default ImageList