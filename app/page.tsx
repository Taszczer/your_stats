import Input from '@/components/Input';
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='w-full mt-[200px] text-center'>
        <h1 className='font-dynamo text-[256px] tracking-widest leading-[100px]'>YOUR</h1>
        <h3 className='font-dynamo text-[156px]'>STATS</h3>
      </div>

      <div className='w-full flex mt-[-24px] justify-center'>
        <Input/>
      </div>

      <div className="absolute bottom-0 flex justify-center w-full min-h-[405px] h-auto overflow-hidden">
        <Image
          src="/bg-image2.png"
          alt="Picture of our mascot"
          width={2420}
          height={405}
          priority={ true }
          style={{ objectFit: "cover" }}
        />
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
