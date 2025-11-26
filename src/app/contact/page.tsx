import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import Footer2 from "../components/footer2";
import ScrollReveal from "../components/animation";


export default function Home() {
    return (
        <>

            <Header />

            <section className="lg:px-[60px] px-[20px]  overflow-hidden bg-[#070707] text-[#fff] lg:pt-[150px] pt-[150px] lg:pb-[60px] pb-[30px] ">
                <div className="row">
                    <div className="col-lg-12">
                        <div className=" items-center lg:pb-[60px] pb-[40px]">
                            <div className="flex justify-center ">
                                <ScrollReveal animation="fadeUp" delay={0.2}>
                                    <p className="lg:text-[10vw] text-[7vw] lg:leading-[11vw] leading-[8vw] tracking-[10px] font-[me] m-0">CONTACT</p>
                                </ScrollReveal>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>



            <section className="lg:px-[60px] px-[20px]  overflow-hidden bg-[#070707] text-[#fff] lg:pt-[60px] pt-[10px] lg:pb-[100px] pb-[20px] ">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="col-lg-8">
                            <ScrollReveal animation="fadeUp" delay={0.2}>
                                <p className="lg:text-[4vw] text-[6vw] lg:leading-[5vw] leading-[8vw] font-[th] text-[#A1A1A1] tracking-wide">Get in touch today and lets create something amazing together</p>
                            </ScrollReveal>
                        </div>
                    </div>
                    <div className="col-lg-5 lg:pt-[220px] pt-[30px]">
                        <ScrollReveal animation="fadeUp" delay={0.2}>
                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[2vw] leading-[4vw] "> Get in touch with Sikok to discuss your next visionary production. Whether you’re planning an opening ceremony, corporate event. theatre production, or world tour, Sikok’s expertise and passion will ensure an unforgettable experience.</p>
 </ScrollReveal>

 <ScrollReveal animation="fadeUp" delay={0.2}>
                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[2vw] leading-[4vw] lg:pt-[20px] pt-[10px] uppercase text-[#D80000] m-0">Get in touch</p>
                            </ScrollReveal>

<ScrollReveal animation="fadeUp" delay={0.2}>
                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[2vw] leading-[4vw] m-0">sikokawards@gmail.com</p>
                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[2vw] leading-[4vw] m-0">+91-8899777779</p>
                            </ScrollReveal>
                       
                    </div>
                </div>
            </section>


            <Footer2 />

        </>
    );
}
