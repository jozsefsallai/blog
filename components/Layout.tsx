import Header from './the-header/Header';
import Footer from './the-footer/Footer';
import ColorModeSwitcher from './color-mode-switcher/ColorModeSwitcher';

const Layout = (props) => {
  return (
    <main className="page">
      <Header categories={props.categories} />

      {props.children}

      <ColorModeSwitcher />

      <Footer />
    </main>
  );
};

export default Layout;
