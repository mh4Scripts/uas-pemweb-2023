document.addEventListener("DOMContentLoaded", function () {
    var sections = document.querySelectorAll('section');

    // update subsection
    var introduction = document.getElementById('sub-section');
    var defaultSubSection = "Kata-kata motivasi: Pekerjaan yang paling mudah adalah yang tidak dikerjakan. Selamat mengerjakan!";
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var sectionTitle = entry.target.querySelector('h2') || null;
                introduction.textContent = sectionTitle && sectionTitle.textContent ? 
                    sectionTitle.textContent : defaultSubSection;
            }
        });
    }, { threshold: 1.0 }); // Menggunakan threshold 1.0 agar mendeteksi saat bagian terlihat sepenuhnya

    sections.forEach(function (section) {
        observer.observe(section);
    });
});