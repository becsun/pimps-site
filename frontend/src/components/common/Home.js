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
              <div className="column is-half">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</h1>
                <div className="column">
                  <figure className="image is-200x200">
                    <img src="https://res.cloudinary.com/do68wjft3/image/upload/v1600211628/Pimps-1669_iewrbm.jpg" />
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
