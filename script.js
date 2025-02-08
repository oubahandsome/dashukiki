function performSearch() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm !== '') {
        // 添加搜索动画效果
        document.querySelector('.search-container').style.transform = 'scale(0.98)';
        setTimeout(() => {
            document.querySelector('.search-container').style.transform = 'scale(1)';
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
            window.location.href = searchUrl;
        }, 200);
    }
}

// 添加回车键搜索功能
document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

// 添加标签点击功能
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', function() {
        const searchTerm = this.textContent.replace('#', '').trim();
        document.getElementById('search-input').value = searchTerm;
        performSearch();
    });
});

// 添加页面加载动画
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.search-container').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.search-container').style.transition = 'opacity 1s ease-in-out';
        document.querySelector('.search-container').style.opacity = '1';
    }, 100);
    
    // 创建浮动元素动画
    createFloatingElements();
});

// 创建额外的浮动元素
function createFloatingElements() {
    const elements = ['heart', 'star', 'flower', 'butterfly'];
    const container = document.querySelector('.floating-elements');
    
    for (let i = 0; i < 15; i++) {
        const element = document.createElement('div');
        element.className = elements[Math.floor(Math.random() * elements.length)];
        element.style.left = Math.random() * 100 + 'vw';
        element.style.top = Math.random() * 100 + 'vh';
        element.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(element);
    }
}

// 创建背景动态粒子效果
function createParticles() {
    const particles = document.createElement('div');
    particles.className = 'particles';
    document.body.appendChild(particles);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particles.appendChild(particle);
    }
}

// 添加动态样式
const style = document.createElement('style');
style.textContent = `
.particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
}

.particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    animation: particleFloat 20s infinite linear;
}

@keyframes particleFloat {
    0% {
        transform: translateY(100vh) scale(0);
        opacity: 0;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        transform: translateY(-100vh) scale(1);
        opacity: 0;
    }
}
`;
document.head.appendChild(style); 