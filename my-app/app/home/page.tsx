import HeroSection from "@/components/HeroSection"
import Layout from "./layout"
import PopularDestinations from "@/components/PopularDestinations"
import DealsSection from "@/components/DealsSection"

export default function Home() {
    return(
        <div>
            <HeroSection />
            <PopularDestinations />
            <DealsSection />
        </div>
    )
}