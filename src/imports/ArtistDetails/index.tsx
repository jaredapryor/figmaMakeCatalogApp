import svgPaths from "./svg-cd0y8dl5wy";
import imgImageLenaVoss from "./993d172c52b9d3dcf3f0a506889ca9ee1b98169a.png";
import imgImageSweden from "./d6a098d3b7e09f80e2604a466909237360ce29c2.png";
import imgImageFjordlight from "./5f60fa2a43de1a2cb43728a6509bd0a51b03406e.png";
import imgImageWhiteNoiseWinter from "./4780f9ce65fd6d87849b8cde125a43c4b1f991d9.png";
import imgImageSolstice from "./b9f6ec0070d4c61867623da0e927e1fdb07d6c0f.png";
import imgImageAuroraBorealisEp from "./7c022241965b1db796f7a3e9a66cd0dbfbcba196.png";

function StickyPlaceholderNavBar() {
  return <div className="h-[49.8px] relative shrink-0 w-full" data-name="Sticky placeholder – NavBar" />;
}

function Icon() {
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

function Button() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative size-full">
        <Icon />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#78716c] text-[12.25px] text-center whitespace-nowrap">Back to Artists</p>
      </div>
    </div>
  );
}

function ImageLenaVoss() {
  return (
    <div className="h-[168px] relative shrink-0 w-full" data-name="Image (Lena Voss)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLenaVoss} />
    </div>
  );
}

function ArtistAvatar() {
  return (
    <div className="bg-[#f0ebe2] relative rounded-[26843500px] shrink-0 size-[168px]" data-name="ArtistAvatar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageLenaVoss />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Playfair_Display:Bold',sans-serif] font-bold leading-[31.5px] relative shrink-0 text-[#1c1917] text-[26.25px] whitespace-nowrap">Lena Voss</p>
      </div>
    </div>
  );
}

function ImageSweden() {
  return (
    <div className="h-[19.4px] relative shrink-0 w-full" data-name="Image (Sweden)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSweden} />
    </div>
  );
}

function CountryFlag() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[21px] relative rounded-[3.5px] shrink-0 w-[35px]" data-name="CountryFlag">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.8px] relative rounded-[inherit] size-full">
        <ImageSweden />
      </div>
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[3.5px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function CountryFlag1() {
  return (
    <div className="relative shrink-0" data-name="CountryFlag">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] tracking-[0.525px] whitespace-nowrap">SE</p>
      </div>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="relative shrink-0" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.25px] items-center relative size-full">
        <CountryFlag />
        <CountryFlag1 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[rgba(246,51,154,0.15)] relative rounded-[26843500px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[7px] py-[1.75px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#fb64b6] text-[10.5px] whitespace-nowrap">Solo Artist</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#f0ebe2] relative rounded-[26843500px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[7px] py-[1.75px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] whitespace-nowrap">Active since 2012</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_5_14546)" id="Icon">
          <path d={svgPaths.p1f658e00} id="Vector" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p380021a0} id="Vector_2" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p2bdf8500} id="Vector_3" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.paacc480} id="Vector_4" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_5_14546">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#f0ebe2] relative rounded-[26843500px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.5px] items-center px-[7px] py-[1.75px] relative size-full">
        <Icon1 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] whitespace-nowrap">4 albums</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[406.7px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.5px] items-center pt-[7px] relative size-full">
        <SlotClone />
        <Text />
        <Text1 />
        <Text2 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[409.625_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Container3 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_5_14556)" id="Icon">
          <path d={svgPaths.p27b3900} id="Vector" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.5 2.5L9.5 4.5" id="Vector_2" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_5_14556">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[10.5px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10.5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.25px] items-center px-[11.3px] py-[7.8px] relative size-full">
        <Icon2 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] text-center whitespace-nowrap">Edit Artist</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M1.5 3H10.5" id="Vector" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3ba57a00} id="Vector_2" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p36919d00} id="Vector_3" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 5.5V8.5" id="Vector_4" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 5.5V8.5" id="Vector_5" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[10.5px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10.5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.25px] items-center px-[11.3px] py-[7.8px] relative size-full">
        <Icon3 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] text-center whitespace-nowrap">Delete Artist</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative size-full">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[17.5px] items-start relative size-full">
        <ArtistAvatar />
        <Container2 />
        <Container4 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start p-[21.8px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[21px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M12 10L8 6L4 10" id="Vector" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#1c1917] text-[14px] text-center whitespace-nowrap">Albums</p>
        <Icon4 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6H9.5" id="Vector" stroke="var(--stroke-0, #9333EA)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 2.5V9.5" id="Vector_2" stroke="var(--stroke-0, #9333EA)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(147,51,234,0.2)] relative rounded-[10.5px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.25px] items-center px-[10.5px] py-[5.25px] relative size-full">
        <Icon5 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#9333ea] text-[10.5px] text-center whitespace-nowrap">Add Album</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.05)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[14.8px] pt-[14px] px-[17.5px] relative size-full">
          <Button3 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function ImageFjordlight() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Image (Fjordlight)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFjordlight} />
    </div>
  );
}

