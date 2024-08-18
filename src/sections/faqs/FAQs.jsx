import "./faqs.css";

const FAQs = () => {
  return (
    <>
      <section id="faqs" data-aos="fade-up">
        <div className="img-container">
          <h1 className="style">Github Stats</h1>
          <img
            className="imgSize"
            src="https://kunalmehra075.github.io/Images/Icons/githubocto.png"
            alt="stats_image"
          />
        </div>
      </section>
      {/* for the github stats */}
      <div className="gitstats">
        <img
          className="imgSizes"
          src="https://camo.githubusercontent.com/8226cabb158e6699888a04b73bd6fbb27792ad90f09c83bd3b5cb07fe1a708b8/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d6b65736872693532322673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374"
          alt="gitstatss"
        />
        <img
          className="imgSizes"
          src="https://camo.githubusercontent.com/7e678c2a2dadbe0430ea9ec2067d2e9ce4d23101b92a9c522ff9c7e8899355ab/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d6b65736872693532322673686f775f69636f6e733d74727565266c6f63616c653d656e"
          alt="gitstas1"
        />
        <img
          className="imgSizes"
          src="https://camo.githubusercontent.com/ffe7544c6e0c09d75c3bec4817015a881b2dfe50c957024d3ed333465e1a1437/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d6b657368726935323226"
          alt="usedlang"
        />
      </div>
    </>
  );
};

export default FAQs;
