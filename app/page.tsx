import Input from '@/components/Input';
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='w-full mt-[100px] lg:mt-[200px] text-center'>
        <h1 className='font-dynamo text-8xl md:text-[196px] lg:text-[256px] tracking-widest leading-[100px]'>YOUR</h1>
        <h3 className='font-dynamo text-[64px] md:text-9xl lg:text-[156px] mt-[-32px] md:mt-4 lg:mt-10'>STATS</h3>
      </div>

      <div className='w-full flex mt-2 md:mt-4 lg:mt-6 justify-center'>
        <Input/>
      </div>

      <div className="absolute bottom-0 flex justify-center w-full min-h-[200px] h-[40vh] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/bg-image2.png"
            alt="Picture of our mascot"
            fill
            priority={true}
            className="object-cover"
          />
        </div>
      </div>

      <div className="absolute text-white hidden md:block md:text-9xl lg:text-[144px] leading-12 md:leading-[90px] lg:leading-[120px] font-bold font-['League_Spartan'] top-[-20%] lg:top-[-5%] left-[-25%] lg:left-[5%] z-[-1]">
        <h1>fast,</h1>
        <h1>smooth,</h1>
        <h1>& beauty</h1>
      </div>

      <div className="absolute text-white hidden md:block md:text-9xl lg:text-[144px] leading-12 md:leading-[90px] lg:leading-[120px] font-bold font-['League_Spartan'] top-[-25%] right-[-5%] lg:top-[-20%] lg:right-[2.5%] z-[-1]">
        <h1>fast,</h1>
        <h1>smooth,</h1>
        <h1>& beauty</h1>
      </div>

      <div className="absolute text-white hidden md:block md:text-9xl lg:text-[144px] leading-12 md:leading-[90px] lg:leading-[120px] font-bold font-['League_Spartan'] left-[-25%] top-[30%] lg:top-[35%] lg:left-[-10%] z-[-1]">
        <h1>fast,</h1>
        <h1>smooth,</h1>
        <h1>& beauty</h1>
      </div>

      <div className="text-center absolute hidden md:block text-white md:text-9xl lg:text-[144px] leading-12 md:leading-[90px] lg:leading-[120px] font-bold font-['League_Spartan'] top-[30%] right-[-5%] z-[-1]">
        <h1>fast,</h1>
        <h1>smooth,</h1>
        <h1>& beauty</h1>
      </div>
    </>
  );
}
