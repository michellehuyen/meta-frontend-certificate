import Hero from "../hero/Hero";
import Menu from "../menu/Menu";
import Testimonials from "../testimonials/Testimonials";

const Main = () => {
    return (
        <main className="main">
            <Hero />
            <Menu />
            <Testimonials />
        </main>
    );
}

export default Main;