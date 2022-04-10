window.onload = function(e) {
  if (sessionStorage.getItem("sidebarIsVisisble") === "false") {
    document.getElementById("sidebar").style.transitionDuration = "0ms"
    document.getElementById("sidebar").style.animation = "sidebar-movein forwards";
    document.getElementById("body").style.overflow = "overlay"
    setTimeout(() => {
      document.getElementById("sidebar").style.transitionDuration = "0.3s"
    }, 300);
  } else {
    document.getElementById("sidebar").style.transitionDuration = "0ms"
    document.getElementById("sidebar").style.animation = "sidebar-moveout forwards";
    document.getElementById("body").style.overflow = "hidden"
    setTimeout(() => {
      document.getElementById("sidebar").style.transitionDuration = "0.3s"
    }, 300);
  } 
};

document.getElementById("navlist-button").addEventListener("click", function(e) {
  if (sessionStorage.getItem("sidebarIsVisisble") === "false") {
    document.getElementById("sidebar").style.animation = "0.3s sidebar-moveout forwards";
    sessionStorage.setItem("sidebarIsVisisble", true)
    document.getElementById("body").style.overflow = "hidden"
  } else if (sessionStorage.getItem("sidebarIsVisisble") === "true") {
    document.getElementById("sidebar").style.animation = "0.3s sidebar-movein forwards";
    sessionStorage.setItem("sidebarIsVisisble", false)
    document.getElementById("body").style.overflow = "overlay"
  } else {
    document.getElementById("sidebar").style.animation = "0.3s sidebar-moveout forwards";
    sessionStorage.setItem("sidebarIsVisisble", true)
    document.getElementById("body").style.overflow = "hidden"
  }
});

document.addEventListener('mouseup', function(e) {
  let container = document.getElementById('sidebar');
  let button = document.getElementById("navlist-button")
  if (!container.contains(e.target) && !button.contains(e.target)) {
    document.getElementById("sidebar").style.animation = "0.3s sidebar-movein forwards";
    sessionStorage.setItem("sidebarIsVisisble", false)
    document.getElementById("body").style.overflow = "overlay"
  }
});