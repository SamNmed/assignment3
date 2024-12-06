gsap.registerPlugin(Draggable);

gsap.set(".circle", {transformOrigin:"50% 50%"})

Draggable.create(".container", {
  type:"x,y",
  overshootTolerance:0,
  inertia:true
})