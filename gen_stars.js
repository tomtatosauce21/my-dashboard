import fs from 'fs';

function generateStars(n) {
    let shadows = [];
    // Slightly lessened density: from 12x down to 9x
    const count = n * 9; 
    for (let i = 0; i < count; i++) {
        // Keeping the tighter 3500px range so gaps are still controlled, but with fewer stars
        shadows.push(`${Math.floor(Math.random() * 3500)}px ${Math.floor(Math.random() * 3500)}px #fff`);
    }
    return shadows.join(',\n      ');
}

const css = `
/* Custom Stars Background */
.stars-bg {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: #050505;
  background-image: 
    radial-gradient(ellipse at bottom, rgba(37, 99, 235, 0.15) 0%, transparent 100%),
    radial-gradient(circle at 20% 40%, rgba(16, 200, 250, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 60%, rgba(236, 72, 153, 0.08) 0%, transparent 50%);
  overflow: hidden;
  pointer-events: none;
}

#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${generateStars(700)};
  animation: animStar 50s linear infinite;
}
#stars:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: inherit;
}

#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: ${generateStars(250)};
  animation: animStar 100s linear infinite;
}
#stars2:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: inherit;
}

#stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: ${generateStars(100)};
  animation: animStar 150s linear infinite;
}
#stars3:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: inherit;
}

@keyframes animStar {
  from { transform: translateY(0px); }
  to { transform: translateY(-2000px); }
}
`;

const path = 'C:\\\\Users\\\\Yves\\\\Documents\\\\thesis_dashboard\\\\my-dashboard\\\\src\\\\index.css';
let content = fs.readFileSync(path, 'utf8');

// Match either mix-pattern-bg or rain-bg, whichever is there.
const prevIndex = content.indexOf('/* Custom Mix Pattern Background');
if (prevIndex !== -1) {
    content = content.substring(0, prevIndex);
} else {
    const rainIndex = content.indexOf('/* Custom Rain Background');
    if (rainIndex !== -1) {
        content = content.substring(0, rainIndex);
    }
}

fs.writeFileSync(path, content + css);
console.log('Stars injected to index.css!');
