import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Roadmap from "../components/sections/Roadmap";
import GenericSection from "../components/sections/GenericSection";
import FeaturesSplit from "../components/sections/FeaturesSplit-part";

import Button from "../components/elements/Button";
import ButtonGroup from "../components/elements/ButtonGroup";

class Home extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const innerClasses = classNames(
      "hero-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );
    return (
      <React.Fragment>
        <GenericSection topDivider>
          <h2 className="mt-0 mb-0">
            {"Hi  I'm Shelly. I'm a Software Engineer."}
          </h2>
          <p style={{ paddingTop: "20px" }}>
            I am a Software Engineer. I am passionate about build software and
            apps that people will use. I am always excited about new technology.
            I am proficient in both <b>frontend frameworks</b> and{" "}
            <b>backend infrastructure</b> with languages such as{" "}
            <b>React/Redux, JavaScript,</b> and <b>HTML with CSS/SASS</b> for
            frontend and server-side tools such as <b>Expressjs</b> and{" "}
            <b>MongoDB</b>. With a background as Project Manager, I have direct
            experience working with and leading cross-functional teams on
            developing a client-facing product.
          </p>
          <div className="split-item-content center-content-mobile">
            <ButtonGroup className="reveal-from-bottom">
            <Button
              onClick={() => window.open("https://github.com/amazingshellyyy")}
              color="light"
              wideMobile
            >
              <svg
                width="16px"
                height="16px"
                viewBox="0 0 16 16"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <g>
                  <path
                    d="M8,0 C3.58266667,0 0,3.582 0,8 C0,11.5346667 2.292,14.5333333 5.47133333,15.5913333 C5.87066667,15.6653333 6,15.4173333 6,15.2066667 L6,13.7173333 C3.77466667,14.2013333 3.31133333,12.7733333 3.31133333,12.7733333 C2.94733333,11.8486667 2.42266667,11.6026667 2.42266667,11.6026667 C1.69666667,11.106 2.478,11.1166667 2.478,11.1166667 C3.28133333,11.1726667 3.704,11.9413333 3.704,11.9413333 C4.41733333,13.164 5.57533333,12.8106667 6.032,12.606 C6.10333333,12.0893333 6.31066667,11.736 6.54,11.5366667 C4.76333333,11.3333333 2.89533333,10.6473333 2.89533333,7.58266667 C2.89533333,6.70866667 3.208,5.99533333 3.71933333,5.43533333 C3.63666667,5.23333333 3.36266667,4.41933333 3.79733333,3.318 C3.79733333,3.318 4.46933333,3.10333333 5.998,4.138 C6.636,3.96066667 7.32,3.872 8,3.86866667 C8.68,3.872 9.36466667,3.96066667 10.004,4.138 C11.5313333,3.10333333 12.202,3.318 12.202,3.318 C12.6373333,4.42 12.3633333,5.234 12.2806667,5.43533333 C12.794,5.99533333 13.104,6.70933333 13.104,7.58266667 C13.104,10.6553333 11.2326667,11.332 9.45133333,11.53 C9.738,11.778 10,12.2646667 10,13.0113333 L10,15.2066667 C10,15.4193333 10.128,15.6693333 10.534,15.5906667 C13.7106667,14.5313333 16,11.5333333 16,8 C16,3.582 12.418,0 8,0 Z"
                    id="Path"
                  />
                </g>
              </svg>
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://amazingshellyyy.com/resume/Shelly_Cheng_resume_FS.pdf"
                )
              }
              color="light"
              wideMobile
            >
              <svg
                width="15px"
                height="17px"
                viewBox="0 0 15 17"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Resume</title>

                <g>
                  <path
                    d="M9.75,1.41666667 L9.75,4.95833333 L13.5,4.95833333 L13.5,15.5833333 L1.5,15.5833333 L1.5,1.41666667 L9.75,1.41666667 Z M10.5,0 L0,0 L0,17 L15,17 L15,4.25 L10.5,0 Z"
                    id="Shape"
                  ></path>
                </g>
              </svg>
            </Button>
            <Button
              onClick={() =>
                window.open("https://www.linkedin.com/in/amazingshellyyy/")
              }
              color="light"
              wideMobile
            >
              <svg
                width="16px"
                height="16px"
                viewBox="0 0 16 16"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn</title>
                <g>
                  <path
                    d="M3.32,1.73913043 C3.32,2.69982609 2.58,3.47826087 1.66666667,3.47826087 C0.753333333,3.47826087 0.0133333333,2.69982609 0.0133333333,1.73913043 C0.0133333333,0.779130435 0.753333333,0 1.66666667,0 C2.58,0 3.32,0.779130435 3.32,1.73913043 Z M3.33333333,4.86956522 L0,4.86956522 L0,16 L3.33333333,16 L3.33333333,4.86956522 Z M8.65466667,4.86956522 L5.34266667,4.86956522 L5.34266667,16 L8.65533333,16 L8.65533333,10.1572174 C8.65533333,6.90852174 12.6746667,6.64278261 12.6746667,10.1572174 L12.6746667,16 L16,16 L16,8.95234783 C16,3.4706087 10.052,3.67026087 8.65466667,6.36869565 L8.65466667,4.86956522 Z"
                    id="Shape"
                  />
                </g>
              </svg>
            </Button>
            <Button
              onClick={() => window.open("https://amazingshellyyy.com/#/projects")}
              color="light"
              wideMobile
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <rect width="16" height="16" fill="white" />
                  <g clip-path="url(#clip1)">
                    <path
                      d="M14.921 0.126576C15.5563 0.165849 16.058 0.674977 16.0881 1.31077C16.1488 2.59369 16.0624 5.10263 14.8039 7.49317C14.1622 8.71182 13.0801 9.99774 11.8349 11.0212C11.8195 11.0338 11.8041 11.0461 11.7887 11.0586L11.5907 13.4003C11.5581 13.7858 11.3534 14.1278 11.0293 14.3388L8.59985 15.9197C8.35399 16.0797 8.04759 16.1032 7.78024 15.9826C7.51286 15.862 7.3277 15.6168 7.2849 15.3266L6.99351 13.3503C6.95508 13.357 6.91669 13.3638 6.87827 13.3699C6.48468 13.4327 6.08144 13.2996 5.79961 13.0136L3.06988 10.2439C2.83619 10.0068 2.70873 9.68777 2.71109 9.36184C2.71158 9.29472 2.7176 9.22726 2.72931 9.16016C2.736 9.12183 2.74327 9.08354 2.75052 9.04521L0.77867 8.72513C0.48916 8.67811 0.246619 8.48941 0.129915 8.22037C0.0813522 8.10842 0.0578355 7.99015 0.0586898 7.87259C0.0599208 7.7075 0.109174 7.54392 0.204678 7.40173L1.8208 4.99554C2.03648 4.67444 2.38147 4.47482 2.76734 4.44787L5.11168 4.2839C5.12442 4.26871 5.13691 4.25343 5.14974 4.23827C6.19117 3.00803 7.49268 1.94464 8.72056 1.32083C11.1292 0.0970826 13.6392 0.0472901 14.921 0.126576V0.126576ZM2.59908 5.51824L1.05316 7.81991L2.97485 8.13188C3.26935 7.1565 3.73668 6.1929 4.36002 5.27618L2.83279 5.383C2.73752 5.38965 2.65232 5.43897 2.59908 5.51824V5.51824ZM3.73759 9.58584L6.46731 12.3555C6.53699 12.4262 6.63535 12.4593 6.73043 12.4441C7.21985 12.3659 7.68611 12.2423 8.12561 12.0882L4.02983 7.93248C3.83741 8.4576 3.72149 8.92836 3.65282 9.32146C3.63632 9.41647 3.66794 9.51517 3.73759 9.58584V9.58584ZM10.6565 13.3213L10.7855 11.7958C9.85985 12.4058 8.88956 12.8591 7.91 13.1394L8.19398 15.0654L10.5179 13.553C10.598 13.5009 10.6485 13.4164 10.6565 13.3213V13.3213ZM5.86532 4.84392C5.22818 5.5966 4.76597 6.32835 4.43047 7.00349L9.05961 11.7004C9.94724 11.2738 10.6876 10.7506 11.2396 10.2969C12.392 9.34981 13.3887 8.16868 13.9743 7.05638C15.1295 4.8624 15.2077 2.54257 15.1517 1.355C15.1443 1.19782 15.0202 1.07195 14.8631 1.06224C13.6765 0.988898 11.3558 1.0335 9.14522 2.15663C8.02455 2.72597 6.82909 3.70546 5.86532 4.84392Z"
                      fill="black"
                    />
                    <path
                      d="M8.69676 5.10243C8.70118 4.50238 8.93398 3.90375 9.39413 3.45023C9.83999 3.01077 10.4303 2.77131 11.0563 2.77586C11.6823 2.78041 12.2691 3.02846 12.7085 3.47432C13.6157 4.39475 13.6048 5.88159 12.6844 6.78867C12.2385 7.22813 11.6482 7.46763 11.0222 7.46308C10.3962 7.45853 9.80947 7.21045 9.37004 6.76459C8.91644 6.30434 8.69234 5.70269 8.69676 5.10243ZM12.0264 6.12103C12.3025 5.8489 12.4422 5.48981 12.4448 5.12973C12.4474 4.76961 12.313 4.40853 12.0408 4.13242C11.7771 3.86491 11.4251 3.71609 11.0495 3.71336C10.6739 3.71063 10.3197 3.85432 10.0522 4.11797C9.49995 4.66222 9.4935 5.55436 10.0377 6.10661C10.3014 6.37412 10.6535 6.52297 11.029 6.5257C11.4046 6.52843 11.7588 6.38468 12.0264 6.12103Z"
                      fill="black"
                    />
                    <path
                      d="M2.81778 15.5418C2.81865 15.4218 2.86527 15.3022 2.95749 15.2114L4.49898 13.6921C4.68337 13.5104 4.98014 13.5125 5.16187 13.6969C5.3436 13.8813 5.34144 14.1781 5.15705 14.3598L3.61557 15.879C3.43118 16.0608 3.1344 16.0586 2.95268 15.8742C2.86181 15.7821 2.8169 15.6618 2.81778 15.5418V15.5418Z"
                      fill="black"
                    />
                    <path
                      d="M3.76954 12.2843C3.95127 12.4687 3.94911 12.7655 3.76472 12.9472L0.801075 15.868C0.616687 16.0498 0.319914 16.0476 0.138186 15.8632C0.0473225 15.771 0.00244503 15.6508 0.00331682 15.5308C0.00418861 15.4108 0.0508096 15.2912 0.143035 15.2004L3.10665 12.2795C3.29104 12.0978 3.58781 12.0999 3.76954 12.2843V12.2843Z"
                      fill="black"
                    />
                    <path
                      d="M2.37238 11.5346L0.830896 13.0538C0.646508 13.2356 0.349734 13.2334 0.168007 13.049C0.0771429 12.9568 0.0322342 12.8365 0.0331058 12.7166C0.0339773 12.5967 0.0805986 12.477 0.172824 12.3862L1.71431 10.8669C1.8987 10.6852 2.19547 10.6873 2.3772 10.8717C2.55893 11.0561 2.55677 11.3529 2.37238 11.5346Z"
                      fill="black"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                  <clipPath id="clip1">
                    <rect
                      width="16"
                      height="16"
                      transform="matrix(0.00726684 -0.999974 -0.999974 -0.00726684 15.9995 16.1158)"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Button>
            </ButtonGroup>
            
          </div>
          <FeaturesSplit invertMobile imageFill topDivider />

          <div className="center-content">
            <ButtonGroup>
              <Link to="/projects" style={{ textDecoration: "none" }}>
                <Button color="primary" wideMobile>
                  See more
                </Button>
              </Link>
              <Button
                onClick={() =>
                  window.open("https://github.com/amazingshellyyy")
                }
                wideMobile
              >
                <i
                  className="fab fa-github"
                  style={{ lineHeight: "21px", paddingRight: "2px" }}
                ></i>
                Github
              </Button>
            </ButtonGroup>
          </div>
        </GenericSection>
        <Roadmap topDivider />
      </React.Fragment>
    );
  }
}

export default Home;
