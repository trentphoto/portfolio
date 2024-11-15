import React from 'react';
import { IconType } from 'react-icons';

import clsxm from '@/lib/clsxm';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

const ButtonLinkVariant = [
  'primary',
  'grayscale',
  'ghost',
  'light',
  'dark',
] as const;

const ButtonLinkSize = ['sm', 'base'] as const;

type ButtonLinkProps = {
  isDarkBg?: boolean;
  variant?: (typeof ButtonLinkVariant)[number];
  size?: (typeof ButtonLinkSize)[number];
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & UnstyledLinkProps;

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  function ButtonLink (
    {
      children,
      className,
      variant = 'primary',
      size = 'base',
      isDarkBg = false,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      ...rest
    },
    ref
  ) {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'inline-flex items-center rounded-full font-fira uppercase text-center',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'shadow-sm',
          'transition-all duration-150 group',
          //#region  //*=========== Size ===========
          [
            size === 'base' && ['px-12 py-3', 'text-2xl md:text-2xl'],
            size === 'sm' && ['px-2 py-1', 'text-xs md:text-sm'],
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'bg-primary-50 text-primary-500',
              'hover:bg-primary-100',
              'active:bg-primary-100',
              'disabled:bg-primary-100',
            ],
            variant === 'grayscale' && [
              'bg-gray-100 text-gray-700',
              'hover:bg-primary-100 active:bg-primary-100 disabled:bg-gray-300',
              isDarkBg &&
                'hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800',
            ],
            variant === 'ghost' && [
              'text-primary-500',
              'shadow-none',
              'hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100',
              isDarkBg &&
                'hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800',
            ],
            variant === 'light' && [
              'bg-white text-gray-700',
              // 'border border-gray-300',
              'hover:bg-gray-100 hover:text-dark',
              'active:bg-white/80 disabled:bg-gray-200',
            ],
            variant === 'dark' && [
              'bg-gray-900 text-white',
              'border border-gray-700',
              'hover:bg-gray-800 active:bg-gray-700 disabled:bg-gray-700',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          className
        )}
      >
        {LeftIcon && (
          <div
            className={clsxm([
              size === 'base' && 'mr-3 -ml-2',
              size === 'sm' && 'mr-1.5',
            ])}
          >
            <LeftIcon
              className={clsxm(
                'transition-all duration-100 group-hover:text-primary-500 group-hover:scale-110',
                [
                  size === 'base' && 'md:text-3xl text-3xl',
                  size === 'sm' && 'md:text-md text-sm',
                ],
                leftIconClassName
              )}
            />
          </div>
        )}
        {children}
        {RightIcon && (
          <div
            className={clsxm([
              size === 'base' && 'ml-1',
              size === 'sm' && 'ml-1.5',
            ])}
          >
            <RightIcon
              className={clsxm(
                [
                  size === 'base' && 'text-md md:text-md',
                  size === 'sm' && 'md:text-md text-sm',
                ],
                rightIconClassName
              )}
            />
          </div>
        )}
      </UnstyledLink>
    );
  }
);

export default ButtonLink;
