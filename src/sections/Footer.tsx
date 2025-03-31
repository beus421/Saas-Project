import logo from '@/assets/logosaas.png'
import SocialInstagram from '@/assets/social-insta.svg'
import SocialPin from '@/assets/social-pin.svg'
import SocialLinkedin from '@/assets/social-linkedin.svg'
import SocialX from '@/assets/social-x.svg'
import SocialYoutube from '@/assets/social-youtube.svg'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] py-10 text-sm text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:h-full before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#C2f0b1,#2fd8fe )] before:absolute">
        <Image src={logo} height={40} alt="Saas logo" className="relative" />
        </div>
        <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialInstagram />
          <SocialPin />
          <SocialLinkedin />
          <SocialX />
          <SocialYoutube />
        </div>
        <p className=" mt-6">© 2024 Progress Tracker. All rights reserved.</p>
      </div>
    </footer>
  );
};

