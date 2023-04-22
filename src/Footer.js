function Footer() {
  let mystyle = {
    width: "60px",
    background: "#7c4dff",
    height: "2px"
  };
  return (
    <>
      <div width="100%">
        <footer
          width="100%"
          class="text-center text-lg-start text-white"
          style={{ background: "#1c2331" }}
        >
          <section
            class="d-flex justify-content-between p-4"
            style={{ background: "#6351ce" }}
          >
            <div class="me-5">
              <span>Get connected with us:</span>
            </div>
          </section>

          <section class="">
            <div class="container text-center text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold text-info">Who We Are?</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={mystyle}
                  />
                  <p>
                    Darshan University - having the foundation of its first
                    Institution laid in 2009, and later on, established and
                    consolidated under Gujarat Private Universities (Second
                    Amendment) Act of 2021. It is one of the leading institutes
                    within Saurashtra that offers Diploma, UG, PG and Doctoral
                    Courses.
                  </p>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold text-info">For Student</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={mystyle}
                  />
                  <p>
                    <a href="#!" class="text-white">
                      Study Material
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white">
                      Transpot
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white">
                      Pay Fees
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white">
                      Scholarships
                    </a>
                  </p>
                </div>

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold text-info">Useful links</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={mystyle}
                  />
                  <p>
                    <a href="#!" class="text-white">
                      Your Account
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white">
                      Become an Affiliate
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white">
                      Shipping Rates
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white">
                      Help
                    </a>
                  </p>
                </div>

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 class="text-uppercase fw-bold text-info">Contact</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={mystyle}
                  />
                  <p>
                    <i class="fas fa-home mr-3"></i> Rajkot-Morbi Highway
                    <br />
                    Gujarat-363650,INDIA
                  </p>
                  <p>
                    <i class="fas fa-envelope mr-3"></i> info@darshan.ac.in
                  </p>
                  <p>
                    <i class="fas fa-phone mr-3"></i> + 91 234 567 88
                  </p>
                  <p>
                    <i class="fas fa-print mr-3"></i> + 91 234 567 89
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div class="text-center p-3 " style={{ background: "#6351ce" }}>
            © 2020 Copyright:
            <a class="text-white" href="https://www.darshan.ac.in/">
              Darshan.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
