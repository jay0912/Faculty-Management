import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function FacultyAdd() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});

  const label = {
    color: "black",
    marginBottom: "6px",
    display: "block"
  };

  const input = {
    width: "100%",
    border: "none",
    background: "transparent",
    borderBottom: "2px solid black",
    outline: "none",
    paddingBottom: "5px"
  };

  const row = {
    display: "flex",
    justifyContent: "space-between",
    flexBasis: "45%",
    marginBottom: "20px"
  };

  useEffect(() => {
    if (params.id > 0) {
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
          setData(res);
        });
    }
  }, []);

  return (
    <>
      <section class="mx-auto">
        <div
          class="container contact mx-auto"
          style={{ width: "80%", margin: "50px auto" }}
        >
          <div
            class="contact-box"
            style={{ background: "white", display: "flex" }}
          >
            <div
              class="contact-center"
              style={{
                flexBasis: "100%",
                color: "black",
                background: "#F5F5F5",
                padding: "40px 60px"
              }}
            >
              <form>
                <div
                  class="input-row"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexBasis: "45%",
                    marginBottom: "20px"
                  }}
                >
                  <div class="input-group">
                    <label style={label}>Name</label>
                    <input
                      type="text"
                      placeholder="Enter Faculty Name"
                      style={input}
                      value={data.FacultyName}
                      onChange={(e) => {
                        setData({ ...data, FacultyName: e.target.value });
                      }}
                    />
                  </div>
                </div>

                <div class="input-row" style={row}>
                  <div class="input-group" style={{ flexBasis: "45%" }}>
                    <label style={label}>Designation</label>
                    <input
                      type="text"
                      placeholder="Enter Faculty Designation"
                      style={input}
                      value={data.FacultyDesignation}
                      onChange={(e) => {
                        setData({
                          ...data,
                          FacultyDesignation: e.target.value
                        });
                      }}
                    />
                  </div>
                  <div class="input-group" style={{ flexBasis: "45%" }}>
                    <label style={label}>Highest Education</label>
                    <input
                      type="text"
                      placeholder="Enter Faculty Highest Education"
                      style={input}
                      value={data.FacultyHighestEducation}
                      onChange={(e) => {
                        setData({
                          ...data,
                          FacultyHighestEducation: e.target.value
                        });
                      }}
                    />
                  </div>
                </div>

                <div class="input-row" style={row}>
                  <div class="input-group" style={{ flexBasis: "45%" }}>
                    <label style={label}>Experience</label>
                    <input
                      type="text"
                      placeholder="Enter Faculty Experience"
                      style={input}
                      value={data.FacultyExperienceInYears}
                      onChange={(e) => {
                        setData({
                          ...data,
                          FacultyExperienceInYears: e.target.value
                        });
                      }}
                    />
                  </div>
                  <div class="input-group" style={{ flexBasis: "45%" }}>
                    <label style={label}>Working Since</label>
                    <input
                      type="text"
                      placeholder="Enter Faculty Working Since"
                      style={input}
                      value={data.FacultyWorkingSince}
                      onChange={(e) => {
                        setData({
                          ...data,
                          FacultyWorkingSince: e.target.value
                        });
                      }}
                    />
                  </div>
                </div>

                <div class="input-row" style={row}>
                  <div class="input-group" style={{ flexBasis: "45%" }}>
                    <label style={label}>Mobile</label>
                    <input
                      type="text"
                      placeholder="Enter Faculty Mobile"
                      style={input}
                      value={data.FacultyMobileNumber}
                      onChange={(e) => {
                        setData({
                          ...data,
                          FacultyMobileNumber: e.target.value
                        });
                      }}
                    />
                  </div>
                  <div class="input-group" style={{ flexBasis: "45%" }}>
                    <label style={label}>Email</label>
                    <input
                      type="text"
                      placeholder="Enter Faculty Email"
                      style={input}
                      value={data.FacultyEmailAddress}
                      onChange={(e) => {
                        setData({
                          ...data,
                          FacultyEmailAddress: e.target.value
                        });
                      }}
                    />
                  </div>
                </div>

                <div class="input-row" style={row}>
                  <div class="input-group" style={{ flexBasis: "45%" }}>
                    <label style={label}>Seating</label>
                    <input
                      type="text"
                      placeholder="Enter Faculty Seating"
                      style={input}
                      value={data.FacultySeating}
                      onChange={(e) => {
                        setData({ ...data, FacultySeating: e.target.value });
                      }}
                    />
                  </div>
                  <div class="input-group" style={{ flexBasis: "45%" }}>
                    <label style={label}>Profile Description</label>
                    <input
                      type="text"
                      placeholder="Enter Faculty Profile Description"
                      style={input}
                      value={data.FacultyProfileDescription}
                      onChange={(e) => {
                        setData({
                          ...data,
                          FacultyProfileDescription: e.target.value
                        });
                      }}
                    />
                  </div>
                </div>

                <div class="input-row" style={row}>
                  <div class="input-group" style={{ flexBasis: "45%" }}>
                    <label style={label}>Area Specialization</label>
                    <input
                      type="text"
                      placeholder="Enter Faculty Area SPecialization"
                      style={input}
                      value={data.FacultyAreaSpecialization}
                      onChange={(e) => {
                        setData({
                          ...data,
                          FacultyAreaSpecialization: e.target.value
                        });
                      }}
                    />
                  </div>
                  <div class="input-group" style={{ flexBasis: "45%" }}>
                    <label style={label}>Subject</label>
                    <input
                      type="text"
                      placeholder="Enter Faculty Subject"
                      style={input}
                      value={data.FacultySubjectsTaught}
                      onChange={(e) => {
                        setData({
                          ...data,
                          FacultySubjectsTaught: e.target.value
                        });
                      }}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  class="btn btn-dark"
                  onClick={() => {
                    if (params.id > 0) {
                      fetch(
                        "https://62dacea8e56f6d82a76a25de.mockapi.io/DarshanFaculties/" +
                          params.id,
                        {
                          method: "PUT",
                          body: JSON.stringify(data),
                          headers: {
                            "Content-Type": "application/json"
                          }
                        }
                      ).then(() => {
                        navigate("/faculties");
                      });
                    } else {
                      fetch(
                        "https://62dacea8e56f6d82a76a25de.mockapi.io/DarshanFaculties/",
                        {
                          method: "POST",
                          body: JSON.stringify(data),
                          headers: {
                            "Content-Type": "application/json"
                          }
                        }
                      ).then(() => {
                        navigate("/faculties");
                      });
                    }
                  }}
                >
                  {params.id > 0 && "Edit  "}
                  {!(params.id > 0) && "Add  "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
