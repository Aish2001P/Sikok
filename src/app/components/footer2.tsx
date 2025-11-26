import React from 'react'
import ScrollReveal from './animation';
import Link from 'next/link';

const footer = () => {
    return (
        <>

            <section className="lg:px-[60px] px-[20px]  overflow-hidden bg-[#fff] text-[#070707] lg:pt-[40px] pt-[40px] lg:pb-[0px] pb-[20px] ">
                <div className="col-lg-12">
                    <div className="row items-center">
                        <div className="col-lg-7">
                            <ScrollReveal animation="fadeUp" delay={0.4}>
                                <p className="lg:text-[15vw] text-[12vw] lg:leading-[16vw] leading-[13vw]   uppercase ">Let`s talk</p>
                            </ScrollReveal>
                        </div>

                        <div className="col-lg-5 lg:pt-[0px] pt-[30px] ">
                            <ScrollReveal animation="fadeUp" delay={0.4}>
                                <p className="lg:text-[1.2vw] text-[3vw] lg:leading-[2vw] leading-[4vw] font-[th] tracking-widest m-0">Drop me an email anytime!</p>
                                <p className="lg:text-[1.2vw] text-[3vw] lg:leading-[2vw] leading-[4vw] font-[th] tracking-widest"> And feel free to reach out over my socials…</p>

                                <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw] font-[me] tracking-widest uppercase lg:pt-[40px] pt-[20px] ">E-MAIL: sikok@gmail.com</p>
                                <div className="flex gap-4 ">
                                    <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw] font-[th] tracking-widest uppercase ">Facebook</p>
                                    <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw] font-[th] tracking-widest uppercase ">Instagram</p>
                                    <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw] font-[th] tracking-widest uppercase ">LinkedIn</p>
                                    <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw] font-[th] tracking-widest uppercase ">Twitter</p>
                                </div>

                                <div className="lg:flex lg:pt-[100px] pt-[40px]">
                                    <div className="col-lg-3">
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw] font-[th] tracking-widest uppercase ">Work</p>
                                        <Link href="/about">
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw] font-[th] tracking-widest uppercase lg:pt-[20px] pt-[10px] text-black">About</p></Link>
                                        <Link href="/contact">
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw] font-[th] tracking-widest uppercase lg:pt-[20px] pt-[10px] text-black">Contact</p></Link>
                                    </div>
                                    <div className="col-lg-9">
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw] font-[th] tracking-widest uppercase lg:pt-[0px] pt-[10px]">Legal notice</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw] font-[th] tracking-widest uppercase lg:pt-[20px] pt-[10px] ">PRIVACy POLICy</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw] font-[th] tracking-widest uppercase lg:pt-[20px] pt-[10px]">DESIGNED BY Script studio.io</p>
                                    </div>
                                </div>


                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default footer
