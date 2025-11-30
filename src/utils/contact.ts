export const CONTACT_EMAIL = "ovakwubo@gmail.com";

export const openContactEmail = () => {
  const subject = encodeURIComponent("Collaboration Opportunity");
  const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${subject}`;
  window.location.href = mailtoLink;
};

