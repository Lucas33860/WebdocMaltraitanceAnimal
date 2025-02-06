gsap.set(".titledoc, .startbutton, .logo", { opacity: 0 });
gsap.delayedCall(1, () => {
  const tl = gsap.timeline({ repeat: 0 });

  tl.fromTo(
    [".titledoc", ".startbutton", ".logo"],
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
