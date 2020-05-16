import React from "react";
import { connect } from "react-redux";
import "../course.css";
import { startsetChapters } from "../actions/chaptersAction";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

class CourseDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      img: "",
      autoplay: true,
      showList: false,
      chap: {},
    };
  }
  handleclick = (id) => {
    this.props.dispatch(startsetChapters(id));
  };
  render() {
    return (
      <div className="container">
        {Object.keys(this.props.courses).length > 0 ? (
          <div>
            <Card
              style={{
                width: "30rem",
                borderRadius: "6px",
                height: "4rem",
                boxShadow:
                  "0px 4px 18px rgba(0, 0, 0, 0.18), 0px 6px 5px rgba(0, 0, 0, 0.24)",
              }}
            >
              <p>{this.props.courses.courseDetails.name}</p>
            </Card>

            <div className="row">
              <div className="col-md-6">
                <video width="550" height="450" controls>
                  <source
                    src="https://omnicuris-assets-instream.s3.ap-south-1.amazonaws.com/certification/14_02_18_09_45_56__ARTIST1.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>

              <div className="col-md-6">
                {this.props.courses.courseDetails.modules.map((course) => {
                  this.img = course.moduleExperts.map((image) => {
                    return image.profilePic;
                  });
                  return (
                    <div className="row">
                      <Card
                        style={{
                          width: "35rem",
                          borderRadius: "6px",
                          height: "6rem",
                          boxShadow:
                            "0px 9px 18px rgba(0, 0, 0, 0.18), 0px 6px 5px rgba(0, 0, 0, 0.24)",
                        }}
                      >
                        <div>
                          <img
                            src={this.img[0]}
                            alt="Smiley face"
                            className="expertImg "
                          />
                          <Link
                            to={`/chapter/${course.id}`}
                            onClick={() => {
                              this.handleclick(course.id);
                            }}
                            className="textColor"
                          >
                            {course.title}-{course.name}
                          </Link>

                          <div className="offset-md-8">
                            <p>{course.durationStr}</p>
                          </div>
                        </div>
                      </Card>
                      <br />
                    </div>
                  );
                })}
                <br />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <h6>Description</h6>
              </div>
              <div className="col-md-8">
                <img
                  src="facebook.png"
                  alt="Smiley face"
                  className="coursePic"
                />
                <img
                  src="twitter.png"
                  alt="Smiley face"
                  className="coursePic"
                />
                <img
                  src="linkdin.png"
                  alt="Smiley face"
                  className="coursePic"
                />
                <img
                  src="youTube.png"
                  alt="Smiley face"
                  className="coursePic"
                />
                <img
                  src="watsapp.png"
                  alt="Smiley face"
                  className="coursePic"
                />
              </div>
            </div>
            <p>{this.props.courses.courseDetails.description}</p>
            <h6>Expert Pannel</h6>

            <ul>
              {Object.keys(this.props.experts).length > 0 ? (
                <div class="card-group">
                  {" "}
                  {this.props.experts.expertDetails.map((expert) => {
                    return (
                      <div class="card" className="card">
                        <img
                          src={expert.profilePic}
                          class="card-img-top"
                          alt="..."
                          className="image"
                        />
                        <div class="card-body">
                          <p class="card-title" className="textClr">
                            {" "}
                            {expert.title}
                            {expert.expertName}
                          </p>

                          <p class="card-title" className="title">
                            {" "}
                            {expert.qualification}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                  <br />
                </div>
              ) : (
                <div>
                  <h5>...Loading</h5>
                </div>
              )}
            </ul>
          </div>
        ) : (
          <div>
            <h5>...Loading</h5>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
    experts: state.experts,
    chapters: state.chapters,
  };
};

export default connect(mapStateToProps)(CourseDetails);
