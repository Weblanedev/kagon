'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const Footer = () => {
  const router = useRouter();
  const path = usePathname();

  return (
    <section
      className='contact-us h-[100%] py-[134px] bg-black mt-20'
      id='Contact'>
      <div className='container mx-auto px-[20px] sm:px-[60px] font-body flex flex-col lg:flex-row gap-[40px] pt-[20px]'>
        <div className='w-[100%] hidden sm:block'>
          <h1 className='text-[20px] leading-normal pt-[20px] text-[#fff] w-[280px] uppercase text-3xl font-[600] text-left'>
            Stockbridge Technologies Limited
          </h1>
        </div>
        <div className='flex flex-col gap-[20px] text-[20px] w-[100%]'>
          <h1 className='text-[#fff] leading-normal'>Home</h1>
          <div className='text-[#EFEFF680] flex flex-col gap-[20px]'>
            <p
              className='cursor-pointer'
              onClick={() => {
                router.push('/about');
              }}>
              About Us
            </p>
            <p
              className='cursor-pointer'
              onClick={() => {
                router.push('/Products');
              }}>
              Products
            </p>
            <p
              className='cursor-pointer'
              onClick={() => {
                router.push(`/contact`);
              }}>
              Contact Us
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-[20px] text-[20px] w-[100%]'>
          <h1 className='text-[#fff] leading-normal'>Product</h1>
          <div className='text-[#EFEFF680] flex flex-col gap-[20px]'>
            <p
              className='cursor-pointer'
              onClick={() => {
                router.push(`/contact`);
              }}>
              Request a Quote
            </p>
            <p
              className='cursor-pointer'
              onClick={() => {
                router.push(`/contact`);
              }}>
              Contact Us
            </p>
            <p
              className='cursor-pointer'
              onClick={() => {
                router.push('/Products');
              }}>
              Market Information
            </p>
          </div>
        </div>
        <div className='w-[100%] lg:text-right text-[20px]'>
          <div>
            <h1 className='text-[#fff] leading-normal'>Address 1</h1>
            <p className='text-[#EFEFF680]'>
              OZOEBUBECHUKWU COMPOUND, AGBANA VILLAGE, AWKA-SOUTH
            </p>
          </div>
          <div className='py-[20px]'>
            <h1 className='text-[#fff] leading-normal'>Operating Address</h1>
            <p className='text-[#EFEFF680]'>
              6 ONITANA STREET, OFF MOBOLAJI JOHNSON, IKOYI, LAGOS
            </p>
          </div>
          <div>
            <h1 className='text-[#fff] leading-normal'>Email</h1>
            <p className='text-[#EFEFF680]'>info@stockbridge.com</p>
          </div>
        </div>
        <div className='w-[100%] block sm:hidden'>
          <Image
            src='/assets/logo.png'
            width={201}
            height={194}
            alt=''
            objectFit='contain'
            className='w-[201px] h-[192px] object-cover'
          />
          <h1 className='text-[20px] leading-normal pt-[20px] text-[#EFEFF680] w-[280px]'>
            Stockbridge Technologies Limited AND ALLIED INTEGRATED LIMITED
          </h1>
        </div>
      </div>
      <div className='container mx-auto px-[20px] sm:px-[60px] font-body flex flex-col lg:flex-row gap-[40px] pt-[20px]'>
        <div className='flex items-center gap-[10px] text-[#EFEFF680] tet-[20px]'>
          <p>Sponsor our course</p>
          <img
            src='/assets/donate.jpg'
            alt=''
            className='w-36 pt-1 cursor-pointer'
            onClick={() => {
              router.push('/donation');
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
