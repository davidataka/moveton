(() => {
  const startTime = Date.now();
  window.addEventListener('load', () => {
    const loadTime = Date.now();
    document.getElementById('time_load').innerText = `load time - ${
      loadTime - startTime
    } ms (client) ${
      document.getElementById('time_load').innerText
    }  ms (server)`;
  });
})();
