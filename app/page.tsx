import Input from '@/components/Input';
import { Fullscreen } from '@react-three/uikit';
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='w-full mt-[200px] text-center'>
        {/* <svg className="w-full h-[350px]" viewBox="0 0 500 20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path id="MyPath"
                  d="M 100 200 
                    C 300 0, 700 0, 900 200" />
          </defs>

          <text fontFamily="Dynamo" fontSize="256" fill="black">
            <textPath href="#MyPath" startOffset="51%" className='' textAnchor="middle">
              YOUR
            </textPath>
          </text>
        </svg> */}
        <h1 className='font-dynamo text-[256px] tracking-widest leading-[100px]'>YOUR</h1>
        <h3 className='font-dynamo text-[156px]'>STATS</h3>
      </div>

      <div className='w-full flex mt-[-24px] justify-center'>
        <Input/>
      </div>

      <div className=' absolute bottom-0 w-[1440px] h-[405px] max-w-[1440px] max-h-[405px] '>
        <Image src='/bg-image.png' fill={true} alt='Picture of our mascot' />
      </div>

      <div className="absolute text-white text-[144px] leading-[120px] font-bold font-['League_Spartan'] top-[-5%] left-[5%] z-[-1]">
        <h1>fast,</h1>
        <h1>smooth,</h1>
        <h1>& beauty</h1>
      </div>

      <div className="absolute text-white text-[144px] leading-[120px] font-bold font-['League_Spartan'] top-[-20%] right-[2.5%] z-[-1]">
        <h1>fast,</h1>
        <h1>smooth,</h1>
        <h1>& beauty</h1>
      </div>

      <div className="absolute text-white text-[144px] leading-[120px] font-bold font-['League_Spartan'] top-[35%] left-[-10%] z-[-1]">
        <h1>fast,</h1>
        <h1>smooth,</h1>
        <h1>& beauty</h1>
      </div>

      <div className=" text-center absolute text-white text-[144px] leading-[120px] font-bold font-['League_Spartan'] top-[30%] right-[-5%] z-[-1]">
        <h1>fast,</h1>
        <h1>smooth,</h1>
        <h1>& beauty</h1>
      </div>
    </>
  );
}
