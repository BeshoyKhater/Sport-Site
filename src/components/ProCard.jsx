
import Col from 'react-bootstrap/esm/Col'

const ProCard = ({className,children}) => {
  return (
    <Col className={`pro-card ${className}`} >
        {children}
    </Col>
  )
}

export default ProCard