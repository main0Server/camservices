import { aboutData } from './data';
import AboutEntry from './AboutEntry';

function About() {
  return (
    <div className="About">
      <section className="page-section bg-dark" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="text-white mt-0">We've got what you need!</h2>
              <hr className="divider divider-light" />
              {aboutData.map(data => (
              <AboutEntry
                key={data.id}
                aboutContent={data.aboutContent}
              />
              ))}
              <a className="btn btn-light btn-xl gradientBtn" href="#services">Services!</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default About;