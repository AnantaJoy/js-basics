// Factory function is a function that returns an object

function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
circle.draw();