import "./Contact.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contactData } from "./../../data/contact";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const form = useRef<HTMLDivElement>(null);
  const CTARef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (form.current) {
      gsap.fromTo(
        form.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: form.current,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (CTARef.current) {
      gsap.fromTo(
        CTARef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: CTARef.current,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <header className="contact__header">
        <h2 id="contact-title" className="heading_2">
          {contactData.title}
        </h2>
        <div className="contact__header__subtitles">
          {contactData.subtitles.map((subtitle, index) => (
            <p key={index} className="paragraph">
              {subtitle}
            </p>
          ))}
        </div>
      </header>
      <form className="contact__form" aria-label="Formulaire de contact">
        <div ref={form} className="contact__form__fieldsets">
          <fieldset
            className="contact__form__fieldsets__item"
            aria-labelledby="personal-info-legend"
          >
            {contactData.form.fields.slice(0, 3).map((field) => (
              <div
                key={field.id}
                className="contact__form__fieldsets__item__input"
              >
                <label className="paragraph" htmlFor={field.id}>
                  {field.label}{" "}
                  {field.required && <span className="required">*</span>}
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
          <fieldset
            className="contact__form__fieldsets__item"
            aria-labelledby="message-legend"
          >
            {contactData.form.fields.slice(3).map((field) => (
              <div
                key={field.id}
                className="contact__form__fieldsets__item__input"
              >
                <label className="paragraph" htmlFor={field.id}>
                  {field.label}{" "}
                  {field.required && <span className="required">*</span>}
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
        <button ref={CTARef} className="button" type="submit">
          {contactData.form.submitButton.text}
        </button>
      </form>
    </section>
  );
};

export default Contact;
