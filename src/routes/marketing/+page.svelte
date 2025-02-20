<script lang="ts">
  import house_model from '$lib/assets/house_model.png';
  import blob_house1 from '$lib/assets/blob_house1.png'
  import blob_house2 from '$lib/assets/blob_house2.png'
  import blob_house3 from '$lib/assets/blob_house3.png'
  import prop1 from '$lib/assets/prop1.png'

  import face1 from '$lib/assets/face1.png'
</script>
<div class="container mx-auto relative">
    <div class="flex flex-col items-center w-full">
    <div class="pl-[77px] pr-[60px] pb-[90px] left-[41.50px] top-[32px] absolute bg-gradient-to-r from-[#c7e1e8] to-[#f9d9ba] rounded-[36px] justify-start items-center gap-[42px] inline-flex">
        <div class="w-[523px] flex-col justify-start items-start gap-12 inline-flex">
            <div class="self-stretch h-[272px] flex-col justify-start items-start gap-8 flex">
            <div class="flex-col justify-start items-start gap-[18px] flex">
                <div class="text-[#050e16] text-base font-semibold font-['Almarena Neue'] leading-snug">Welcome to Faxility Company</div>
                <div class="w-[523px] text-[#050e16] text-[64px] font-bold font-['Almarena Neue'] leading-[70.40px]">Find Your  Our Modern Property</div>
            </div>

            <div class="self-stretch mb-4 text-[#74747b] text-lg font-normal font-['Almarena Neue'] leading-[30px]">Your trusted partner in buying, selling, and renting properties. Explore homes tailored to your lifestyle and budget.</div>

            <div class="flex-col">
                <div class="w-[466px] pl-[30px] pr-2 py-2 bg-white rounded-[100px] border border-[#eaeaea] justify-between items-center inline-flex">
                <div class="text-center text-[#72777f] text-base font-medium font-['Inter'] leading-snug">Enter Your Email</div>
                <div class="px-[25px] py-[17px] bg-[#050e16] rounded-[100px] justify-center items-center gap-2.5 flex">
                    <div class="text-center text-white text-base font-medium font-['Inter'] leading-snug">Subscribe</div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="pl-[19px] pt-[19px] justify-end items-center flex">
            <img class="w-[711px] h-[616px]" src={house_model} alt="house" />
        </div>
        </div>
        <div class="w-[1200px] left-[120px] top-[3022px] absolute justify-between items-start inline-flex">
        <div class="text-[#050e16] text-[56px] font-bold font-['Almarena Neue'] leading-[64px]">Get Local Info</div>
        <div class="flex-col justify-start items-start gap-9 inline-flex">
            <div class="w-[486px] text-[#74747b] text-lg font-normal font-['Almarena Neue'] leading-[30px]">Your trusted partner in buying, selling, and renting properties. Explore homes tailored to your lifestyle and budget.</div>
            <div class="w-[466px] pl-[30px] pr-2 py-2 bg-white rounded-[100px] border border-[#eaeaea] justify-between items-center inline-flex">
            <div class="text-center text-[#72777f] text-base font-medium font-['Inter'] leading-snug">Enter Your Email</div>
            <div class="px-[25px] py-[17px] bg-[#050e16] rounded-[100px] justify-center items-center gap-2.5 flex">
                <div class="text-center text-white text-base font-medium font-['Inter'] leading-snug">Subscribe</div>
            </div>
            </div>
        </div>
        </div>
        <div class="px-[120px] pt-[180px] pb-[120px] left-0 top-[752px] absolute justify-start items-center gap-[70px] inline-flex">
        <div class="w-[530px] flex-col justify-start items-start gap-[60px] inline-flex">
            <div class="self-stretch h-[286px] flex-col justify-start items-start gap-[18px] flex">
            <div class="text-[#2c333f] text-lg font-medium font-['Almarena Neue'] leading-[30px]">About Us</div>
            <div class="self-stretch h-[238px] flex-col justify-start items-start gap-8 flex">
                <div class="self-stretch text-[#050e16] text-[46px] font-bold font-['Inter'] leading-[52px]">Find your perfect home, hassle-free & commission-free!</div>
                <div class="self-stretch text-[#575b67] text-lg font-medium font-['Neue Haas Grotesk Display Pro'] leading-[25.20px]">Our carefully planned community is a testament to sustainable development, offering a unique combination of green.</div>
            </div>
            </div>
            <div class="px-6 py-[15px] rounded-[100px] border border-[#050e16] justify-start items-center gap-2 inline-flex">
            <div class="w-[104px] text-center text-[#050e16] text-base font-medium font-['Poppins'] leading-snug">Contact Us</div>
            <div class="w-3.5 h-[15.40px] origin-top-left rotate-90 flex-col justify-center items-center inline-flex overflow-hidden"></div>
            </div>
        </div>
        <div class="w-[600px] h-[555px] relative">
            <img class="w-[350px] h-[295px] left-0 top-0 absolute rounded-3xl" src={blob_house1} alt="Modern house exterior view" />
            <img class="w-[315px] h-[332px] left-[285px] top-[167px] absolute rounded-3xl border-10 border-white" src={blob_house2} alt="Luxurious home interior" />
            <img class="w-[273px] h-[225px] left-[62px] top-[330px] absolute rounded-3xl border-10 border-white" src={blob_house3} alt="Contemporary house design" />
        </div>
        </div>
        <div class="w-[1440px] px-[135px] py-[100px] left-0 top-[1607px] absolute bg-[#f7f7f7] justify-center items-center inline-flex">
        <div class="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-[60px] inline-flex">
            <div class="self-stretch text-[#050e16] text-[46px] font-semibold font-['Almarena Neue'] leading-[52px]">Property roadmap</div>
            <div class="h-[354px] relative">
            <div class="w-[1440px] h-[82px] left-[-135px] top-[272px] absolute">
                <div class="w-[1440px] h-[82px] left-0 top-0 absolute bg-[#e6e5eb]"></div>
                <div class="w-[1440px] h-[66px] left-0 top-[8px] absolute bg-[#e6e5eb] border-t border-b border-white"></div>
            </div>
            <div class="left-[10px] top-0 absolute justify-start items-end gap-[58px] inline-flex">
                <div class="justify-start items-center flex">
                <div class="w-[82px] h-[279px] relative">
                    <div class="w-[180px] h-[0px] left-[40px] top-[80px] absolute origin-top-left rotate-90 bg-[#eebc9d] border-2 border-[#eebc9d]"></div>
                    <div class="w-[82px] h-[82px] left-0 top-0 absolute bg-[#eebc9d] rounded-full border border-[#eebc9d] backdrop-blur-[26px]"></div>
                    <div class="w-[60px] h-[60px] left-[11px] top-[11px] absolute">
                    <div class="w-[60px] h-[60px] left-0 top-0 absolute bg-white rounded-full"></div>
                    <div class="w-[42px] h-[42px] left-[9px] top-[9px] absolute rounded-[40px]  overflow-hidden"></div>
                    </div>
                    <div class="w-5 h-5 left-[30px] top-[259px] absolute bg-[#eebc9d] rounded-full"></div>
                </div>
                <div class="flex-col justify-start items-start gap-4 inline-flex">
                    <div class="w-[242px] text-[#050e16] text-2xl font-semibold font-['Almarena Neue'] leading-loose">Foundation & Setup (Month 1-3)</div>
                    <div class="w-[242px] text-[#3d424c] text-base font-normal font-['Almarena Neue'] leading-relaxed">Establish core infrastructure and streamline basic operations.</div>
                </div>
                </div>
                <div class="justify-start items-center flex">
                <div class="w-[82px] h-[324px] relative">
                    <div class="w-[82px] h-[82px] left-0 top-0 absolute">
                    <div class="w-[82px] h-[82px] left-0 top-0 absolute bg-[#9fa4ad] rounded-full"></div>
                    <div class="w-[59.53px] h-[59.53px] left-[11.23px] top-[11.23px] absolute">
                        <div class="w-[59.53px] h-[59.53px] left-0 top-0 absolute bg-white rounded-full"></div>
                        <div class="w-8 h-8 left-[13.77px] top-[13.77px] absolute  overflow-hidden"></div>
                    </div>
                    </div>
                    <div class="w-[229px] h-[0px] left-[40px] top-[76px] absolute origin-top-left rotate-90 border-2 border-[#9fa4ad]"></div>
                    <div class="w-5 h-5 left-[30px] top-[304px] absolute bg-[#9fa4ad] rounded-full"></div>
                </div>
                <div class="flex-col justify-start items-start gap-4 inline-flex">
                    <div class="w-[242px] text-[#050e16] text-2xl font-semibold font-['Almarena Neue'] leading-loose">Data- Enhancements (Month 4-6)</div>
                    <div class="w-[261px] text-[#3d424c] text-base font-normal font-['Almarena Neue'] leading-relaxed">Leverage data for actionable insights and improve operational efficiency.</div>
                </div>
                </div>
                <div class="justify-start items-center flex">
                <div class="w-[82px] h-[279px] relative">
                    <div class="w-[82px] h-[82px] left-0 top-0 absolute bg-[#eebc9d] rounded-full"></div>
                    <div class="w-[60px] h-[60px] left-[11px] top-[11px] absolute">
                    <div class="w-[60px] h-[60px] left-0 top-0 absolute bg-white rounded-full"></div>
                    <div class="w-10 h-10 left-[10px] top-[10px] absolute  overflow-hidden"></div>
                    </div>
                    <div class="w-[180px] h-[0px] left-[40px] top-[80px] absolute origin-top-left rotate-90 bg-[#eebc9d] border-2 border-[#eebc9d]"></div>
                    <div class="w-5 h-5 left-[30px] top-[259px] absolute bg-[#eebc9d] rounded-full"></div>
                </div>
                <div class="flex-col justify-start items-start gap-4 inline-flex">
                    <div class="w-[275px] text-[#050e16] text-2xl font-semibold font-['Almarena Neue'] leading-loose">Experience Optimization (Month 7-9)</div>
                    <div class="w-[284px] text-[#3d424c] text-base font-normal font-['Almarena Neue'] leading-relaxed">Enhance tenant satisfaction through improved engagement and convenience</div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div class="px-[120px] py-[100px] left-0 top-[2273px] absolute flex-col justify-start items-start gap-14 inline-flex">
        <div class="w-[1202px] justify-between items-end inline-flex">
            <div class="h-[100px] flex-col justify-start items-start gap-[18px] inline-flex">
            <div class="text-[#222222] text-lg font-semibold font-['Almarena Neue'] leading-relaxed">Our Partners</div>
            <div class="text-[#050e16] text-[46px] font-semibold font-['Almarena Neue'] leading-[52px]">Your Trusted</div>
            </div>
            <div class="px-6 py-[13px] rounded-[40px] border border-[#222222] justify-center items-center gap-[18px] flex">
            <div class="text-[#222222] text-base font-semibold font-['Almarena Neue'] leading-tight">All Team</div>
            <div class="w-3.5 h-[15.40px] origin-top-left rotate-90 flex-col justify-center items-center inline-flex overflow-hidden"></div>
            </div>
        </div>
        <div class="justify-start items-center gap-[30px] inline-flex">
            <div class="w-[278px] h-[313px] relative rounded-xl  overflow-hidden">
            <div class="w-[278px] h-[313px] left-0 top-0 absolute bg-gradient-to-b from-black to-black rounded-2xl"></div>
            <div class="w-[238px] left-[20px] top-[245px] absolute justify-between items-center inline-flex">
                <div class="flex-col justify-start items-start gap-1 inline-flex">
                <div class="text-white text-base font-semibold font-['Almarena Neue'] leading-snug">Theresa Webb</div>
                <div class="text-[#fbf9f8] text-sm font-normal font-['Almarena Neue'] leading-snug">Properties Owner</div>
                </div>
                <div class="p-[8.21px] bg-[#eb6f20] rounded-[102.61px] justify-center items-center gap-[6.16px] flex">
                <div class="w-[18.47px] h-[18.47px] pl-[1.28px] pr-[1.79px] py-[2.24px] justify-center items-center flex">
                    <div class="grow shrink basis-0 self-stretch origin-top-left rotate-90 flex-col justify-center items-center inline-flex overflow-hidden"></div>
                </div>
                </div>
            </div>
            </div>
            <div class="w-[278px] h-[313px] relative rounded-xl overflow-hidden" style="background-image: url({face1}); background-size: cover; background-position: center;">
            <div class="w-[278px] h-[313px] left-0 top-0 absolute bg-gradient-to-b from-black to-black rounded-2xl opacity-50"></div>
            <div class="w-[238px] left-[20px] top-[245px] absolute justify-between items-center inline-flex">
                <div class="flex-col justify-start items-start gap-1 inline-flex">
                <div class="text-white text-base font-semibold font-['Almarena Neue'] leading-snug">Theresa Webb</div>
                <div class="text-[#fbf9f8] text-sm font-normal font-['Almarena Neue'] leading-snug">Properties Owner</div>
                </div>
                <div class="p-[8.21px] bg-[#eb6f20] rounded-[102.61px] justify-center items-center gap-[6.16px] flex">
                <div class="w-[18.47px] h-[18.47px] pl-[1.28px] pr-[1.79px] py-[2.24px] justify-center items-center flex">
                    <div class="grow shrink basis-0 self-stretch origin-top-left rotate-90 flex-col justify-center items-center inline-flex overflow-hidden"></div>
                </div>
                </div>
            </div>
            </div>
            <div class="w-[278px] h-[313px] relative rounded-xl overflow-hidden" style="background-image: url({face1}); background-size: cover; background-position: center;">
            <div class="w-[278px] h-[313px] left-0 top-0 absolute bg-gradient-to-b from-black to-black rounded-2xl opacity-50"></div>
            <div class="w-[238px] left-[20px] top-[245px] absolute justify-between items-center inline-flex">
                <div class="flex-col justify-start items-start gap-1 inline-flex">
                <div class="text-white text-base font-semibold font-['Almarena Neue'] leading-snug">Theresa Webb</div>
                <div class="text-[#fbf9f8] text-sm font-normal font-['Almarena Neue'] leading-snug">Properties Owner</div>
                </div>
                <div class="p-[8.21px] bg-[#eb6f20] rounded-[102.61px] justify-center items-center gap-[6.16px] flex">
                <div class="w-[18.47px] h-[18.47px] pl-[1.28px] pr-[1.79px] py-[2.24px] justify-center items-center flex">
                    <div class="grow shrink basis-0 self-stretch origin-top-left rotate-90 flex-col justify-center items-center inline-flex overflow-hidden"></div>
                </div>
                </div>
            </div>
            </div>
            <div class="w-[278px] h-[313px] relative rounded-xl overflow-hidden" style="background-image: url({face1}); background-size: cover; background-position: center;">
            <div class="w-[278px] h-[313px] left-0 top-0 absolute bg-gradient-to-b from-black to-black rounded-2xl opacity-50"></div>
            <div class="w-[238px] left-[20px] top-[245px] absolute justify-between items-center inline-flex">
                <div class="flex-col justify-start items-start gap-1 inline-flex">
                <div class="text-white text-base font-semibold font-['Almarena Neue'] leading-snug">Theresa Webb</div>
                <div class="text-[#fbf9f8] text-sm font-normal font-['Almarena Neue'] leading-snug">Properties Owner</div>
                </div>
                <div class="p-[8.21px] bg-[#eb6f20] rounded-[102.61px] justify-center items-center gap-[6.16px] flex">
                <div class="w-[18.47px] h-[18.47px] pl-[1.28px] pr-[1.79px] py-[2.24px] justify-center items-center flex">
                    <div class="grow shrink basis-0 self-stretch origin-top-left rotate-90 flex-col justify-center items-center inline-flex overflow-hidden"></div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div class="w-[1440px] h-[575px] left-0 top-[3290px] absolute">
        <div class="w-[1440px] h-[575px] left-0 top-0 absolute bg-[#161b26]">
            <div class="w-[1440px] h-[442px] left-0 top-[-75px] absolute"></div>
            <div class="left-[120px] top-[69px] absolute justify-center items-start gap-28 inline-flex">
            <div class="flex-col justify-start items-start gap-5 inline-flex">
                <div class="text-white text-[32px] font-bold font-['Almarena Neue'] leading-[39.15px]">Faxility</div>
                <div class="flex-col justify-start items-start gap-9 flex">
                <div class="w-[284px] text-white text-base font-normal font-['Almarena Neue'] leading-relaxed">You are unique. This is why we tailor our services to suit your particular vision, needs and
                identity.</div>
                <div class="justify-start items-start gap-3.5 inline-flex">
                    <div class="p-[11.53px] bg-white/10 rounded-[230.67px] justify-center items-center flex overflow-hidden">
                    <div class="w-[14.99px] h-[14.99px] px-[3.33px] justify-center items-center flex"></div>
                    </div>
                    <div class="p-[11.53px] bg-white/10 rounded-[230.67px] justify-center items-center flex overflow-hidden">
                    <div class="w-[14.99px] h-[14.99px] pt-[1.67px] pb-[1.14px] justify-center items-center flex"></div>
                    </div>
                    <div class="p-[11.53px] bg-white/10 rounded-[230.67px] justify-center items-center flex overflow-hidden"></div>
                    <div class="p-[11.53px] bg-white/10 rounded-[230.67px] justify-center items-center flex overflow-hidden">
                    <div class="w-[14.99px] h-[14.99px] pt-[2.50px] pb-[1.67px] justify-center items-center flex"></div>
                    </div>
                </div>
                </div>
            </div>
            <div class="h-48 justify-between items-start flex">
                <div class="flex-col justify-start items-start gap-5 inline-flex">
                <div class="w-[156px] text-white text-2xl font-semibold font-['Almarena Neue'] leading-loose">Categories</div>
                <div class="flex-col justify-start items-start gap-3 flex">
                    <div class="text-[#f7f7f7] text-base font-normal font-['Inter'] leading-relaxed">Recent Property</div>
                    <div class="text-[#f7f7f7] text-base font-normal font-['Inter'] leading-relaxed">To Sell</div>
                    <div class="text-[#f7f7f7] text-base font-normal font-['Inter'] leading-relaxed">To Buy</div>
                    <div class="text-[#f7f7f7] text-base font-normal font-['Inter'] leading-relaxed">To Rent</div>
                </div>
                </div>
                <div class="flex-col justify-start items-start gap-5 inline-flex">
                <div class="w-[213px] text-white text-2xl font-semibold font-['Almarena Neue'] leading-loose">Latest Properties </div>
                <div class="justify-start items-start gap-[15px] inline-flex">
                    <div class="flex-col justify-start items-start gap-3 inline-flex">
                    <img class="w-[61px] h-[61px] rounded" src={prop1} alt="Property thumbnail" />
                    <img class="w-[61px] h-[61px] rounded" src={prop1} alt="Property thumbnail" />
                    </div>
                    <div class="flex-col justify-start items-start gap-3 inline-flex">
                    <img class="w-[61px] h-[61px] rounded" src={prop1} alt="Property thumbnail" />
                    <img class="w-[61px] h-[61px] rounded" src={prop1} alt="Property thumbnail" />
                    </div>
                    <div class="flex-col justify-start items-start gap-3 inline-flex">
                    <img class="w-[61px] h-[61px] rounded" src={prop1} alt="Property thumbnail" />
                    <img class="w-[61px] h-[61px] rounded" src={prop1} alt="Property thumbnail" />
                    </div>
                </div>
                </div>
                <div class="flex-col justify-start items-start gap-5 inline-flex">
                <!-- telephone -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M8.07074 3.15669C6.89814 2.86007 5.66917 2.98591 4.70629 3.52297C3.72536 4.06902 3.03759 5.03752 3.00376 6.33298C2.9519 8.35763 3.42207 11.0744 5.2892 14.263C7.13266 17.4124 9.16779 19.3 10.8568 20.4213C11.9234 21.1302 13.1016 21.1493 14.1085 20.6875C15.1007 20.2325 15.9057 19.3235 16.324 18.1966C16.4281 17.9163 16.4699 17.6169 16.4466 17.3189C16.4232 17.021 16.3352 16.7316 16.1887 16.4708L15.1131 14.5585C14.7824 13.97 14.2503 13.5196 13.6139 13.2898C12.9775 13.06 12.2794 13.0661 11.6472 13.3069L10.8962 13.5934C10.5321 13.7316 10.1972 13.6676 10.0078 13.4811C9.37074 12.8575 8.91523 12.0114 8.7089 11.0991C8.64351 10.8115 8.77655 10.4722 9.09451 10.2328L9.77213 9.72275C10.32 9.31082 10.6981 8.71387 10.8358 8.04387C10.9734 7.37387 10.861 6.67686 10.5197 6.08355L9.42374 4.17912C9.27855 3.92699 9.08394 3.70654 8.8515 3.53089C8.61906 3.35524 8.35354 3.22798 8.07074 3.15669ZM4.13126 6.36332C4.15381 5.49369 4.59579 4.87236 5.2565 4.50383C5.93526 4.12519 6.86206 4.00947 7.79337 4.24541C7.92984 4.27976 8.05797 4.34113 8.17012 4.42587C8.28228 4.51061 8.37617 4.61699 8.44619 4.73866L9.541 6.64308C9.74576 6.99892 9.81327 7.41696 9.73087 7.81885C9.64847 8.22074 9.42181 8.57888 9.09338 8.82616L8.41575 9.33625C7.82945 9.77668 7.42355 10.5317 7.60846 11.3463C7.85877 12.4496 8.41237 13.4957 9.2174 14.2833C9.80596 14.8585 10.6448 14.8922 11.2988 14.6428L12.0497 14.3563C12.4291 14.2116 12.8481 14.2078 13.23 14.3456C13.612 14.4834 13.9314 14.7536 14.1299 15.1068L15.2044 17.0203C15.3397 17.2607 15.3623 17.5483 15.2664 17.8067C14.9395 18.6887 14.325 19.3505 13.6372 19.6662C12.9641 19.9752 12.203 19.9662 11.4825 19.4865C9.93675 18.4595 8.02113 16.6989 6.26223 13.6968C4.50221 10.6856 4.08503 8.17562 4.13239 6.36332H4.13126ZM15.0702 3.09602C14.9396 3.02361 14.7854 3.00589 14.6416 3.04677C14.4978 3.08764 14.3762 3.18377 14.3035 3.31399C14.2309 3.44421 14.2131 3.59786 14.2541 3.74114C14.2951 3.88442 14.3916 4.00559 14.5223 4.078L14.9552 4.31845C16.3078 5.06719 17.4583 6.13114 18.3085 7.41936C19.1587 8.70758 19.6832 10.1818 19.8373 11.7159L19.8734 12.0699C19.8776 12.1456 19.8973 12.2197 19.931 12.2877C19.9648 12.3557 20.0121 12.4162 20.0699 12.4655C20.1278 12.5148 20.1951 12.5519 20.2678 12.5746C20.3404 12.5972 20.4169 12.605 20.4927 12.5974C20.5684 12.5898 20.6419 12.567 20.7085 12.5304C20.7752 12.4937 20.8337 12.444 20.8806 12.3842C20.9274 12.3244 20.9617 12.2558 20.9812 12.1824C21.0007 12.1091 21.0051 12.0326 20.9941 11.9575L20.9592 11.6047C20.7871 9.8897 20.2009 8.24172 19.2506 6.80164C18.3002 5.36156 17.0141 4.17224 15.5021 3.33533L15.0702 3.09602ZM13.7488 6.10715C13.8258 5.97948 13.9506 5.88752 14.0956 5.85149C14.2407 5.81546 14.3941 5.83831 14.5223 5.91502L14.6621 5.99816C15.5722 6.54191 16.353 7.27612 16.9504 8.15005C17.5479 9.02397 17.9477 10.0168 18.1224 11.0598L18.172 11.3598C18.1862 11.4333 18.1855 11.509 18.1699 11.5823C18.1543 11.6556 18.1241 11.725 18.0812 11.7865C18.0383 11.848 17.9835 11.9003 17.92 11.9404C17.8565 11.9805 17.7856 12.0075 17.7114 12.0199C17.6373 12.0322 17.5614 12.0297 17.4883 12.0124C17.4151 11.9951 17.3462 11.9634 17.2855 11.9192C17.2248 11.875 17.1737 11.8191 17.135 11.7549C17.0963 11.6906 17.0709 11.6193 17.0603 11.5452L17.0095 11.2452C16.862 10.3628 16.524 9.52282 16.0188 8.78335C15.5137 8.04387 14.8534 7.4225 14.0837 6.96217L13.9439 6.87791C13.8803 6.84 13.8249 6.78999 13.7808 6.73073C13.7367 6.67148 13.7047 6.60414 13.6867 6.53256C13.6687 6.46099 13.665 6.38658 13.6758 6.31358C13.6867 6.24059 13.7119 6.17044 13.7499 6.10715H13.7488Z" fill="white"/>
