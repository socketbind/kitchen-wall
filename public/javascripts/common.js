function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

function enableFullscreenToggle() {
    document.body.addEventListener('click', () => toggleFullScreen());
}

function slashJoin() {
    const parts = Array.from(arguments);

    if (parts.length === 0) {
        return "";
    }

    if (parts.length === 1) {
        return parts[0];
    }

    const trailer = parts.slice(0, -1).map(part => part.endsWith('/') ? part : part + '/' );

    return trailer.join('') + parts[parts.length - 1];
}

// throttling code taken from MDN
(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("resize", "optimizedResize");
})();