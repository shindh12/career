import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            경력 기술서 보기 📄
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Backend Engineer Portfolio - Scalable Systems, Architecture, MSA">
      <HomepageHeader />
      <main>
        <div className="container padding-vert--xl text--center">
            <h2>안녕하세요! 👋</h2>
            <p>
                대규모 트래픽 환경에서 시스템의 품질을 중심으로 개발해온 백엔드 엔지니어입니다.<br />
                이곳에서 실제 운영 환경에서 문제들과 이를 어떻게 풀어냈는지 확인하실 수 있습니다.
            </p>
        </div>
      </main>
    </Layout>
  );
}
