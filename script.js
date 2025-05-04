function showNextView() {
    // Ganti tampilan
    document.getElementById("view1").classList.add("hidden");
    document.getElementById("view2").classList.remove("hidden");

    // Tembakkan confetti 🎉
    confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
    });

    // Bisa diulang beberapa kali jika ingin efek berulang
    setTimeout(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        });
    }, 500);
}