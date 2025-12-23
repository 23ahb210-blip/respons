    // クリスマスツリー要素を取得（電飾演出用）
    const tree = document.getElementById('tree');
    // クリック演出（電飾）ボタンを取得
    const btn  = document.getElementById('partyBtn');
    // 再生するクリスマス音源を取得
    const audio = document.getElementById('xmasSound');


    // 電飾演出がONかどうかの状態管理
    let isParty = false;


    // 電飾ボタンがクリックされたときの処理
    //関数の前にasyncを宣言することにより、非同期関数（async function）を定義できる。
    btn.addEventListener('click', async () => {

        

    // ON / OFF を切り替える
    isParty = !isParty;


    // ===== 電飾演出 ON =====
    if (isParty) {

        console.log("ON")
        tree.classList.add('party');
        btn.textContent = '🎵 演出停止';
    try {
        // 音源を最初から再生
        audio.currentTime = 0;


        // 再生　「await」音が鳴り始めるまで待って、ダメならエラーとして受け取る」
        await audio.play();


        } catch (e) {
        // 音が鳴らなくても光演出は成立するためエラーは無視
        console.warn('Audio play was blocked:', e);
        }


    // ===== 電飾演出 OFF =====
    } else {

        console.log("OFF")
        tree.classList.remove('party');
        btn.textContent = '✨ クリック演出';
        audio.pause();
        audio.currentTime = 0;

    }
    });

    const btn2  = document.getElementById('snowBtn');

    issnow=false;

    btn2.addEventListener('click', async () => {
        issnow = !issnow

        if(issnow){
            document.body.classList.add('snowing')
            btn2.textContent = '雪をとめる';
        } else{
            document.body.classList.remove('snowing');
        btn2.textContent = '❄ 雪を降らす';
        }
    })
