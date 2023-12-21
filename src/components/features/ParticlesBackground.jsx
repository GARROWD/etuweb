import {useCallback} from "react";
import {Particles} from "react-tsparticles";
import {loadFull} from "tsparticles";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);


    /*TODO Мне страшно представить сколько эта библиотека весит и какой колхоз здесь твориться.
       Почему нельзя юзануть малюсенький particles.min.js просто в скрипте...*/
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            className="-z-10"
            options={{
                "particles": {
                    "number": {"value": 80, "density": {"enable": true, "value_area": 800}},
                    "color": {"value": "#ffffff"},
                    "shape": {
                        "type": "circle",
                        "stroke": {"width": 0, "color": "#000000"},
                        "polygon": {"nb_sides": 5}},
                    "opacity": {
                        "value": 0.5,
                        "random": true,
                        "anim": {"enable": true, "speed": 0.1, "opacity_min": 0.1, "sync": false}
                    },
                    "size": {
                        "value": 1.5,
                        "random": true,
                        "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}
                    },
                    "line_linked": {"enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1},
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {"enable": false, "mode": "repulse"},
                        "onclick": {"enable": false, "mode": "push"},
                        "resize": true
                    },
                    "modes": {
                        "grab": {"distance": 400, "line_linked": {"opacity": 1}},
                        "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
                        "repulse": {"distance": 200, "duration": 0.4},
                        "push": {"particles_nb": 4},
                        "remove": {"particles_nb": 2}
                    }
                },
                "retina_detect": true
            }}
        />
    );
};

export default ParticlesBackground;