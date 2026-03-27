"use client";

import { openContactEmail } from "utils/contact";

type HeroCollaborateButtonProps = {
  className: string;
};

export const HeroCollaborateButton = ({ className }: HeroCollaborateButtonProps) => {
  return (
    <button type="button" className={className} onClick={openContactEmail}>
      Let&apos;s Collaborate
    </button>
  );
};
