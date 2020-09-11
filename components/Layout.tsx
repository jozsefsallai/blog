import Header from './the-header/Header';
import Footer from './the-footer/Footer';
import ColorModeSwitcher from './color-mode-switcher/ColorModeSwitcher';

const Layout = ({ children, categories }) => {
  return (
    <main className="page">
      <Header categories={categories} />

      {children}

      <ColorModeSwitcher />

      <Footer />
    </main>
  );
};

export default Layout;
