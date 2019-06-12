export const setSizes = sizes => {
  if (Array.isArray(sizes)) {
    return sizes.map(size => typeof size === 'number' ? size.toString() + 'px' : size).join(', ');
  }

  if (typeof sizes === 'number') {
    return sizes.toString() + 'px';
  }

  return sizes;
}
