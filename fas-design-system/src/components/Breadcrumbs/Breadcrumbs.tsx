/**
 * Breadcrumbs — FAS Design Kit
 * @see ../../components.md § Breadcrumbs
 */
import React from 'react';

export interface BreadcrumbItem {
  label: string;
  /** 有 href 或 onClick 時渲染為可點擊連結，否則為純文字（current） */
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /** 分隔符號，預設 chevron_right */
  separator?: React.ReactNode;
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator = '›',
  className,
}) => {
  return (
    <nav aria-label="Breadcrumb" className={['fas-breadcrumbs', className].filter(Boolean).join(' ')}>
      <ol className="fas-breadcrumbs__list">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          const isLink = !isLast && (item.href || item.onClick);

          return (
            <li key={idx} className="fas-breadcrumbs__item">
              {isLink ? (
                item.href ? (
                  <a href={item.href} className="fas-breadcrumbs__link">
                    {item.label}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={item.onClick}
                    className="fas-breadcrumbs__link fas-breadcrumbs__link--btn"
                  >
                    {item.label}
                  </button>
                )
              ) : (
                <span
                  className="fas-breadcrumbs__current"
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span className="fas-breadcrumbs__sep" aria-hidden>
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
