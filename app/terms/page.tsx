export const metadata = {
  title: "Terms & Conditions",
  description: "Read our terms and conditions for using this platform",
};
export default function TermsPage() {
  return (
    <article className="prose max-w-none">
      <h1>Terms & Conditions</h1>
      <p>
        By accessing and using this application, you agree to comply with the
        following terms and conditions.
      </p>

      <h2>Usage</h2>
      <p>
        You may use this platform only for lawful purposes and in accordance
        with all applicable laws.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content, branding, and software are the property of the company and
        may not be reused without permission.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        We are not responsible for any damages resulting from the use of this
        application.
      </p>
    </article>
  );
}
