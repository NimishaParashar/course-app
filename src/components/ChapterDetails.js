import React from "react";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
class ChapterDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      image: "",
      content:
        "https://omnicuris-assets-instream.s3.ap-south-1.amazonaws.com/certification/14_02_18_09_45_56__ARTIST1.mp4",
    };
  }

  handleClick = (con) => {
    this.setState({ content: con });
    console.log(this.state.content);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <video width="550" height="450" controls>
              <source src={this.state.content} type="video/mp4" />
            </video>
          </div>
          <div className="col-md-6">
            {Object.keys(this.props.chapters).length > 0 ? (
              <div>
                {this.props.chapters.lessonDetails[0].userChapterDetails.map(
                  (chap, i) => {
                    this.state.image = chap.chapterExperts.map((ch) => {
                      return ch.profilePic;
                    });

                    return (
                      <div>
                        <Card
                          style={{
                            width: "32rem",
                            borderRadius: "6px",
                            height: "7rem",
                            boxShadow:
                              "0px 4px 18px rgba(0, 0, 0, 0.18), 0px 6px 5px rgba(0, 0, 0, 0.24)",
                          }}
                        >
                          <div>
                            <img
                              src={this.state.image}
                              alt="Smiley face"
                              className="expertImg "
                            />
                            <Link
                              onClick={() => {
                                this.handleClick(chap.content);
                              }}
                            >
                              {" "}
                              <p>
                                {" "}
                                Chapter - {i + 1}-{chap.slug}
                              </p>
                            </Link>
                          </div>
                        </Card>
                        <br />
                      </div>
                    );
                  }
                )}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chapters: state.chapters,
  };
};

export default connect(mapStateToProps)(ChapterDetails);
