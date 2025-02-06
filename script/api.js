document.querySelectorAll("#leave, #next1").forEach((button) => {
  button.addEventListener("click", () => {
    const iframes = document.querySelectorAll("iframe");
    for (const iframe of iframes) {
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":[]}',
        "https://www.youtube.com"
      );
    }
  });
});

document.querySelectorAll("#leavedion").forEach((button) => {
  button.addEventListener("click", () => {
    const iframes = document.querySelectorAll("iframe");
    for (const iframe of iframes) {
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":[]}',
        "https://www.youtube.com"
      );
    }
  });
});

document.querySelectorAll("#leavejulien").forEach((button) => {
  button.addEventListener("click", () => {
    const iframes = document.querySelectorAll("iframe");
    for (const iframe of iframes) {
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":[]}',
        "https://www.youtube.com"
      );
    }
  });
});

document.querySelectorAll("#backfourrière").forEach((button) => {
  button.addEventListener("click", () => {
    const iframes = document.querySelectorAll("iframe");
    for (const iframe of iframes) {
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":[]}',
        "https://www.youtube.com"
      );
    }
  });
});

document.querySelectorAll("#backasv").forEach((button) => {
  button.addEventListener("click", () => {
    const iframes = document.querySelectorAll("iframe");
    for (const iframe of iframes) {
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":[]}',
        "https://www.youtube.com"
      );
    }
  });
});
