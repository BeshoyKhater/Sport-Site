import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section>
      <div className="container notfound__container">
        <h2>Page Not Found</h2>
        <Link to="/"className='Btn'  >Go Back Home</Link>
      </div>
    </section>
  )
}

export default NotFound