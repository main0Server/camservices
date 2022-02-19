import { useState } from "react";
import { DataService } from "./data";
import PopupBody from "../Popup/PopupBody";

export default function Services() {

  const [tempdata, setTempdata] = useState([]);

  const getData = (Data) => {
    setTempdata(Data);
  };

  return (
    <div>
      <section className="page-section" id="services">
        <div className="Services">
          <div className="container px-4 px-lg-5">
            <h2 className="text-center mt-0">At Your Service</h2>
            <hr className="divider" />
            <div className="row gx-4 gx-lg-5">
              {DataService.map((service) => (
                <div className="col-lg-3 col-md-6 text-center" key={service.id}>
                  <div className="mt-5">
                    <div>
                      <a
                        href="/"
                        type="button"
                        className="mb-2 btn btn-outline-info"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        onClick={() => getData(service)}
                      >
                        <i className={service.logo + " fs-1 text-primary m-2"}></i>
                      </a>
                    </div>
                    <h3 className="h4 mb-2">{service.title}</h3>
                    <p className="text-muted mb-0">{service.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {<PopupBody data={tempdata} />}
    </div>
  );
}
