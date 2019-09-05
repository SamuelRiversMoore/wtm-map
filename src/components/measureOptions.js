export default {
    position: "topleft", // Position to show the control. Values: 'topright', 'topleft', 'bottomright', 'bottomleft'
    unit: "metres", // Show imperial or metric distances. Values: 'metres', 'landmiles', 'nauticalmiles'
    clearMeasurementsOnStop: true, // Clear all the measurements when the control is unselected
    showBearings: false, // Whether bearings are displayed within the tooltips
    bearingTextIn: "In", // language dependend label for inbound bearings
    bearingTextOut: "Out", // language dependend label for outbound bearings
    tooltipTextDraganddelete: "Click and drag to <b>move point</b><br>Press SHIFT-key and click to <b>delete point</b>",
    tooltipTextResume: "<br>Press CTRL-key and click to <b>resume line</b>",
    tooltipTextAdd: "Press CTRL-key and click to <b>add point</b>",
    // language dependend labels for point's tooltips
    measureControlTitleOn: "Turn on PolylineMeasure", // Title for the control going to be switched on
    measureControlTitleOff: "Turn off PolylineMeasure", // Title for the control going to be switched off
    measureControlLabel: "&#8614;", // Label of the Measure control (maybe a unicode symbol)
    measureControlClasses: [], // Classes to apply to the Measure control
    showClearControl: false, // Show a control to clear all the measurements
    clearControlTitle: "Clear Measurements", // Title text to show on the clear measurements control button
    clearControlLabel: "&times", // Label of the Clear control (maybe a unicode symbol)
    clearControlClasses: [], // Classes to apply to clear control button
    showUnitControl: false, // Show a control to change the units of measurements
    unitControlTitle: {
        // Title texts to show on the Unit Control button
        text: "Change Units",
        metres: "metres",
        landmiles: "land miles",
        nauticalmiles: "nautical miles"
    },
    unitControlLabel: {
        // Label symbols to show in the Unit Control button
        metres: "m",
        kilometres: "km",
        feet: "ft",
        landmiles: "mi",
        nauticalmiles: "nm"
    },
    tempLine: {
        // Styling settings for the temporary dashed line
        color: "#00f", // Dashed line color
        weight: 2 // Dashed line weight
    },
    fixedLine: {
        // Styling for the solid line
        color: "#006", // Solid line color
        weight: 2 // Solid line weight
    },
    startCircle: {
        // Style settings for circle marker indicating the starting point of the polyline
        color: "#000", // Color of the border of the circle
        weight: 1, // Weight of the circle
        fillColor: "#0f0", // Fill color of the circle
        fillOpacity: 1, // Fill opacity of the circle
        radius: 3 // Radius of the circle
    },
    intermedCircle: {
        // Style settings for all circle markers between startCircle and endCircle
        color: "#000", // Color of the border of the circle
        weight: 1, // Weight of the circle
        fillColor: "#ff0", // Fill color of the circle
        fillOpacity: 1, // Fill opacity of the circle
        radius: 3 // Radius of the circle
    },
    currentCircle: {
        // Style settings for circle marker indicating the latest point of the polyline during drawing a line
        color: "#000", // Color of the border of the circle
        weight: 1, // Weight of the circle
        fillColor: "#f0f", // Fill color of the circle
        fillOpacity: 1, // Fill opacity of the circle
        radius: 3 // Radius of the circle
    },
    endCircle: {
        // Style settings for circle marker indicating the last point of the polyline
        color: "#000", // Color of the border of the circle
        weight: 1, // Weight of the circle
        fillColor: "#f00", // Fill color of the circle
        fillOpacity: 1, // Fill opacity of the circle
        radius: 3 // Radius of the circle
    }
};
