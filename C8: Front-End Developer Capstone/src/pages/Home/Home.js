import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Menu from "../../components/Menu/Menu";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
    return (
        <main>
            <section id="home">
                <Hero />
            </section>

            <section id="menu">
                <Menu />
            </section>

            <section id="about">
                <Testimonials />
                <About />
            </section>
        </main>
    );
}

export default Home