// Factory function is a function that returns an object

function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw', radius);
        }
    };
}

const circle = createCircle(1);
circle.draw();

const circle2 = createCircle(2);
circle2.draw();