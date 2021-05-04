import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';

export default function PageLink({ href, title }) {
  
  const router = useRouter();

  function getPageLink(pageName) {
    const isActive = router.pathname === pageName;
    return classnames(
      'inline-block px-4 py-1 mr-1.5 rounded-lg hover:text-white hover:bg-gray-900 focus:outline-none',
      {
        'text-white bg-blue-500': isActive,
        'text-blue-500 bg-white': !isActive
      }
    );
  }
  return (
    <Link href={href}>
      <a className={getPageLink(href)}>{title}</a>
    </Link>
  );
}