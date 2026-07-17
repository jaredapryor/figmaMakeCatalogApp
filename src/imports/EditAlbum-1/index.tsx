import svgPaths from "./svg-7q1xvzotig";
import imgImage from "./c371f9c8d8123a032115a812f110b558ad234ddf.png";
import imgImageNadiaFontaine from "./0bbc6cf4c33b820e6a8259e508d898ce6af7597c.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p12197200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p34c9bb80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p36d3e880} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative rounded-[14.5px] shrink-0 size-[38.5px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(142, 81, 255) 0%, rgb(246, 51, 154) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Playfair_Display:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#1c1917] text-[21px] text-center tracking-[-0.525px] whitespace-nowrap">Modern Music Catalog</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative size-full">
        <Container1 />
        <Text />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[10.5px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[10.5px] py-[5.25px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#78716c] text-[12.25px] text-center whitespace-nowrap">Artists</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(147,51,234,0.2)] relative rounded-[10.5px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[10.5px] py-[5.25px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#9333ea] text-[12.25px] text-center whitespace-nowrap">Albums</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="relative shrink-0" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.5px] items-center relative size-full">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p39c5b9f2} id="Vector" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function ButtonSwitchToDarkMode() {
  return (
    <div className="content-stretch flex gap-[7px] h-[29.6px] items-center px-[11.3px] py-[6.05px] relative rounded-[10.5px] shrink-0" data-name="Button - Switch to dark mode">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10.5px]" />
      <Icon1 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#78716c] text-[12.25px] text-center whitespace-nowrap">Dark</p>
    </div>
  );
}

function ContainerAlign() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container:align">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-end relative size-full">
        <ButtonSwitchToDarkMode />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[21px] h-[49px] items-center max-w-[1120px] px-[21px] relative shrink-0 w-[1120px]" data-name="Container">
      <Button />
      <Navigation />
      <ContainerAlign />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container />
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div className="bg-[rgba(250,248,244,0.8)] relative shrink-0 w-full" data-name="NavBar">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.8px] relative size-full">
        <ContainerMargin />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute blur-[70.4px] h-[803px] left-[-57.57px] opacity-20 top-[-36.48px] w-[1266.1px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function ImageTransform() {
  return (
    <div className="h-[730px] relative shrink-0 w-[1151px]" data-name="Image:transform">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Image />
      </div>
    </div>
  );
}

function Container3() {
  return <div className="absolute bg-[rgba(250,248,244,0.7)] h-[729.6px] left-0 top-0 w-[1151.4px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[729.6px] items-start left-0 overflow-clip top-0 w-[1151.4px]" data-name="Container">
      <ImageTransform />
      <Container3 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p3968a580} id="Vector" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M11.875 7.5H3.125" id="Vector_2" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative size-full">
        <Icon2 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#78716c] text-[12.25px] text-center whitespace-nowrap">Back</p>
      </div>
    </div>
  );
}

function ImageBrugesNocturne() {
  return (
    <div className="h-[224px] relative shrink-0 w-full" data-name="Image (Bruges Nocturne)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f0ebe2] relative rounded-[14px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)] shrink-0 size-[224px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageBrugesNocturne />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24.5px] not-italic relative shrink-0 text-[#9333ea] text-[15.75px] tracking-[1.575px] uppercase whitespace-nowrap">Album</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[47px] relative shrink-0 w-[490px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7px] relative size-full">
        <p className="[word-break:break-word] font-['Playfair_Display:Bold',sans-serif] font-bold leading-[39.375px] relative shrink-0 text-[#1c1917] text-[31.5px] whitespace-nowrap">Bruges Nocturne</p>
      </div>
    </div>
  );
}

function ImageNadiaFontaine() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Image (Nadia Fontaine)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageNadiaFontaine} />
    </div>
  );
}

