import React from 'react'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <div className="changecolour">
        <section className="hero is-info is-fullheight home has-background-black">
          <div className="hero-body ">
            <div className="container">
              <h1 className="title">
              </h1>
              <h2 className="subtitle">
              </h2>
            </div>
          </div>
        </section>
      </div>

      <section className="about has-background-black">
        <div className="hero-body ">
          <div className="container">
            <div className="columns">
              <div className="column">
                <figure className="image is-100x100">
                  <img src="https://res.cloudinary.com/do68wjft3/image/upload/v1600211471/Pimps-1457_uoz6im.jpg" alt="hair"/>
                </figure>
              </div>
              <div className="column is-half homefont">
                <p>Located in the heart of shoreditch by spitafields market since 2008, here at pimps and pinups we pride ourselves on our unique style. Our goal is to make sure each individual client receives the care and attention their hair deserves. functioning on a ‘everyone is welcome’ no judgment policy.</p>
                <br></br>
                <p>We find that hair isn’t just a haircut, it’s a personality, it can be what makes your day go from a bad day to a good day. We strive to perfection and won’t accept anything less. You will find that our stylists will always take the best care of your mane, and do all in their power to maintain healthy conditioned hair, or to restore to locks you can be proud of.</p>
                <br></br>
                <p>We are a diverse bunch, from all around the world, just trying to fit in, and this is where we do. So whatever style you want we are positive we have the right stylist for you. From classic balayage to the craziest of colours. Don’t be afraid to be you, because we’re not. So book online or call to make an appointment. We look forward to seeing you!</p>
                <br></br>
                <p>Please let our reception team know if you require any special assistance upon your arrival and we will do our best to accommodate you.</p>
                <div className="column">
                  <figure className="image is-200x200">
                    <img src="https://res.cloudinary.com/do68wjft3/image/upload/v1600291536/Pimps-1669_iewrbm_edit_ukeu38.jpg" alt="hair" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
      {/* </div> */}
    </>
  )
}

export default Home
