document.getElementById('createButton').addEventListener('click', function() {
    const angle = document.getElementById('angle').value || 0;
    const color1 = document.getElementById('color1').value || '#ffffff';
    const color2 = document.getElementById('color2').value || '#000000';
    const color3 = document.getElementById('color3').value || '#4cae4c';
    const color4 = document.getElementById('color4').value || '#ffffff';
    const color5 = document.getElementById('color5').value || '#0000ff';
    const color6 = document.getElementById('color6').value || '#4cae4c';
    const color7 = document.getElementById('color7').value || '#000000';

    // Cập nhật nội dung output3 với các giá trị input
    const output3 = document.getElementById('output3');
    output3.value = `* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(${angle}deg, ${color1}, ${color2});
    color: ${color7};
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-box {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 20px;
    width: 300px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}

.textbox {
    margin-bottom: 15px;
    position: relative;
}

.textbox input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.toggle-password {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
}

.remember-me {
    margin: 10px 0;
}

.btn {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: ${color3};
    color: ${color4};
    border-radius: 5px;
    cursor: pointer;
}

.btn:hover {
    background-color: ${color6};
}

.links {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

.links a {
    color: ${color5};
    text-decoration: none;
}

.links a:hover {
    text-decoration: underline;
}

.error-message {
    color: red;
    text-align: center;
    margin-top: 10px;
}`;
});

// Sao chép nội dung ô textbox
const outputs = document.querySelectorAll('.output-box');
outputs.forEach((output) => {
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Sao chép';
    copyButton.addEventListener('click', () => {
        output.select();
        document.execCommand('copy');
        alert('Đã sao chép nội dung!');
    });
    output.parentNode.insertBefore(copyButton, output);
});