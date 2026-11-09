import "./docs-mention.scss";
import clsx from "clsx";
import { BookIcon } from "@/ui/components/icons";
import { useDocsMentionAnim } from "./useDocsMentionAnim";

const DOCS_URL = "https://documentations.wolff-kevin.fr/";

export const DocsMention = ({ className }: { className?: string }) => {
  const { asideRef } = useDocsMentionAnim();

  return (
    <aside
      className={clsx("docs-mention", className)}
      aria-label="Documentation personnelle"
      ref={asideRef}
    >
      <div className="docs-mention__inner">
        <BookIcon size="medium" className="docs-mention__icon" />
        <p className="docs-mention__text">
          Je tiens également une documentation technique personnelle, des notes
          et cours sur des sujets que j'explore en profondeur.{" "}
          <a
            href={DOCS_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="docs-mention__link"
          >
            La consulter
          </a>
        </p>
      </div>
    </aside>
  );
};
