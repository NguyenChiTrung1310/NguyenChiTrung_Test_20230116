import React from 'react';

const menuFooter = [
  {
    path: '/',
    name: '会員登録',
  },
  {
    path: '/',
    name: '運営会社',
  },
  {
    path: '/',
    name: '利用規約',
  },
  {
    path: '/',
    name: '個人情報の取扱について',
  },
  {
    path: '/',
    name: '特定商取引法に基づく表記',
  },
  {
    path: '/',
    name: 'お問い合わせ',
  },
];

const Footer = () => {
  return (
    <footer className='w-full h-auto bg-dark-500 fixed bottom-0'>
      <ul className='container-xl w-full h-32 flex items-center gap-11 text-white'>
        {menuFooter.map((menu) => (
          <li key={menu.name}>
            <p className='text-[11px] leading-4 tracking-[0.033px]'>
              {menu.name}
            </p>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
