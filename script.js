//This is a Font Generator web application built using HTML, CSS, and JavaScript. It allows users to customize font size, style, and color gradient, generating CSS code that can be copied for use in web development projects.

//### Uses:
//- Customizing font styles and colors for web content.
//- Generating CSS code for text styling.

//### Features:
//- Adjustable font size and style selection.
//- Customizable color gradient for text.
//- Copying generated CSS code to clipboard for easy use.

function generateFont() {
      const fontSize = document.getElementById('fontSize').value + 'px';
      const fontStyle = document.getElementById('fontStyle').value;
      const color1 = document.getElementById('color1').value;
      const color2 = document.getElementById('color2').value;
      
      const output = document.getElementById('output');
      const text = 'Your Text Here';
      const cssCode = `font-size: ${fontSize}; font-style: ${fontStyle}; color: ${color1}; background: linear-gradient(to right, ${color1}, ${color2});`;
      const htmlCode = `<div style="${cssCode}">${text}</div>`;
      
      output.innerHTML = htmlCode;
      copyToClipboard(cssCode);
    }

    function copyToClipboard(text) {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      alert('CSS code copied to clipboard!');
    }