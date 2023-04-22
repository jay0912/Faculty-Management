import { Link } from "react-router-dom";

function Header() {
  const handleMouseEnter = (e) => {
    e.target.style.color = "red";
  };
  const handleMouseLeave = (e) => {
    e.target.style.color = "black";
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <img
            width="10%"
            src="https://www.darshan.ac.in/Content/media/DU_Logo.svg"
            alt="..."
          />{" "}
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              class="navbar-nav me-auto mb-2 "
              style={{ marginLeft: "720px", marginTop: "30px" }}
            >
              <li class="nav-item">
                <Link
                  to="./"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{ color: "black", textDecoration: "0" }}
                >
                  Home
                </Link>{" "}
                &nbsp; &nbsp;&nbsp;
              </li>
              <li class="nav-item">
                <Link
                  to="./faculties"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{ color: "black", textDecoration: "0" }}
                >
                  All Employees
                </Link>{" "}
                &nbsp; &nbsp;&nbsp;
              </li>
              <li class="nav-item">
                <Link
                  to="./faculty/id"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{ color: "black", textDecoration: "0" }}
                >
                  Details
                </Link>{" "}
                &nbsp;&nbsp;&nbsp;
              </li>
              <li class="nav-item">
                <Link
                  to="./faculty/add"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{ color: "black", textDecoration: "0" }}
                >
                  Add Employees
                </Link>{" "}
                &nbsp;&nbsp;&nbsp;
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-danger" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
