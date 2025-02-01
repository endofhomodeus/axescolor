import { createCanvas, clearCanvas } from './canvas';

export type Pattern = {
  id: string;
  name: string;
  description: string;
  generate: (sourceCanvas: HTMLCanvasElement, selection: { x: number; y: number; width: number; height: number }) => HTMLCanvasElement;
};

const createTilePattern = (
  sourceCanvas: HTMLCanvasElement,
  selection: { x: number; y: number; width: number; height: number }
) => {
  const { x, y, width, height } = selection;
  const tileCanvas = createCanvas(width, height);
  const ctx = tileCanvas.getContext('2d');
  if (!ctx) return tileCanvas;

  ctx.drawImage(sourceCanvas, x, y, width, height, 0, 0, width, height);
  return tileCanvas;
};

const mirrorTile = (canvas: HTMLCanvasElement) => {
  const { width, height } = canvas;
  const mirroredCanvas = createCanvas(width * 2, height * 2);
  const ctx = mirroredCanvas.getContext('2d');
  if (!ctx) return canvas;

  // Draw original
  ctx.drawImage(canvas, 0, 0);
  // Mirror horizontally
  ctx.save();
  ctx.scale(-1, 1);
  ctx.drawImage(canvas, -width * 2, 0);
  ctx.restore();
  // Mirror vertically
  ctx.save();
  ctx.scale(1, -1);
  ctx.drawImage(canvas, 0, -height * 2);
  ctx.restore();
  // Mirror both
  ctx.save();
  ctx.scale(-1, -1);
  ctx.drawImage(canvas, -width * 2, -height * 2);
  ctx.restore();

  return mirroredCanvas;
};

