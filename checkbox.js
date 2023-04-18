function saveContent() {
    var content = document.getElementById("content").value.trim();
    if (!content) return;
    
    var savedContent = localStorage.getItem("content");
    var messages = savedContent ? savedContent.split("|") : [];
    messages.push(content);
    localStorage.setItem("content", messages.join("|"));
    
    displayContent();
  }
  
  function displayContent() {
    var savedContent = localStorage.getItem("content");
    if (!savedContent) {
      document.getElementById("display-content").innerHTML = "";
      return;
    }
    
    var messages = savedContent.split("|");
    var html = "";
    for (var i = 0; i < messages.length; i++) {
      var message = messages[i];
      html += "<div class='message'><input type='checkbox' value='" + i + "'><p>" + message + "</p><span class='delete' onclick='deleteMessage(" + i + ")'>X</span></div>";
    }
    
    document.getElementById("display-content").innerHTML = html;
  }
  
  function deleteMessage(index) {
    var savedContent = localStorage.getItem("content");
    var messages = savedContent.split("|");
    messages.splice(index, 1);
    localStorage.setItem("content", messages.join("|"));
    displayContent();
  }
  
  function deleteSelected() {
    var checkboxes = document.querySelectorAll("#display-content input[type=checkbox]:checked");
    var indices = [];
    for (var i = 0; i < checkboxes.length; i++) {
      indices.push(parseInt(checkboxes[i].value));
    }
    var savedContent = localStorage.getItem("content");
    var messages = savedContent.split("|");
    for (var i = indices.length - 1; i >= 0; i--) {
      messages.splice(indices[i], 1);
    }
    localStorage.setItem("content", messages.join("|"));
    displayContent();
  }
  
  function deleteAll() {
    localStorage.removeItem("content");
    displayContent();
  }
  
  displayContent();
  