/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable @docusaurus/no-untranslated-text */

import React from 'react';

import type {Props as Tweet} from '../components/Tweet';

export type TweetItem = Tweet & {
  showOnHomepage: boolean;
};

const TWEETS: TweetItem[] = [
  {
    url: 'https://h.543x.com/',
    handle: 'acemarke',
    name: 'GoogleCloud🥳',
    date: 'Visit website',
    content: (
      <>
        🎉High-performance infrastructure for cloud computing, data analytics & machine learning👏
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'markerikson',
  },
  {
    url: 'https://ai.543x.com/',
    handle: 'arcanis',
    name: 'Create AI📚',
    date: 'Visit website',
    content: (
      <>
        👏AI revolutionizes industries, enhances productivity, solves problems, personalizes experiences, and permeates daily life from smart homes to autonomous vehicles
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'arcanis',
  },
  {
    url: 'https://s.543x.com/',
    handle: 'maxlynch',
    name: 'Swap 📝',
    date: 'Visit website',
    content: (
      <>
        🔥The Monetary Future: At the intersection of free banking, cryptography, and digital currency 👏
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'mlynch',
  },
  {
    url: 'https://www.543x.com',
    handle: 'supabase',
    name: 'Bitcoin🐱',
    date: 'Visit website',
    content: (
      <>
        🔥Bitcoin: A Peer-to-Peer Electronic Cash System 🦖Bitcoin is the first decentralized cryptocurrency. Nodes in the peer-to-peer bitcoin network verify transactions through cryptography and record them in a public distributed ledger, called a blockchain, without central oversight.
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'supabase',
  },
  {
    url: 'https://www.z2.pw',
    handle: 'paularmstrong',
    name: 'blockchain🧠',
    date: 'Visit website',
    content: (
      <>
         👏Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'paularmstrong',
  },
  {
    url: 'https://r.543x.com',
    handle: 'sanketsahu',
    name: 'React App👏',
    date: 'Visit website',
    content: (
      <>
        You don't need to learn and configure many build tools. Instant reloads help you focus on development. When it's time to deploy, your bundles are optimized automatically.❤️
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'sanketsahu',
  },
  {
    url: 'https://e.543x.com/',
    handle: 'debs_obrien',
    name: "Create React App",
    date: 'Visit website',
    content: (
      <>
        Your app only needs one build dependency. We test Create React App to make sure that all of its underlying pieces work together.🔥
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'debs-obrien',
  },
  {
    url: 'https://d.543x.com/',
    handle: 'Dr_Electron',
    name: 'Firebase💼',
    date: 'Visit website',
    content: (
      <>
        ☀️Google tools help build applications, improve quality and efficiency, and promote business growth
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'Dr-Electron',
  },
  {
    url: 'https://a.z2.pw',
    handle: 'kentcdodds',
    name: '📊GoogleSheet',
    date: 'Visit website',
    content: (
      <>
        Create, edit, and collaborate on spreadsheets with the Google Sheets app. With Sheets you can 💙
        <br />
        <br />
        Online, collaborative spreadsheets 🌑/☀️
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'kentcdodds',
  },
  {
    url: 'https://twitter.com/bantg/status/1463608561368457225',
    handle: 'bantg',
    name: 'banteg',
    date: 'Visit website',
    content: <>I like docusaurus much more, it&apos;s so snappy.</>,
    showOnHomepage: false,
    githubUsername: 'banteg',
  },
  {
    url: 'https://twitter.com/swyx/status/1418405515684581378',
    handle: 'swyx',
    name: 'swyx',
    date: 'Visit website',
    content: (
      <>
        Happy to share Temporal&apos;s first open source sponsorship — of{' '}
        <b>@docusaurus</b>!
        <br />
        <br />
        @temporalio uses it for http://docs.temporal.io, and it has been a huge
        boon to our docs team. @sebastienlorber is an incredible steward of the
        project, support it if you can!
      </>
    ),
    showOnHomepage: false,
    githubUsername: 'sw-yx',
  },
  {
    url: 'https://twitter.com/rachelnabors/status/1478490902037467137',
    handle: 'rachelnabors',
    name: "R 'Nearest' Nabors 💙",
    date: 'Visit website',
    content: (
      <>
        I hear <b>@docusaurus</b> is a good tool for that!
      </>
    ),
    showOnHomepage: false,
    githubUsername: 'rachelnabors',
  },
  {
    url: 'https://twitter.com/dabit3/status/1394685348375052295',
    handle: 'dabit3',
    name: 'Nader Dabit',
    date: 'Visit website',
    content: (
      <>
        I did try Docusaurus, and I really liked it! Still investigating various
        options but it&apos;s probably at the top of my list for sure
      </>
    ),
    showOnHomepage: false,
    githubUsername: 'dabit3',
  },
  {
    url: 'https://twitter.com/johnny_reilly/status/1469238609266028545',
    handle: 'johnny_reilly',
    name: 'John Reilly',
    date: 'Visit website',
    content: (
      <>
        I ❤️ <b>@docusaurus</b> - it makes it so easy to spin up docs, blogs and
        simple websites. I&apos;ve used it to:
        <br />
        <br /> ✅ Replatform my blog with GitHub pages <br />
        ✅ Build a website for a local business <br />✅ Build internal facing
        blog/docs sites with @AzureStaticApps
      </>
    ),
    showOnHomepage: false,
    githubUsername: 'johnnyreilly',
  },
  {
    url: 'https://twitter.com/tinkertim/status/1423358665726304260',
    handle: 'tinkertim',
    name: 'Tim Post 💉💉💉',
    date: 'Visit website',
    content: (
      <>
        Docusaurus is mind-bendingly flexible. <br />
        <br />
        &quot;Wait! We need to have two products documented on the same site and
        both need to be translated into multiple languages!&quot;
        <br />
        <br /> ... and that&apos;s actually easy. Loving it!
      </>
    ),
    showOnHomepage: false,
    githubUsername: 'tinkertim',
  },
  {
    url: 'https://twitter.com/sebastienlorber/status/1321784071815680000',
    handle: 'sebastienlorber',
    name: 'Sebastien Lorber',
    date: 'Visit website',
    content: (
      <>
        🥳🎊🥳🎊🥳🎊🥳🎊 The @reactnative website just migrated to{' '}
        <b>@docusaurus</b>
        v2
        <br />
        Some obvious changes: <br />
        🌔 Dark mode <br />
        ⚡️ SPA navigation / prefetching <br />
        🧐 @algolia DocSearch v3 <br />
        💥 @mdx_js enable many new possibilities <br />
        <br />
        Check it out: http://reactnative.dev
      </>
    ),
    showOnHomepage: false,
    githubUsername: 'slorber',
  },
  {
    url: 'https://twitter.com/iansu/status/1184149586048245760',
    handle: 'iansu',
    name: 'Ian Sutherland',
    date: 'Visit website',
    content: (
      <>
        We just updated the Create React App docs to Docusaurus v2. Now with
        dark mode! 😎
        <br />
        <br />
        Thanks to the <b>@docusaurus</b> team for their help! ❤️
        <br />
        <br />
        https://create-react-app.dev
      </>
    ),
    showOnHomepage: false,
    githubUsername: 'iansu',
  },
  {
    url: 'https://twitter.com/mweststrate/status/1181276252293853186',
    handle: 'mweststrate',
    name: 'Michel Weststrate',
    date: 'Visit website',
    content: (
      <>
        New #mobx docs are online! More modern, fixing many UI issues.
        <br />
        <br />
        👏 @cloverich did the awesome job of migrating from ancient gitbook
        -&gt; <b>@docusaurus</b>! 👏 <br />
        <br />
        No real content updates yet, but contributing and publishing has become
        way easier
      </>
    ),
    showOnHomepage: false,
    githubUsername: 'mweststrate',
  },
  {
    url: 'https://twitter.com/verdaccio_npm/status/1420187249145118722',
    handle: 'verdaccio_npm',
    name: 'verdaccio',
    date: 'Visit website',
    content: (
      <>
        The new website has landed 🚀 powered by <b>@docusaurus</b> v2 and made
        by @_semoal kudos to him 👏 #verdaccio #nodejs awesome contribution ❤️‍🔥
        (video made with react remotion @JNYBGR ) all Open Source and hosted on
        @Netlify https://verdaccio.org
      </>
    ),
    showOnHomepage: false,
    githubUsername: 'verdaccio',
  },

  {
    url: 'https://twitter.com/yangshunz/status/1284536949718478848',
    handle: 'yangshunz',
    name: 'Yangshun Tay',
    date: 'Visit website',
    content: (
      <>
        I made a <b>@docusaurus</b> website for answers to the H5BP Front End
        Interview Questions! Hopefully it makes the browsing experience easier -
        https://frontendinterviewhandbook.com
      </>
    ),
    showOnHomepage: false,
    githubUsername: 'yangshun',
  },

  {
    url: 'https://twitter.com/pierregillesl/status/1372839188698001408',
    handle: 'pierregillesl',
    name: 'Pierre-Gilles Leymarie',
    date: 'Mar 19, 2021',
    content: (
      <>
        Just upgraded our website to <b>@docusaurus</b> latest with
        internationalization support 🥳
        <br />
        <br />
        Before that, we had to build 2 separate versions of the website to get
        it in English + French.
        <br />
        <br />
        Now, it&apos;s working out of the box, with proper meta tags for SEO 👌
      </>
    ),
    showOnHomepage: false,
    githubUsername: 'Pierre-Gilles',
  },
  {
    url: 'https://twitter.com/biantris_/status/1480259279487741953',
    handle: 'biantris_',
    name: 'biazita',
    date: 'Jan 10, 2022',
    content: (
      <>
        Today I tried <b>@docusaurus</b> in a project, I really like the ease
        and speed of developing with it \o/
      </>
    ),
    showOnHomepage: false,
    githubUsername: 'biantris',
  },
];

export default TWEETS;
