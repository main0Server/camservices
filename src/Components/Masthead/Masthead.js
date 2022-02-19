import "./masthead.css";
import TypicalCom from '../Typical/TypicalCom';

function Masthead() {
  return (
    <div className="Masthead">
      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end TypicalCom">
            <h1 className="text-white font-weight-bold">
              <TypicalCom
                steps={[
                  "SECURITY", 2000,
                  "INSTALLATION", 1700,
                  "MAINTENANCE", 1700,
                  "MONITORING", 1700,
                  "CONSULTANCY", 1700
                ]}
              />
            </h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <h2 className="text-white-75 mb-5">Welcome to Camera Security Services – the home of security systems in Germany!</h2>
              <a className="btn btn-success gradientBtn btn-xl" href="#about">About us</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
export default Masthead;