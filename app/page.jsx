import Image from "next/image";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import { Button } from "@/components/ui/button";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";
export default function Home() {
  const Social = [
    { name: "facebook", icon: <FacebookIcon />, url : "https://facebook.com" },
    { name: "Instagram", icon: <InstagramIcon/> , url : "https://instagram.com" },
    { name: "LinkedIn", icon: <LinkedInIcon/> , url : "https://www.linkedin.com/in/sluch07/" },
    { name: "YouTube", icon: <YouTubeIcon/> , url : "https://youtube.com" },
  ]
  return (
    <div className="h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 w-[100%]">
          <div className="flex flex-col items-center gap-[3rem] text-center mt-[1rem] xl:items-start xl:text-left">
            <span className="font-bold text-white">Front-end Developer</span>
            <h1 className="intro font-bold text-5xl text-white">
              Hello, I&apos;m <br /> <span className="text-accent pt-1">Ahmed Sluch</span>
            </h1>
            <p className="text-white w-[60%] tracking-[2px]">I am a front-end developer based in Egypt. experiance with React and java script from more than 3 year ago and i'm until now work as a front-end developer in a big company</p>
            <div className="flex items-center gap-4 py-3">
              <button className="btn w-[200px] border-accent border-[1px] p-3 bg-transparent text-accent hover:bg-accent hover:text-white transition-[1s] duration-1000">Hire me</button>
              <div className="social ml-4 flex items-center gap-3">
                {
                  Social.map((ele) => {
                    return (
                      <Link href={ele.url} className="text-white border-accent border-[1px] rounded-full p-2 bg-transparent hover:bg-accent hover:text-[#232329] transition-[1s] duration-1000" key={ele.name}>{ele.icon}</Link>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div>
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </div>
  );
}