</svg>

<!-- email -->
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21 6.75C21 5.7875 20.19 5 19.2 5H4.8C3.81 5 3 5.7875 3 6.75V17.25C3 18.2125 3.81 19 4.8 19H19.2C20.19 19 21 18.2125 21 17.25V6.75ZM19.2 6.75L12 11.125L4.8 6.75H19.2ZM19.2 17.25H4.8V8.5L12 12.875L19.2 8.5V17.25Z" fill="white"/>
</svg>

<!-- map pointer -->

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 12C12.55 12 13.021 11.804 13.413 11.412C13.8043 11.0207 14 10.55 14 10C14 9.45 13.8043 8.979 13.413 8.587C13.021 8.19567 12.55 8 12 8C11.45 8 10.9793 8.19567 10.588 8.587C10.196 8.979 10 9.45 10 10C10 10.55 10.196 11.0207 10.588 11.412C10.9793 11.804 11.45 12 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7873 16.525 14.262C17.5083 12.7373 18 11.3833 18 10.2C18 8.38333 17.4207 6.89567 16.262 5.737C15.104 4.579 13.6833 4 12 4C10.3167 4 8.89567 4.579 7.737 5.737C6.579 6.89567 6 8.38333 6 10.2C6 11.3833 6.49167 12.7373 7.475 14.262C8.45833 15.7873 9.96667 17.4833 12 19.35ZM12 22C9.31667 19.7167 7.31267 17.5957 5.988 15.637C4.66267 13.679 4 11.8667 4 10.2C4 7.7 4.80433 5.70833 6.413 4.225C8.021 2.74167 9.88333 2 12 2C14.1167 2 15.979 2.74167 17.587 4.225C19.1957 5.70833 20 7.7 20 10.2C20 11.8667 19.3377 13.679 18.013 15.637C16.6877 17.5957 14.6833 19.7167 12 22Z" fill="white"/>
</svg>

