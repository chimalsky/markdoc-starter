import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

const items = [
  {
    title: 'DeFi Introduction',
    links: [
        {href: '/docs/Core-Concepts/Data-Messaging', children: 'Data Messaging'},
        {href: '/docs/Core-Concepts/Perpetual-Futures', children: "Perpetual Futures"},
        {href: '/docs/Core-Concepts/Margin-Trading', children: "Margin Trading"},
        {href: '/docs/Core-Concepts/Funding-Payments', children: "Funding Paymens"},
        {href: '/docs/Core-Concepts/Market-Makers', children: "Market Makers"},
    ],
  },
  {
    title: 'Project Introduction',
    links: [
        {href: '/docs/ATP', children: 'ATP'},
    ],
  },
  {
    title: 'Programs',
    links: [
        {href: '/docs/Programs/Simex', children: 'Matching Engine (SimEx)'},
        {href: '/docs/Programs/Risk-Manager', children: 'Risk Manager'}
    ],
  },
  {
    title: 'Development',
    links: [
        {href: '/', children: 'Setting up Local Env'},
        {href: '/', children: 'Running in debug mode'}
    ],
  },
];

export function SideNav() {
  const router = useRouter();

  return (
    <nav className="sidenav">
      {items.map((item) => (
        <div key={item.title}>
          <span>{item.title}</span>
          <ul className="flex column">
            {item.links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <li key={link.href} className={active ? 'active' : ''}>
                  <Link {...link}>
                    <a href={link.href}>{link.children}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <style jsx>
        {`
          nav {
            position: sticky;
            top: var(--top-nav-height);
            height: calc(100vh - var(--top-nav-height));
            flex: 0 0 auto;
            overflow-y: auto;
            padding: 2.5rem 2rem 2rem;
            border-right: 1px solid var(--border-color);
          }
          span {
            font-size: larger;
            font-weight: 500;
            padding: 0.5rem 0 0.5rem;
          }
          ul {
            padding: 0;
          }
          li {
            list-style: none;
            margin: 0 0 .2rem 0;
          }
          li a {
            text-decoration: none;
          }
          li a:hover,
          li.active > a {
            text-decoration: underline;
          }
        `}
      </style>
    </nav>
  );
}
