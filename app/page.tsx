import { Download, FeaturesGallery, Footer, Hero, Navbar, Privacy } from "@/lib/websiteComponents";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <FeaturesGallery />
            <Download />
            <Footer />
        </div>
    )
}