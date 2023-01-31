import ProCard from "./ProCard"

const Trainer = ({image,name,job,socials}) => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <ProCard className='trainer  '>
          <div className="trainer__img">
              <img src={image} alt={name} />
          </div>
          <h3>{name}</h3>
          <p>{job}</p>
          <div className="trainer__socials">
              {socials.map(({icon,link},index)=>{
                  return <a key={index} href={link} target="_blank" rel="noreffer noopener noreferrer" >{icon}</a>
              })}
          </div>
      </ProCard>
    </div>
  )
}

export default Trainer