export const patterns: Pattern[] = [
  {
    id: 'grid',
    name: 'Grid',
    description: 'Clean grid layout pattern',
    generate: (sourceCanvas, selection) => {
      const tile = createTilePattern(sourceCanvas, selection);
      const result = createCanvas(tile.width * 4, tile.height * 4);
      const ctx = result.getContext('2d');
      if (!ctx) return result;

      const gridSize = 4;
      const cellWidth = result.width / gridSize;
      const cellHeight = result.height / gridSize;

      for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
          ctx.save();
          ctx.translate(x * cellWidth, y * cellHeight);
          ctx.drawImage(tile, 0, 0, cellWidth, cellHeight);
          ctx.restore();
        }
      }
      return result;
    }
  },
  {
    id: 'diamond',
    name: 'Diamond Grid',
    description: 'Elegant diamond-shaped pattern',
    generate: (sourceCanvas, selection) => {
      const tile = createTilePattern(sourceCanvas, selection);
      const result = createCanvas(tile.width * 3, tile.height * 3);
      const ctx = result.getContext('2d');
      if (!ctx) return result;

      const pattern = ctx.createPattern(tile, 'repeat');
      if (!pattern) return result;

      ctx.save();
      ctx.translate(result.width / 2, result.height / 2);
      ctx.rotate(Math.PI / 4);
      ctx.scale(1.4, 1.4);
      ctx.fillStyle = pattern;
      ctx.fillRect(-result.width, -result.height, result.width * 2, result.height * 2);
      ctx.restore();

      return result;
    }
  },
  {
    id: 'mandala',
    name: 'Mandala',
    description: 'Beautiful circular mandala design',
    generate: (sourceCanvas, selection) => {
      const tile = createTilePattern(sourceCanvas, selection);
      const result = createCanvas(tile.width * 4, tile.height * 4);
      const ctx = result.getContext('2d');
      if (!ctx) return result;

      const centerX = result.width / 2;
      const centerY = result.height / 2;
      const radius = Math.min(result.width, result.height) / 4;

      for (let i = 0; i < 12; i++) {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate((Math.PI / 6) * i);
        ctx.drawImage(tile, -tile.width / 2, -radius);
        ctx.restore();
      }

      return result;
    }
  },
  {
    id: 'hexagon',
    name: 'Hexagon Grid',
    description: 'Modern hexagonal grid pattern',
    generate: (sourceCanvas, selection) => {
      const tile = createTilePattern(sourceCanvas, selection);
      const result = createCanvas(tile.width * 4, tile.height * 4);
      const ctx = result.getContext('2d');
      if (!ctx) return result;

      const pattern = ctx.createPattern(tile, 'repeat');
      if (!pattern) return result;

      ctx.fillStyle = pattern;
      const size = Math.min(tile.width, tile.height);

      for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
          ctx.save();
          ctx.translate(
            col * size * 1.5 + (row % 2) * (size * 0.75),
            row * size * 0.866
          );
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const x = size * Math.cos(angle);
            const y = size * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }
      }

      return result;
    }
  },
  {
    id: 'waves',
    name: 'Waves',
    description: 'Full-coverage wave pattern',
    generate: (sourceCanvas, selection) => {
      const tile = createTilePattern(sourceCanvas, selection);
      const result = createCanvas(tile.width * 6, tile.height * 6);
      const ctx = result.getContext('2d');
      if (!ctx) return result;

      const rows = 12;
      const cols = 12;
      const tileSize = result.width / cols;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          ctx.save();
          const offsetY = Math.sin((x / cols) * Math.PI * 2) * tileSize * 0.2;
          const offsetX = Math.cos((y / rows) * Math.PI * 2) * tileSize * 0.2;
          ctx.translate(
            x * tileSize + offsetX,
            y * tileSize + offsetY
          );
          ctx.drawImage(tile, -tileSize/2, -tileSize/2, tileSize, tileSize);
          ctx.restore();
        }
      }
      return result;
    }
  },
  {
    id: 'celtic-knot',
    name: 'Celtic Knot',
    description: 'Full-coverage celtic knot pattern',
    generate: (sourceCanvas, selection) => {
      const tile = createTilePattern(sourceCanvas, selection);
      const result = createCanvas(tile.width * 5, tile.height * 5);
      const ctx = result.getContext('2d');
      if (!ctx) return result;

      const centerX = result.width / 2;
      const centerY = result.height / 2;
      const maxRadius = Math.max(result.width, result.height);

      for (let radius = 0; radius <= maxRadius/2; radius += tile.width/2) {
        const circumference = 2 * Math.PI * radius;
        const count = Math.max(6, Math.floor(circumference / (tile.width/2)));
        
        for (let i = 0; i < count; i++) {
          const angle = (i * Math.PI * 2) / count;
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(angle + Math.PI/2);
          ctx.drawImage(tile, -tile.width/2, -tile.height/2, tile.width, tile.height);
          ctx.restore();
        }
      }
      return result;
    }
  },
  {
    id: 'vortex',
    name: 'Vortex',
    description: 'Hypnotic vortex pattern',
    generate: (sourceCanvas, selection) => {
      const tile = createTilePattern(sourceCanvas, selection);
      const result = createCanvas(tile.width * 5, tile.height * 5); // Boyutu artırdık
      const ctx = result.getContext('2d');
      if (!ctx) return result;

      const centerX = result.width / 2;
      const centerY = result.height / 2;

      for (let i = 0; i < 36; i++) { // Segment sayısını artırdık
        const angle = (i * Math.PI * 2) / 36;
        const scale = 1 - (i / 72);
        const radius = (i * (result.width * 0.4)) / 36; // Yarıçapı artırdık
        
        ctx.save();
        ctx.translate(
          centerX + Math.cos(angle) * radius,
          centerY + Math.sin(angle) * radius
        );
        ctx.rotate(angle + Math.PI * (i / 18));
        ctx.scale(scale * 1.5, scale * 1.5); // Scale'i artırdık
        ctx.drawImage(tile, -tile.width / 2, -tile.height / 2);
        ctx.restore();
      }
      return result;
    }
  },
  {
    id: 'wavelength',
    name: 'Wavelength',
    description: 'Dynamic wave pattern',
    generate: (sourceCanvas, selection) => {
      const tile = createTilePattern(sourceCanvas, selection);
      const result = createCanvas(tile.width * 4, tile.height * 3);
      const ctx = result.getContext('2d');
      if (!ctx) return result;

      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 6; j++) {
          ctx.save();
          ctx.translate(
            i * tile.width * 0.5,
            j * tile.height * 0.5 + Math.sin(i * 0.5) * 30
          );
          ctx.rotate(Math.sin(j * 0.5) * 0.2);
          ctx.drawImage(tile, 0, 0, tile.width, tile.height);
          ctx.restore();
        }
      }
      return result;
    }
  },
  {
    id: '3d-boxes',
    name: '3D Boxes',
    description: 'Three-dimensional box pattern',
    generate: (sourceCanvas, selection) => {
      const tile = createTilePattern(sourceCanvas, selection);
      const result = createCanvas(tile.width * 4, tile.height * 4);
      const ctx = result.getContext('2d');
      if (!ctx) return result;

      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          const x = i * tile.width;
          const y = j * tile.height;
          
          // Draw main face
          ctx.drawImage(tile, x, y);
          
          // Draw top face with perspective
          ctx.save();
          ctx.transform(1, -0.2, 0, 0.8, x, y);
          ctx.drawImage(tile, 0, -tile.height * 0.2);
          ctx.restore();
          
          // Draw side face with perspective
          ctx.save();
          ctx.transform(0.8, 0, 0.2, 1, x, y);
          ctx.drawImage(tile, tile.width, 0);
          ctx.restore();
        }
      }
      return result;
    }
  },
  {
    id: 'mosaic',
    name: 'Mosaic',
    description: 'Beautiful tiled mosaic pattern',
    generate: (sourceCanvas, selection) => {
      const tile = createTilePattern(sourceCanvas, selection);
      const result = createCanvas(tile.width * 4, tile.height * 4);
      const ctx = result.getContext('2d');
      if (!ctx) return result;

      for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
          ctx.save();
          ctx.translate(x * tile.width, y * tile.height);
          
          if ((x + y) % 2 === 0) {
            ctx.translate(tile.width / 2, tile.height / 2);
            ctx.rotate(Math.PI);
            ctx.translate(-tile.width / 2, -tile.height / 2);
          }
          
          ctx.drawImage(tile, 0, 0);
          ctx.restore();
        }
      }

      return result;
    }
  },
  {
    id: 'spiral',
    name: 'Spiral',
    description: 'Hypnotic spiral pattern',
    generate: (sourceCanvas, selection) => {
      const { x, y, width, height } = selection;
      const tile = createTilePattern(sourceCanvas, selection);
      const result = createCanvas(tile.width * 4, tile.height * 4);
      const ctx = result.getContext('2d');
      if (!ctx) return result;

      const centerX = result.width / 2;
      const centerY = result.height / 2;
      const maxRadius = result.width * 0.45;
      const spacing = 20;
      const totalRotations = 6;
      const angleStep = (Math.PI * 2) / 30;

      for (let angle = 0; angle < Math.PI * 2 * totalRotations; angle += angleStep) {
        const radius = (angle / (Math.PI * 2 * totalRotations)) * maxRadius;
        const xPos = centerX + Math.cos(angle) * radius;
        const yPos = centerY + Math.sin(angle) * radius;
        const scale = (radius / maxRadius);

        ctx.save();
        ctx.translate(xPos, yPos);
        ctx.rotate(angle);
        ctx.scale(scale, scale);

        const drawSize = (tile.width / 2) - spacing;
        ctx.drawImage(tile, -drawSize / 2, -drawSize / 2, drawSize, drawSize);
        ctx.restore();
      }

      return result;
    }
  },
  {
    id: 'infinity-mirror',
    name: 'Infinity Mirror',
    description: 'Endless reflection pattern with depth illusion',
    generate: (sourceCanvas, selection) => {
      const tile = createTilePattern(sourceCanvas, selection);
      const result = createCanvas(tile.width * 4, tile.height * 4);
      const ctx = result.getContext('2d');
      if (!ctx) return result;

      const centerX = result.width / 2;
      const centerY = result.height / 2;
      const maxLayers = 12;
      
      // Her katman için
      for (let layer = maxLayers; layer > 0; layer--) {
        const scale = (layer / maxLayers) * 1.5; // Büyükten küçüğe doğru
        const rotation = (layer * Math.PI) / (maxLayers / 2); // Her katmanda döndürme
        const alpha = layer / maxLayers; // Uzaklaştıkça şeffaflaşma

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(centerX, centerY);
        ctx.rotate(rotation);
        ctx.scale(scale, scale);
        
        // 4 köşeye yerleştirme
        [-1, 1].forEach(x => {
          [-1, 1].forEach(y => {
            ctx.save();
            ctx.translate(
              x * (tile.width / 2 - tile.width / 4), 
              y * (tile.height / 2 - tile.height / 4)
            );
            ctx.rotate(-rotation / 2); // Ters döndürme efekti
            ctx.drawImage(
              tile, 
              -tile.width / 2, 
              -tile.height / 2, 
              tile.width, 
              tile.height
            );
            ctx.restore();
          });
        });
        
        ctx.restore();
      }

      return result;
    }
  }
];