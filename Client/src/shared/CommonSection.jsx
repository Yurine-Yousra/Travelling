import {Container , Row , Col} from 'reactstrap'
import './CommonSection.css'
import PropTypes from 'prop-types'
const CommonSection = ({title}) => {
    return(
        <section className='common__section'>
            <Container>
                <Row>
                    <Col>
                    <h1>{title}</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

CommonSection.propTypes = {
    title : PropTypes.string.isRequired
}

export default CommonSection