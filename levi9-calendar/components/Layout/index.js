import { createContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './layout.module.css';
import { useMounted } from '../../hooks';

export const ThemeContext = createContext();

const Layout = (props) => {
  const mounted = useMounted();
  const router = useRouter();

  useEffect(() => {
    console.log(mounted());
  }, [mounted]);

  return (
    <ThemeContext.Provider value="light">
      <div>
        <header className={styles.title}>
            January 2022
        </header>
        <div>{props.children}</div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
