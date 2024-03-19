import React, { lazy, Suspense } from 'react';
import { Layout } from '../../common/Layout';
import { useGetWidthSize } from '../../hooks/useGetWidthSize';

const HamburgerMenu = lazy(() => import('./Hamburger/HamburgerMenu'));
const SmallLogoCantera = lazy(() =>
  import('../../../assets/svgs/SmallLogoCantera')
);

const Navbar = lazy(() => import('./Navbar'));
const LogoCantera = lazy(() => import('../../../assets/svgs/LogoCantera'));

const Header = () => {
  const isMobile = useGetWidthSize(768);
  const Icon = isMobile ? SmallLogoCantera : LogoCantera;

  return (
    <Layout className="pt-5 pb-9 bg-pure_white">
      <header className="size-section flex min-h-9 justify-between items-center">
        <figure className="flex items-center h-full">
          <Suspense fallback={<div>Icon..</div>}>
            <Icon
              section={'header'}
              alt={'Logo Cantera.'}
              aria-describedby="description-svg"
            />
          </Suspense>
          <figcaption id="description-svg" className="sr-only">
            Logo: Cantera Software.
          </figcaption>
        </figure>
        <Suspense fallback={<div>Cargando...</div>}>
          {isMobile ? <HamburgerMenu /> : <Navbar />}
        </Suspense>
      </header>
    </Layout>
  );
};

export { Header };
