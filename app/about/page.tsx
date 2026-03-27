'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useI18n } from '@/components/I18nProvider';
import type { MessageKey } from '@/lib/i18n-messages';

/* ── Team data ── */
const TEAM: {
  nameKey: MessageKey;
  roleKey: MessageKey;
  photo: string;
  initials: string;
  color: string;
}[] = [
  {
    nameKey: 'team_donggeon_name',
    roleKey: 'team_donggeon_role',
    photo: '/images/team/donggeon.jpg',
    initials: 'DG',
    color: 'bg-[#0103C8]',
  },
  {
    nameKey: 'team_yunho_name',
    roleKey: 'team_yunho_role',
    photo: '/images/team/yunho.jpg',
    initials: 'YH',
    color: 'bg-[#1e3a5f]',
  },
  {
    nameKey: 'team_suha_name',
    roleKey: 'team_suha_role',
    photo: '/images/team/suha.jpg',
    initials: 'SA',
    color: 'bg-[#333333]',
  },
];

/* ── Avatar with fallback ── */
function TeamAvatar({
  src,
  initials,
  color,
  alt,
}: {
  src: string;
  initials: string;
  color: string;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex h-28 w-28 items-center justify-center rounded-full ${color} text-2xl font-bold text-white sm:h-32 sm:w-32`}
        aria-label={alt}
      >
        {initials}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={128}
      height={128}
      className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
      onError={() => setFailed(true)}
    />
  );
}

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 pb-20 md:py-14">
      <Link
        href="/"
        className="text-sm font-medium text-gray-500 transition hover:text-black"
      >
        ← {t('logo_alt')}
      </Link>

      <h1 className="mt-6 text-3xl font-bold text-[#111] sm:text-4xl">
        {t('nav_about')}
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-[#333]">
        {t('about_intro')}
      </p>

      {/* Mission */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-[#111] sm:text-2xl">
          {t('about_mission_title')}
        </h2>
        <p className="mt-4 leading-relaxed text-[#333]">
          {t('about_mission_body')}
        </p>
      </section>

      {/* How it works */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-[#111] sm:text-2xl">
          {t('about_how_title')}
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {(['about_step1', 'about_step2', 'about_step3'] as const).map(
            (key, i) => (
              <div
                key={key}
                className="rounded-xl border border-gray-200 bg-gray-50 p-5"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0103C8] text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="mt-3 text-[15px] leading-relaxed text-[#333]">
                  {t(key)}
                </p>
              </div>
            ),
          )}
        </div>
      </section>

      {/* SDG */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-[#111] sm:text-2xl">
          {t('about_sdg_title')}
        </h2>
        <p className="mt-4 leading-relaxed text-[#333]">
          {t('about_sdg_body')}
        </p>
      </section>

      {/* Team */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-[#111] sm:text-2xl">
          {t('about_team_title')}
        </h2>
        <p className="mt-4 leading-relaxed text-[#333]">
          {t('about_team_body')}
        </p>

        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {TEAM.map(({ nameKey, roleKey, photo, initials, color }) => {
            const name = t(nameKey);
            return (
              <div
                key={nameKey}
                className="flex flex-col items-center text-center"
              >
                <TeamAvatar
                  src={photo}
                  initials={initials}
                  color={color}
                  alt={name}
                />
                <h3 className="mt-4 text-base font-semibold text-[#111]">
                  {name}
                </h3>
                <p className="mt-1 text-sm text-[#555]">{t(roleKey)}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-14 text-center">
        <Link
          href="/#download"
          className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-[#333] px-8 py-3 text-base font-medium text-white transition hover:bg-black"
        >
          {t('nav_download')}
        </Link>
      </div>
    </main>
  );
}