function ArtistAvatar() {
  return (
    <div className="bg-[#f0ebe2] relative rounded-[26843500px] shrink-0 size-[56px]" data-name="ArtistAvatar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageNadiaFontaine />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24.5px] not-italic relative shrink-0 text-[#1c1917] text-[15.75px] text-center whitespace-nowrap">Nadia Fontaine</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Button">
      <ArtistAvatar />
      <Text1 />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[10.5px] relative size-full">
        <Button4 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] whitespace-nowrap">Record Label</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[217.15px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#1c1917] text-[12.25px] whitespace-nowrap">Flanders Tone</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] col-1 justify-self-stretch relative rounded-[14.5px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[14.5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[11.3px] relative size-full">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] whitespace-nowrap">Release Year</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[217.15px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#1c1917] text-[12.25px] whitespace-nowrap">2017</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] col-2 justify-self-stretch relative rounded-[14.5px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[14.5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[11.3px] relative size-full">
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] whitespace-nowrap">Albums Sold</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[217.15px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#1c1917] text-[12.25px] whitespace-nowrap">430K</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] col-1 justify-self-stretch relative rounded-[14.5px] row-2 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[14.5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[11.3px] relative size-full">
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] whitespace-nowrap">Tracks / Singles</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[217.15px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#1c1917] text-[12.25px] whitespace-nowrap">10 / 3</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] col-2 justify-self-stretch relative rounded-[14.5px] row-2 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[14.5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[11.3px] relative size-full">
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="gap-x-[10.5px] gap-y-[10.5px] grid grid-cols-[__239.75px_239.75px] grid-rows-[__57.59px_57.59px] h-[125.675px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17.5px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function CertBadge() {
  return (
    <div className="relative rounded-[3.5px] shrink-0" data-name="CertBadge">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(253,199,0,0.3)] border-solid inset-0 pointer-events-none rounded-[3.5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[7.8px] py-[2.55px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] not-italic relative shrink-0 text-[#fdc700] text-[10.5px] tracking-[0.525px] uppercase whitespace-nowrap">Gold</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[rgba(29,185,84,0.2)] relative rounded-[3.5px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[5.25px] py-[1.75px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#1db954] text-[10.5px] whitespace-nowrap">SP</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[rgba(252,60,68,0.2)] relative rounded-[3.5px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[5.25px] py-[1.75px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#fc3c44] text-[10.5px] whitespace-nowrap">AM</p>
      </div>
    </div>
  );
}

function StreamingIcons() {
  return (
    <div className="relative shrink-0" data-name="StreamingIcons">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.25px] items-center relative size-full">
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[36.6px] relative shrink-0 w-[490px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.5px] items-center pt-[17.5px] relative size-full">
        <CertBadge />
        <StreamingIcons />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_14952)" id="Icon">
          <path d={svgPaths.p5c60b40} id="Vector" stroke="var(--stroke-0, #44403C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M8.75 2.91667L11.0833 5.25" id="Vector_2" stroke="var(--stroke-0, #44403C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_14952">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#f0ebe2] h-full relative rounded-[14.5px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center px-[14px] py-[7px] relative size-full">
          <Icon3 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#44403c] text-[12.25px] text-center whitespace-nowrap">Edit Album</p>
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M1.75 3.5H12.25" id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p6d98680} id="Vector_2" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2f25b500} id="Vector_3" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.83333 6.41667V9.91667" id="Vector_4" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M8.16667 6.41667V9.91667" id="Vector_5" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[rgba(220,38,38,0.15)] h-full relative rounded-[14.5px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center px-[14px] py-[7px] relative size-full">
          <Icon4 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#dc2626] text-[12.25px] text-center whitespace-nowrap">Delete</p>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[52.5px] relative shrink-0 w-[490px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.5px] items-start pt-[21px] relative size-full">
        <Button5 />
        <Button6 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[490_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph />
        <Heading />
        <ButtonMargin />
        <ContainerMargin1 />
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[398.775px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[28px] items-start pt-[28px] relative size-full">
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[183.7px] max-w-[784px] p-[21px] top-0 w-[784px]" data-name="Container">
      <Button3 />
      <Container5 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="h-[729.6px] relative shrink-0 w-full" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container2 />
        <Container4 />
      </div>
    </div>
  );
}

function Root() {
  return (
    <div className="bg-[#faf8f4] min-h-[729.5999755859375px] relative shrink-0 w-full" data-name="Root">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] relative size-full">
        <NavBar />
        <MainContent />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="h-[729.6px] relative shrink-0 w-[1166.4px]" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[15px] relative size-full">
        <Root />
      </div>
    </div>
  );
}

function Container15() {
  return <div className="absolute bg-[rgba(0,0,0,0.7)] h-[729.6px] left-0 top-0 w-[1166.4px]" data-name="Container" />;
}

