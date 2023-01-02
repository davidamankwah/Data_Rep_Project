import React from "react";
import Carousel from 'react-bootstrap/Carousel'; //bootstrap carousel

export class Home extends React.Component {

    render() {
        return (
            // slide show of images
            <Carousel>
              
              {/* First image */}
            <Carousel.Item>
              <img
                className="d-block w-40"
                src="https://i.imgur.com/OvMZBs9.jpeg"
                alt="First slide"
                class="center"
              />
               {/* First image paragraph */}
              <Carousel.Caption>
                <p>Get work done.</p>
              </Carousel.Caption>
            </Carousel.Item>

           {/* Second Image */}
            <Carousel.Item>
              <img
                className="d-block w-70"
                src="https://www.shutterstock.com/image-vector/do-list-tick-icon-260nw-1057936169.jpg"
                alt="Second slide"
                class="center"
              />
               {/* Second image paragraph */}
              <Carousel.Caption>
                <p>do the work.</p>
              </Carousel.Caption>
            </Carousel.Item>

            {/* Third image */}
            <Carousel.Item>
              <img
                className="d-block w-15"
                src="https://media.istockphoto.com/id/1267267142/vector/small-people-stand-next-to-a-large-to-do-list.jpg?s=612x612&w=0&k=20&c=ElNGNaGjFgjkKdqlUzSsBD9R7fdHOwmYYaiZKDQBJyA="
                alt="Third slide"
                class="center"
              />
               {/* Third image paragraph */}
              <Carousel.Caption>
                <p>
                  done
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            {/* Fourth Images */}
            <Carousel.Item>
              <img
                className="d-block w-25"
                src="https://media.istockphoto.com/id/116772376/photo/notepad-to-do-list-get-things-done.jpg?b=1&s=170667a&w=0&k=20&c=olKqBwtbJQA4tH_tC520qngYwyjcrpuHZ2eYq3EXgjk="
                alt="Fourth slide"
                class="center"
              />
              {/* Fourth image paragraph */}
              <Carousel.Caption>
                <p>
                  work to do
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          
        );
    }
}