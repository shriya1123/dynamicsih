function showComponent(componentId) {
    // Hide all menu components
    var menuComponents = document.querySelectorAll('.menu-component');
    menuComponents.forEach(function(component) {
        component.style.display = 'none';
    });

    // Show the selected menu component
    var selectedComponent = document.getElementById(componentId);
    if (selectedComponent) {
        selectedComponent.style.display = 'block';
    }
}