<!-- facebook -->

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M5.99123 15.5268V8.49147H3.86487V5.95843H5.99123V3.79487C5.99123 2.09473 7.24728 0.533447 10.1415 0.533447C11.3133 0.533447 12.1798 0.631729 12.1798 0.631729L12.1115 2.99717C12.1115 2.99717 11.2278 2.98964 10.2635 2.98964C9.21981 2.98964 9.0526 3.41043 9.0526 4.10883V5.95843H12.1945L12.0578 8.49147H9.0526V15.5268H5.99123Z" fill="white"/>
</svg>

<!-- twitter -->
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M15.586 3.64734C15.0244 3.89573 14.4289 4.05886 13.8192 4.13133C14.4619 3.74696 14.9429 3.14203 15.1726 2.42928C14.5695 2.78823 13.9082 3.03978 13.219 3.17586C12.7561 2.68053 12.1424 2.35202 11.4735 2.24141C10.8046 2.1308 10.1179 2.24428 9.52014 2.56422C8.92239 2.88415 8.44707 3.39261 8.1681 4.01055C7.88913 4.62849 7.82213 5.32128 7.97751 5.98122C6.75438 5.91992 5.55782 5.60207 4.4655 5.04831C3.37318 4.49455 2.40954 3.71725 1.63712 2.7669C1.36371 3.2365 1.22003 3.77034 1.2208 4.31374C1.2208 5.38028 1.76363 6.32252 2.58892 6.87417C2.10052 6.8588 1.62288 6.7269 1.19579 6.48949V6.52773C1.19594 7.23805 1.44174 7.92646 1.89151 8.47623C2.34128 9.02601 2.96734 9.40333 3.66354 9.5442C3.21017 9.66706 2.73478 9.68517 2.27337 9.59716C2.46966 10.2086 2.85225 10.7433 3.36756 11.1264C3.88287 11.5096 4.5051 11.722 5.14714 11.7339C4.50904 12.2351 3.77842 12.6055 2.99705 12.8241C2.21569 13.0427 1.3989 13.1052 0.593384 13.0079C1.99952 13.9122 3.6364 14.3923 5.30822 14.3907C10.9668 14.3907 14.0612 9.70308 14.0612 5.63773C14.0612 5.50533 14.0575 5.37146 14.0516 5.24053C14.6539 4.80521 15.1738 4.26595 15.5867 3.64808L15.586 3.64734Z" fill="white"/>
</svg>


