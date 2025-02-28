const quizData = [
    {
    question: " বৈশিষ্ট্যের ভিন্নতায় বায়োমেট্রিকস কত প্রকার?",
    a: "4",
    b: "3",
    c: "1",
    d: "2",
    correct: "d",
    },
    {
    question: " নিচের কোনটি Googleplex–এর উদাহরণ?",
    a: "MAN",
    b: "CAN",
    c: "WAN",
    d: "LAN",
    correct: "b",
    },
    {
        question: " PAN (Personal Area Network)–এর পরিধি সর্বোচ্চ কত?",
        a: "১ মিটার",
        b: " ১০ মিটার",
        c: "২ মিটার",
        d: "৫ মিটার",
        correct: "b",
        },{
            question: "4K ভিডিও উপভোগ করা যায় কোন প্রজন্মের মোবাইলে?",
            a: "প্রথম ",
            b: "চতুর্থ ",
            c: "পঞ্চম",
            d: "তৃতীয় ",
            correct: "c",
            },{
                question: "বায়োমেট্রিকসের পাসওয়ার্ড কেমন?",
                a: " মানুষের বৈশিষ্ট্য ",
                b: " শব্দ ও সংখ্যা",
                c: " নির্দিষ্ট শব্দ ",
                d: " নির্দিষ্ট সংখ্যা",
                correct: "b",
                },{
                    question: " কোনটি DNA-এর পূর্ণরূপ নির্দেশ করে?",
                    a: "Deoxyribo Nucleic Acid",
                    b: "Deoxyribo Neucleon Acid",
                    c: "Deoxyribo Neucleas Acid",
                    d: "i dont know",
                    correct: "a",
                    },{
                        question: "কোনটি নতুন পণ্যের ডিজাইন তৈরিতে প্রয়োজন?",
                        a: "PLA",
                        b: "GPS",
                        c: "MICR",
                        d: "CAD ",
                        correct: "d",
                        },{
                            question: "UAV–এর পূর্ণরূপ কী?",
                            a: " United Aerial Vehicle",
                            b: "Unmanned Aerial Vehicle",
                            c: "Unnamed Aerial Vehicle",
                            d: " United Aerial Vehicle",
                            correct: "b",
                            },{
                                question: "LTE–এর পূর্ণ রূপ কী?",
                                a: "Long Terminal Equipment",
                                b: "Long Term Evolution",
                                c: "Long Term Engine",
                                d: "Long Term Evolution",
                                correct: "d",
                                },{
                                    question: "দ্রুত চলনশীল ডিভাইসের ক্ষেত্রে 4G-নেটওয়ার্কে ডেটা ট্রান্সফারের হার সর্বোচ্চ কত?",
                                    a: " 1 Mbps",
                                    b: "100 Mbps",
                                    c: "10 Mbps",
                                    d: "4 Mbps",
                                    correct: "b",
                                    },{
                                        question: "FOMA–এর পূর্ণ রূপ কী?",
                                        a: "Freedom of Media Access",
                                        b: " Freedom of Multimedia Access",
                                        c: "Freedom of Multimedia Accuracy",
                                        d: "none above",
                                        correct: "b",
                                        },{
                                            question: "UMTS–এর পূর্ণ রূপ কী?",
                                            a: "Unique Mobile Telecommunication System",
                                            b: " Universal Mobile Telecommunication System",
                                            c: "Unique Mobile Telecommunication Standard",
                                            d: "Universal Mobil elecommunication System",
                                            correct: "b",
                                            },{
                                                question: "PAN (Personal Area Network)–এর জন্য প্রযোজ্য—",
                                                a: "এর ব্যাপ্তি ৩ থেকে ১০ মিটার হয়ে থাকে",
                                                b: "হাফ ডুপ্লেক্স মোডে ডেটা ট্রান্সফার করতে পারে",
                                                c: "এটি স্থাপন করা সহজ ও স্বয়ংক্রিয়ভাবে কনফিগারেশন করা যায়",
                                                d: "all",
                                                correct: "b",
                                                },{
                                                    question: " পৃথিবীর সবচেয়ে বড় WAN–এর উদাহরণ কোনটি?",
                                                    a: "Internet",
                                                    b: "HEXAGON",
                                                    c: "MS",
                                                    d: "AMAZON",
                                                    correct: "a",
                                                    },{
                                                        question: "MIST–এর পূর্ণরূপ কী?",
                                                        a: " Malaysia Institute of Science and Technology",
                                                        b: " Military Institute of Science and Technology",
                                                        c: " Multinational Institute of Science and Technology",
                                                        d: " Malaysia Institute of Science and Technology",
                                                        correct: "b",
                                                        },{
                                                            question: "বায়োমেট্রিকস পদ্ধতি ব্যবহৃত হয়—",
                                                            a: "বাড়ির নিরাপত্তায়",
                                                            b: "শিক্ষার্থীদের উপস্থিতি নির্ণয় করতে",
                                                            c: "অপরাধপ্রবণতা শনাক্তকরণে",
                                                            d: "all",
                                                            correct: "b",
                                                            },{
                                                                question: "চালকবিহীন বিমানকে কী বলা হয়?",
                                                                a: "মিসাইল",
                                                                b: "ফাইটার",
                                                                c: "ড্রোন",
                                                                d: "রকেট ",
                                                                correct: "c",
                                                                },
    
    ];
    const quiz = document.getElementById("quiz");
    const answerElements = document.querySelectorAll(".answer");
    const questionElement = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitButton = document.getElementById("submit");
    let currentQuiz = 0;
    let score = 0;
    const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
    };
    const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
    };
    const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    };
    loadQuiz();
    submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
    quiz.innerHTML = `
    <h2>You answered ${score}/${quizData.length} questions correctly</h2>
    <button onclick="history.go(0)">Try again</button>
    ` // location.reload() won't work in CodePen for security reasons;
    }
    }
    });