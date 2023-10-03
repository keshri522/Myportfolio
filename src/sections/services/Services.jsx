import Card from "../../components/Card";
import data from "./data";
import "./services.css";

const Services = () => {
  return (
    <section
      id="services"
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
    >
      <h2>My Services</h2>
      <p>I give you the best in all the services below</p>
      <div className="container services__container">
        {data.map((item) => (
          <Card key={item.id} className="service light">
            <div className="service__icon">{item.icon}</div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <p style={{ fontWeight: "bold" }}>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;