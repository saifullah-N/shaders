import { HexColorPicker } from 'react-colorful';
import { React, useState, useEffect } from 'react';
import { useMaterial } from './ContextProvider';
function ColorPicker() {
  const { materialBG, handleMaterial, displayColorPicker } = useMaterial();
  return displayColorPicker ? (
    <div style={{ display: 'block', marginTop: '-20%' }}>
      <HexColorPicker
        color={materialBG.items[materialBG.current]}
        onChange={(color) => {
          materialBG.items[materialBG.current] = color;
          handleMaterial(JSON.parse(JSON.stringify(materialBG)));
        }}
      />
    </div>
  ) : (
    <div></div>
  );
}
export default ColorPicker;
