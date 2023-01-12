import { FastAverageColor } from "fast-average-color";

export const averageColor = async (backgroundImage: HTMLImageElement) => {
  const fac = new FastAverageColor();
  const color = await fac.getColor(backgroundImage, {
    algorithm: 'sqrt',
    mode: 'precision',
  });
  let hex = color.hex;

  if (color.isDark) {
    hex = newShade(hex, 69);
  }

  setP('--primary', hex);
  setP('--secondary', newShade(hex, -42));
  setP('--selection', `${hex}69`);
  setP('--selection-btn', `${hex}23`);
  setP('--bgshade', `${hex}0F`);
  setP('--ready', `1`);
  setP('--box', '0px');
  setP('--bg', '0px');
}

const setP = (varName: string, value: string) => {
  document.documentElement.style.setProperty(varName, value);
};

const newShade = (hexColor: string, magnitude: number) => {
  hexColor = hexColor.replace(`#`, ``);
  if (hexColor.length === 6) {
    const decimalColor = parseInt(hexColor, 16);
    let r = (decimalColor >> 16) + magnitude;
    r > 255 && (r = 255);
    r < 0 && (r = 0);
    let g = (decimalColor & 0x0000ff) + magnitude;
    g > 255 && (g = 255);
    g < 0 && (g = 0);
    let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
    b > 255 && (b = 255);
    b < 0 && (b = 0);
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
  } else {
    return hexColor;
  }
};