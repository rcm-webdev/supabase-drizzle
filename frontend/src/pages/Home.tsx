
import { ArrowRight } from "lucide-react";
import doodle from "../assets/images/Chill-Time.svg";
import Features from "../components/Features";
import Compare from "../components/Compare";
import Footer from "../components/Footer";

const Home = () => {
    return (
      <div className="relative min-h-screen w-screen top-0 bg-[#6C87C2]/30 bg-[radial-gradient(#ffffff33_1px,#ffff_1px)] bg-[size:20px_20px]">
        {/* Hero Section  */}
        <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-5xl bg-base-100/75">
                        <img src={doodle} alt="Relaxing Doodle" className="w-3/4 mx-auto mb-8" />
                        <h1 className=" text-4xl md:text-6xl lg:text-7xl font-chillax mb-8">
                        Soundex
                        </h1>
                        <p className="text-2xl mb-10 text-base-content/80 max-w-xl mx-auto font-synonym">
                        Organize <mark className="bg-primary/20 text-primary-content rounded-2xl px-3">therapy resources</mark>, generate <mark className="bg-primary/20 text-primary-content rounded-2xl px-3">AI-powered activities</mark>, and share with your colleagues.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                className="btn btn-primary btn-lg w-full sm:w-auto" 
                                
                            >
                                Join the community
                                
                            </button>
                            
                            <button className="btn btn-outline btn-lg w-full sm:w-auto">
                                Browse Top Resources
                                <ArrowRight className="w-4 h-4"/>
                            </button>
                        </div>
                    </div>
                    
                </div>
      
      
      </div>
      <Features/>
      <Compare/>
      <Footer/>
      </div>
        
    )
}

export default Home;
