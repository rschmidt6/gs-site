// src/components/InfoPage.jsx
import { FaInstagram } from "react-icons/fa";

export function InfoPage() {
  return (
    <div className="info-page">
      <div className="info-header">
        <div className="info-header-top">
          <a
            href="https://instagram.com/garden_sports"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="instagram-link"
          >
            <FaInstagram size={24} />
          </a>

          <button
            onClick={() =>
              window.open("https://substack.com/@turnipgarden", "_blank")
            }
            className="subscribe-button"
          >
            Subscribe to Newsletter
          </button>
        </div>

        <div className="info-header-bottom">
          <span className="email-text">garden.t.sports@gmail.com</span>
        </div>
      </div>

      <div className="info-sections">
        <section className="info-section">
          <h3>General</h3>
          <p>
            Hi, welcome to my site. If you have any questions not covered on
            this page feel free to email or dm me.
          </p>
          <p>
            My newsletter is through substack and is basically just for
            announcing new flash and books opening, which will probably be once
            every couple months. You can unsubscribe easily whenever you want.
          </p>
          <p>
            I'm trying to stay off ig a bit more right now so apologies if I
            don't post/respond to messages much.
          </p>
          <p>Located in a private space in Seattle, Green Lake area.</p>
        </section>
        <section className="info-section">
          <h3>Designs</h3>
          <p>
            All my available flash is on the "flash" tab. It's all repeatable,
            so you don't need to claim it.
          </p>
          <p>
            You can get multiple designs per appointment, I like to knock out a
            lot at once but please come prepared with placement ideas if you are
            getting 4 or more.
          </p>
          <p>
            I've been doing exclusively my own flash for several years, but I'm
            a little more open to customs right now as long as they feel very
            similar to my current style. Email me your idea and we'll figure it
            out. There will be an additional $50-100 drawing fee plus the normal
            flash prices below.
          </p>
          <p>
            Minor alterations to existing flash is fine, likely no extra charge.
          </p>
        </section>
        <section className="info-section">
          <h3>Pricing</h3>
          <p>My appointment minimum is $120</p>
          <p>Deposit is $60</p>
          <p>
            Price per flash ranges from $50-300, and depends on location as
            well. The average sized 2-2.5 inch piece will be around $120-160
            though.
          </p>
          <p>
            I can try to give you an estimate before the appointment if needed,
            just lmk!
          </p>
          <p>Tips not required, but appreciated.</p>
        </section>
        <section className="info-section">
          <h3>Booking</h3>
          <p>
            If you want to book you can go to the book tab and check
            availability.
          </p>
          <p>
            If there are no times available you can sign up for my newsletter
            where I will announce when new spots open.
          </p>
          <p>
            I don't always have a lot of time to tattoo so sometimes there are
            very few spots unfortunately.
          </p>
        </section>
      </div>

      <div className="about-section">
        <h3>About</h3>
        <div className="about-content">
          <div className="about-image">
            <img src="images/about_pic.png" alt="Artist photo" />
          </div>
          <div className="about-text">
            <p>
              I got into tattooing around 2019. I've centered my stylistic focus
              lately on folky designs. I particularly love delft tiles,
              scrimshaw art, needlework samplers, and alchemical references.
            </p>
            <p>
              I'm new to the PNW, I was in Austin for 7 years, and excited to
              explore the area.
            </p>
            <p>
              I like to chat during appointments so feel free to ask me anything
              else then!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
