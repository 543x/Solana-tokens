/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export type FeatureItem = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  text: JSX.Element;
};

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      message: 'Mass Adoption Fast',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/undraw_typewriter.svg',
      width: 1009.54,
      height: 717.96,
    },
    text: (
      <Translate id="homepage.features.powered-by-mdx.text">
        Don’t keep your users waiting. Solana has block times of 400 milliseconds — and as hardware gets faster, so will the network.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Mass Adoption Scalable',
      id: 'homepage.features.built-using-react.title',
    }),
    image: {
      src: '/img/undraw_react.svg',
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
        Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.0025.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Decentralized',
      id: 'homepage.features.ready-for-translations.title',
    }),
    image: {
      src: '/img/undraw_around_the_world.svg',
      width: 1137,
      height: 776.59,
    },
    text: (
      <Translate id="homepage.features.ready-for-translations.text">
        The Solana network is validated by thousands of nodes that operate independently of each other, ensuring your data remains secure and censorship resistant.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Energy Efficient',
      id: 'homepage.features.document-versioning.title',
    }),
    image: {
      src: '/img/undraw_version_control.svg',
      width: 1038.23,
      height: 693.31,
    },
    text: (
      <Translate id="homepage.features.document-versioning.text">
        Solana’s proof of stake network and other innovations minimize its impact on the environment. Each Solana transaction uses about the same energy as a few Google searches.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Build for growth',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/undraw_algolia.svg',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
        Solana Pay is now available to millions of businesses as an approved app integration on Shopify. Solana Pay is built for immediate USDC transactions, fees that are fractions of a penny, and a net-zero environmental impact.
      </Translate>
    ),
  },
];

export default FEATURES;
