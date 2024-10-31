import About from "../about/About";
import Hero from "../hero/Hero";
import Menu from "../menu/Menu";
import Testimonials from "../testimonials/Testimonials";

const Main = () => {
    return (
        <main className="main">
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

export default Main;