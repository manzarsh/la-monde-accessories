export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div>
          <div className="footerBrand">La Monde accessories</div>
          <div className="muted">Handmade statement pieces • Made with love</div>
        </div>
        <div className="muted">© {new Date().getFullYear()} La Monde. All rights reserved.</div>
      </div>
    </footer>
  );
}