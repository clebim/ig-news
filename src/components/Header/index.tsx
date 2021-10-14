import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';

export const Header = () => {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo.svg" alt="" />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a className={styles.active}>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
};