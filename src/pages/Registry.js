import './Registry.css';

function Registry() {
  return (
    <>
      <div className="registry-title">
        <h1>Wedding Registry</h1>
      </div>
      <div className="registry-information">
        <h2>Visit the links below to check out our registries!</h2>
        <p>Thank you for celebrating with us! <br /> <br />  For those who would like to bless us as we begin our new life together, we have created registries with items and experiences that will help us build our home and create memories together as we start our family. <br /> <br /> Feel free to explore the options below, but of course, there is no pressure—your love and support mean the world to us, and we’re just grateful to have you in our lives. </p>
      </div>
      <div className="store-registries">
        <div className="store-registry">
          <a href="https://www.target.com/gift-registry/gift/most-ardently" target="_blank" rel="noopener noreferrer">
            <img src="/images/registry-logos/target.png" alt="Target Registry" />
          </a>
        </div>
        <div className="store-registry">
          <a href="https://www.amazon.com/wedding/share/most-ardently" target="_blank" rel="noopener noreferrer">
            <img src="/images/registry-logos/amazon-logo.webp" alt="Amazon Registry" />
          </a>
        </div>
        <div className="store-registry">
          <a href="https://www.crateandbarrel.com/gift-registry/molly-mckenna/r7221413" target="_blank" rel="noopener noreferrer">
          <img src="/images/registry-logos/crate-and-barrel-logo.png" alt="Crate & Barrel Registry" />
          </a>
        </div>
        <div className="store-registry">
          <a href="https://www.williams-sonoma.com/registry/qfxbv788w2/registry-list.html" target="_blank" rel="noopener noreferrer">
          <img src="/images/registry-logos/williams-sonoma-logo.png" alt="Williams Sonoma Registry" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Registry;