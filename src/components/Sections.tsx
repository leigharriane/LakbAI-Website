import Image, { StaticImageData } from "next/image";

interface Props {
	title: string;
	desc: string;
	pic: StaticImageData;
	svgitem: JSX.Element;
	type:string;
}

const Sections = ({ title, desc, pic, svgitem, type }: Props) => {
	return (
		<div className={`w-full flex ${type}`}>
			<div className="w-[50%] py-[66px] px-[70px] flex flex-col justify-center items-center">
				<Image src={pic} width={500} height={500} layout="intrinsic" alt='sectionimg' className="rounded-[20px]" />
			</div>
			<div className="w-[50%] py-[66px] px-[70px] flex flex-col gap-[24px] items-start justify-center">
				{svgitem}
				<p className="font-bold text-[48px] leading-[57px]">{title}</p>
				<p className="leading-[29px] text-[24px] font-light">{desc}</p>
			</div>
		</div>
	)
}

export default Sections;