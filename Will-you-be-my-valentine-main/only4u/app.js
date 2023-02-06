const container = document.querySelector('.container');
const yes_btn = document.querySelector('.yes_btn');
const no_btn = document.querySelector('.no_btn');
const audio = new Audio("https://jesusful.com/wp-content/uploads/music/2022/06/C_line_Dion_-_My_Heart_Will_Go_On_(Jesusful.com).mp3");

no_btn.addEventListener('click', () => {
    no_btn.style.position = 'absolute';

    const random_left = Math.floor(Math.random() * container.clientWidth);
    const random_top = Math.floor(Math.random() * container.clientHeight);

    if (random_left >= container.clientWidth / 3)
        no_btn.style.left = `${random_left - no_btn.clientWidth}px`;
    
    if (random_top >= container.clientHeight / 3)
        no_btn.style.top = `${random_top - no_btn.clientHeight}px`;
})

yes_btn.addEventListener('click', () => {
    container.innerHTML = `<h2>
                            Ik wist het !!! <br>
                            </h2>
                            <h3>
                            i ❤️‍🔥 u baby <br>
                            </h3>
                            <div class="imgs">
                            <img src="../src/goals.jpg" alt="hubby" width="80%" height="80%">
                            </div>
                            <h4>
                             G ❤️ S ✨
                            </h4>`
                           
        audio.play();
                        })