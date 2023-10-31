import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  const socialLinks = [
    {
      href: 'https://github.com/shhahhussain',
      icon: <AiFillGithub />,
    },
    {
      href: 'https://twitter.com/shhahhussain',
      icon: <AiOutlineTwitter />,
    },
    {
      href: 'https://www.linkedin.com/in/shah-hussain-a0771b204/',
      icon: <FaLinkedinIn />,
    },
    {
      href: 'https://www.instagram.com/shhah_hussain',
      icon: <AiFillInstagram />,
    },
  ];

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright"></Col>
        <Col md="4" className="footer-copywright"></Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {socialLinks.map((socialLink, index) => (
              <li className="social-icons" key={index}>
                <a
                  href={socialLink.href}
                  style={{ color: 'white' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialLink.icon}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
