import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Faculties() {
  const [faculties, setFaculties] = useState([]);
  useEffect(() => {
    fetch("https://62dacea8e56f6d82a76a25de.mockapi.io/DarshanFaculties")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setFaculties(res);
      });
  }, []);

  const foramtedFaculty = faculties.map((fac) => {
    return (
      <>
        <div class="card col-md-3 my-4" style={{ border: 0 }}>
          <div class="shadow p-3 mb-5 bg-body rounded ">
            <img src={fac.FacultyImage} class="card-img-top" alt="..." />

            <div class="card-body">
              <h5 class="card-title" align="center">
                <i>{fac.FacultyName}</i>
              </h5>
              <h6
                class="card-title"
                style={{ color: "red", fontSize: "12px" }}
                align="center"
              >
                Professor
              </h6>
              <hr />
              <h6
                class="card-title"
                style={{ fontSize: "12px" }}
                align="center"
              >
                Ph.D. , M.E. (CE)
              </h6>
              <hr />

              <div class="container">
                <div class="row">
                  <div class="col-6" style={{ fontSize: "14px" }}>
                    Experience
                  </div>
                  <div class="col-6" style={{ fontSize: "14px" }}>
                    Working Since
                  </div>
                </div>

                <div class="row">
                  <div
                    class="col-6"
                    style={{
                      fontSize: "12px",
                      background: "lightblue",
                      color: "blue",
                      fontWeight: "700",
                      paddingTop: "9px",
                      alignContent: "center",
                      textAlign: "center"
                    }}
                  >
                    {fac.FacultyExperienceInYears}yr
                  </div>
                  <div
                    class="col-6"
                    style={{
                      fontSize: "12px",
                      background: "silver",
                      fontWeight: "700"
                    }}
                  >
                    {fac.FacultyWorkingSince}
                  </div>
                </div>
                <br />
                <Link
                  to={"../faculty/" + fac.id}
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <button type="button" class="btn btn-primary">
                    View Detail
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div>
        <h1 class="my-4" style={{ color: "red", textAlign: "center" }}>
          Faculties of Darshan
        </h1>
        <hr />
      </div>
      <div class="row"> {foramtedFaculty} </div>
    </>
  );
}

export default Faculties;
