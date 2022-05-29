document.write(`<h1> HHELLO  WORLD </h2>`);

const portfolioSection = document.getElementById("portfolio");

let showCaseLatestJobs = document.getElementById("showCaseJobProfiles");

console.log(portfolioSection);

let navBar = `<div class="row">
<nav id="filter" class="col-md-12 text-center">
  <ul>
    <li>
      <a href="#" class="current btn-theme btn-small" data-filter="*"
        >All</a
      >
    </li>
    <li>
      <a href="#" class="btn-theme btn-small" data-filter=".webdesign"
        >Web Design</a
      >
    </li>
    <li>
      <a
        href="#"
        class="btn-theme btn-small"
        data-filter=".photography"
        >Photography</a
      >
    </li>
    <li>
      <a href="#" class="btn-theme btn-small" data-filter=".print"
        >Print</a
      >
    </li>
  </ul>
</nav>

  
</div>`;

let showCaseJobs = `<div class="col-md-12">
<h1>HELLO </h1>
<div class="row">
  <div class="portfolio-items isotopeWrapper clearfix" id="3">
    <article class="col-sm-4 isotopeItem webdesign">
      <div class="portfolio-item">
        <img src="images/portfolio/img1.jpg" alt="" />
        <div class="portfolio-desc align-center">
          <div class="folio-info">
            <a href="images/portfolio/img1.jpg" class="fancybox">
              <h5>Project Title</h5>
              <i class="fa fa-link fa-2x"></i
            ></a>
          </div>
        </div>
      </div>
    </article>
    <article class="col-sm-4 isotopeItem photography">
      <div class="portfolio-item">
        <img src="images/portfolio/img2.jpg" alt="" />
        <div class="portfolio-desc align-center">
          <div class="folio-info">
            <a href="images/portfolio/img2.jpg" class="fancybox">
              <h5>Project Title</h5>
              <i class="fa fa-link fa-2x"></i
            ></a>
          </div>
        </div>
      </div>
    </article>
    <article class="col-sm-4 isotopeItem photography">
      <div class="portfolio-item">
        <img src="images/portfolio/img3.jpg" alt="" />
        <div class="portfolio-desc align-center">
          <div class="folio-info">
            <a href="images/portfolio/img3.jpg" class="fancybox">
              <h5>Project Title</h5>
              <i class="fa fa-link fa-2x"></i
            ></a>
          </div>
        </div>
      </div>
    </article>
    <article class="col-sm-4 isotopeItem print">
      <div class="portfolio-item">
        <img src="images/portfolio/img4.jpg" alt="" />
        <div class="portfolio-desc align-center">
          <div class="folio-info">
            <a href="images/portfolio/img4.jpg" class="fancybox">
              <h5>Project Title</h5>
              <i class="fa fa-link fa-2x"></i
            ></a>
          </div>
        </div>
      </div>
    </article>
    <article class="col-sm-4 isotopeItem photography">
      <div class="portfolio-item">
        <img src="images/portfolio/img5.jpg" alt="" />
        <div class="portfolio-desc align-center">
          <div class="folio-info">
            <a href="images/portfolio/img5.jpg" class="fancybox">
              <h5>Project Title</h5>
              <i class="fa fa-link fa-2x"></i
            ></a>
          </div>
        </div>
      </div>
    </article>
    <article class="col-sm-4 isotopeItem webdesign">
      <div class="portfolio-item">
        <img src="images/portfolio/img6.jpg" alt="" />
        <div class="portfolio-desc align-center">
          <div class="folio-info">
            <a href="images/portfolio/img6.jpg" class="fancybox">
              <h5>Project Title</h5>
              <i class="fa fa-link fa-2x"></i
            ></a>
          </div>
        </div>
      </div>
    </article>
    <article class="col-sm-4 isotopeItem print">
      <div class="portfolio-item">
        <img src="images/portfolio/img7.jpg" alt="" />
        <div class="portfolio-desc align-center">
          <div class="folio-info">
            <a href="images/portfolio/img7.jpg" class="fancybox">
              <h5>Project Title</h5>
              <i class="fa fa-link fa-2x"></i
            ></a>
          </div>
        </div>
      </div>
    </article>
    <article class="col-sm-4 isotopeItem photography">
      <div class="portfolio-item">
        <img src="images/portfolio/img8.jpg" alt="" />
        <div class="portfolio-desc align-center">
          <div class="folio-info">
            <a href="images/portfolio/img8.jpg" class="fancybox">
              <h5>Project Title</h5>
              <i class="fa fa-link fa-2x"></i
            ></a>
          </div>
        </div>
      </div>
    </article>
    <article class="col-sm-4 isotopeItem print">
      <div class="portfolio-item">
        <img src="images/portfolio/img9.jpg" alt="" />
        <div class="portfolio-desc align-center">
          <div class="folio-info">
            <a href="images/portfolio/img9.jpg" class="fancybox">
              <h5>Project Title</h5>
              <i class="fa fa-link fa-2x"></i
            ></a>
          </div>
        </div>
      </div>
    </article>
  </div>
</div>
</div>`;

let codeBlock = ``;

showCaseLatestJobs.insertAdjacentHTML("beforeend", navBar);
portfolioSection.insertAdjacentHTML("beforeend", showCaseJobs);
