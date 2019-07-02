// @flow
import type { Node as ReactNode } from 'react';

export type RenderCallback = (data: any) => ReactNode;

export type Entry = (string[]) => string;

export type WidgetFor = (string) => string;

export type PageContext = {
  tag: string,
  category: string,
  currentPage: number,
  prevPagePath: string,
  nextPagePath: string,
  hasPrevPage: boolean,
  hasNextPage: boolean
};

export type Node = {
  fields: {
    slug: string,
    categorySlug?: string,
    tagSlugs?: string[]
  },
  frontmatter: {
    date: string,
    description?: string,
    category?: string,
    tags?: string[],
    title: string,
  },
  html: string,
  id: string
};

export type Edge = {
  node: Node
};

export type Edges = Array<Edge>;

export type AllMarkdownRemark = {
  allMarkdownRemark: {
    edges: Edges,
  },
  group: {
    fieldValue: string,
    totalCount: number
  }[]
};

export type MarkdownRemark = Node;

export type SiteMetaData = {
  site: {
    siteMetadata: {
      author: {
        name: string,
        bio: string,
        photo: string,
        photoLarge: string,
        contacts: {
          email: string,
          twitter: string,
          github: string,
          rss: string,
        },
      },
      menu: {
        label: string,
        path: string,
      },
      url: string,
      title: string,
      subtitle: string,
      copyright: string,
      disqusShortname: string,
    }
  }
}
