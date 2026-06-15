/* MAMBAL — team member profiles */
(function () {
  "use strict";

  var members = {
    alfredo: {
      name: "Prof. Alfredo Iacoangeli",
      role: "Professor of Bioinformatics & AI for Genomic Medicine",
      image: "img/alfredo.webp",
      research: "Leads MAMBAL's programme in machine learning and multi-omics for ALS genetics — from GWAS and rare-variant analysis to interpretable models that connect genomic risk to molecular phenotypes and clinical outcomes."
    },
    ammar: {
      name: "Prof. Ammar Al-Chalabi",
      role: "Professor of Neurology",
      image: "img/ammar.jpg",
      research: "Clinical and genetic epidemiology of motor neuron disease, including familial ALS cohorts, phenotype–genotype relationships and the translational implications of oligogenic and polygenic risk."
    },
    aak: {
      name: "Dr. Ahmad Al Khleifat",
      role: "Senior Research Fellow",
      image: "img/aak.jpeg",
      research: "Statistical genetics and bioinformatics in ALS, with a focus on rare variants, gene–environment interactions and integrative analyses across large clinical and genomic datasets."
    },
    emeka: {
      name: "Emeka Uzochukwu",
      role: "Research Fellow",
      initials: "EU",
      research: "Computational approaches to motor neuron disease, supporting multi-omics data integration and analysis pipelines across the group's ALS genetics programme."
    },
    simon: {
      name: "Simon Topp",
      role: "Senior Bioinformatician",
      image: "img/simon.jpeg",
      research: "Production bioinformatics for ALS genomics — variant calling, quality control and pipeline development for large-scale sequencing and array-based studies."
    },
    aminah: {
      name: "Aminah Ali",
      role: "Bioinformatics",
      image: "img/aminah.jpeg",
      research: "Bioinformatics support for genomic datasets in ALS, including data processing, annotation and reproducible workflows for downstream statistical analysis."
    },
    esteban: {
      name: "Esteban Gomez Cifuentes",
      role: "ML for Genomics",
      image: "img/Esteban.png",
      research: "Machine-learning methods for genomic medicine — predictive modelling, representation learning and interpretable AI applied to ALS molecular and clinical data."
    },
    ramya: {
      name: "Ramya Lakshmanan",
      role: "Research Associate",
      initials: "RL",
      research: "Research associate supporting multi-omics and statistical genetics projects in ALS, contributing to data analysis and interpretation across the group's core research themes."
    },
    nogayhan: {
      name: "Nogayhan Seymen",
      role: "Bioinformatician",
      image: "img/nogayhan.jpeg",
      research: "Bioinformatics for ALS genomics — sequence and array data processing, variant annotation and tooling that underpins the group's rare-variant and GWAS analyses."
    },
    triparna: {
      name: "Triparna Roy",
      role: "NIHR Predoctoral Fellow",
      image: "img/triparna.jpeg",
      research: "Predoctoral research in computational genomics for motor neuron disease, building skills in statistical genetics and multi-omics analysis within the MAMBAL programme."
    },
    dharti: {
      name: "Dharti Vasant Kumar",
      role: "NIHR Predoctoral Fellow",
      initials: "DK",
      research: "Predoctoral training in bioinformatics and statistical methods for ALS, with projects spanning genomic data analysis and clinical–genetic integration."
    },
    mandy: {
      name: "Mandy Miresmaeili",
      role: "NIHR Predoctoral Fellow",
      image: "img/mandy.jpeg",
      research: "Predoctoral research in computational approaches to ALS genetics, developing expertise in genomic data analysis and machine-learning methods for neurodegenerative disease."
    },
    renato: {
      name: "Renato Santos",
      role: "PhD Researcher",
      image: "img/renato.jpeg",
      research: "Long-read and short-read sequencing in ALS genomics — evaluating Nanopore performance against array and Illumina platforms for variant discovery and structural variation."
    },
    johanna: {
      name: "Johanna Vallikivi",
      role: "PhD Researcher",
      image: "img/johanna.jpeg",
      research: "PhD research in statistical genetics and multi-omics for ALS, investigating molecular mechanisms of disease risk and progression through integrative genomic analyses."
    },
    abed: {
      name: "Abed Alah Mosa Al Refaee",
      role: "PhD Researcher",
      image: "img/abed.png",
      research: "PhD research applying computational and statistical methods to ALS genetics, with interests in variant interpretation and genomic predictors of disease phenotype."
    },
    anqi: {
      name: "Anqi Jiang",
      role: "PhD Researcher",
      initials: "AJ",
      research: "PhD research in machine learning and multi-omics for motor neuron disease, developing models for patient stratification and biomarker discovery."
    },
    narges: {
      name: "Narges Matinazad",
      role: "PhD Researcher",
      image: "img/narges.jpeg",
      research: "PhD research in computational genomics for ALS, focusing on integrative analyses that link genetic variation to molecular and clinical outcomes."
    },
    yusuf: {
      name: "Yusuf Abdulle",
      role: "PhD Researcher",
      image: "img/yusuf.png",
      research: "PhD research in statistical genetics and machine learning for ALS, working on methods for rare-variant analysis and polygenic risk modelling in motor neuron disease."
    },
    indu: {
      name: "Indu Navar",
      role: "PhD Researcher",
      image: "img/indu.png",
      research: "PhD research in multi-omics and computational biology for ALS, exploring molecular subtypes and pathways that underpin genetic risk and disease progression."
    },
    yadusayan: {
      name: "Yadusayan Appulingam",
      role: "BSc, Biochemistry",
      initials: "YA",
      research: "Visiting student supporting laboratory and computational projects in ALS genomics, gaining experience in bioinformatics workflows and genomic data analysis."
    }
  };

  var overlay = document.getElementById("teamModal");
  if (!overlay) return;

  var portraitEl = overlay.querySelector(".team-modal-portrait");
  var nameEl = overlay.querySelector(".team-modal-name");
  var roleEl = overlay.querySelector(".team-modal-role");
  var researchEl = overlay.querySelector(".team-modal-research");
  var closeBtn = overlay.querySelector(".team-modal-close");

  function openModal(id) {
    var person = members[id];
    if (!person) return;

    nameEl.textContent = person.name;
    roleEl.textContent = person.role;
    researchEl.textContent = person.research;

    if (person.image) {
      portraitEl.innerHTML = '<img src="' + person.image + '" alt="">';
      portraitEl.hidden = false;
    } else if (person.initials) {
      portraitEl.innerHTML = '<span class="initials">' + person.initials + '</span>';
      portraitEl.hidden = false;
    } else {
      portraitEl.innerHTML = "";
      portraitEl.hidden = true;
    }

    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeModal() {
    overlay.hidden = true;
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-person]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      openModal(btn.getAttribute("data-person"));
    });
  });

  closeBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !overlay.hidden) closeModal();
  });
})();
