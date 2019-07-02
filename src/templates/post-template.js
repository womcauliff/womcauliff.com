import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { useSiteMetadata } from '../hooks';
import type { MarkdownRemark } from '../types';

type Props = {
  data: MarkdownRemark
};

const PostTemplate = ({ data }: Props) => {
  const { subtitle: siteSubtitle, author, url: siteUrl } = useSiteMetadata();
  const {
    title: postTitle,
    description: postDescription,
    img: postImageUrl
  } = data.markdownRemark.frontmatter;

  const { slug: postSlug } = data.markdownRemark.fields;

  const metaImage = postImageUrl !== null ? postImageUrl : (siteUrl + author.photoLarge);
  const metaDescription = postDescription !== null ? postDescription : siteSubtitle;

  return (
    <Layout title={postTitle} description={metaDescription}>
      <Helmet>
        <meta property="og:url" content={siteUrl + postSlug} />
        {postImageUrl && <meta property="og:image" content={metaImage} />}
      </Helmet>
      <Post post={data.markdownRemark} />
    </Layout>
  );
};


export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        img
        tags
        title
        subtitle
      }
    }
  }
`;


export default PostTemplate;
