
export function isNullOrEmpty(string) {
    if(string == null) {
        return true;
    } else if (string == "") {
        return true;
    } else {
        return false;
    }
}

export function getHSLColour(colour) {
    var colourMatch = colour.match(/hsl\((\d+(\.\d+)?)deg (\d+(\.\d+)?)% (\d+(\.\d+)?)%\)/);
    if(colourMatch) {
        return colour;
    } else {
        const tempElement = document.createElement('div');
  
        tempElement.style.backgroundColor = colour;
        document.body.appendChild(tempElement);

        const computedStyle = getComputedStyle(tempElement);
        const rgbColor = computedStyle.backgroundColor;

        document.body.removeChild(tempElement);
    
        const rgbValues = rgbColor.match(/\d+/g);
        if (!rgbValues || rgbValues.length < 3) {
            return `hsl(0deg 0% 0%)`;
        }
    
        const r = parseInt(rgbValues[0], 10) / 255;
        const g = parseInt(rgbValues[1], 10) / 255;
        const b = parseInt(rgbValues[2], 10) / 255;
    
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
    
        let hue, saturation, lightness = (max + min) / 2;
    
        if (max === min) {
            hue = saturation = 0;
        } else {
            const d = max - min;
            saturation = lightness > 0.5 ? d / (2 - max - min) : d / (max + min);
    
            switch (max) {
                case r:
                    hue = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    hue = (b - r) / d + 2;
                    break;
                case b:
                    hue = (r - g) / d + 4;
                    break;
            }
    
            hue /= 6;
        }
    
        hue *= 360;
        saturation *= 100;
        lightness *= 100;
    
        return `hsl(${hue}deg ${saturation}% ${lightness}%)`;
    }   
}

export function sustractColourLightness(colour, sustraction) {
    let hslColour = getHSLColour(colour);
    const colourMatch = hslColour.match(/hsl\((\d+(\.\d+)?)deg (\d+(\.\d+)?)% (\d+(\.\d+)?)%\)/);
    if(colourMatch) {
        const hue = parseFloat(colourMatch[1]);
        const saturation = parseFloat(colourMatch[3]);
        let lightness = parseFloat(colourMatch[5]);
        lightness = lightness - sustraction;
        if(lightness < 0) {
            lightness = 0;
        }
        colour = `hsl(${hue}deg ${saturation}% ${lightness}%)`;
    }
    return colour;
}
  