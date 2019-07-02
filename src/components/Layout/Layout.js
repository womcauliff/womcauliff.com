// @flow
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import type { Node as ReactNode } from 'react';
import type { SiteMetaData } from '../../types';
import styles from './Layout.module.scss';

type Props = {
  children: ReactNode,
  title: string,
  description?: string,
}
export const PureLayout = (props: Props & { data: SiteMetaData }) => {
  const {
    children, title, description, data
  } = props;
  const { author, url: siteUrl } = data.site.siteMetadata;

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={siteUrl + author.photoLarge} />
      </Helmet>
      {children}
    </div>
  );
};

export const Layout = (props: Props) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            url
            title
            author {
              photoLarge
            }
          }
        }
      }
    `}
    render={(data) => <PureLayout {...props} data={data} />}
  />
);

export default Layout;