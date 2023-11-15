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
          src="https://camo.githubusercontent.com/ea741efee7f04544a4da4b651b462b79455c7c60a51868fd3645a24e31b6ce78/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d6b65736872693532322673686f775f69636f6e733d74727565266c6f63616c653d656e"
          alt="gitstatss"
        />
        <img
          className="imgSizes"
          src="https://camo.githubusercontent.com/154dc3821305f6f54b42d70aa34d96aacd6d879b7fb96d786a6b0f202225f70c/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d6b657368726935323226"
          alt="gitstas1"
        />
        <img
          className="imgSizes"
          src="https://camo.githubusercontent.com/2bfbbcbd428d3274e289c873a327ba6245f0641c6f5f97939c105080da15e8ca/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d6b65736872693532322673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374"
          alt="usedlang"
        />
      </div>
    </>
  );
};

export default FAQs;
