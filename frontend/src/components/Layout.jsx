export default function Layout({ children }) {
  return (
    <div>
      <header className="navbar">Guardian Lens AI</header>
      <main>{children}</main>
    </div>
  );
}
