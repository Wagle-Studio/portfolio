import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__header">
        <h2 className="heading_2">Entrons en contact</h2>
        <div className="contact__header__subtitles">
          <p className="paragraph">Un premier contact ne vous engage à rien.</p>
          <p className="paragraph">
            Je serai ravi de répondre à vos questions et de vous orienter dans
            votre démarche.
          </p>
        </div>
      </div>
      <form className="contact__form">
        <div className="contact__form__fieldsets">
          <fieldset className="contact__form__fieldsets__item">
            <div className="contact__form__fieldsets__item__input">
              <label className="paragraph" htmlFor="name">
                Nom <span className="required">*</span>
              </label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="contact__form__fieldsets__item__input">
              <label className="paragraph" htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="contact__form__fieldsets__item__input">
              <label className="paragraph" htmlFor="phone">
                Téléphone <span className="required">*</span>
              </label>
              <input type="text" id="phone" name="phone" />
            </div>
          </fieldset>
          <fieldset className="contact__form__fieldsets__item">
            <div className="contact__form__fieldsets__item__input">
              <label className="paragraph" htmlFor="message">
                Votre message <span className="required">*</span>
              </label>
              <textarea name="message" id="message"></textarea>
            </div>
          </fieldset>
        </div>
        <button className="button">Discutons de votre projet</button>
      </form>
    </div>
  );
};

export default Contact;
