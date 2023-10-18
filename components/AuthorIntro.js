import { Row, Col, Media, Image } from 'react-bootstrap';

const AuthorIntro = () =>
  <Row>
    <Col md="8">
      <Media className="mb-4 admin-intro">
        <Image
          roundedCircle
          width={64}
          height={64}
          className="mr-3"
          src="https://media.licdn.com/dms/image/C4D03AQErqcvNo137SA/profile-displayphoto-shrink_200_200/0/1562366170577?e=1701907200&v=beta&t=jBCCTU7tOOpXylOUYfYwNmUo1YoS2EtL1MElXaiTzNM"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
          <p className="welcome-text">
            My name is Ali Yorulmaz and I am an Junior software engineer and
            freelance developer. and this is my blog page.
          </p>
        </Media.Body>
      </Media>
    </Col>
  </Row>;

export default AuthorIntro