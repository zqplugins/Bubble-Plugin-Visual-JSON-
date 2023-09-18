function(instance, context) {
  function randomId() {
      const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
      return uint32.toString(16);
    }
    const id = "originalplugin" + randomId(); // Create random id for plugin element
  instance.data.randomId = id; // Stores
  // instance.data.isFirstStart = true;

  const pre = $(`<pre id="${id}"></pre>`);
    instance.data.pre = pre;


    const container = $('<div id="qwerty"></div>')
    container.css({
      height: "100%",
      // "max-height": "100%",
      overflow: "auto",
      padding: "1px",
    })
    container.append(pre)
    instance.canvas.append(container);


  
  }