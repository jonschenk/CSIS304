document.addEventListener("DOMContentLoaded", function () {
    const pushButton = document.getElementById('push-button');
    const pullButton = document.getElementById('pull-button');
    const legsButton = document.getElementById('legs-button');
    const animatedImage = document.getElementById('animated-image');
    let position = -100;
  
    function handlePushButtonClick() {
      window.location.href = 'push.html';
    }
  
    function handlePullButtonClick() {
      window.location.href = 'pull.html';
    }
  
    function handleLegsButtonClick() {
      window.location.href = 'leg.html';
    }
  
    function animate() {
      position += .05;
      animatedImage.style.left = position + 'px';
  
      if (position < window.innerWidth) {
        requestAnimationFrame(animate);
      } else {
        position = -100;
        animatedImage.style.left = position + 'px';
        requestAnimationFrame(animate);
      }
    }
  
    animate();
  
    pushButton.addEventListener('click', handlePushButtonClick);
    pullButton.addEventListener('click', handlePullButtonClick);
    legsButton.addEventListener('click', handleLegsButtonClick);
  });