<!-- instagram -->

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.14999 0.533447C10.1868 0.533447 10.441 0.540944 11.2401 0.578427C12.0385 0.615911 12.582 0.741105 13.0603 0.927022C13.5551 1.11744 13.9719 1.37532 14.3887 1.79139C14.7699 2.16614 15.0649 2.61946 15.2531 3.1198C15.4382 3.59733 15.5642 4.14159 15.6017 4.93999C15.6369 5.73913 15.6467 5.99327 15.6467 8.03011C15.6467 10.067 15.6392 10.3211 15.6017 11.1202C15.5642 11.9186 15.4382 12.4621 15.2531 12.9404C15.0654 13.441 14.7704 13.8945 14.3887 14.2688C14.0139 14.6499 13.5606 14.9449 13.0603 15.1332C12.5828 15.3184 12.0385 15.4443 11.2401 15.4818C10.441 15.517 10.1868 15.5268 8.14999 15.5268C6.11314 15.5268 5.85901 15.5193 5.05986 15.4818C4.26147 15.4443 3.71796 15.3184 3.23967 15.1332C2.73914 14.9454 2.28574 14.6504 1.91126 14.2688C1.52999 13.8941 1.23501 13.4408 1.0469 12.9404C0.860978 12.4629 0.735784 11.9186 0.6983 11.1202C0.663066 10.3211 0.65332 10.067 0.65332 8.03011C0.65332 5.99327 0.660817 5.73913 0.6983 4.93999C0.735784 4.14084 0.860978 3.59808 1.0469 3.1198C1.23449 2.61915 1.52953 2.16571 1.91126 1.79139C2.28585 1.40998 2.73921 1.11499 3.23967 0.927022C3.71796 0.741105 4.26072 0.615911 5.05986 0.578427C5.85901 0.543193 6.11314 0.533447 8.14999 0.533447ZM8.14999 4.28178C7.15587 4.28178 6.20246 4.67669 5.49952 5.37964C4.79657 6.08259 4.40165 7.03599 4.40165 8.03011C4.40165 9.02423 4.79657 9.97764 5.49952 10.6806C6.20246 11.3835 7.15587 11.7784 8.14999 11.7784C9.14411 11.7784 10.0975 11.3835 10.8005 10.6806C11.5034 9.97764 11.8983 9.02423 11.8983 8.03011C11.8983 7.03599 11.5034 6.08259 10.8005 5.37964C10.0975 4.67669 9.14411 4.28178 8.14999 4.28178ZM13.0228 4.09436C13.0228 3.84583 12.9241 3.60748 12.7484 3.43175C12.5726 3.25601 12.3343 3.15728 12.0857 3.15728C11.8372 3.15728 11.5989 3.25601 11.4231 3.43175C11.2474 3.60748 11.1487 3.84583 11.1487 4.09436C11.1487 4.34289 11.2474 4.58124 11.4231 4.75698C11.5989 4.93272 11.8372 5.03145 12.0857 5.03145C12.3343 5.03145 12.5726 4.93272 12.7484 4.75698C12.9241 4.58124 13.0228 4.34289 13.0228 4.09436ZM8.14999 5.78111C8.74646 5.78111 9.3185 6.01806 9.74027 6.43983C10.162 6.8616 10.399 7.43364 10.399 8.03011C10.399 8.62659 10.162 9.19863 9.74027 9.6204C9.3185 10.0422 8.74646 10.2791 8.14999 10.2791C7.55351 10.2791 6.98147 10.0422 6.5597 9.6204C6.13793 9.19863 5.90099 8.62659 5.90099 8.03011C5.90099 7.43364 6.13793 6.8616 6.5597 6.43983C6.98147 6.01806 7.55351 5.78111 8.14999 5.78111Z" fill="white"/>
</svg>