function Heading1() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24.5px] not-italic relative shrink-0 text-[#1c1917] text-[15.75px] whitespace-nowrap">Edit Album</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M13.5 4.5L4.5 13.5" id="Vector" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M4.5 4.5L13.5 13.5" id="Vector_2" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function AlbumFormModal() {
  return (
    <div className="relative shrink-0 w-full" data-name="AlbumFormModal">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading1 />
        <Button7 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[404.4px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#78716c] text-[12.25px] whitespace-nowrap">Album Title *</p>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-[#f0ebe2] h-[33px] left-0 rounded-[10.5px] top-[-0.2px] w-[404px]" data-name="Text Input">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[11.3px] py-[7.8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#1c1917] text-[12.25px] w-full">Bruges Nocturne</p>
      </div>
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10.5px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[32.8px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <TextInput />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label />
        <Container17 />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[404.4px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#78716c] text-[12.25px] whitespace-nowrap">Artist *</p>
      </div>
    </div>
  );
}

function Dropdown() {
  return <div className="absolute bg-[#f0ebe2] border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-0 rounded-[10.5px] top-[-0.05px] w-[404px]" data-name="Dropdown" />;
}

function Container19() {
  return (
    <div className="h-[31.95px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Dropdown />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[67.45px] relative shrink-0 w-[404.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[14px] relative size-full">
        <Label1 />
        <Container19 />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[404.4px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#78716c] text-[12.25px] whitespace-nowrap">Cover Image URL</p>
      </div>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute bg-[#f0ebe2] h-[33px] left-0 rounded-[10.5px] top-[-0.2px] w-[404px]" data-name="Text Input">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[11.3px] py-[7.8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#1c1917] text-[12.25px] w-full">{`https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=300&h=300&fit=crop&auto=format`}</p>
      </div>
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10.5px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[32.85px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <TextInput1 />
      </div>
    </div>
  );
}

function ImagePreview() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Image (preview)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#f0ebe2] content-stretch flex flex-col items-start overflow-clip relative rounded-[10.5px] shrink-0 size-[56px]" data-name="Container">
      <ImagePreview />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7px] relative size-full">
        <Container22 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-[404.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[14px] relative size-full">
        <Label2 />
        <Container21 />
        <ContainerMargin2 />
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[196.95px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#78716c] text-[12.25px] whitespace-nowrap">Record Label</p>
      </div>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="absolute bg-[#f0ebe2] h-[33px] left-0 rounded-[10.5px] top-[-0.2px] w-[197px]" data-name="Text Input">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[11.3px] py-[7.8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#1c1917] text-[12.25px] w-full">Flanders Tone</p>
      </div>
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10.5px]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[32.8px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <TextInput2 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label3 />
        <Container25 />
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[196.95px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#78716c] text-[12.25px] whitespace-nowrap">Release Year *</p>
      </div>
    </div>
  );
}

function NumberInput() {
  return (
    <div className="absolute bg-[#f0ebe2] h-[33px] left-0 rounded-[10.5px] top-[-0.2px] w-[197px]" data-name="Number Input">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[11.3px] py-[7.8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#1c1917] text-[12.25px] w-full">2017</p>
      </div>
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10.5px]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[32.8px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <NumberInput />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label4 />
        <Container27 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="gap-x-[10.5px] gap-y-[10.5px] grid grid-cols-[__196.95px_196.95px] grid-rows-[_54.10px] h-[54px] relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container26 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[14px] relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[127.8px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#78716c] text-[12.25px] whitespace-nowrap">Tracks</p>
      </div>
    </div>
  );
}

function NumberInput1() {
  return (
    <div className="absolute bg-[#f0ebe2] h-[33px] left-0 rounded-[10.5px] top-[-0.2px] w-[128px]" data-name="Number Input">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[11.3px] py-[7.8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#1c1917] text-[12.25px] w-full">10</p>
      </div>
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10.5px]" />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[32.8px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <NumberInput1 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label5 />
        <Container30 />
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[127.8px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#78716c] text-[12.25px] whitespace-nowrap">Singles</p>
      </div>
    </div>
  );
}

function NumberInput2() {
  return (
    <div className="absolute bg-[#f0ebe2] h-[33px] left-0 rounded-[10.5px] top-[-0.2px] w-[128px]" data-name="Number Input">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[11.3px] py-[7.8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#1c1917] text-[12.25px] w-full">3</p>
      </div>
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10.5px]" />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[32.8px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <NumberInput2 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label6 />
        <Container32 />
      </div>
    </div>
  );
}

function Label7() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[127.8px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#78716c] text-[12.25px] whitespace-nowrap">Albums Sold</p>
      </div>
    </div>
  );
}

function NumberInput3() {
  return (
    <div className="absolute bg-[#f0ebe2] h-[33px] left-0 rounded-[10.5px] top-[-0.2px] w-[128px]" data-name="Number Input">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[11.3px] py-[7.8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#1c1917] text-[12.25px] w-full">430000</p>
      </div>
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10.5px]" />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[32.8px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <NumberInput3 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label7 />
        <Container34 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="gap-x-[10.5px] gap-y-[10.5px] grid grid-cols-[___127.80px_127.80px_127.80px] grid-rows-[_54.10px] h-[54px] relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container31 />
      <Container33 />
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[14px] relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[404.4px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#78716c] text-[12.25px] whitespace-nowrap">Certification</p>
      </div>
    </div>
  );
}

function Dropdown1() {
  return <div className="absolute bg-[#f0ebe2] border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-0 rounded-[10.5px] top-[-0.05px] w-[404px]" data-name="Dropdown" />;
}

function Container36() {
  return (
    <div className="h-[31.95px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Dropdown1 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[67.45px] relative shrink-0 w-[404.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[14px] relative size-full">
        <Label8 />
        <Container36 />
      </div>
    </div>
  );
}

function Label9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#78716c] text-[12.25px] whitespace-nowrap">Streaming Platforms</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#9333ea] relative rounded-[10.5px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#9333ea] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10.5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[11.3px] py-[6.05px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] not-italic relative shrink-0 text-[10.5px] text-center text-white whitespace-nowrap">Spotify</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#9333ea] relative rounded-[10.5px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#9333ea] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10.5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[11.3px] py-[6.05px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] not-italic relative shrink-0 text-[10.5px] text-center text-white whitespace-nowrap">Apple Music</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[10.5px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10.5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[11.3px] py-[6.05px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] text-center whitespace-nowrap">Amazon</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[33.1px] relative shrink-0 w-[404.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-start pt-[7px] relative size-full">
        <Button8 />
        <Button9 />
        <Button10 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[65.1px] relative shrink-0 w-[404.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[14px] relative size-full">
        <Label9 />
        <Container38 />
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#f0ebe2] flex-[197_0_0] h-full min-w-px relative rounded-[10.5px]" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center py-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#44403c] text-[12.25px] text-center whitespace-nowrap">Cancel</p>
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#9333ea] flex-[197_0_0] h-full min-w-px relative rounded-[10.5px]" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center py-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-center text-white whitespace-nowrap">Save Changes</p>
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[10.5px] h-[39px] items-start pt-[7px] relative shrink-0 w-full" data-name="Container">
      <Button11 />
      <Button12 />
    </div>
  );
}

function ContainerMargin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[14px] relative size-full">
        <Container39 />
      </div>
    </div>
  );
}

function AlbumFormModal1() {
  return (
    <div className="relative shrink-0 w-[404.4px]" data-name="AlbumFormModal">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17.5px] relative size-full">
        <Container16 />
        <Container18 />
        <Container20 />
        <ContainerMargin3 />
        <ContainerMargin4 />
        <Container35 />
        <Container37 />
        <ContainerMargin5 />
      </div>
    </div>
  );
}

function Dialog() {
  return (
    <div className="absolute bg-white h-[656.64px] left-[359.2px] max-h-[656.6400146484375px] max-w-[448px] rounded-[14px] top-[36.3px] w-[448px]" data-name="Dialog">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-h-[inherit] max-w-[inherit] overflow-clip p-[21.8px] relative rounded-[inherit] size-full">
        <AlbumFormModal />
        <AlbumFormModal1 />
      </div>
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

export default function EditAlbum() {
  return (
    <div className="bg-[#faf8f4] content-stretch flex flex-col items-start relative size-full" data-name="Edit Album">
      <Body />
      <Container15 />
      <Dialog />
    </div>
  );
}