import Col from 'react-bootstrap/Col';
import './Work.css';
import Container from 'react-bootstrap/Container';
// import Video1 from '../Components/IMG_7186.MP4'




function Work() {
  return (
    <div id="portfolio">
      <Container>
        <h1 className="sub-title" style={{ fontSize: 70 }}>My Work</h1>
        <div className="work-list">
          <Col>
            <div className="work">
              <img alt='#' src={require('../images/users.png')} />
              <div className="layer">
                <h3>UsabilityHub</h3>
                <p>Developed a static clone website of UsabilityHub and also made it Mobile Friendly.  </p>
                <a href="https://celebrated-longma-d80e44.netlify.app/"><i class="fa-solid fa-arrow-up-right-from-square fa-beat"></i></a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="work">     {/* style={{ border: "3px solid gray" }} */}
              {/* <video autoPlay loop muted src={Video1} type='video/mp4' width={380} height={490} /> */}
              <img alt='#' src={require('../images/topntown.png')} />
              <div className="layer">
                <h3>TopNTown</h3>
                <p>Developed a static and attractive Clone website of TopNTown .</p>
                <a href="https://6454c31958c93a7bbdc293ee--silly-cheesecake-667774.netlify.app/"><i class="fa-solid fa-arrow-up-right-from-square fa-beat"></i></a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="work">
              <img alt='#' src={require('../images/ccd.png')} />
              <div className="layer">
                <h3>Cafe Cofee Day</h3>
                <p>Developed a dynamic website in which products are getting added to the cart section.</p>
                <a href='https://6454be2a0b3f7878bf05899f--heartfelt-crepe-a7b320.netlify.app/'><i class="fa-solid fa-arrow-up-right-from-square fa-beat"></i></a>
              </div>
            </div>
          </Col>
        </div>
      </Container>
      <a href="https://github.com/varsha181098?tab=repositories" className="btn">See more</a>

    </div>
  );
}

export default Work;