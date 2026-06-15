import "./Header.css";

export default function Header({ title, subtitle, children }) {
  return (
    <>
      <div className="header-intro">
        <div>
          <h1 className="heading">{title}</h1>
          {subtitle && <p className="heading-subtext">{subtitle}</p>}
        </div>
        {children}
      </div>
    </>
  );
}
