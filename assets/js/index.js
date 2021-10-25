const sidebarButton = document.getElementsByClassName('sidebar__toogle')[0];
    sidebarButton.addEventListener('click', function(){
      const sidebar = document.getElementsByClassName('sidebar')[0];
      sidebar.classList.toggle('sidebar__show');
    })