function CoverImage() {
  return (
    <div className="bg-[#f0ebe2] relative rounded-[10.5px] shrink-0 size-[56px]" data-name="CoverImage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageFjordlight />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[17.5px] not-italic relative shrink-0 text-[#1c1917] text-[12.25px] whitespace-nowrap">Fjordlight</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[679.95px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[1.75px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] whitespace-nowrap">Nordic Arc · 2013</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] whitespace-nowrap">490K sold</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] whitespace-nowrap">·</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] whitespace-nowrap">10 tracks</p>
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

function Text6() {
  return (
    <div className="bg-[rgba(29,185,84,0.2)] relative rounded-[3.5px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[5.25px] py-[1.75px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#1db954] text-[10.5px] whitespace-nowrap">SP</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="bg-[rgba(252,60,68,0.2)] relative rounded-[3.5px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[5.25px] py-[1.75px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#fc3c44] text-[10.5px] whitespace-nowrap">AM</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[rgba(0,168,225,0.2)] relative rounded-[3.5px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[5.25px] py-[1.75px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#00a8e1] text-[10.5px] whitespace-nowrap">AZ</p>
      </div>
    </div>
  );
}

function StreamingIcons() {
  return (
    <div className="relative shrink-0" data-name="StreamingIcons">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.25px] items-center relative size-full">
        <Text6 />
        <Text7 />
        <Text8 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[24.35px] relative shrink-0 w-[679.95px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center pt-[5.25px] relative size-full">
        <Text3 />
        <Text4 />
        <Text5 />
        <CertBadge />
        <StreamingIcons />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="flex-[679.95_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph />
        <Paragraph1 />
        <Container10 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="flex-[749.95_0_0] min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-center relative size-full">
        <CoverImage />
        <Container9 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_5_14556)" id="Icon">
          <path d={svgPaths.p27b3900} id="Vector" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.5 2.5L9.5 4.5" id="Vector_2" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_5_14556">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[10.5px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[10.5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center p-[6.05px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M1.5 3H10.5" id="Vector" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3ba57a00} id="Vector_2" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p36919d00} id="Vector_3" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 5.5V8.5" id="Vector_4" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 5.5V8.5" id="Vector_5" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[10.5px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[10.5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center p-[6.05px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.25px] items-center relative size-full">
        <Button6 />
        <Button7 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.03)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-center pb-[14.8px] pt-[14px] px-[17.5px] relative size-full">
          <Button5 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function ImageWhiteNoiseWinter() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Image (White Noise Winter)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWhiteNoiseWinter} />
    </div>
  );
}

function CoverImage1() {
  return (
    <div className="bg-[#f0ebe2] relative rounded-[10.5px] shrink-0 size-[56px]" data-name="CoverImage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWhiteNoiseWinter />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[17.5px] not-italic relative shrink-0 text-[#1c1917] text-[12.25px] whitespace-nowrap">White Noise Winter</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[679.95px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[1.75px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] whitespace-nowrap">Nordic Arc · 2016</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] whitespace-nowrap">920K sold</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] whitespace-nowrap">·</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] whitespace-nowrap">11 tracks</p>
      </div>
    </div>
  );
}

function CertBadge1() {
  return (
    <div className="relative rounded-[3.5px] shrink-0" data-name="CertBadge">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(202,213,226,0.3)] border-solid inset-0 pointer-events-none rounded-[3.5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[7.8px] py-[2.55px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] not-italic relative shrink-0 text-[#cad5e2] text-[10.5px] tracking-[0.525px] uppercase whitespace-nowrap">Platinum</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="bg-[rgba(29,185,84,0.2)] relative rounded-[3.5px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[5.25px] py-[1.75px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#1db954] text-[10.5px] whitespace-nowrap">SP</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="bg-[rgba(252,60,68,0.2)] relative rounded-[3.5px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[5.25px] py-[1.75px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#fc3c44] text-[10.5px] whitespace-nowrap">AM</p>
      </div>
    </div>
  );
}

function StreamingIcons1() {
  return (
    <div className="relative shrink-0" data-name="StreamingIcons">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.25px] items-center relative size-full">
        <Text12 />
        <Text13 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[24.35px] relative shrink-0 w-[679.95px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center pt-[5.25px] relative size-full">
        <Text9 />
        <Text10 />
        <Text11 />
        <CertBadge1 />
        <StreamingIcons1 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[679.95_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph2 />
        <Paragraph3 />
        <Container14 />
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="flex-[749.95_0_0] min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-center relative size-full">
        <CoverImage1 />
        <Container13 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_5_14556)" id="Icon">
          <path d={svgPaths.p27b3900} id="Vector" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.5 2.5L9.5 4.5" id="Vector_2" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_5_14556">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[10.5px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[10.5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center p-[6.05px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M1.5 3H10.5" id="Vector" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3ba57a00} id="Vector_2" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p36919d00} id="Vector_3" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 5.5V8.5" id="Vector_4" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 5.5V8.5" id="Vector_5" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[10.5px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[10.5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center p-[6.05px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.25px] items-center relative size-full">
        <Button9 />
        <Button10 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.03)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-center pb-[14.8px] pt-[14px] px-[17.5px] relative size-full">
          <Button8 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function ImageSolstice() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Image (Solstice)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSolstice} />
    </div>
  );
}

function CoverImage2() {
  return (
    <div className="bg-[#f0ebe2] relative rounded-[10.5px] shrink-0 size-[56px]" data-name="CoverImage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageSolstice />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[17.5px] not-italic relative shrink-0 text-[#1c1917] text-[12.25px] whitespace-nowrap">Solstice</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[679.95px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[1.75px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] whitespace-nowrap">Nordic Arc · 2019</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] whitespace-nowrap">640K sold</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] whitespace-nowrap">·</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] whitespace-nowrap">9 tracks</p>
      </div>
    </div>
  );
}

function CertBadge2() {
  return (
    <div className="relative rounded-[3.5px] shrink-0" data-name="CertBadge">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(253,199,0,0.3)] border-solid inset-0 pointer-events-none rounded-[3.5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[7.8px] py-[2.55px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] not-italic relative shrink-0 text-[#fdc700] text-[10.5px] tracking-[0.525px] uppercase whitespace-nowrap">Gold</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="bg-[rgba(29,185,84,0.2)] relative rounded-[3.5px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[5.25px] py-[1.75px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#1db954] text-[10.5px] whitespace-nowrap">SP</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="bg-[rgba(0,168,225,0.2)] relative rounded-[3.5px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[5.25px] py-[1.75px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#00a8e1] text-[10.5px] whitespace-nowrap">AZ</p>
      </div>
    </div>
  );
}

function StreamingIcons2() {
  return (
    <div className="relative shrink-0" data-name="StreamingIcons">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.25px] items-center relative size-full">
        <Text17 />
        <Text18 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[24.35px] relative shrink-0 w-[679.95px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center pt-[5.25px] relative size-full">
        <Text14 />
        <Text15 />
        <Text16 />
        <CertBadge2 />
        <StreamingIcons2 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[679.95_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph4 />
        <Paragraph5 />
        <Container18 />
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="flex-[749.95_0_0] min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-center relative size-full">
        <CoverImage2 />
        <Container17 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_5_14556)" id="Icon">
          <path d={svgPaths.p27b3900} id="Vector" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.5 2.5L9.5 4.5" id="Vector_2" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_5_14556">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[10.5px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[10.5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center p-[6.05px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M1.5 3H10.5" id="Vector" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3ba57a00} id="Vector_2" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p36919d00} id="Vector_3" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 5.5V8.5" id="Vector_4" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 5.5V8.5" id="Vector_5" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative rounded-[10.5px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[10.5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center p-[6.05px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.25px] items-center relative size-full">
        <Button12 />
        <Button13 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.03)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-center pb-[14.8px] pt-[14px] px-[17.5px] relative size-full">
          <Button11 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function ImageAuroraBorealisEp() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Image (Aurora Borealis EP)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageAuroraBorealisEp} />
    </div>
  );
}

function CoverImage3() {
  return (
    <div className="bg-[#f0ebe2] relative rounded-[10.5px] shrink-0 size-[56px]" data-name="CoverImage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageAuroraBorealisEp />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[17.5px] not-italic relative shrink-0 text-[#1c1917] text-[12.25px] whitespace-nowrap">Aurora Borealis EP</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[679.95px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[1.75px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] whitespace-nowrap">Nordic Arc · 2021</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] whitespace-nowrap">280K sold</p>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] whitespace-nowrap">·</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#78716c] text-[10.5px] whitespace-nowrap">6 tracks</p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="bg-[rgba(29,185,84,0.2)] relative rounded-[3.5px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[5.25px] py-[1.75px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#1db954] text-[10.5px] whitespace-nowrap">SP</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="bg-[rgba(252,60,68,0.2)] relative rounded-[3.5px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[5.25px] py-[1.75px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#fc3c44] text-[10.5px] whitespace-nowrap">AM</p>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="bg-[rgba(0,168,225,0.2)] relative rounded-[3.5px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[5.25px] py-[1.75px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#00a8e1] text-[10.5px] whitespace-nowrap">AZ</p>
      </div>
    </div>
  );
}

function StreamingIcons3() {
  return (
    <div className="relative shrink-0" data-name="StreamingIcons">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.25px] items-center relative size-full">
        <Text22 />
        <Text23 />
        <Text24 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-[679.95px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center pt-[5.25px] relative size-full">
        <Text19 />
        <Text20 />
        <Text21 />
        <StreamingIcons3 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="flex-[679.95_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph6 />
        <Paragraph7 />
        <Container22 />
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="flex-[749.95_0_0] min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-center relative size-full">
        <CoverImage3 />
        <Container21 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_5_14556)" id="Icon">
          <path d={svgPaths.p27b3900} id="Vector" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.5 2.5L9.5 4.5" id="Vector_2" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_5_14556">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="relative rounded-[10.5px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[10.5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center p-[6.05px] relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M1.5 3H10.5" id="Vector" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3ba57a00} id="Vector_2" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p36919d00} id="Vector_3" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 5.5V8.5" id="Vector_4" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 5.5V8.5" id="Vector_5" stroke="var(--stroke-0, #78716C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="relative rounded-[10.5px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[10.5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center p-[6.05px] relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.25px] items-center relative size-full">
        <Button15 />
        <Button16 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-center px-[17.5px] py-[14px] relative size-full">
          <Button14 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container8 />
        <Container12 />
        <Container16 />
        <Container20 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white h-[398.013px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[0.8px] relative rounded-[inherit] size-full">
        <Container6 />
        <Container7 />
      </div>
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[21px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function ArtistDetailView() {
  return (
    <div className="max-w-[896px] relative shrink-0 w-[896px]" data-name="ArtistDetailView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] p-[21px] relative size-full">
        <Button />
        <ContainerMargin />
        <ContainerMargin1 />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <ArtistDetailView />
      </div>
    </div>
  );
}

function Icon14() {
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

function Container25() {
  return (
    <div className="relative rounded-[14.5px] shrink-0 size-[38.5px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(142, 81, 255) 0%, rgb(246, 51, 154) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Playfair_Display:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#1c1917] text-[21px] text-center tracking-[-0.525px] whitespace-nowrap">Modern Music Catalog</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative size-full">
        <Container25 />
        <Text25 />
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-[rgba(147,51,234,0.2)] relative rounded-[10.5px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[10.5px] py-[5.25px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#9333ea] text-[12.25px] text-center whitespace-nowrap">Artists</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="relative rounded-[10.5px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[10.5px] py-[5.25px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#78716c] text-[12.25px] text-center whitespace-nowrap">Albums</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="relative shrink-0" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.5px] items-center relative size-full">
        <Button18 />
        <Button19 />
      </div>
    </div>
  );
}

function Icon15() {
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
      <Icon15 />
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

function Container24() {
  return (
    <div className="content-stretch flex gap-[21px] h-[49px] items-center max-w-[1120px] px-[21px] relative shrink-0 w-[1120px]" data-name="Container">
      <Button17 />
      <Navigation />
      <ContainerAlign />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container24 />
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute bg-[rgba(250,248,244,0.8)] left-0 top-[31.2px] w-[1166.4px]" data-name="NavBar">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.8px] relative size-full">
        <ContainerMargin2 />
      </div>
    </div>
  );
}

function Root() {
  return (
    <div className="bg-[#faf8f4] min-h-[729.5999755859375px] relative shrink-0 w-full" data-name="Root">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] relative size-full">
        <StickyPlaceholderNavBar />
        <MainContent />
        <NavBar />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-[1166.4px]" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Root />
      </div>
    </div>
  );
}

export default function ArtistDetails() {
  return (
    <div className="bg-[#faf8f4] content-stretch flex flex-col items-start relative size-full" data-name="Artist Details">
      <Body />
    </div>
  );
}