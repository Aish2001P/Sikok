import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import ScrollReveal from "../components/animation";
import TextReveal from "../components/text";


export default function Home() {
    return (
        <>

            <Header />

            <section className="lg:px-[60px] px-[20px]  overflow-hidden bg-[#070707] text-[#fff] lg:pt-[150px] pt-[150px] lg:pb-[60px] pb-[30px] ">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="lg:flex items-center lg:pb-[60px] pb-[40px]">
                            <div className="col-lg-8 ">
                                <ScrollReveal animation="fadeUp" delay={0.2}>
                                    <p className="lg:text-[10vw] text-[7vw] lg:leading-[11vw] leading-[8vw] tracking-[10px] font-[me] m-0">ABOUT</p>
                                </ScrollReveal>
                            </div>
                            <div className="col-lg-4 ">
                                <ScrollReveal animation="fadeUp" delay={0.3}>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[2vw] leading-[4vw] lg:pt-[200px] pt-[50px]"><span className="text-[#FF0000]">*</span> <span className="uppercase font-[sb]">Narendar Singh</span> - from Film to Stage, Live Events to Tours and Creative Concept Creation, Alex has turned productions to unique works of passion</p>
                                </ScrollReveal>
                            </div>
                        </div>


                        <ScrollReveal animation="fadeUp" delay={0.4}>
                            <hr className="border-2 !border-[#C1C1C1]"></hr>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* <section className="lg:px-[60px] px-[20px]  overflow-hidden bg-[#070707] text-[#fff] lg:pt-[60px] pt-[50px] lg:pb-[60px] pb-[40px] ">
                <div className="row">

                    <TextReveal />

                </div>
            </section> */}

            <section className="lg:px-[60px] px-[20px]  overflow-hidden bg-[#070707] text-[#fff] lg:pt-[60px] pt-[10px] lg:pb-[100px] pb-[20px] ">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="col-lg-10">
                            <ScrollReveal animation="fadeUp" delay={0.2}>
                                <p className="lg:text-[3.5vw] text-[6vw] lg:leading-[4.5vw] leading-[8vw] ">"It’s a blend of creativity, curiosity, and a good dose of professionalism. But honestly, it’s that <span className="text-[#DE0000]">curiosity</span> that  really drives how I do things."</p>
                            </ScrollReveal>
                        </div>
                    </div>
                    <div className="col-lg-6 lg:pt-[0px] pt-[30px]">
                        <ScrollReveal animation="fadeUp" delay={0.2}>
                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[2vw] leading-[4vw] "> An accomplised show -film stage director, producer, choreographrer, and creator of worldwide productions,He has worked with super stars including Salman Khan , Hritik Roshan, David Garrett, Heidi Klum as well as fortune 500 companies.</p>

                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[2vw] leading-[4vw] lg:pt-[20px] pt-[10px]">A Brooklyn native of New York City where he has worked, trained, and refined his production skills from some of the best the city has to offer. Now based in Germany. He applies over three decades of experience to international endeavours, creating productions for Presidents, Governments, Corporate Brands, Theatres, Opera Houses, Tours and Events.</p>

                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[2vw] leading-[4vw] lg:pt-[20px] pt-[10px]">He is passionate about communicating transformative stories that visually impact through the hybrid use of multimedia, technology, and the human element, paying close attention to details and creating unforgettable moments on complete productions. He creatively conceives from the beginning phases, and is comfortable taking on his various roles throughout, and to the productions end. Either leading a team or working together on one. He pushes to reinvent experiences which has led his journey around the globe to develop and execute productions with some of the top agencies in the world.</p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <section className="lg:px-[60px] px-[20px]  overflow-hidden bg-[#070707] text-[#fff] lg:pt-[60px] pt-[50px] lg:pb-[100px] pb-[40px] ">
                <div className="row ">
                    <div className="col-lg-6">
                        <ScrollReveal animation="fadeUp" delay={0.2}>
                            <Image src="/image/sardarji.png" className="w-full" alt="Sikok" width={1830} height={1830} />
                        </ScrollReveal>
                    </div>
                   
                </div>
            </section>

            <section className=" overflow-hidden bg-[#070707]   ">
                <ScrollReveal animation="fadeUp" delay={0.2}>
                    <Image src="/image/12.png" className="w-full" alt="Sikok" width={1830} height={1830} />
                </ScrollReveal>
            </section>

            <Footer />

        </>
    );
}
