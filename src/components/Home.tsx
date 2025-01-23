import Hero from './Hero';
import Services from './Services';
import Portfolio from './Portfolio';
import About from './About';
import Testimonials from './Testimonials';
import Contact from './Contact';

function Home() {
    return (
        <div>
                <Hero />
                <Services />
                <Portfolio />
                <About />
                <Testimonials />
                <Contact />
                </div>
    )
}

export default Home