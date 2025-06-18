particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#fefefe" },
    shape: { type: "circle" },
    opacity: { value: 0.2 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#fefefe",
      opacity: 0.2,
      width: 1,
    },
    move: { enable: true, speed: 1 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  }
});
