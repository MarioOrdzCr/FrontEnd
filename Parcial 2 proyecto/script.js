document.addEventListener('DOMContentLoaded', function() {
    const challengeCards = document.querySelectorAll('.challenge-card');
    const challengeDetail = document.querySelector('.challenge-detail');
    const closeDetailBtn = document.querySelector('.close-detail');
    const detailTitle = document.querySelector('.detail-title');
    const detailDescription = document.querySelector('.detail-description');
    const detailSubdescription = document.querySelector('.detail-subdescription');
    const detailImage = document.querySelector('.detail-image');
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    
    const challenges = {
        1: {
            title: "90min",
            description: "Juego de soccer",
            subdescription: "Partido de fútbol rápido 5vs5. Ideal para mejorar tu resistencia y trabajo en equipo. Requiere calzado deportivo y ropa cómoda.",
            image: "assets/images/soccer.jpg"
        },
        2: {
            title: "45min",
            description: "Rutina individual de pilates",
            subdescription: "Sesión de pilates enfocada en fortalecimiento del core y flexibilidad. Necesitarás una colchoneta. Todos los niveles son bienvenidos!.",
            image: "assets/images/pilates.jpg"
        },
        3: {
            title: "30min",
            description: "Partida doble de tenis",
            subdescription: "Partido de tenis individual. Trae tu propia raqueta o usa una de las nuestras. Perfecto para mejorar tus reflejos y coordinación en equipo!!.",
            image: "assets/images/tenis-doble.jpg"
        },
        4: {
            title: "40min",
            description: "Rutinas de ejercicio funcional en pareja",
            subdescription: "Esta rutina está compuesta por 7 ejercicios, se realizan en circuito y se repite 3 veces. Necesitarás una pelota, o puede servirte cualquier cosa que puedas intercambiar",
            image: "assets/images/ejercicio-pareja.jpg"
        },
        5: {
            title: "20min",
            description: "Rutinas express de abdominales",
            subdescription: "Quema grasa y define tu core con esta rutina intensa de 20 minutos",
            image: "assets/images/abdominales.jpg"
        },
        6: {
            title: "60min",
            description: "Clase de boxeo recreativo",
            subdescription: "Libera estrés y mejora tu coordinación con sesiones de boxeo sin contacto, Incluye equipamiento básico y entrenador que adaptará la intensidad a tu nivel",
            image: "assets/images/boxeo.jpg"
        }
    };
    
    //Aquí usé las promesas para errores del autoplay que tuve xd
    function initAudio() {
        const playPromesa = audioPlayer.play();
        
        if (playPromesa !== undefined) {
            playPromesa.catch(error => {
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            });
        }
    }
    initAudio();
    
    playPauseBtn.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audioPlayer.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
    
    challengeCards.forEach(card => {
        card.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const challenge = challenges[id];
            
            detailTitle.textContent = challenge.title;
            detailDescription.textContent = challenge.description;
            detailSubdescription.textContent = challenge.subdescription;
            detailImage.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${challenge.image}')`;
            
            //tarjetas ocultas
            document.querySelector('.challenges-grid').style.opacity = '0';
            document.querySelector('.challenges-grid').style.transform = 'translateX(-20px)';
            document.querySelector('.challenges-grid').style.transition = 'all 0.3s ease';
            
            setTimeout(() => {
                challengeDetail.classList.add('show');
            }, 300);
        });
    });
    
    //tarjetas visibles
    closeDetailBtn.addEventListener('click', function() {
        challengeDetail.classList.remove('show');
        
        setTimeout(() => {
            document.querySelector('.challenges-grid').style.opacity = '1';
            document.querySelector('.challenges-grid').style.transform = 'translateX(0)';
        }, 300);
    });
    
    window.addEventListener('popstate', function() {
        if (challengeDetail.classList.contains('show')) {
            challengeDetail.classList.remove('show');
            document.querySelector('.challenges-grid').style.opacity = '1';
            document.querySelector('.challenges-grid').style.transform = 'translateX(0)';
        }
    });
});