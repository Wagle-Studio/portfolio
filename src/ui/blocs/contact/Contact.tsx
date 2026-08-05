import { SectionTitle } from "@/ui/components/section-title/SectionTitle";
import "./contact.scss";
import { ButtonLink } from "@/ui/components/button-link/ButtonLink";
import { ExternUrlIcon } from "@/ui/components/icons";
import { useContactAnim } from "./useContactAnim";

const LINKEDIN_URL = "https://www.linkedin.com/in/wolff-kevin/";
const EMAIL = "wolff.kevin@protonmail.com";

export const Contact = () => {
  const { sectionRef } = useContactAnim();

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <SectionTitle index={4} title="Contact" />
      <div className="contact__card">
        <div className="contact__content">
          <p className="paragraph contact__intro">
            Vous recrutez en alternance pour une spécialisation ingénierie des données ?
          </p>
          <p className="paragraph contact__intro">
            Discutons de ce que je peux apporter à votre équipe dès la rentrée 2026.
          </p>
        </div>
        <div className="contact__actions">
          <ButtonLink
            href={LINKEDIN_URL}
            target="_blank"
            className="contact__action"
            iconSide="right"
          >
            Me contacter sur Linkedin <ExternUrlIcon />
          </ButtonLink>
          <ButtonLink
            href={`mailto:${EMAIL}`}
            variant="ghost"
            className="contact__action contact__action--mail"
          >
            Envoyer un email
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};
