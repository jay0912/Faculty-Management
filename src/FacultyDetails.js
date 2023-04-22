import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function FacultyDetail() {
  let params = useParams();
  const navigate = useNavigate();

  const [faculty, setFaculty] = useState({});

  useEffect(() => {
    fetch(
      "https://62dacea8e56f6d82a76a25de.mockapi.io/DarshanFaculties/" +
        params.id,
      {
        method: "GET"
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setFaculty(res);
      });
  }, []);

  return (
    <>
      <center class="my-5">
        <img
          src="https://www.darshan.ac.in/Content/media/DU-logo.svg"
          alt="..."
          width="30%"
        />
      </center>
      <br />

      <table
        width="40%"
        style={{ background: "#C10000" }}
        cellspacing="5"
        cellpadding="10"
        hieght="25%"
      >
        <tr>
          <td valign="bottom">
            <h1>
              <font color="white">{faculty.FacultyName}</font>
            </h1>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <font color="white">
              Faculty of Department of Computer Science and Engineering
            </font>
          </td>
        </tr>
      </table>
      {/* <caption>
        &#8962; &e4b2; School of Computer Science &e4b2; Department of Computer
        Science and Engineering &e4b2;
        <br />
        Stdent List &e4b2;<font color="red"> Student Profile</font>
      </caption> */}

      <br />
      <br />
      <table border="0" align="center" width="100%">
        <tr>
          <td align="center" valign="top" width="25%">
            <img src={faculty.FacultyImage} alt="..." width="200px" />

            <table align="center">
              <tr align="center" valign="bottom">
                <td>
                  <h2 style={{ marginBottom: "-7px" }}>
                    {faculty.FacultyName}
                  </h2>
                </td>
              </tr>
              <tr align="center" valign="bottom">
                <td>
                  <h5 style={{ color: "red" }}>Professor</h5>
                </td>
              </tr>
            </table>
            <hr />

            <center>Ph.D. , M.E. (CE)</center>

            <hr />

            <table width="80%">
              <tr align="center">
                <td>
                  <small>Age</small>
                </td>
                <td>
                  <small>Joining</small>
                </td>
              </tr>
              <tr align="center">
                <td bgcolor="#e6ebff">
                  <font color="#4d70ff">28</font>
                </td>
                <td bgcolor="#e1e1ea">
                  <font color="#494969">{faculty.FacultyWorkingSince}</font>
                </td>
              </tr>
            </table>
            <hr />

            <table cellpadding="3" align="center">
              <tr>
                <td>&#128222;</td>
                <td>{faculty.FacultyMobileNumber}</td>
              </tr>
              <tr>
                <td>&#128231;</td>
                <td>{faculty.FacultyEmailAddress}</td>
              </tr>
              <tr>
                <td>&#x1f4cc;</td>
                <td>C-312 &#10148; B-6</td>
              </tr>
              <tr>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    style={{ marginLeft: "20px", marginTop: "10px" }}
                    onClick={() => {
                      fetch(
                        "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties/" +
                          params.id,
                        {
                          method: "DELETE"
                        }
                      ).then((res) => {
                        navigate("/faculties");
                      });
                    }}
                  >
                    DELETE
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary"
                    style={{ marginLeft: "40px", marginTop: "10px" }}
                    onClick={() => {
                      navigate("/faculty/edit/" + params.id);
                    }}
                  >
                    EDIT
                  </button>
                </td>
              </tr>
            </table>
          </td>

          <td valign="top">
            <h1 style={{ marginTop: " -10px" }}>
              <font color="red">
                <u>Faculty Profile</u>
              </font>
            </h1>
            <hr style={{ marginTop: "-11px" }} />
            <h4 style={{ marginRight: "50px" }} align="left">
              I am Ambbitious, creative and Hard working person. I am Artist and
              i add Colours to my work and make it creative. I have achieved
              many state level certificates in arts. Also I am amazing sport
              person. Volleyball, Cricket and Baseball are my favourites, also
              played them in statelevel! I am driven individual who can go
              through any challenges without being afraid.
            </h4>
            <br />
            <br />

            <table align="center">
              <tr>
                <td>
                  <h5>Name</h5>
                </td>
                <td>
                  <h5>:</h5>
                </td>
                <td>{faculty.FacultyName}</td>
                <td></td>
                <td>
                  <h5>I'd No.</h5>
                </td>
                <td>
                  <h5>:</h5>
                </td>
                <td>{faculty.id}</td>
              </tr>

              <tr>
                <td>
                  <h5>Designation</h5>
                </td>
                <td>
                  <h5>:</h5>
                </td>
                <td>{faculty.FacultyDesignation}</td>
                <td></td>
                <td>
                  <h5>Highest Education</h5>
                </td>
                <td>
                  <h5>:</h5>
                </td>
                <td>{faculty.FacultyHighestEducation}</td>
              </tr>

              <tr>
                <td>
                  <h5>Experience</h5>
                </td>
                <td>
                  <h5>:</h5>
                </td>
                <td>{faculty.FacultyExperienceInYears}Year</td>
                <td></td>
                <td>
                  <h5>Since</h5>
                </td>
                <td>
                  <h5>:</h5>
                </td>
                <td>{faculty.FacultyWorkingSince}</td>
              </tr>

              <tr>
                <td>
                  <h5>Mobile Number</h5>
                </td>
                <td>
                  <h5>:</h5>
                </td>
                <td>{faculty.FacultyMobileNumber}</td>
                <td></td>
                <td>
                  <h5>Email</h5>
                </td>
                <td>
                  <h5>:</h5>
                </td>
                <td>{faculty.FacultyEmailAddress}</td>
              </tr>

              <tr>
                <td>
                  <h5>Seating</h5>
                </td>
                <td>
                  <h5>:</h5>
                </td>
                <td>{faculty.FacultySeating}</td>
                <td></td>
                <td>
                  <h5>Profile Discripter</h5>
                </td>
                <td>
                  <h5>:</h5>
                </td>
                <td>{faculty.FacultyProfileDescription}</td>
              </tr>

              <tr>
                <td>
                  <h5>Area Specialization</h5>
                </td>
                <td>
                  <h5>:</h5>
                </td>
                <td>{faculty.FacultyAreaSpecialization}</td>
                <td></td>
                <td>
                  <h5>Subject</h5>
                </td>
                <td>
                  <h5>:</h5>
                </td>
                <td>{faculty.FacultySubjectsTaught}</td>
              </tr>
            </table>
            <br />
            <br />

            <table width="100%">
              <td valign="top">
                <h1>
                  <font color="red">
                    <u>Qulificaton</u>
                  </font>
                </h1>
                <hr style={{ marginTop: "-11px" }} />
              </td>
            </table>
            <br />
            <br />
            <table width="100%" border="1" cellpadding="10">
              <tr bgcolor="#D6DBDF">
                <th width="15%">Qualification</th>
                <th>School/Institute/University</th>
                <th width="15%">Passing Year</th>
              </tr>
              <tr>
                <td>10th</td>
                <td>Sarvodaya Main School, Rajkot</td>
                <td>March-2018</td>
              </tr>
              <tr>
                <td>12th</td>
                <td>Sarvodaya Science School, rajkot</td>
                <td>March-2020</td>
              </tr>
              <tr>
                <td>B.E.</td>
                <td>Darshan Institute of Engineering and Technology</td>
                <td>July-2024</td>
              </tr>
            </table>
            <br />
            <br />
            <br />
          </td>
        </tr>
      </table>
    </>
  );
}
export default FacultyDetail;
