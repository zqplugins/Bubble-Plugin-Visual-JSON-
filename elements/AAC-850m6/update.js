function(instance, properties, context) {
  const {pre, id} = instance.data
  // if(instance.data.isFirstStart) init();
  
  // function init() {
    // instance.data.isFirstStart = false;
    
        
      //            font-size: ${properties.bubble.font_size()}px;
  // }

  pre.get(0).style.fontSize = properties.bubble.font_size() + "px";
      
  let data;
  let isValid = isJsonString(properties.data);
  instance.publishState('isvalid',isValid)    
  if(isValid && properties.data != null){
      data = JSON.parse(properties.data);  
    //   $(`#${id}`).html(prettyPrintJson.toHtml(data));
    pre.html(JSON.stringify(data, null, 3));
  } else if (properties.data == "" || properties.data == null) {
    data = ""
  } else {
      data = "Invalid JSON";
      pre.html(prettyPrintJson.toHtml(data));
  }
  
      
  function isJsonString(str) {
      try {
          JSON.parse(str);
      } catch (e) {
          return false;
      }
      return true;
  }
  
  //instance.setHeight($(`#${id}`).height())
  }