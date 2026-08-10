let tween = gsap.to("#heading", {
    text: { value: "Signature fragrances crafted to leave a lasting impressions" },
    duration: 3,
    delay: 3,
    ease: "none"
})

gsap.to("#simpleheading", {
    text: { value: "Crafted for those who appreciate luxury and individuality." },
    duration: 4,
    delay: 5,
    ease: "none"
})
gsap.to("#simpleheadingg", {
    text: { value: "Ready to find your signature scent?" },
    duration: 4,
    delay: 8,
    ease: "none"
})
gsap.to("#simpleheadinggs", {
    text: { value: "Upgrade your setup with must-have gadgets" },
    duration: 4,
    delay: 12,
    ease: "none"
})

gsap.from(".card-custom", {
    scale: 1,
    opacity: 0,
    duration: 1,
    stagger: 0.25,
    ease: "back.out(1.7)"
});











// let tween = gsap.to("#text", {
//     text: { value: "Mehak Ilyas!" },
//     duration: 3,
//     delay: 1,
//     ease: "none"
// })
// gsap.to("#textok", {
//     text: { value: "MEHAK ILYAS" },
//     duration: 4,
//     delay: 4,
//     ease: "none"
// })
// gsap.to("#para", {
//     text: { value: "Student | Learner | Builder" },
//     duration: 4,
//     delay: 4,
//     ease: "none"
// })