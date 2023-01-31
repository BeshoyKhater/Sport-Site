import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_3.jpg"

const Gallery = () => {
  const galleryLength=15;
  const images = []

  for (let i=1; i<= galleryLength; i++ ) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage} >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta explicabo quo veritatis omnis laborum saepe repellat? Cumque neque rem voluptatum?
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          <div className="row gy-3 gx-3">
            {images.map((image,index)=>{
              return (
                <article key={index} className="col-lg-4 col-md-6 col-12 ">
                  <img src={image} alt={`GalleryImage${index+1}`} />
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery