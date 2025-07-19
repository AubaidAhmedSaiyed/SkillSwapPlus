
function typeWriter(text, elementId, delay = 50) {
  let i = 0;
  const element = document.getElementById(elementId);
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, delay);
    }
  }
  type();
}

// Example use
window.onload = () => {
  const output = document.getElementById("terminal-output");
  if (output) {
    typeWriter('aditya@portfolio:~$ echo "Hello, world!"', "terminal-output");
  }
};
