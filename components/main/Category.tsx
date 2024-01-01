import React from 'react';

const CategoryList: React.FC = () => {

    const backgroundImageUrl = '/images/img-background.jpg';
  return (

    
    <section className="section category bg-fixed bg-center " aria-label="photography category " style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className="container">
      <h3 className='h6 text-purple-200 category-list uppercase'>Competions</h3>
        <ul className="category-list">
          <li className="category-item" data-reveal>
            <a href="#" className="category-card">
              <h3 className="h4 card-title">Dance,</h3>
              <figure className="card-banner img-holder">
                <img
                  src="images/category-1.jpg"
                  width="600"
                  height="690"
                  loading="lazy"
                  alt="Landscape"
                  className="img-contain"
                />
              </figure>
            </a>
          </li>

          <li className="category-item" data-reveal>
            <a href="#" className="category-card">
              <h3 className="h4 card-title">Music,</h3>
              <figure className="card-banner img-holder" style={{width:"600", height:"690"}}>
                <img
                  src="images/category-2.jpg"
                  width="600"
                  height="690"
                  loading="lazy"
                  alt="Model"
                  className="img-cover"
                />
              </figure>
            </a>
          </li>

          <li className="category-item" data-reveal>
            <a href="#" className="category-card">
              <h3 className="h4 card-title">Instruental,</h3>
              <figure className="card-banner img-holder" style={{width:"600", height:"690"}}>
                <img
                  src="images/category-3.jpg"
                  width="600"
                  height="690"
                  loading="lazy"
                  alt="Street"
                  className="img-cover"
                />
              </figure>
            </a>
          </li>

          <li className="category-item" data-reveal>
            <a href="#" className="category-card">
              <h3 className="h4 card-title">Short Film,</h3>
              <figure className="card-banner img-holder" style={{width:"600", height:"690"}}>
                <img
                  src="images/category-4.jpg"
                  width="600"
                  height="690"
                  loading="lazy"
                  alt="Product"
                  className="img-cover"
                />
              </figure>
            </a>
          </li>

          <li className="category-item" data-reveal>
            <a href="#" className="category-card">
              <h3 className="h4 card-title">Fashion Walk,</h3>
              <figure className="card-banner img-holder" style={{width:"600", height:"690"}}>
                <img
                  src="images/category-2.jpg"
                  width="600"
                  height="690"
                  loading="lazy"
                  alt="Fashion"
                  className="img-cover"
                />
              </figure>
            </a>
          </li>

          <li className="category-item" data-reveal>
            <a href="#" className="category-card">
              <h3 className="h4 card-title">Drama,</h3>
              <figure className="card-banner img-holder" style={{width:"600", height:"690"}}>
                <img
                  src="images/category-5.jpg"
                  width="600"
                  height="690"
                  loading="lazy"
                  alt="Film"
                  className="img-cover"
                />
              </figure>
            </a>
          </li>

          <li className="category-item" data-reveal>
            <a href="#" className="category-card">
              <h3 className="h4 card-title">Indoor Games,</h3>
              <figure className="card-banner img-holder" style={{width:"600", height:"690"}}>
                <img
                  src="images/category-6.jpg"
                  width="600"
                  height="690"
                  loading="lazy"
                  alt="Architecture"
                  className="img-cover"
                />
              </figure>
            </a>
          </li>

          <li className="category-item" data-reveal>
            <a href="#" className="category-card">
              <h3 className="h4 card-title">Story Telling,</h3>
              <figure className="card-banner img-holder" style={{width:"600", height:"690"}}>
                <img
                  src="images/category-7.jpg"
                  width="600"
                  height="690"
                  loading="lazy"
                  alt="Event"
                  className="img-cover"
                />
              </figure>
            </a>
          </li>

          <li className="category-item" data-reveal>
            <a href="#" className="category-card">
              <h3 className="h4 card-title">Fashion,</h3>
              <figure className="card-banner img-holder" style={{width:"600", height:"690"}}>
                <img
                  src="images/category-8.jpg"
                  width="600"
                  height="690"
                  loading="lazy"
                  alt="Wedding"
                  className="img-cover"
                />
              </figure>
            </a>
          </li>

          <li className="category-item" data-reveal>
            <a href="#" className="category-card">
              <h3 className="h4 card-title">People,</h3>
              <figure className="card-banner img-holder" style={{width:"600", height:"690"}}>
                <img
                  src="images/category-9.jpg"
                  width="600"
                  height="690"
                  loading="lazy"
                  alt="People"
                  className="img-cover"
                />
              </figure>
            </a>
          </li>

          <li className="category-item" data-reveal>
            <a href="#" className="category-card">
              <h3 className="h4 card-title">Quiz,</h3>
              <figure className="card-banner img-holder" style={{width:"600", height:"690"}}>
                <img
                  src="images/category-10.jpg"
                  width="600"
                  height="690"
                  loading="lazy"
                  alt="Food"
                  className="img-cover"
                />
              </figure>
            </a>
          </li>

          <li className="category-item" data-reveal>
            <a href="#" className="category-card">
              <h3 className="h4 card-title">Mr and Mrs Infinitus,</h3>
              <figure className="card-banner img-holder" style={{width:"60", height:"690"}}>
                <img
                  src="images/category-11.jpg"
                  width="60"
                  height="69"
                  loading="lazy"
                  alt="Health & Wellness"
                  className="img-cover"
                />
              </figure>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CategoryList;
