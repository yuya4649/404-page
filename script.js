// 最初の鳥にもクリックイベントを追加
document.addEventListener('DOMContentLoaded', function() {
    const staticBird = document.querySelector('.bird');
    if (staticBird) {
        staticBird.addEventListener('click', function() {
            // 一般的なTwitterトップページや、
            // 業務用アカウントなど、公開しても問題ないURLを使用
            window.open('https://twitter.com', '_blank');
        });
    }
});

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// フォーム送信処理
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // フォームの内容を取得
    const formData = {
        名前: document.getElementById('name').value,
        メッセージ: document.getElementById('message').value
    };
    
    // デバッグ用のログ
    console.log('保存するデータ:', formData);
    
    // ローカルストレージにデータを保存
    localStorage.setItem('lastFormSubmission', JSON.stringify(formData));
    
    // 保存されたデータを確認
    const savedData = localStorage.getItem('lastFormSubmission');
    console.log('保存されたデータ:', JSON.parse(savedData));
    
    // 404ページに遷移
    window.location.href = '404.html';
});

// 設定ファイルからURLを使用
function createBird() {
    const bird = document.createElement('div');
    bird.className = 'bird';
    bird.addEventListener('click', function() {
        window.open(CONFIG.TWITTER_URL, '_blank');
    });
    document.body.appendChild(bird);
    
    setTimeout(() => {
        bird.remove();
    }, 45000);  // 15000から45000に変更（3倍長く）
}

// ページ読み込み時に最初の鳥を生成
document.addEventListener('DOMContentLoaded', function() {
    // すぐに1匹目を生成
    createBird();
    
    // その後、通常の間隔で生成を開始
    setInterval(() => {
        if (Math.random() < 0.2) {
            createBird();
        }
    }, 8000);
});

// 雲のアニメーションの動的な速度調整
document.querySelectorAll('.cloud').forEach(cloud => {
    cloud.style.animationDuration = `${30 + Math.random() * 20}s`;
}); 