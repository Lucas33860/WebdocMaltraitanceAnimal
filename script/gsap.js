gsap.set("h1, button, .top-image, .bot-image", { opacity: 0 });
gsap.delayedCall(1, () => {
  const tl = gsap.timeline();

  tl.fromTo(
    ".top-image",
    { y: 280, opacity: 0 },
    { y: 280, opacity: 1, duration: 1, ease: "power2.out" },
    0
  );
  tl.fromTo(
    ".bot-image",
    { y: -280, opacity: 0 },
    { y: -280, opacity: 1, duration: 1, ease: "power2.out" },
    0
  );

  tl.to(
    [".top-image", ".bot-image"],
    {
      y: (i) => (i === 0 ? 0 : 0),
      duration: 1,
      ease: "bounce.out",
    },
    "-=0.5"
  );

  tl.fromTo(
    ["h1", "button"],
    { scale: 0.5, y: 50, opacity: 0 },
    {
      scale: 1,
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "elastic.out(1, 0.5)",
    },
    "+=0.25"
  );
});
