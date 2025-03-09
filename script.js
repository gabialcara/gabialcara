const quotesAndSongs = [
    {
        quote: "A vida é 10% o que acontece com você e 90% como você reage a isso.",
        song: "Eye of the Tiger - Survivor",
        youtubeLink: "https://www.youtube.com/watch?v=btPJPFnesV4"
    },
    {
        quote: "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.",
        song: "Stronger - Kanye West",
        youtubeLink: "https://www.youtube.com/watch?v=PsO6ZnUZI0g"
    },
    {
        quote: "Não importa quão devagar você vá, desde que não pare.",
        song: "Don't Stop Believin' - Journey",
        youtubeLink: "https://www.youtube.com/watch?v=1k8craCGpgs"
    },
    {
        quote: "A persistência realiza o impossível.",
        song: "Rise Up - Andra Day",
        youtubeLink: "https://www.youtube.com/watch?v=lwgr_IMeEgA"
    },
    {
        quote: "O que você faz hoje pode melhorar todos os seus amanhãs.",
        song: "Happy - Pharrell Williams",
        youtubeLink: "https://www.youtube.com/watch?v=YQHsXMglC9A"
    },
    {
        quote: "Nunca é tarde para ser o que você poderia ter sido.",
        song: "Unwritten - Natasha Bedingfield",
        youtubeLink: "https://www.youtube.com/watch?v=bw9TtShsUXs"
    },
    {
        quote: "Grandes coisas nunca vêm da zona de conforto.",
        song: "On Top of the World - Imagine Dragons",
        youtubeLink: "https://www.youtube.com/watch?v=w5tWYmIPl9o"
    },
    {
        quote: "A única maneira de fazer um excelente trabalho é amar o que você faz.",
        song: "Work Hard, Play Hard - Wiz Khalifa",
        youtubeLink: "https://www.youtube.com/watch?v=8cLzsqL1IEo"
    },
    {
        quote: "A vida começa onde termina a sua zona de conforto.",
        song: "The Climb - Miley Cyrus",
        youtubeLink: "https://www.youtube.com/watch?v=NG2zyeYbXzA"
    },
    {
        quote: "Não espere por uma oportunidade, crie-a.",
        song: "Started From the Bottom - Drake",
        youtubeLink: "https://www.youtube.com/watch?v=9jK-NcRmVcw"
    },
    {
        quote: "A felicidade não é algo pronto, ela vem das suas próprias ações.",
        song: "Happy - Pharrell Williams",
        youtubeLink: "https://www.youtube.com/watch?v=YQHsXMglC9A"
    },
    {
        quote: "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
        song: "Dream On - Aerosmith",
        youtubeLink: "https://www.youtube.com/watch?v=Jc3hBqtne14"
    }
];

function generateQuote() {
    const quoteElement = document.getElementById("quote");
    const songElement = document.getElementById("song");
    const youtubeLinkElement = document.getElementById("youtube-link");

    quoteElement.style.opacity = 0; // Faz a citação desaparecer

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotesAndSongs.length);
        quoteElement.textContent = quotesAndSongs[randomIndex].quote; // Troca a citação
        songElement.textContent = `Sugestão de música: ${quotesAndSongs[randomIndex].song}`; // Troca a música
        youtubeLinkElement.href = quotesAndSongs[randomIndex].youtubeLink; // Atualiza o link do YouTube
        youtubeLinkElement.textContent = `Ouça "${quotesAndSongs[randomIndex].song}" no YouTube`; // Atualiza o nome da música no link
        quoteElement.style.opacity = 1; // Faz a nova citação aparecer com animação
    }, 500); // Espera 500ms para que a citação desapareça
}
