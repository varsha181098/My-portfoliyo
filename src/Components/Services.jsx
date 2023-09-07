import React from 'react'
import './Services.css';
import { Card, CardHeader, CardBody, CardFooter, Heading, SimpleGrid, Text, Link } from '@chakra-ui/react'
const Services = () => {
  return (
    <div>
      <SimpleGrid spacing={8} templateColumns='repeat(auto-fill, minmax(280px, 1fr))' className='hvo'>
        <Card bg='#262626'>
          <CardHeader>
            <Heading size='md' style={{ color: "#ffffff", fontSize: "30px" }}><i className="fa-solid fa-code fa-beat-fade"></i> Web Design</Heading>
          </CardHeader>
          <CardBody>
            <Text style={{ color: "#ffffff", fontSize: "15px" }}>Web design is the creation of websites<br /> and pages to reflect a company’s brand and information.</Text>
          </CardBody>
          <CardFooter>
            <Link style={{ color: "#ffffff", textDecoration: "none" }} href='https://www.interaction-design.org/literature/topics/web-design'>Learn More</Link>

          </CardFooter>
        </Card>
        <Card bg='#262626'>
          <CardHeader>
            <Heading size='md' style={{ color: "#ffffff", fontSize: "30px" }}><i className="fa-solid fa-crop-simple fa-flip"></i> Web Development</Heading>
          </CardHeader>
          <CardBody>
            <Text style={{ color: "#ffffff", fontSize: "15px" }}>Web development refers to the creating,<br />  building, and maintaining of websites.</Text>
          </CardBody>
          <CardFooter>
            <Link style={{ color: "#ffffff", textDecoration: "none" }} href='https://brainstation.io/career-guides/what-is-web-development#:~:text=Web%20development%2C%20also%20known%20as,web%20programming%2C%20and%20database%20management.'>Learn More</Link>

          </CardFooter>
        </Card>
        <Card bg='#262626'>
          <CardHeader>
            <Heading size='md' style={{ color: "#ffffff", fontSize: "30px" }}><i className="fa-brands fa-react fa-spin"></i> ReactJS</Heading>
          </CardHeader>
          <CardBody>
            <Text style={{ color: "#ffffff", fontSize: "15px" }}>React is a declarative, efficient, and flexible JavaScript library for building user interfaces.</Text>
          </CardBody>
          <CardFooter>
            <Link style={{ color: "#ffffff", textDecoration: "none" }} href='https://www.uxpin.com/studio/blog/reactjs-websites-examples/'>Learn More</Link>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </div >
  )
}

export default Services