<!-- youtube -->

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M15.3641 4.7221C15.7067 5.92812 15.7067 8.44575 15.7067 8.44575C15.7067 8.44575 15.7067 10.9634 15.3641 12.1694C15.1737 12.836 14.6167 13.3605 13.9113 13.5379C12.6301 13.86 8.21005 13.86 8.21005 13.86C8.21005 13.86 3.79226 13.86 2.50883 13.5379C1.8004 13.3578 1.24414 12.834 1.05598 12.1694C0.713379 10.9634 0.713379 8.44575 0.713379 8.44575C0.713379 8.44575 0.713379 5.92812 1.05598 4.7221C1.24639 4.05547 1.80339 3.53096 2.50883 3.35364C3.79226 3.03149 8.21005 3.03149 8.21005 3.03149C8.21005 3.03149 12.6301 3.03149 13.9113 3.35364C14.6197 3.53367 15.1759 4.0575 15.3641 4.7221ZM6.71071 10.8145L11.2087 8.44575L6.71071 6.07701V10.8145Z" fill="white"/>
</svg>
                <div class="w-[190px] text-white text-2xl font-semibold font-['Almarena Neue'] leading-loose">Contact Us</div>
                <div class="flex-col justify-start items-start gap-[15px] flex">
                    <div class="justify-start items-center gap-2 inline-flex">
                    <div class="w-6 h-6 p-[3px] justify-center items-center flex overflow-hidden"></div>
                    <div class="text-white text-sm font-medium font-['Inter'] leading-none">250-200-333</div>
                    </div>
                    <div class="justify-start items-center gap-2 inline-flex">
                    <div class="w-6 h-6 px-[3px] py-[5px] justify-center items-center flex overflow-hidden"></div>
                    <div class="text-white text-sm font-medium font-['Inter'] leading-none">info@visulist@gmail.com</div>
                    </div>
                    <div class="justify-start items-center gap-2 inline-flex">
                    <div class="w-6 h-6 px-1 py-0.5 justify-center items-center flex overflow-hidden"></div>
                    <div class="text-white text-sm font-medium font-['Inter'] leading-[21px]">Social Entrepreneur, USA</div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="left-[120px] top-[336.78px] absolute opacity-10 text-white text-[80px] font-bold font-['Almarena Neue'] leading-[140px]">Property Management</div>
        </div>
        <div class="w-[1440px] px-[135px] py-[15px] left-0 top-[523px] absolute bg-[#1c202a] justify-between items-center inline-flex">
            <div class="text-white text-base font-medium font-['Almarena Neue'] leading-snug">Copyright © 2025 Faxility. All Rights Reserved </div>
        </div>
        </div>
    </div>
</div>