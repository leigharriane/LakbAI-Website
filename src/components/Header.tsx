import Image from "next/image";
import headerimg from "@/assets/header-img.png"
const Header = () => {
	return (
		<div className="flex flex-col gap-[46px] items-center justify-center">
			<div className="flex flex-col gap-[32px] max-w-[709px]">
				<p className="max-w-[709px] leading-[76px] text-[60px] font-bold text-center">Discover Your Perfect Journey with <mark>LakbAI</mark> ✨</p>
				<p className="text-center font-light text-[22px] leading-[26px]">Effortlessly Plan, Organize, and Experience Memorable Adventures with AI-Powered Travel Itineraries</p>
				<div className="flex flex-row gap-0 items-center justify-center rounded">
					<input type="text" placeholder="Your email address" className="header-input flex py-[7px] px-[12px] text-[20px] w-[504px] h-[56px] rounded-l" />
					<button className="header-button text-[20px] bg-[#5B8CEC] w-[143px] h-[56px] text-white rounded-r">Sign Up</button>
				</div>
			</div>
			<div>
				<Image src={headerimg} width={1062} height={700} layout="intrinsic" alt='headerimg' className="rounded-[20px] border-[1px] border-solid border-black" />
			</div>
		</div>
	)
}

export default Header;