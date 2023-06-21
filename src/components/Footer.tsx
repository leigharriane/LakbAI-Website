const Footer = () => {
  return (
    <div className="flex flex-col gap-[32px] max-w-[350px] sm:max-w-[709px] py-[54px]">
      <p className="max-w-[350px] sm:max-w-[709px] leading-[36px] sm:leading-[76px] text-[36px] sm:text-[60px] font-bold text-center text-[#5B8CEC]">Join Our Waitlist</p>
      <p className="text-center font-light text-[18px] leading-[18px] sm:text-[22px] sm:leading-[26px]">Be the First to Experience the Future of Travel Planning</p>
      <div className="flex flex-row gap-0 items-center justify-center rounded">
        <input type="text" placeholder="Your email address" className="header-input flex py-[7px] px-[12px] text-[16px] sm:text-[20px] w-[504px] h-[56px] rounded-l" />
        <button className="header-button text-[16px] sm:text-[20px] bg-[#5B8CEC] w-[143px] h-[56px] text-white rounded-r">Sign Up</button>
      </div>
    </div>
  )
}

export default Footer;