import "./Contact.scss";
import { contactData } from "../../data/contact";

const Contact = () => {
  return (
    <section className="contact" aria-labelledby="contact-title">
      <header className="contact__header">
        <h2 id="contact-title" className="heading_2">{contactData.title}</h2>
        <div className="contact__header__subtitles">
          {contactData.subtitles.map((subtitle, index) => (
            <p key={index} className="paragraph">{subtitle}</p>
          ))}
        </div>
      </header>
      <form className="contact__form" aria-label="Formulaire de contact">
        <div className="contact__form__fieldsets">
          <fieldset className="contact__form__fieldsets__item" aria-label="Informations personnelles">
            {contactData.form.fields.slice(0, 3).map((field) => (
              <div key={field.id} className="contact__form__fieldsets__item__input">
                <label className="paragraph" htmlFor={field.id}>
                  {field.label} {field.required && <span className="required">*</span>}
                </label>
                <input 
                  type={field.type} 
                  id={field.id} 
                  name={field.name}
                  required={field.required}
                  aria-required={field.required}
                />
              </div>
            ))}
          </fieldset>
          <fieldset className="contact__form__fieldsets__item" aria-label="Message">
            {contactData.form.fields.slice(3).map((field) => (
              <div key={field.id} className="contact__form__fieldsets__item__input">
                <label className="paragraph" htmlFor={field.id}>
                  {field.label} {field.required && <span className="required">*</span>}
                </label>
                <textarea 
                  id={field.id} 
                  name={field.name}
                  required={field.required}
                  aria-required={field.required}
                />
              </div>
            ))}
          </fieldset>
        </div>
        <button className="button" type="submit">{contactData.form.submitButton.text}</button>
      </form>
    </section>
  );
};

export default Contact;
