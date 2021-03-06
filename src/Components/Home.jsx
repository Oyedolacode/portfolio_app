import React, { Component } from "react";
import GitHubCalendar from "react-github-calendar";

export class Home extends Component {
  componentDidMount() {
    document.title = "Deepanshu | Home";
  }

  render() {
    return (
      <div className="container my-5 text-dark">
        <div className="row mt-5">
          <div className="col-md-5 d-flex justify-content-center">
            <div className="bg-img"></div>
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center px-4">
            <div className="row text-center">
              <h1 className="display-4 font-weight-bold p-1">
                Deepanshu Prajapati
              </h1>
              <div className="hr w-100"></div>
              <h1 className="font-weight-bold p-2">
                <span className="text-danger">Front</span>-End Engineer
              </h1>
              <div className="hr w-100"></div>
              <div className="col-md-6 my-2 d-flex justify-content-around w-100">
                <a className="px-md-2" href="https://github.com/dipanshuraz">
                  <i class="fa-3x fab fa-github text-dark"></i>
                </a>

                <a
                  className="px-md-2"
                  href="https://linkedin.com/in/deepanshu-prajapati-0b7472148"
                >
                  <i class=" fa-3x fab fa-linkedin-in "></i>
                </a>

                <a
                  className="px-md-2"
                  href="https://hackerrank.com/dipanshuraz2"
                >
                  <i class="fa-3x fab fa-hackerrank text-success"></i>
                </a>
              </div>
              <div className="hr w-100"></div>

              <div className="d-flex flex-column text-justify">
                <p className="lead font-weight-bold">
                  <a
                    href="mailto:dipanshuraz2@gmail.com?body=Your message within Main Body"
                    className="text-dark"
                  >
                    <i class="far fa-envelope"></i> dipanshuraz2@gmail.com
                  </a>
                </p>
                <p className="lead font-weight-bold">
                  <a href="tel:+918299379285" className="text-dark">
                    <i class="fas fa-phone"></i> +91 8299379285
                  </a>
                </p>
                <p className="lead font-weight-bold">
                  <i class="fas fa-map-marker-alt"></i> Patna , India
                </p>
              </div>

              <div className="hr w-100"></div>

              <div className="col-md-12 col-lg-4 my-2 py-md-3 w-100">
                <a
                  className="btn btn-block btn-outline-success bg-success border text-white p-3 w-100"
                  href="https://drive.google.com/file/d/1ixvglOxFTnMz8QeSTAt4TVnbprJ7bF41/view"
                >
                  <i class="far fa-file-alt"></i> Resume
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center mt-5">
          <div className="container ">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <p className="font-weight-bold lead">
                  An aspiring Full Stack Web Developer, molded and shaped by
                  Masai School's intensive training program. I want to work in
                  such a way that can inspire others and lead to the growth of
                  mine as well as the organisation I will work with.
                </p>
                <hr />
                <h2 className="font-weight-bold">Tech Stack</h2>
                <hr />

                <div className="row justify-content-around p-3">
                  <img
                    src="/icons/html-5.svg"
                    width="120px"
                    className="img-fluid p-3"
                    alt=""
                  />
                  <img
                    src="/icons/css-3.svg"
                    width="120px"
                    className="img-fluid p-3"
                    alt=""
                  />

                  <img
                    src="/icons/bootstrap.svg"
                    width="120px"
                    className="img-fluid p-3"
                    alt=""
                  />
                  <img
                    src="/icons/javascript.svg"
                    width="120px"
                    className="img-fluid p-3"
                    alt=""
                  />
                  <img
                    src="/icons/jquery.svg"
                    width="120px"
                    className="img-fluid p-3"
                    alt=""
                  />
                  <img
                    src="/icons/react.svg"
                    width="120px"
                    className="img-fluid p-3"
                    alt=""
                  />
                  <img
                    src="/icons/redux.svg"
                    width="120px"
                    className="img-fluid p-3"
                    alt=""
                  />
                </div>
                <hr />
                <h2 className="font-weight-bold">Proficiency</h2>
                <hr />
                <div className="row justify-content-around p-3">
                  <div className="">
                    <img
                      src="/icons/react.png"
                      width="160px"
                      className="img-fluid"
                      alt=""
                    />
                    <p className="lead font-weight-bold">
                      <span className="text-info">Frontend</span>
                    </p>
                  </div>
                  <div className="">
                    <img
                      src="/icons/data.png"
                      width="160px"
                      className="img-fluid"
                      alt=""
                    />
                    <p className="lead font-weight-bold">
                      <span className="text-primary">Data Structure</span> &{" "}
                      <span className="text-dark"> Algo</span>
                    </p>
                  </div>
                </div>
                <hr />
                <h2 className="font-weight-bold">Tools</h2>
                <hr />
                <div className="row justify-content-around p-3">
                  <img
                    src="/icons/visual-studio-code.svg"
                    width="120px"
                    className="img-fluid p-3"
                    alt=""
                  />
                  <img
                    src="/icons/figma.svg"
                    width="120px"
                    className="img-fluid p-3"
                    alt=""
                  />
                  <img
                    src="/icons/netlify.svg"
                    width="120px"
                    className="img-fluid p-3"
                    alt=""
                  />
                  <img
                    src="/icons/npm.svg"
                    width="120px"
                    className="img-fluid p-3"
                    alt=""
                  />
                  <img
                    src="/icons/github.svg"
                    width="120px"
                    className="img-fluid p-3"
                    alt=""
                  />
                </div>
                <hr />
                <h2 className="font-weight-bold">Statistics</h2>
                <hr />
                <div className="row justify-content-around">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div
                      className="rounded-circle border border-circle d-flex justify-content-center align-items-center"
                      style={{ height: "160px", width: "160px" }}
                    >
                      <h1 class=" font-weight-bold"> 1000+</h1>
                    </div>
                    <h4 className="font-weight-bold my-2">Coding Hours</h4>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div
                      className="border rounded-circle border-circle d-flex justify-content-center align-items-center"
                      style={{ height: "160px", width: "160px" }}
                    >
                      <h1 class=" font-weight-bold">200+</h1>
                    </div>
                    <h4 className="font-weight-bold my-2">DSA Problems</h4>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div
                      className="border rounded-circle border-circle d-flex justify-content-center align-items-center"
                      style={{ height: "160px", width: "160px" }}
                    >
                      <h1 class=" font-weight-bold"> 500+</h1>
                    </div>
                    <h4 className="font-weight-bold my-2">Github Commits</h4>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div
                      className="border rounded-circle border-circle d-flex justify-content-center align-items-center"
                      style={{ height: "160px", width: "160px" }}
                    >
                      <h1 class=" font-weight-bold"> 100+</h1>
                    </div>
                    <h4 className="font-weight-bold my-2">
                      Hours Of soft Skills
                    </h4>
                  </div>
                </div>
                <hr />
                <h2 className="font-weight-bold">Github </h2>
                <GitHubCalendar username="dipanshuraz" />

                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
