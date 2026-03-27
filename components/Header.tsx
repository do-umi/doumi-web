'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef, useCallback, type MouseEvent } from 'react';
import LanguageSelect from './LanguageSelect';
import { useI18n } from './I18nProvider';
import {
  GUIDE_FIRST_HREF,
  GUIDE_NAV,
  TERMS_FIRST_HREF,
  TERMS_NAV,
} from '@/lib/site-nav';

type DropdownId = 'guide' | 'terms' | null;

function Chevron({ open }: { open?: boolean }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MobileDrawerChevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-[#333] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Header() {
  const { t } = useI18n();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileGuideOpen, setMobileGuideOpen] = useState(false);
  const [mobileTermsOpen, setMobileTermsOpen] = useState(false);

  /* ── desktop dropdown state (only one at a time) ── */
  const [openDropdown, setOpenDropdown] = useState<DropdownId>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLUListElement>(null);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const handleDropdownEnter = useCallback(
    (id: DropdownId) => {
      cancelClose();
      setOpenDropdown(id);
    },
    [cancelClose],
  );

  const handleDropdownLeave = useCallback(() => {
    scheduleClose();
  }, [scheduleClose]);

  /* close desktop dropdown on outside click */
  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (navRef.current?.contains(e.target as Node)) return;
      setOpenDropdown(null);
    }
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      setMobileGuideOpen(false);
      setMobileTermsOpen(false);
      return;
    }
    setMobileGuideOpen(pathname.startsWith('/guide'));
    setMobileTermsOpen(pathname.startsWith('/terms'));
  }, [menuOpen, pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleDownloadNav = (e: MouseEvent<HTMLAnchorElement>) => {
    closeMenu();
    if (pathname === '/') {
      e.preventDefault();
      document
        .getElementById('download')
        ?.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', '/#download');
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-2 sm:gap-3 sm:px-6 sm:py-2.5 lg:px-8">
        <div className="flex min-w-0 flex-1 items-center justify-start">
          <Link href="/" className="flex shrink-0 items-center" onClick={closeMenu}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/doumi.svg"
              alt={t('logo_alt')}
              width={60}
              height={44}
              className="block h-8 w-auto shrink-0 object-contain sm:h-8"
            />
          </Link>
        </div>

        {/* ── Desktop nav ── */}
        <div className="hidden min-w-0 flex-1 items-center justify-center md:flex">
          <ul
            ref={navRef}
            className="relative flex items-center gap-6 whitespace-nowrap lg:gap-8"
          >
            <li>
              <Link
                href="/about"
                className="text-sm text-[#333333] transition hover:text-black lg:text-base"
              >
                {t('nav_about')}
              </Link>
            </li>

            {/* Guide dropdown */}
            <li
              className="relative"
              onMouseEnter={() => handleDropdownEnter('guide')}
              onMouseLeave={handleDropdownLeave}
            >
              <Link
                href={GUIDE_FIRST_HREF}
                className="flex items-center gap-1 text-sm text-[#333333] transition hover:text-black lg:text-base"
                onFocus={() => handleDropdownEnter('guide')}
              >
                {t('nav_guide')}
                <Chevron open={openDropdown === 'guide'} />
              </Link>
              <div
                className={`absolute left-1/2 top-full z-[120] w-[min(22rem,calc(100vw-2rem))] -translate-x-1/2 pt-2 transition-opacity duration-150 ${
                  openDropdown === 'guide'
                    ? 'pointer-events-auto opacity-100'
                    : 'pointer-events-none opacity-0'
                }`}
                role="menu"
                aria-label={t('nav_guide')}
              >
                <div className="rounded-lg border border-gray-200 bg-[#f7f7f7] p-5 shadow-lg">
                  <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                    {GUIDE_NAV.map(({ slug, msg }) => (
                      <Link
                        key={slug}
                        href={`/guide/${slug}`}
                        role="menuitem"
                        className="text-sm text-[#222] transition hover:text-black hover:underline"
                      >
                        {t(msg)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            {/* Terms dropdown */}
            <li
              className="relative"
              onMouseEnter={() => handleDropdownEnter('terms')}
              onMouseLeave={handleDropdownLeave}
            >
              <Link
                href={TERMS_FIRST_HREF}
                className="flex items-center gap-1 text-sm text-[#333333] transition hover:text-black lg:text-base"
                onFocus={() => handleDropdownEnter('terms')}
              >
                {t('nav_terms')}
                <Chevron open={openDropdown === 'terms'} />
              </Link>
              <div
                className={`absolute left-1/2 top-full z-[120] w-[min(22rem,calc(100vw-2rem))] -translate-x-1/2 pt-2 transition-opacity duration-150 ${
                  openDropdown === 'terms'
                    ? 'pointer-events-auto opacity-100'
                    : 'pointer-events-none opacity-0'
                }`}
                role="menu"
                aria-label={t('nav_terms')}
              >
                <div className="rounded-lg border border-gray-200 bg-[#f7f7f7] p-5 shadow-lg">
                  <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                    {TERMS_NAV.map(({ slug, msg }) => (
                      <Link
                        key={slug}
                        href={`/terms/${slug}`}
                        role="menuitem"
                        className="text-sm text-[#222] transition hover:text-black hover:underline"
                      >
                        {t(msg)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-1.5 sm:gap-2.5">
          <div className="hidden items-center gap-1.5 sm:gap-2.5 md:flex">
            <LanguageSelect />
            <Link
              href="/#download"
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault();
                  document
                    .getElementById('download')
                    ?.scrollIntoView({ behavior: 'smooth' });
                  window.history.replaceState(null, '', '/#download');
                }
              }}
              className="inline-flex min-h-9 shrink-0 items-center justify-center whitespace-nowrap rounded-md bg-[#333333] px-3 py-2 text-center text-sm font-medium text-white transition hover:bg-black sm:min-h-10 sm:px-5 sm:text-[15px]"
            >
              {t('nav_download')}
            </Link>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2.5 md:hidden">
            <LanguageSelect />
            <button
              type="button"
              className="inline-flex min-h-9 shrink-0 items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-2 text-[#333333] transition hover:border-gray-300 hover:bg-gray-50 sm:min-h-10 sm:px-5"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="mobile-drawer"
              aria-label={t('menu_open_sr')}
            >
              <svg
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      {menuOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[100] bg-black/40 md:hidden"
            aria-label={t('menu_close_sr')}
            onClick={closeMenu}
          />
          <div
            id="mobile-drawer"
            className="fixed bottom-0 right-0 top-0 z-[110] flex w-[min(100vw,20rem)] flex-col border-l border-gray-200 bg-white shadow-2xl md:hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
              <span
                id="mobile-menu-title"
                className="text-lg font-semibold text-[#111]"
              >
                {t('menu_heading')}
              </span>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-md text-[#333] hover:bg-gray-100"
                onClick={closeMenu}
                aria-label={t('menu_close_sr')}
              >
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  aria-hidden
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-2 overflow-y-auto p-4">
              <Link
                href="/about"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3.5 text-base font-medium text-[#333] transition hover:bg-gray-50"
              >
                {t('nav_about')}
              </Link>

              <div className="overflow-hidden rounded-lg border border-gray-100 bg-gray-50/80">
                <div className="flex items-stretch">
                  <Link
                    id="mobile-drawer-guide-label"
                    href={GUIDE_FIRST_HREF}
                    onClick={closeMenu}
                    className="flex min-h-12 flex-1 items-center px-3 text-base font-medium text-[#333] transition hover:bg-gray-100/80"
                  >
                    {t('nav_guide')}
                  </Link>
                  <button
                    type="button"
                    className="flex w-12 shrink-0 items-center justify-center border-l border-gray-100 text-[#333] transition hover:bg-gray-100/80"
                    aria-expanded={mobileGuideOpen}
                    aria-controls="mobile-drawer-guide-sub"
                    aria-labelledby="mobile-drawer-guide-label"
                    onClick={() => setMobileGuideOpen((o) => !o)}
                  >
                    <MobileDrawerChevron open={mobileGuideOpen} />
                  </button>
                </div>
                {mobileGuideOpen ? (
                  <ul
                    id="mobile-drawer-guide-sub"
                    className="space-y-0 border-t border-gray-100 bg-white py-1"
                  >
                    {GUIDE_NAV.map(({ slug, msg }) => (
                      <li key={slug}>
                        <Link
                          href={`/guide/${slug}`}
                          onClick={closeMenu}
                          className="block px-4 py-2.5 pl-5 text-[15px] text-[#444] transition hover:bg-gray-50 hover:text-black"
                        >
                          {t(msg)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <div className="overflow-hidden rounded-lg border border-gray-100 bg-gray-50/80">
                <div className="flex items-stretch">
                  <Link
                    id="mobile-drawer-terms-label"
                    href={TERMS_FIRST_HREF}
                    onClick={closeMenu}
                    className="flex min-h-12 flex-1 items-center px-3 text-base font-medium text-[#333] transition hover:bg-gray-100/80"
                  >
                    {t('nav_terms')}
                  </Link>
                  <button
                    type="button"
                    className="flex w-12 shrink-0 items-center justify-center border-l border-gray-100 text-[#333] transition hover:bg-gray-100/80"
                    aria-expanded={mobileTermsOpen}
                    aria-controls="mobile-drawer-terms-sub"
                    aria-labelledby="mobile-drawer-terms-label"
                    onClick={() => setMobileTermsOpen((o) => !o)}
                  >
                    <MobileDrawerChevron open={mobileTermsOpen} />
                  </button>
                </div>
                {mobileTermsOpen ? (
                  <ul
                    id="mobile-drawer-terms-sub"
                    className="space-y-0 border-t border-gray-100 bg-white py-1"
                  >
                    {TERMS_NAV.map(({ slug, msg }) => (
                      <li key={slug}>
                        <Link
                          href={`/terms/${slug}`}
                          onClick={closeMenu}
                          className="block px-4 py-2.5 pl-5 text-[15px] text-[#444] transition hover:bg-gray-50 hover:text-black"
                        >
                          {t(msg)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <Link
                href="/#download"
                onClick={handleDownloadNav}
                className="rounded-lg px-3 py-3.5 text-base font-medium text-[#333] transition hover:bg-gray-50"
              >
                {t('nav_download')}
              </Link>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
