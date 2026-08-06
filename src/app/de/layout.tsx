export default function DeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        // Sets the html lang attribute for this locale subtree without a
        // request-time API (headers()/cookies() would force dynamic rendering
        // on every page: this site is fully static/SSG).
        dangerouslySetInnerHTML={{ __html: `document.documentElement.lang = "de";` }}
      />
      {children}
    </>
  );
}
