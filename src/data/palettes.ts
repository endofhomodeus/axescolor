interface ColorPalette {
  colors: string[];
  name: string;
  tags: string[];
}


interface ColorPalette {
    colors: string[];
    name: string;
    tags: string[];
  }
  
  export const PREDEFINED_PALETTES: Record<string, ColorPalette[]> = {

    'Astronomy & Galactic': [
      {
        colors: ['#0B3D91', '#1A4B8C', '#2E37A6', '#4B0082', '#191970'],
        name: 'Deep Space',
        tags: ['astronomy', 'nebula', 'observatory', 'telescope', 'cosmos']
      },
      {
        colors: ['#FF6B6B', '#4A1259', '#6B238E', '#2B0F54', '#9B4F96'],
        name: 'Stellar Winds',
        tags: ['astronomy', 'supernova', 'constellation', 'starlight', 'plasma']
      },
      {
        colors: ['#1B2735', '#090A0F', '#2C5364', '#203A43', '#0F2027'],
        name: 'Event Horizon',
        tags: ['astronomy', 'blackhole', 'quasar', 'spacetime', 'gravitational']
      },
      {
        colors: ['#FF033E', '#FF5733', '#FFC300', '#DAF7A6', '#7D3C98'],
        name: 'Planetary Rings',
        tags: ['astronomy', 'saturn system', 'orbital bands', 'celestial rings', 'space phenomena']
      },
      {
        colors: ['#001F3F', '#0074D9', '#7FDBFF', '#39CCCC', '#01FF70'],
        name: 'Pulsar Waves',
        tags: ['astronomy', 'neutron star', 'electromagnetic', 'radio signals', 'cosmic radiation']
      },
      {
        colors: ['#FF0000', '#FF6B6B', '#4B0082', '#8B008B', '#800080'],
        name: 'Red Giant Phase',
        tags: ['astronomy', 'stellar evolution', 'dying star', 'cosmic expansion', 'heat spectrum']
      },
      {
        colors: ['#03012C', '#2C0735', '#7A1E3C', '#DB4D6D', '#FAA4BD'],
        name: 'Solar Eclipse',
        tags: ['astronomical', 'eclipse viewing', 'sun moon', 'celestial event', 'space phenomenon', 'cosmic events exploration']
      },
      {
        colors: ['#081F37', '#1B3B6F', '#4A69BB', '#7CA6DE', '#C1E3FF'],
        name: 'Meteor Shower',
        tags: ['shooting stars', 'night sky', 'stargazing', 'astronomy', 'celestial', 'cosmic events exploration']
      },
      {
        colors: ['#1B1B3A', '#693668', '#A74482', '#F84AA7', '#FF9ECD'],
        name: 'Aurora Lights',
        tags: ['northern lights', 'polar', 'arctic', 'natural phenomenon', 'night lights', 'cosmic events exploration']
      },
      {
        colors: ['#FF4500', '#FF6347', '#FFD700', '#8B0000', '#5D3A00'],
        name: 'Martian Sunset',
        tags: ['space', 'mars', 'red', 'orange', 'planet', "exploration", 'cosmic events exploration']
      },
      {
        colors: ['#483D8B', '#6A5ACD', '#8A2BE2', '#9370DB', '#E6E6FA'],
        name: 'Cosmic Dust',
        tags: ['space', 'purple', 'blue', 'stars', 'galaxy', 'cosmic events', 'exploration']
      },
      {
        colors: ['#F8F8FF', '#C0C0C0', '#A9A9A9', '#696969', '#000000'],
        name: 'Lunar Glow',
        tags: ['space', 'moon', 'gray', 'white', 'night', 'cosmic events', 'exploration']
      },
      {
        colors: ['#4B0082', '#800080', '#9932CC', '#9400D3', '#2E0854'],
        name: 'Voyager Deep',
        tags: ['interstellar', 'deep space', 'spacecraft', 'exploration', 'cosmic',]
      },
      {
        colors: ['#001F3F', '#FF851B', '#FFDC00', '#7FDBFF', '#2ECC40'],
        name: 'Interstellar Glow',
        tags: ['space', 'stars', 'glow', 'exploration', 'futuristic', 'galactic themes']
      },
      {
        colors: ['#AAB7B8', '#4B4E6D', '#D4E6F1', '#C3BEB5', '#808080'],
        name: 'Lunar Surface',
        tags: ['moon', 'crater', 'orbit', 'silver', 'twilight', 'galactic themes', 'space']
      },
      {
        colors: ['#120136', '#5D3A9B', '#FF4C29', '#FFC93C', '#68A691'],
        name: 'Galactic Voyage',
        tags: ['galaxy', 'milkyway', 'stellar', 'adventure', 'cosmos', 'galactic themes', 'space']
      }
    ],

  'Sunset': [
    {
      colors: ['#FF6B6B', '#C65353', '#FFB88C', '#FFA07A', '#FF8C69'],
      name: 'Warm Sunset',
      tags: ['warm', 'evening', 'orange', 'red']
    },
    {
      colors: ['#FF9A8B', '#FF6B6B', '#4A90E2', '#2E5A88', '#1B365C'],
      name: 'Ocean Sunset',
      tags: ['water', 'evening', 'blue', 'orange']
    },
    {
      colors: ['#FFB347', '#FF7F50', '#FF6B6B', '#CD5C5C', '#8B3A3A'],
      name: 'Desert Dusk',
      tags: ['desert', 'dusk', 'horizon', 'sand', 'twilight']
    },
    {
      colors: ['#FFC371', '#FF5F6D', '#6A0572', '#26081C', '#0F0C29'],
      name: 'Tropical Sunset',
      tags: ['tropical', 'vibrant', 'exotic', 'pink', 'purple']
    },
    {
      colors: ['#FDC830', '#F37335', '#A64942', '#6B222E', '#2E112D'],
      name: 'Mountain Glow',
      tags: ['mountain', 'glow', 'golden', 'peach', 'serene']
    }
  ],
    'Adventure': [
      {
        colors: ['#8B5A2B', '#6B4226', '#CD853F', '#D2B48C', '#A0522D'],
        name: 'Mountain Trail',
        tags: ['adventure', 'brown', 'outdoor', 'earthy']
      },
      {
        colors: ['#556B2F', '#6B8E23', '#8FBC8F', '#2E8B57', '#006400'],
        name: 'Forest Hike',
        tags: ['adventure', 'green', 'nature', 'trees']
      },
      {
        colors: ['#EDC9AF', '#D2B48C', '#A0522D', '#DEB887', '#C2B280'],
        name: 'Sandy Desert',
        tags: ['adventure', 'sand', 'beige', 'nature']
      },
      {
        colors: ['#0077BE', '#00AEEF', '#4FC3F7', '#81D4FA', '#B3E5FC'],
        name: 'Blue Lagoon',
        tags: ['adventure', 'water', 'blue', 'beach']
      },
      {
        colors: ['#4B5320', '#8B4513', '#2F4F4F', '#696969', '#708090'],
        name: 'Rocky Cliff',
        tags: ['adventure', 'rock', 'gray', 'mountains']
      }
    ],
    'Beach': [
      {
        colors: ['#FFD700', '#FFA500', '#87CEEB', '#20B2AA', '#008080'],
        name: 'Tropical Paradise',
        tags: ['beach', 'yellow', 'turquoise', 'tropical']
      },
      {
        colors: ['#F5DEB3', '#D2B48C', '#EED5B7', '#C2B280', '#FFE4B5'],
        name: 'Golden Sands',
        tags: ['beach', 'sand', 'gold', 'nature']
      },
      {
        colors: ['#00CED1', '#40E0D0', '#5F9EA0', '#4682B4', '#1E90FF'],
        name: 'Ocean Breeze',
        tags: ['beach', 'blue', 'water', 'calm']
      },
      {
        colors: ['#FF6347', '#FFA07A', '#FFDAB9', '#FFE4B5', '#FF4500'],
        name: 'Sunset Glow',
        tags: ['beach', 'orange', 'sunset', 'warm']
      },
      {
        colors: ['#FFF5EE', '#FAEBD7', '#FFE4C4', '#FFDAB9', '#FFF8DC'],
        name: 'Seashell Collection',
        tags: ['beach', 'shell', 'neutral', 'pastel']
      }  
    ],

  'Blossom': [
    {
      colors: ['#FFB7C5', '#FF69B4', '#FFC0CB', '#FFD1DC', '#FFA6C9'],
      name: 'Cherry Blossom',
      tags: ['blossom', 'pink', 'spring', 'flowers']
    },
    {
      colors: ['#FF6347', '#DB7093', '#D87093', '#C71585', '#B22222'],
      name: 'Rose Garden',
      tags: ['blossom', 'red', 'romantic', 'flowers']
    },
    {
      colors: ['#E6E6FA', '#D8BFD8', '#DDA0DD', '#DA70D6', '#BA55D3'],
      name: 'Lavender Field',
      tags: ['blossom', 'purple', 'calm', 'flowers']
    },
    {
      colors: ['#FFE4E1', '#FFB6C1', '#FA8072', '#F08080', '#CD5C5C'],
      name: 'Peach Bloom',
      tags: ['blossom', 'peach', 'soft', 'flowers', 'spring']
    },
    {
      colors: ['#F5DEB3', '#FFFACD', '#FAFAD2', '#FFDAB9', '#FFE4B5'],
      name: 'Golden Petals',
      tags: ['blossom', 'yellow', 'bright', 'flowers', 'golden']
    }
  ],
  'Calm & Tranquil': [
    {
      colors: ['#D3E0EA', '#B4C6D4', '#8FA9C4', '#6D8BAE', '#546B96'],
      name: 'Morning Mist',
      tags: ['calm', 'blue', 'gray', 'soft']
    },
    {
      colors: ['#A8DADC', '#457B9D', '#1D3557', '#F1FAEE', '#E63946'],
      name: 'Serene Meadow',
      tags: ['calm', 'green', 'nature', 'peaceful']
    },
    {
      colors: ['#B2EBF2', '#80DEEA', '#4DD0E1', '#26C6DA', '#00ACC1'],
      name: 'Tranquil Waters',
      tags: ['calm', 'blue', 'water', 'relax']
    },
    {
      colors: ['#B0C4DE', '#778899', '#708090', '#A9A9A9', '#D3D3D3'],
      name: 'Silver Horizon',
      tags: ['calm', 'gray', 'neutral', 'soft', 'sky']
    },
    {
      colors: ['#C7EFCF', '#80B192', '#6B8F71', '#507D5D', '#3D6651'],
      name: 'Forest Whisper',
      tags: ['calm', 'green', 'nature', 'forest', 'peace']
    },
    {
      "colors": ['#A8DADC', '#F1FAEE', '#457B9D', '#1D3557', '#F1FAEE'],
      "name": 'Ocean Breeze',
      "tags": ['tranquil', 'serene', 'refreshing', 'nature', 'peaceful', 'calm']
    },
    {
      "colors": ['#F0FFF0', '#E0FFFF', '#B0E0E6', '#AFEEEE', '#5F9EA0'],
      "name": 'Minty Fresh',
      "tags": ['tranquil', 'mint', 'calm', 'refreshing', 'soft', 'calm']
    },
    {
      "colors": ['#E0F4FF', '#B9E6FF', '#7DCCFF', '#5EBFFF', '#38B6FF'],
      "name": 'Zen Garden',
      "tags": ['meditation', 'harmony', 'balance', 'mindful', 'peaceful', 'tranquil', 'calm']
    },
    {
      "colors": ['#D4E7C5', '#BFD8AF', '#99BC85', '#77A05E', '#538043',],
      "name": 'Bamboo Forest',
      "tags": ['natural', 'serenity', 'growth', 'wellness', 'calming', 'tranquil', 'calm']
    },
    {
      "colors": ['#E6F3FF', '#CCE7FF', '#99CFFF', '#66B8FF', '#3AA0FF'],
      "name": 'Cloud Nine',
      "tags": ['dreamy', 'floating', 'gentle', 'relaxing', 'soothing', 'tranquil', 'calm']
    }
  ],
  'City': [
    {
      colors: ['#FF4500', '#FF6347', '#FFD700', '#DAA520', '#8B0000'],
      name: 'Urban Sunset',
      tags: ['city', 'sunset', 'orange', 'skyline']
    },
    {
      colors: ['#A9A9A9', '#808080', '#696969', '#D3D3D3', '#778899'],
      name: 'Concrete Jungle',
      tags: ['city', 'gray', 'urban', 'modern']
    },
    {
      colors: ['#FF1493', '#00FFFF', '#7B68EE', '#8A2BE2', '#32CD32'],
      name: 'Neon Nights',
      tags: ['city', 'night', 'vibrant', 'party']
    },
    {
      colors: ['#2E4053', '#34495E', '#5D6D7E', '#85929E', '#ABB2B9'],
      name: 'Steel Skyline',
      tags: ['city', 'blue-gray', 'industrial', 'modern', 'skyline']
    },
    {
      colors: ['#FFC300', '#FF5733', '#C70039', '#900C3F', '#581845'],
      name: 'Metropolitan Glow',
      tags: ['city', 'gold', 'vibrant', 'evening', 'urban']
    },
    {
      colors: ['#1B1B1B', '#2C2C54', '#474787', '#34ACE0', '#2C3A47'],
      name: 'Midnight Streets',
      tags: ['city', 'night', 'neon', 'urban lights', 'dark']
    },
    {
      colors: ['#E8C547', '#30323D', '#4D5061', '#8B939C', '#5C80BC'],
      name: 'Downtown Dusk',
      tags: ['city', 'evening', 'urban landscape', 'twilight', 'architecture']
    },
    {
      colors: ['#FF1E56', '#FFAC41', '#FF5E5B', '#FF9B6A', '#FFD07F'],
      name: 'Chinatown Lights',
      tags: ['city', 'asian district', 'lanterns', 'night market', 'cultural']
    },
    {
      colors: ['#04724D', '#98C9A3', '#DAD7CD', '#A3B18A', '#588157'],
      name: 'Urban Garden',
      tags: ['city', 'green space', 'park', 'sustainable', 'eco-friendly']
    },
    {
      colors: ['#2D4059', '#EA5455', '#F07B3F', '#FFD460', '#FDB827'],
      name: 'Metro Pulse',
      tags: ['city', 'subway', 'transportation', 'urban flow', 'movement']
    },
    {
      colors: ['#577399', '#BDD5EA', '#F7F7FF', '#FE5F55', '#495867'],
      name: 'City Harbor',
      tags: ['city', 'waterfront', 'dock', 'maritime', 'coastal urban']
    }
  ],
  'Dreamy': [
    {
      colors: ['#FFD1DC', '#FFC0CB', '#FFB6C1', '#FFA07A', '#FF69B4'],
      name: 'Stardust Glow',
      tags: ['dreamy', 'pink', 'soft', 'stars']
    },
    {
      colors: ['#87CEEB', '#B0E0E6', '#ADD8E6', '#E0FFFF', '#F0FFFF'],
      name: 'Cloudy Skies',
      tags: ['dreamy', 'blue', 'light', 'calm']
    },
    {
      colors: ['#FFE4E1', '#FAFAD2', '#FFFACD', '#FFEBCD', '#FFDAB9'],
      name: 'Fairy Lights',
      tags: ['dreamy', 'yellow', 'soft', 'magical']
    },
    {
      colors: ['#6A0DAD', '#9400D3', '#9932CC', '#BA55D3', '#D8BFD8'],
      name: 'Amethyst Dreams',
      tags: ['dreamy', 'purple', 'soft', 'fantasy', 'gemstones']
    },
    {
      colors: ['#FFF0F5', '#FDEEF4', '#FAEBD7', '#F5F5DC', '#E6E6FA'],
      name: 'Velvet Clouds',
      tags: ['dreamy', 'pastel', 'gentle', 'whimsical', 'ethereal']
    },
    {
      colors: ['#FFD700', '#FFC107', '#FFB300', '#FFA000', '#FF8F00'],
      name: 'Golden Slumber',
      tags: ['dreamy', 'yellow', 'gold', 'bright', 'warm']
    },
    {
      "colors": ['#1E90FF', '#6A5ACD', '#8A2BE2', '#9370DB', '#B0E0E6'],
      "name": 'Starry Night',
      "tags": ['celestial', 'dreamy', 'night', 'blue', 'mystical']
    },
    {
      "colors": ['#483D8B', '#4B0082', '#7B68EE', '#9932CC', '#DDA0DD'],
      "name": 'Nebula Nights',
      "tags": ['space', 'galaxy', 'purple', 'cosmic', 'mystical', 'celestial']
    },
    {
      "colors": ['#00008B', '#4169E1', '#87CEEB', '#E6E6FA', '#F0F8FF'],
      "name": 'Aurora Dreams',
      "tags": ['northern lights', 'sky', 'ethereal', 'peaceful', 'celestial']
    },
    {
      colors: ['#4B0082', '#6A5ACD', '#7B68EE', '#9370DB', '#E6E6FA'],
      name: 'Twilight Whispers',
      tags: ['mystical', 'dreamy', 'ethereal', 'purple', 'magical']
    },
    {
      colors: ['#800080', '#9932CC', '#BA55D3', '#DDA0DD', '#D8BFD8'],
      name: 'Enchanted Mist',
      tags: ['mystical', 'enchanted', 'mysterious', 'spiritual', 'ethereal']
    },
    {
      colors: ['#191970', '#483D8B', '#6A5ACD', '#7B68EE', '#9370DB'],
      name: 'Dream Odyssey',
      tags: ['mystical', 'celestial', 'surreal', 'astral', 'transcendent']
    },
    {
      "colors": ['#4B0082', '#8A2BE2', '#9932CC', '#DA70D6', '#E6E6FA'],
      "name": 'Enchanted Twilight',
      "tags": ['mystic', 'purple', 'magical', 'dreamy', 'ethereal']
    },
    {
      "colors": ['#191970', '#483D8B', '#6A5ACD', '#7B68EE', '#8A2BE2'],
      "name": 'Cosmic Night',
      "tags": ['mystic', 'space', 'dark', 'celestial', 'dreamlike']
    },
    {
      "colors": ['#2E0854', '#3D1466', '#4C1F78', '#5B2A8A', '#6A359C'],
      "name": 'Crystal Vision',
      "tags": ['crystal', 'fortune', 'mystical', 'mysterious', 'spiritual']
    },
    {
      "colors": ['#1A0033', '#330066', '#4D0099', '#6600CC', '#8000FF'],
      "name": 'Arcane Wisdom',
      "tags": ['occult', 'wisdom', 'metaphysical', 'sacred', 'divine', 'mystical']
    },
    {
      "colors": ['#2D004D', '#5A008F', '#7700B3', '#9400D3', '#B100F5'],
      "name": 'Oracle Mist',
      "tags": ['prophecy', 'intuition', 'psychic', 'enchanted', 'supernatural', 'mystical']
    }
  ],

  'Earth': [
    {
      colors: ['#A0522D', '#CD853F', '#DEB887', '#D2B48C', '#8B4513'],
      name: 'Clay Earth',
      tags: ['earth', 'brown', 'natural', 'ground']
    },
    {
      colors: ['#556B2F', '#6B8E23', '#9ACD32', '#ADFF2F', '#7FFF00'],
      name: 'Verdant Grove',
      tags: ['earth', 'green', 'nature', 'forest']
    },
    {
      colors: ['#8B8680', '#A9A9A9', '#808080', '#696969', '#B0C4DE'],
      name: 'Rock Layers',
      tags: ['earth', 'gray', 'stone', 'layers']
    },
    {
      colors: ['#4B5320', '#6E7F31', '#8B9C46', '#ACBA66', '#D4D9A3'],
      name: 'Mossy Terrain',
      tags: ['earth', 'green', 'moss', 'terrain', 'natural']
    },
    {
      colors: ['#B22222', '#8B0000', '#A52A2A', '#800000', '#5C4033'],
      name: 'Volcanic Ash',
      tags: ['earth', 'red', 'volcano', 'fiery', 'ground']
    },
    {
      colors: ['#7F462C', '#A0522D', '#D2691E', '#E9967A', '#FFA07A'],
      name: 'Canyon Layers',
      tags: ['earth', 'orange', 'canyon', 'layers', 'sunlit']
    },
    {
      "colors": ['#8B4513', '#A0522D', '#DEB887', '#D2691E', '#C2B280'],
      "name": 'Rustic Landscape',
      "tags": ['earthy', 'natural', 'grounded', 'organic', 'warmth']
    },
    {
      "colors": ['#4E3B31', '#A0522D', '#C2B280', '#D9CBAE', '#8B4513'],
      "name": 'Woodland Retreat',
      "tags": ['earthy', 'wood', 'nature', 'calm', 'neutral']
    },
    {
      "colors": ['#6B4423', '#8E593C', '#B87A52', '#DAB49D', '#E5C4A3'],
      "name": 'Terra Essence',
      "tags": ['clay', 'pottery', 'artisan', 'authentic', 'handcrafted']
    },
    {
      "colors": ['#594736', '#7E6952', '#A69580', '#C4B5A2', '#E2D9CD'],
      "name": 'Mountain Trail',
      "tags": ['hiking', 'outdoor', 'adventure', 'rugged', 'wilderness']
    },
    {
      "colors": ['#796445', '#A87D43', '#C4A484', '#DCD7C9', '#A2785C'],
      "name": 'Desert Sands',
      "tags": ['desert', 'neutral', 'bohemian', 'rustic', 'authentic']
    },
    {
      colors: ['#3C2F2F', '#5C4033', '#7F634B', '#A48E7D', '#C4B5A2'],
      name: 'Ancient Soil',
      tags: ['earth', 'ancient', 'archeology', 'timeless', 'natural']
    },
    {
      colors: ['#2A2A2A', '#5A5A5A', '#8A8A8A', '#BBBBBB', '#E0E0E0'],
      name: 'Iron Ore',
      tags: ['earth', 'mineral', 'industrial', 'metals', 'raw']
    },
    {
      colors: ['#3E2B2B', '#5A3E3E', '#8C5E5E', '#B98D8D', '#E4B4B4'],
      name: 'Red Rock Horizon',
      tags: ['red rock', 'desert', 'canyon', 'warm', 'earth']
    }
  ],
  'Elegant & Luxury': [
    {
      colors: ['#FFD700', '#FFA500', '#FF8C00', '#DAA520', '#CD853F'],
      name: 'Golden Hour',
      tags: ['elegant', 'gold', 'warm', 'luxury']
    },
    {
      colors: ['#F5F5DC', '#EEE8AA', '#DCDCDC', '#B0C4DE', '#C0C0C0'],
      name: 'Silk & Satin',
      tags: ['elegant', 'neutral', 'soft', 'luxury']
    },
    {
      colors: ['#1C1C1C', '#2F4F4F', '#4B0082', '#483D8B', '#191970'],
      name: 'Midnight Chic',
      tags: ['elegant', 'dark', 'blue', 'formal']
    },
    {
      colors: ['#8B4513', '#D2691E', '#E6BE8A', '#DEB887', '#F4A460'],
      name: 'Tuscan Sunset',
      tags: ['elegant', 'earth', 'rustic', 'warm']
    },
    {
      colors: ['#4A286D', '#9B4F96', '#C874B2', '#E5A9C7', '#F5D6E6'],
      name: 'Royal Orchid',
      tags: ['elegant', 'purple', 'romantic', 'sophisticated'] 
    },
    {
      colors: ['#004D40', '#00695C', '#00897B', '#26A69A', '#80CBC4'],
      name: 'Emerald Manor',
      tags: ['elegant', 'green', 'serene', 'refined']
    },
    {
      colors: ['#7D4427', '#B87E5F', '#DAB49D', '#F5E6D3', '#A67B5B'],
      name: 'Aged Cognac',
      tags: ['elegant', 'brown', 'vintage', 'sophisticated', 'luxury']
    },
    {
      colors: ['#2E0F15', '#5F1B2D', '#8E2F47', '#BC4262', '#E55A7E'],
      name: 'Wine Velvet',
      tags: ['elegant', 'burgundy', 'rich', 'glamorous', 'dramatic']
    },
    {
      colors: ['#2D5462', '#497D8E', '#68A5B8', '#94CFE0', '#BAE6F2'],
      name: 'Ocean Estate',
      tags: ['elegant', 'coastal', 'tranquil', 'refined', 'fresh']
    },
    {
      "colors": ['#000000', '#1C1C1C', '#4B4B4B', '#A9A9A9', '#D3D3D3'],
      "name": 'Timeless Elegance',
      "tags": ['monochrome', 'elegant', 'sophisticated', 'black', 'white']
    },
    {
      "colors": ['#2C3E50', '#34495E', '#5D6D7E', '#85929E', '#BDC3C7'],
      "name": 'Urban Grey',
      "tags": ['minimalist', 'modern', 'professional', 'sleek', 'contemporary']
    },
    {
      "colors": ['#1B2631', '#273746', '#515A5A', '#707B7C', '#ABB2B9'],
      "name": 'Classic Slate',
      "tags": ['luxury', 'premium', 'clean', 'refined', 'timeless']
    },
    {
      colors: ['#8B0000', '#800000', '#B22222', '#CD5C5C', '#DC143C'],
      name: 'Velvet Touch',
      tags: ['luxury', 'red', 'rich', 'royal']
    },
    {
      colors: ['#2E8B57', '#228B22', '#006400', '#8FBC8F', '#98FB98'],
      name: 'Emerald Jewel',
      tags: ['luxury', 'green', 'gem', 'royalty']
    },
    {
      colors: ['#FFD700', '#DAA520', '#B8860B', '#FFBF00', '#FFCC00'],
      name: 'Golden Glam',
      tags: ['luxury', 'gold', 'shiny', 'rich']
    }  
  ],
  'Festival': [
    {
      colors: ['#FF4500', '#FFD700', '#00FF00', '#00BFFF', '#8A2BE2'],
      name: 'Carnival Lights',
      tags: ['festival', 'bright', 'party', 'vibrant']
    },
    {
      colors: ['#FF6347', '#FF69B4', '#FFD700', '#ADFF2F', '#40E0D0'],
      name: 'Holi Colors',
      tags: ['festival', 'colorful', 'celebration', 'fun']
    },
    {
      colors: ['#FF4500', '#FFA500', '#FFD700', '#FFE4B5', '#F0E68C'],
      name: 'Lantern Glow',
      tags: ['festival', 'yellow', 'warm', 'night']
    },
    {
      colors: ['#FF1493', '#00FFFF', '#FF4500', '#9400D3', '#32CD32'],
      name: 'Neon Dreams',
      tags: ['festival', 'neon', 'electric', 'dynamic', 'modern']
    },
    {
      colors: ['#FF00FF', '#4B0082', '#0000FF', '#7B68EE', '#9370DB'],
      name: 'Cosmic Dance',
      tags: ['festival', 'mystic', 'galactic', 'enchanting', 'magical']
    },
    {
      colors: ['#FF69B4', '#FFB6C1', '#FFA07A', '#98FB98', '#87CEEB'],
      name: 'Cotton Candy Carnival',
      tags: ['festival', 'sweet', 'playful', 'dreamy', 'whimsical']
    },
    {
      colors: ['#E63946', '#F1FAEE', '#A8DADC', '#457B9D', '#1D3557'],
      name: 'Winter Solstice',
      tags: ['winter', 'solstice', 'festival', 'snow', 'cold']
    },
    {
      colors: ['#FF4500', '#FFD700', '#ADFF2F', '#FF69B4', '#4B0082'],
      name: 'Spring Awakening',
      tags: ['spring', 'flowers', 'rebirth', 'bright', 'nature']
    },
    {
      colors: ['#8B0000', '#FF8C00', '#FFD700', '#228B22', '#191970'],
      name: 'Harvest Moon',
      tags: ['autumn', 'harvest', 'festival', 'moon', 'golden']
    },
    {
      "colors": ['#FF1493', '#FF69B4', '#FFB6C1', '#FFD700', '#FF4500'],
      "name": 'Celebration Colors',
      "tags": ['festival', 'celebration', 'bright', 'joyful', 'lively']
    },
    {
      "colors": ['#FF3366', '#FF9933', '#FFCC00', '#FF66CC', '#FF3399'],
      "name": 'Carnival Nights',
      "tags": ['vibrant', 'festive', 'party', 'dynamic', 'energetic']
    },
    {
      "colors": ['#FF1E1E', '#FFA500', '#FFFF00', '#FF69B4', '#FF8C00'],
      "name": 'Diwali Dreams',
      "tags": ['cultural', 'traditional', 'festive', 'colorful', 'celebration']
    },
    {
      colors: ['#E63946', '#F1C453', '#A8DADC', '#457B9D', '#1D3557'],
      name: 'Chinese New Year',
      tags: ['lunar new year', 'spring festival', 'traditional', 'celebration', 'asian culture']
    },
    {
      colors: ['#FF9933', '#FFFFFF', '#138808', '#000080', '#800080'],
      name: 'Indian Festival',
      tags: ['holi colors', 'cultural celebration', 'traditional fest', 'asian heritage', 'festive']
    },
    {
      colors: ['#7B2CBF', '#9D4EDD', '#C77DFF', '#E0AAFF', '#FFFFFF'],
      name: 'Mardi Gras',
      tags: ['carnival', 'new orleans', 'celebration', 'party theme', 'festival colors']
    },
    {
      colors: ['#800080', '#FF4500', '#FFFF00', '#FF6347', '#2E8B57'],
      name: 'Halloween Vibes',
      tags: ['halloween', 'spooky', 'pumpkin', 'night', 'autumn', 'festive holidays']
    },
    {
      colors: ['#000080', '#4169E1', '#FFD700', '#FF4500', '#FFFFFF'],
      name: 'New Year’s Sparkle',
      tags: ['new year', 'celebration', 'sparkle', 'midnight', 'party', 'festive holidays']
    }
  ],

  'Minimal': [
    {
      colors: ['#FFFFF0', '#FAF9F6', '#F5F5F5', '#EAEDED', '#D5DBDB'],
      name: 'Ivory White',
      tags: ['minimal', 'white', 'clean', 'neutral']
    },
    {
      colors: ['#F5F5DC', '#EEE8AA', '#DCDCDC', '#D2B48C', '#C0C0C0'],
      name: 'Soft Beige',
      tags: ['minimal', 'neutral', 'calm', 'elegant']
    },
    {
      colors: ['#A9A9A9', '#696969', '#808080', '#778899', '#B0C4DE'],
      name: 'Muted Tones',
      tags: ['minimal', 'gray', 'modern', 'clean']
    },
    {
      colors: ['#2B2B2B', '#333333', '#3D3D3D', '#454545', '#4F4F4F'],
      name: 'Carbon Black',
      tags: ['minimal', 'dark', 'sophisticated', 'sleek', 'contemporary']
    },
    {
      colors: ['#E0E5EC', '#D1D9E6', '#C2CCD6', '#B4BEC9', '#A5B1BD'],
      name: 'Neumorphic Sage',
      tags: ['minimal', 'futuristic', 'subtle', 'professional', 'cool']
    },
    {
      colors: ['#E8ECF1', '#CAD5E0', '#8595A6', '#5C7185', '#2E4052'],
      name: 'Arctic Slate',
      tags: ['minimal', 'winter', 'crisp', 'progressive', 'structured']
    },
    {
      colors: ['#F4ECD6', '#DAC7B7', '#A6978A', '#776B5F', '#463E36'],
      name: 'Wabi Sabi',
      tags: ['minimal', 'japanese', 'zen', 'rustic', 'timeless']
    }
  ],
  'Romantic': [
    {
      colors: ['#FFC0CB', '#FFB6C1', '#FF69B4', '#FF1493', '#DB7093'],
      name: 'Blush & Roses',
      tags: ['romantic', 'pink', 'love', 'soft']
    },
    {
      colors: ['#FFDAB9', '#FFDEAD', '#FFE4B5', '#F0E68C', '#FFE4E1'],
      name: 'Candlelight Glow',
      tags: ['romantic', 'warm', 'yellow', 'soft']
    },
    {
      colors: ['#483D8B', '#4B0082', '#6A5ACD', '#7B68EE', '#9370DB'],
      name: 'Moonlit Night',
      tags: ['romantic', 'purple', 'calm', 'evening']
    },
    {
      colors: ['#E8B4BC', '#D4939D', '#CB7A86', '#BB6271', '#A84A5C'],
      name: 'Vintage Rose',
      tags: ['romantic', 'dusty', 'feminine', 'elegant', 'classic']
    },
    {
      colors: ['#E6E6FA', '#DCD0FF', '#B39DDB', '#9575CD', '#7E57C2'],
      name: 'Lavender Dreams',
      tags: ['romantic', 'dreamy', 'ethereal', 'delicate', 'peaceful']
    },
    {
      colors: ['#F8C3CD', '#E4A3B1', '#F4B8B8', '#FBB0D1', '#FFD1DC'],
      name: 'Cherry Blossom',
      tags: ['romantic', 'spring', 'gentle', 'sweet', 'tender']
    },
    {
      colors: ['#FFB5BA', '#FFDADE', '#FFC4BC', '#FFE2E0', '#FFD1CC'],
      name: 'Love Letters',
      tags: ['romantic', 'handwritten notes', 'perfumed paper', 'secret admirer', 'heartfelt words']
    },
    {
      colors: ['#FADADD', '#FFC1CC', '#FFB6C1', '#FF94C2', '#FF69B4'],
      name: 'First Dance',
      tags: ['romantic', 'ballroom charm', 'waltz moment', 'couples twirl', 'dance floor']
    },
    {
      colors: ['#D77FA1', '#E38FB1', '#EF9FC1', '#FBB0D1', '#FFB9DA'],
      name: 'Sweet Proposal',
      tags: ['romantic', 'engagement moment', 'promise ring', 'knee bend', 'lifetime vow']
    },
    {
      colors: ['#B983FF', '#C793FF', '#D5A3FF', '#E3B3FF', '#F1C3FF'],
      name: 'Twilight Romance',
      tags: ['romantic', 'evening date', 'starlit walk', 'moonlit kiss', 'purple sunset']
    }
  ],

  'Pastel': [
    {
      colors: ['#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF'],
      name: 'Pastel Dream',
      tags: ['pastel', 'soft', 'colorful', 'trendy', 'light']
    },
    {
      colors: ['#FFB6C1', '#FFDAB9', '#E6E6FA', '#F0E68C', '#ADD8E6'],
      name: 'Candy Pastels',
      tags: ['pastel', 'sweet', 'colorful', 'popular', 'soft']
    },
    {
      colors: ['#D8BFD8', '#DDA0DD', '#EEE8AA', '#FAF0E6', '#FFE4B5'],
      name: 'Soft Hues',
      tags: ['pastel', 'soft', 'neutral', 'gentle', 'modern']
    },
    {
      "colors": ['#B0E0E6', '#E6E6FA', '#F0E68C', '#FFDAB9', '#FFB6C1'],
      "name": 'Winter Wonderland',
      "tags": ['frosty', 'pastel', 'soft', 'winter', 'light']
    },
    {
      "colors": ['#E8F4F8', '#CBE5F3', '#DDEDEA', '#F0EBF4', '#F9E7E7'],
      "name": 'Arctic Dawn',
      "tags": ['delicate', 'gentle', 'powder', 'subtle', 'ethereal', 'frosty']
    },
    {
      "colors": ['#D4F0F0', '#CCE2CB', '#E6D5E8', '#FBE5E5', '#F9E8D9'],
      "name": 'Crystal Frost',
      "tags": ['ice', 'cool', 'refreshing', 'serene', 'dreamy', 'frosty']
    }
  ],

  'Bright': [
    {
      colors: ['#FF4500', '#FF6347', '#FFD700', '#ADFF2F', '#32CD32'],
      name: 'Tropical Fiesta',
      tags: ['bright', 'vivid', 'colorful', 'tropical', 'cheerful']
    },
    {
      colors: ['#FFA500', '#FF4500', '#FFD700', '#FFE4B5', '#FFFFE0'],
      name: 'Sunburst',
      tags: ['bright', 'warm', 'yellow', 'sunshine', 'energy']
    },
    {
      colors: ['#FF1493', '#00FF7F', '#00BFFF', '#7FFF00', '#FFD700'],
      name: 'Neon Energy',
      tags: ['bright', 'neon', 'vibrant', 'modern', 'bold']
    },
    {
      colors: ['#FF1E27', '#FF9933', '#FFFF00', '#33FF57', '#FF00FF'],
      name: 'Festival Lights',
      tags: ['bright', 'carnival colors', 'luminous glow', 'festive shine', 'radiant burst']
    },
    {
      colors: ['#00FF00', '#7FFF00', '#00FA9A', '#98FB98', '#90EE90'],
      name: 'Neon Jungle',
      tags: ['bright', 'phosphorescent', 'electric nature', 'glowing green', 'vivid forest']
    },
    {
      colors: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#FF9EAA'],
      name: 'Summer Flash',
      tags: ['bright', 'beach party', 'tropical pop', 'sunny vibes', 'coastal energy']
    }
  ],
  'Winter': [
    {
      colors: ['#E0F7FA', '#B2EBF2', '#80DEEA', '#4DD0E1', '#26C6DA'],
      name: 'Frozen Frost',
      tags: ['winter', 'cold', 'blue', 'ice', 'bright']
    },
    {
      colors: ['#E8F5E9', '#C8E6C9', '#A5D6A7', '#81C784', '#66BB6A'],
      name: 'Snowy Pines',
      tags: ['winter', 'green', 'nature', 'trees', 'calm']
    },
    {
      colors: ['#1C2833', '#283747', '#34495E', '#5D6D7E', '#85929E'],
      name: 'Winter Night',
      tags: ['winter', 'dark', 'blue', 'calm', 'evening']
    },
    {
      colors: ['#F0FFFF', '#E6E6FA', '#B5B3FB', '#8380D4', '#5B57A6'],
      name: 'Winter Dawn',
      tags: ['winter', 'lavender', 'ethereal', 'serene', 'misty']
    },
    {
      colors: ['#D8E4FF', '#8EB1FF', '#4682B4', '#235789', '#0A2239'],
      name: 'Glacier Deep',
      tags: ['winter', 'depth', 'arctic', 'crystalline', 'bold']
    },
    {
      colors: ['#E0FFFF', '#E6E6FA', '#F0F8FF', '#F5F5F5', '#FFFFFF'],
      name: 'Fresh Snow',
      tags: ['winter', 'pure white', 'pristine', 'snowfall', 'crisp']
    },
    {
      colors: ['#A5F2F3', '#8FE5E7', '#75D7D8', '#5CCACC', '#42BDC0'],
      name: 'Winter Lake',
      tags: ['winter', 'frozen water', 'icy surface', 'cold tones', 'glacial']
    },
    {
      colors: ['#D6E5FA', '#C1D5F5', '#ADC4F0', '#98B4EB', '#84A4E6'],
      name: 'Winter Storm',
      tags: ['winter', 'blizzard', 'stormy sky', 'harsh weather', 'cold front']
    },
    {
      colors: ['#BEBEBE', '#D4D4D4', '#E8E8E8', '#F5F5F5', '#FFFFFF'],
      name: 'Winter Fog',
      tags: ['winter', 'misty morning', 'cloudy day', 'frosty air', 'winter haze']
    }
  ],
  'Sports': [
    {
      colors: ['#FF4500', '#FF6347', '#8B4513', '#B8860B', '#FFCC00'],
      name: 'Court Classic',
      tags: ['sports', 'basketball', 'orange', 'court', 'dynamic']
    },
    {
      colors: ['#228B22', '#32CD32', '#ADFF2F', '#FFD700', '#FFFFFF'],
      name: 'Field Glory',
      tags: ['sports', 'football', 'green', 'field', 'vibrant']
    },
    {
      colors: ['#E0F7FA', '#B3E5FC', '#81D4FA', '#4FC3F7', '#03A9F4'],
      name: 'Ice Arena',
      tags: ['sports', 'hockey', 'blue', 'cold', 'bright']
    },
    {
      colors: ['#2D31FA', '#5D65F3', '#90E0EF', '#97DBEF', '#B8E8FC'],
      name: 'Swimming Champion',
      tags: ['sports', 'pool lanes', 'aquatic race', 'olympic spirit', 'diving']
    },
    {
      colors: ['#F94C10', '#FD8D14', '#C51605', '#DC1233', '#FF6B6B'],
      name: 'Boxing Ring',
      tags: ['sports', 'fighter spirit', 'ring battle', 'knockout power', 'champion belt']
    },
    {
      colors: ['#3F497F', '#575FAB', '#7785DC', '#939DFF', '#B5BCFF'],
      name: 'Fencing Arena',
      tags: ['sports', 'sword art', 'precision sport', 'elegant duel', 'tactical']
    },
    {
      colors: ['#354259', '#4B5D78', '#637A97', '#7B98B6', '#93B7D5'],
      name: 'Archery Focus',
      tags: ['sports', 'target practice', 'bow mastery', 'arrow flight', 'precision aim']
    }
  ],
  'Movies': [
    {
      colors: ['#000000', '#2F4F4F', '#696969', '#808080', '#D3D3D3'],
      name: 'Classic Noir',
      tags: ['movies', 'black', 'gray', 'noir', 'classic']
    },
    {
      colors: ['#FF4500', '#FF6347', '#FFD700', '#ADFF2F', '#00BFFF'],
      name: 'Epic Adventure',
      tags: ['movies', 'adventure', 'bright', 'dynamic', 'colorful']
    },
    {
      colors: ['#7B68EE', '#6A5ACD', '#8A2BE2', '#9370DB', '#E6E6FA'],
      name: 'Fantasy Realms',
      tags: ['movies', 'fantasy', 'purple', 'magic', 'dreamy']
    },
    {
      colors: ['#FF69B4', '#FFB6C1', '#87CEEB', '#98FB98', '#DDA0DD'],
      name: 'Anime Dreams',
      tags: ['movies', 'anime', 'kawaii', 'vibrant', 'playful']
    },
    {
      colors: ['#6D214F', '#B33771', '#E056FD', '#7D3C98', '#2C3E50'],
      name: 'Superhero Saga',
      tags: ['movies', 'action', 'heroic', 'bold', 'powerful']
    },
    {
      colors: ['#000000', '#1C1C1C', '#3A3A3A', '#FFD700', '#FF6347'],
      name: 'Action Blockbuster',
      tags: ['action', 'thrill', 'adventure', 'explosions', 'blockbuster', 'movie genres']
    },
    {
      colors: ['#B22222', '#FF4500', '#FF6347', '#FFD700', '#FFA500'],
      name: 'Romantic Sunset',
      tags: ['romance', 'love', 'sunset', 'warm', 'emotional', 'movie genres']
    },
    {
      colors: ['#191970', '#4169E1', '#6495ED', '#87CEEB', '#FFFFFF'],
      name: 'Sci-Fi Horizon',
      tags: ['sci-fi', 'future', 'technology', 'cosmos', 'mystery', 'movie genres']
    }
  ],

  'Popular Films': [
    {
      colors: ['#1C2833', '#B0C4DE', '#4682B4', '#708090', '#D3D3D3'],
      name: 'Titanic',
      tags: ['movies', 'romance', 'blue', 'ocean', 'drama']
    },
    {
      colors: ['#000000', '#1C1C1C', '#5D6D7E', '#34495E', '#FF5733'],
      name: 'The Dark Knight',
      tags: ['movies', 'action', 'dark', 'hero', 'urban']
    },
    {
      colors: ['#6A5ACD', '#8A2BE2', '#DDA0DD', '#FFD700', '#FFFFFF'],
      name: 'La La Land',
      tags: ['movies', 'romance', 'musical', 'vibrant', 'dreamy']
    },
    {
      colors: ['#000080', '#4682B4', '#5F9EA0', '#00CED1', '#7FFF00'],
      name: 'Avatar',
      tags: ['movies', 'sci-fi', 'nature', 'blue', 'alien']
    },
    {
      colors: ['#556B2F', '#8B4513', '#D2B48C', '#FFD700', '#FFFFFF'],
      name: 'The Lord of the Rings',
      tags: ['movies', 'fantasy', 'epic', 'adventure', 'nature']
    },
    {
      colors: ['#4B0082', '#8A2BE2', '#D2691E', '#708090', '#F5DEB3'],
      name: 'Harry Potter',
      tags: ['movies', 'magic', 'fantasy', 'adventure', 'mystery']
    },
    {
      colors: ['#000000', '#1C2833', '#34495E', '#B0C4DE', '#FFFFFF'],
      name: 'Interstellar',
      tags: ['movies', 'sci-fi', 'space', 'dark', 'cosmos']
    },
    {
      colors: ['#2C3E50', '#34495E', '#5D6D7E', '#AED6F1', '#FFFFFF'],
      name: 'Inception',
      tags: ['movies', 'sci-fi', 'dreams', 'psychological', 'blue']
    },
    {
      colors: ['#556B2F', '#B22222', '#D3D3D3', '#FFF5EE', '#708090'],
      name: 'Forrest Gump',
      tags: ['movies', 'classic', 'drama', 'romance', 'life']
    },
    {
      colors: ['#000000', '#008000', '#303030', '#696969', '#C0C0C0'],
      name: 'The Matrix',
      tags: ['movies', 'sci-fi', 'action', 'green', 'cyberpunk']
    },
  ],
  'TV Series': [
    {
      colors: ['#556B2F', '#FFD700', '#708090', '#2F4F4F', '#000000'],
      name: 'Breaking Bad',
      tags: ['tv series', 'crime', 'drama', 'chemistry', 'desert']
    },
    {
      colors: ['#1B1B1B', '#2C3E50', '#E74C3C', '#7F8C8D', '#FFFFFF'],
      name: 'Black Mirror',
      tags: ['dystopian', 'technology', 'future', 'psychological', 'dark']
    },
    {
      colors: ['#1C1C1C', '#708090', '#A9A9A9', '#D3D3D3', '#FFFFFF'],
      name: 'Game of Thrones',
      tags: ['tv series', 'fantasy', 'epic', 'dark', 'medieval']
    },
    {
      colors: ['#1A472A', '#2A623D', '#5D5D5D', '#AAAAAA', '#000000'],
      name: 'The Crown',
      tags: ['royal', 'historical', 'drama', 'british', 'politics']
    },
    {
      colors: ['#800000', '#A52A2A', '#D2B48C', '#000000', '#708090'],
      name: 'The Sopranos',
      tags: ['tv series', 'crime', 'drama', 'family', 'mafia']
    },
    {
      colors: ['#8B0000', '#2F4F4F', '#696969', '#A9A9A9', '#FFFFFF'],
      name: 'Stranger Things',
      tags: ['tv series', 'sci-fi', 'mystery', '80s', 'thriller']
    },
    {
      colors: ['#FFA500', '#FFD700', '#F08080', '#87CEFA', '#FFFFFF'],
      name: 'Friends',
      tags: ['tv series', 'comedy', 'classic', 'friendship', 'light']
    },
    {
      colors: ['#708090', '#D3D3D3', '#B0C4DE', '#A9A9A9', '#FFFFFF'],
      name: 'The Office',
      tags: ['tv series', 'comedy', 'workplace', 'drama', 'light']
    },
    {
      colors: ['#708090', '#B22222', '#D2B48C', '#8B0000', '#F5F5DC'],
      name: 'The Crown',
      tags: ['tv series', 'royalty', 'drama', 'history', 'elegant']
    },
    {
      colors: ['#2F4F4F', '#696969', '#8B4513', '#A9A9A9', '#000000'],
      name: 'The Walking Dead',
      tags: ['tv series', 'zombies', 'horror', 'survival', 'apocalypse']
    },
    {
      colors: ['#2F4F4F', '#708090', '#B0C4DE', '#A9A9A9', '#FFFFFF'],
      name: 'The Witcher',
      tags: ['tv series', 'fantasy', 'magic', 'epic', 'dark']
    },
    {
      colors: ['#2F4F4F', '#708090', '#8B4513', '#B22222', '#000000'],
      name: 'Peaky Blinders',
      tags: ['tv series', 'crime', 'gangster', 'historical', 'drama']
    },
    {
      colors: ['#8A2BE2', '#6A5ACD', '#DDA0DD', '#FFD700', '#FFFFFF'],
      name: 'Euphoria',
      tags: ['tv series', 'drama', 'teen', 'vibrant', 'emotional']
    },
    {
      colors: ['#2F4F4F', '#34495E', '#5D6D7E', '#708090', '#FFFFFF'],
      name: 'Ozark',
      tags: ['tv series', 'crime', 'thriller', 'dark', 'family']
    },
    {
      colors: ['#8B0000', '#FFD700', '#708090', '#2F4F4F', '#FFFFFF'],
      name: 'Better Call Saul',
      tags: ['tv series', 'crime', 'law', 'prequel', 'drama']
    },
    {
      colors: ['#2E3A46', '#1B2631', '#0B1523', '#4A6F8A', '#607D8B'],
      name: 'True Detective',
      tags: ['tv series', 'crime noir', 'detective story', 'mystery', 'dark theme']
    },
    {
      colors: ['#8B0000', '#B22222', '#C41E3A', '#DC143C', '#FF6347'],
      name: 'Dexter',
      tags: ['tv series', 'blood theme', 'psychological', 'serial killer', 'dark']
    }
  ],

  'Ocean': [
    {
      colors: ['#4A90E2', '#357ABD', '#2E5A88', '#1B365C', '#0F2A4A'],
      name: 'Deep Ocean',
      tags: ['water', 'blue', 'dark']
    },
    {
      colors: ['#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2'],
      name: 'Ocean Wave',
      tags: ['water', 'blue', 'light']
    },
    {
      colors: ['#006994', '#0085B6', '#00A4D6', '#00C3FF', '#48D1FF'],
      name: 'Coral Reef',
      tags: ['tropical', 'marine', 'aquatic', 'clear', 'underwater']
    },
    {
      "colors": ['#E0FFFF', '#AFEEEE', '#00CED1', '#20B2AA', '#5F9EA0'],
      "name": 'Beach Breeze',
      "tags": ['coastal serenity', 'calm', 'ocean', 'refreshing', 'light']
    },
    {
      "colors": ['#87CEEB', '#48D1CC', '#40E0D0', '#00FFFF', '#7FFFD4'],
      "name": 'Ocean Mist',
      "tags": ['aqua', 'marine', 'peaceful', 'serene', 'tropical', 'coastal serenity']
    },
    {
      "colors": ['#B8D8E3', '#66A5AD', '#07575B', '#003B46', '#C4DFE6'],
      "name": 'Deep Sea',
      "tags": ['nautical', 'deep', 'mysterious', 'marine', 'sophisticated', 'coastal serenity']
    }
  ],
  
  'Forest & Nature': [
    {
      colors: ['#2E7D32', '#388E3C', '#43A047', '#4CAF50', '#66BB6A'],
      name: 'Pine Forest',
      tags: ['nature', 'green', 'trees']
    },
    {
      colors: ['#1B5E20', '#2E7D32', '#388E3C', '#43A047', '#4CAF50'],
      name: 'Deep Forest',
      tags: ['nature', 'green', 'dark', 'trees', 'nature'], 
    },
    {
      colors: ['#004D40', '#00695C', '#00796B', '#00897B', '#009688'],
      name: 'Rainforest Canopy',
      tags: ['tropical', 'lush', 'dense', 'exotic', 'verdant', 'forest']
    },
    {
      "colors": ['#3CB371', '#2E8B57', '#228B22', '#6B8E23', '#8FBC8F'],
      "name": 'Mystical Woods',
      "tags": ['enchanted', 'forest', 'green', 'nature', 'magical','forest']
    },
    {
      "colors": ['#145A32', '#1E8449', '#27AE60', '#58D68D', '#A9DFBF'],
      "name": 'Ancient Grove',
      "tags": ['woodland', 'earthy', 'organic', 'natural', 'verdant', 'forest']
    },
    {
      "colors": ['#004D40', '#00695C', '#2E7D32', '#388E3C', '#43A047'],
      "name": 'Secret Garden',
      "tags": ['botanical', 'lush', 'jungle', 'spring', 'fantasy', 'forest']
    },
    {
      colors: ['#6B8E23', '#8FBC8F', '#2E8B57', '#3CB371', '#20B2AA'],
      name: 'Forest Harmony',
      tags: ['nature', 'earthy', 'organic', 'green', 'fresh', 'nature embrace']
    },
    {
      colors: ['#90EE90', '#98FB98', '#32CD32', '#228B22', '#006400'],
      name: 'Mountain Meadow',
      tags: ['nature', 'alpine', 'pristine', 'serene', 'wilderness', 'nature embrace']
    },
    {
      colors: ['#8B4513', '#A0522D', '#6B8E23', '#556B2F', '#228B22'],
      name: 'Wild Valley',
      tags: ['nature', 'untamed', 'rustic', 'pastoral', 'natural', 'nature embrace']
    },
    {
      colors: ['#2E8B57', '#A0522D', '#8FBC8F', '#556B2F', '#8B4513'],
      name: 'City Greenery',
      tags: ['urban', 'jungle', 'nature', 'green', 'modern']
    },
    {
      colors: ['#3CB371', '#228B22', '#32CD32', '#006400', '#008000'],
      name: 'Vertical Garden',
      tags: ['urban', 'botanical', 'living', 'verdant', 'sustainable', 'jungle']
    },
    {
      colors: ['#808000', '#6B8E23', '#9ACD32', '#556B2F', '#8FBC8F'],
      name: 'Concrete Oasis',
      tags: ['urban', 'sanctuary', 'metropolitan', 'lush', 'tropical', 'jungle']
    }
  ],

  'Spring': [
    {
      colors: ['#FFB7C5', '#FF69B4', '#87CEEB', '#98FB98', '#DDA0DD'],
      name: 'Spring Bloom',
      tags: ['flowers', 'pastel', 'light']
    },
    {
      colors: ['#90EE90', '#98FB98', '#F0E68C', '#87CEEB', '#E0FFFF'],
      name: 'Morning Garden',
      tags: ['dewdrops', 'fresh', 'awakening', 'renewal', 'tranquil']
    },
    {
      colors: ['#FFB6C1', '#FFA07A', '#FAFAD2', '#98FB98', '#E6E6FA'],
      name: 'Cherry Meadow',
      tags: ['blossoms', 'meadow', 'gentle', 'seasonal', 'delicate']
    },
    {
      colors: ['#FFA5B8', '#FFD0D0', '#E8F3D6', '#B5E7A0', '#D7FFD7'],
      name: 'Spring Blossom Path',
      tags: ['spring', 'flower path', 'petal shower', 'garden walk', 'awakening']
    },
    {
      colors: ['#B4E1FF', '#A7D7E8', '#87CEAA', '#E6F3B7', '#FFE6E8'],
      name: 'Spring Rain Garden',
      tags: ['spring', 'rain drops', 'misty morning', 'fresh sprout', 'rejuvenating']
    },
    {
      colors: ['#FFE7F0', '#FFF2CC', '#E5F9D4', '#CCF2E5', '#B3E5C0'],
      name: 'Spring Orchard Dawn',
      tags: ['spring', 'fruit blossom', 'morning dew', 'orchard life', 'flourishing']
    }
  ],

  'Autumn': [
    {
      colors: ['#8B4513', '#DEB887', '#D2691E', '#CD853F', '#A0522D'],
      name: 'Fall Leaves',
      tags: ['nature', 'brown', 'orange']
    },
    {
      colors: ['#E65C00', '#F7B267', '#F79D65', '#F4845F', '#B85C38'],
      name: 'Harvest Season', 
      tags: ['pumpkin', 'harvest', 'october', 'thanksgiving', 'cozy']
    },
    {
      colors: ['#6B3E26', '#943D24', '#BC4A25', '#D6673C', '#E98B4D'],
      name: 'Maple Grove',
      tags: ['maple', 'rustic', 'woodland', 'foliage', 'crisp']
    },
    {
      colors: ['#BF4904', '#D68227', '#E8B449', '#F7D259', '#F7E2B0'],
      name: 'Ginkgo Trail',
      tags: ['autumn', 'falling leaves', 'golden path', 'november mood', 'natural transition']
    },
    {
      colors: ['#5E2612', '#8B4513', '#A0522D', '#6B4423', '#DAA06D'],
      name: 'Chestnut Season',
      tags: ['autumn', 'nutshell brown', 'forest floor', 'woody tones', 'earthy harvest']
    },
    {
      colors: ['#8B0000', '#B22222', '#CD5C5C', '#FF6347', '#FFA07A'],
      name: 'Autumn Ember',
      tags: ['autumn', 'burning red', 'last warmth', 'fading sunset', 'october sky']
    },
    {
      colors: ['#FF4500', '#FF6347', '#FF8C00', '#FFA07A', '#FFD700'],
      name: 'Autumn Harvest',
      tags: ['warmth of autumn', 'warmth', 'earthy', 'orange', 'cozy']
    },
    {
      colors: ['#8B4513', '#CD853F', '#DEB887', '#D2691E', '#A0522D'],
      name: 'Golden Forest',
      tags: ['warmth of autumn', 'woodland', 'rustic', 'mellow', 'amber']
    },
    {
      colors: ['#B8860B', '#DAA520', '#F4A460', '#D2691E', '#CD853F'],
      name: 'Sunset Leaves',
      tags: ['warmth of autumn', 'twilight', 'fallen', 'seasonal', 'golden']
    }
  ],

  'Night': [
    {
      colors: ['#1A237E', '#283593', '#303F9F', '#3949AB', '#3F51B5'],
      name: 'Night Sky',
      tags: ['dark', 'blue', 'evening']
    },
    {
      colors: ['#0B1026', '#1B2440', '#2C3968', '#465BA3', '#6477B9'],
      name: 'Starlit Valley',
      tags: ['starry', 'twilight', 'moonlit', 'cosmic', 'serene']
    },
    {
      colors: ['#120136', '#231955', '#342F75', '#453B95', '#5647B5'],
      name: 'Midnight Dreams',
      tags: ['midnight', 'dreamy', 'mystical', 'peaceful', 'nocturnal']
    },
    {
      colors: ['#0C1446', '#17223B', '#263859', '#6B778D', '#FFD700'],
      name: 'Urban Nightscape',
      tags: ['night', 'city lights', 'metropolitan', 'urban glow', 'darkness']
    },
    {
      colors: ['#011526', '#023859', '#036999', '#0594D9', '#07B8F5'],
      name: 'Deep Night Sea',
      tags: ['night', 'ocean depths', 'marine dark', 'moonlit waters', 'mysterious']
    },
    {
      colors: ['#0A1F1B', '#124034', '#1B604D', '#278866', '#32B07F'],
      name: 'Night Forest',
      tags: ['night', 'woodland dark', 'natural shadow', 'evening shade', 'mystical']
    },
    {
      colors: ['#1C1C3B', '#2E2E5E', '#5A5A9E', '#8C8CD1', '#D1D1E9'],
      name: 'Moon Shadow',
      tags: ['night', 'lunar glow', 'celestial dark', 'moonlight', 'evening calm']
    }
  ],

    'Special Occasions': [
      {
        colors: ['#FF0000', '#008000', '#FFFFFF', '#FFD700', '#8B0000'],
        name: 'Christmas Cheer',
        tags: ['christmas', 'holiday', 'red', 'green', 'festive']
      },
      {
        colors: ['#FFB7C5', '#FFE4C4', '#87CEFA', '#98FB98', '#FFD700'],
        name: 'Easter Delight',
        tags: ['easter', 'spring', 'pastel', 'light', 'holiday']
      },
      {
        colors: ['#FF69B4', '#FFB6C1', '#FFC0CB', '#FF1493', '#DDA0DD'],
        name: 'Valentine\'s Day Love',
        tags: ['valentine', 'love', 'pink', 'romantic', 'holiday']
      },
      {
        colors: ['#FF8C00', '#8B0000', '#000000', '#800080', '#FFD700'],
        name: 'Halloween Night',
        tags: ['halloween', 'spooky', 'orange', 'black', 'holiday']
      },
      {
        colors: ['#FFD700', '#C0C0C0', '#FFFFFF', '#000000', '#FF4500'],
        name: 'New Year Sparkle',
        tags: ['new year', 'celebration', 'gold', 'silver', 'holiday']
      },
      {
        colors: ['#D2691E', '#8B4513', '#FFA07A', '#FF6347', '#FFD700'],
        name: 'Thanksgiving Warmth',
        tags: ['thanksgiving', 'autumn', 'orange', 'brown', 'holiday']
      },
      {
        colors: ['#FF0000', '#FFFFFF', '#0000FF', '#FFD700', '#8B0000'],
        name: 'Fourth of July',
        tags: ['independence day', 'america', 'red', 'blue', 'holiday']
      },
      {
        colors: ['#FFD700', '#FFFFFF', '#000080', '#87CEFA', '#B0C4DE'],
        name: 'Hanukkah Glow',
        tags: ['hanukkah', 'festival', 'gold', 'blue', 'holiday']
      },
      {
        colors: ['#FFD700', '#FF8C00', '#FF4500', '#8B0000', '#FF6347'],
        name: 'Diwali Lights',
        tags: ['diwali', 'festival', 'gold', 'orange', 'holiday']
      },
      {
        colors: ['#008000', '#ADFF2F', '#006400', '#32CD32', '#FFD700'],
        name: 'St. Patrick’s Day',
        tags: ['st patrick', 'green', 'lucky', 'holiday', 'ireland']
      }, 
    ],
    'Abstract Art': [
      {
        colors: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFFF33'],
        name: 'Geometric Pop',
        tags: ['abstract', 'bright', 'geometric', 'modern', 'colorful']
      },
      {
        colors: ['#B0A8B9', '#C1CFC0', '#A6C3C1', '#F0E5D8', '#D9CAB3'],
        name: 'Muted Canvas',
        tags: ['abstract', 'soft', 'muted', 'artistic', 'calm']
      },
      {
        
        colors: ['#6A0572', '#A603BF', '#F2086B', '#F2A71B', '#F26DF9'],
        name: 'Surreal Dream',
        tags: ['abstract', 'surreal', 'purple', 'dreamy', 'colorful']
      },
      {
        colors: ['#E63946', '#F1FAEE', '#A8DADC', '#457B9D', '#1D3557'],
        name: 'Chromatic Chaos',
        tags: ['abstract', 'chaotic', 'colorful', 'vibrant', 'energetic']
      },
      {
        colors: ['#2C3E50', '#34495E', '#4A6FA5', '#1F618D', '#154360'],
        name: 'Nocturne',
        tags: ['abstract', 'dark', 'moody', 'night', 'deep']
      }
    ],
    'Popular Novels': [
      {
        colors: ['#E9D8A6', '#B5B682', '#6B705C', '#1B4332', '#081C15'],
        name: 'Pride and Prejudice',
        tags: ['novel', 'classic', 'romantic', 'vintage', 'nature']
      },
      {
        colors: ['#B0B0B0', '#8C8C8C', '#5A5A5A', '#303030', '#0A0A0A'],
        name: '1984',
        tags: ['novel', 'dystopian', 'dark', 'monochrome', 'classic']
      },
      {
        colors: ['#FFD700', '#D4AF37', '#8B0000', '#0B3D91', '#C0C0C0'],
        name: 'The Great Gatsby',
        tags: ['novel', 'classic', 'luxury', 'gold', '1920s']
      },
      {
        colors: ['#8B4513', '#4A7023', '#CD853F', '#2F4F4F', '#A52A2A'],
        name: 'Animal Farm',
        tags: ['revolution', 'allegory', 'farm life', 'political', 'orwellian']
      },
      {
        colors: ['#4B0082', '#9370DB', '#FFD700', '#8B0000', '#006400'],
        name: 'Hogwarts Magic',
        tags: ['wizardry', 'magical', 'fantasy school', 'adventure', 'sorcery']
      },
      {
        colors: ['#2F4F4F', '#8B4513', '#228B22', '#DAA520', '#4A4A4A'],
        name: 'Middle Earth',
        tags: ['fantasy', 'epic journey', 'mythical', 'adventure', 'legendary']
      },
      {
        colors: ['#FFB347', '#C19A6B', '#CD853F', '#6B8E23', '#DEB887'],
        name: 'Hundred Years',
        tags: ['magical realism', 'family saga', 'colombian', 'generation', 'mystical']
      },
      {
        colors: ['#E6CCB2', '#B87A52', '#DEB887', '#967969', '#F5DEB3'],
        name: 'Pride & Emma',
        tags: ['regency era', 'romance', 'social comedy', 'georgian', 'classic']
      },
      {
        colors: ['#800000', '#A52A2A', '#8B4513', '#D2691E', '#CD853F'],
        name: 'Crime and Punishment',
        tags: ['russian literature', 'psychological', 'dark themes', 'moral conflict', 'redemption']
      },
      {
        colors: ['#2F4F4F', '#4B0082', '#191970', '#483D8B', '#000080'],
        name: 'Brothers Karamazov',
        tags: ['philosophical', 'russian classic', 'family drama', 'spiritual', 'complex']
      },
      {
        colors: ['#1A1110', '#2C1810', '#4A3C31', '#705C52', '#A89083'],
        name: 'The Trial',
        tags: ['kafka', 'bureaucracy', 'surreal', 'existential', 'dark']
      },
      {
        colors: ['#4A4A4A', '#595959', '#1A1A1A', '#2D2D2D', '#363636'],
        name: 'Metamorphosis',
        tags: ['kafka', 'transformation', 'alienation', 'surreal', 'isolation']
      },
      {
        colors: ['#C19A6B', '#CD853F', '#DEB887', '#F4A460', '#D2B48C'],
        name: 'The Alchemist',
        tags: ['spiritual', 'journey', 'desert', 'philosophy', 'wisdom']
      },
      {
        colors: ['#2F4F4F', '#556B2F', '#8B4513', '#A0522D', '#6B4423'],
        name: 'Karenina Drama',
        tags: ['russian society', 'romance', 'tragedy', 'aristocracy', 'passion']
      }
    ],

  'Culinary World Inspirations': [
    {
      colors: ['#FAD4D4', '#FEC89A', '#FFE8A1', '#D6E2E9', '#A4C3B2'],
      name: 'Sweet Desserts',
      tags: ['food', 'desserts', 'soft', 'sweet', 'pastel']
    },
    {
      colors: ['#556B2F', '#6B8E23', '#8FBC8F', '#98FB98', '#ADFF2F'],
      name: 'Herbal Greens',
      tags: ['food', 'herbs', 'green', 'natural', 'fresh']
    },
    {
      colors: ['#8B4513', '#CD853F', '#DEB887', '#F4A460', '#D2691E'],
      name: 'Spice Market',
      tags: ['spices', 'warm', 'earthy', 'aromatic', 'exotic']
    },
    {
      colors: ['#800000', '#8B0000', '#B22222', '#DC143C', '#FF0000'],
      name: 'Chili Heat',
      tags: ['spicy', 'bold', 'intense', 'flavorful', 'vibrant']
    },
    {
      colors: ['#FFDAB9', '#FFE4B5', '#F5DEB3', '#DEB887', '#D2B48C'],
      name: 'Fresh Bread',
      tags: ['bakery', 'wheat', 'rustic', 'artisan', 'comfort']
    },
    {
      colors: ['#F94144', '#F3722C', '#F8961E', '#F9C74F', '#90BE6D'],
      name: 'Spicy Fiesta',
      tags: ['mexican', 'tacos', 'fiesta', 'spicy', 'vibrant', 'global cuisines']
    },
    {
      colors: ['#D4A373', '#E9C46A', '#2A9D8F', '#264653', '#F4A261'],
      name: 'Mediterranean Feast',
      tags: ['mediterranean', 'seafood', 'olive', 'sunset', 'healthy', 'global cuisines']
    },
    {
      colors: ['#A4133C', '#FF595E', '#FFCA3A', '#8AC926', '#1982C4'],
      name: 'Asian Harmony',
      tags: ['asian', 'sushi', 'balance', 'tradition', 'umami', 'global cuisines']
    }
  ],
   'Ancient Mythology': [
    {
      colors: ['#FFD700', '#B8860B', '#8B4513', '#FFF8DC', '#8B0000'],
      name: 'Olympian Glory',
      tags: ['mythology', 'gold', 'greek', 'ancient', 'luxury']
    },
    {
      colors: ['#708090', '#2F4F4F', '#778899', '#B0C4DE', '#DCDCDC'],
      name: 'Norse Twilight',
      tags: ['mythology', 'norse', 'cool', 'neutral', 'ancient']
    },
    {
      colors: ['#C2B280', '#FFD700', '#D4AF37', '#B8860B', '#8B4513'],
      name: 'Egyptian Sands',
      tags: ['mythology', 'egypt', 'desert', 'gold', 'ancient']
    },
    {
      colors: ['#2B0B3F', '#571B7E', '#7B2FBF', '#9D44FF', '#BF69FF'],
      name: 'Poseidon Depths',
      tags: ['mythology', 'ocean', 'underwater', 'divine', 'mystical']
    },
    {
      colors: ['#8B0000', '#B22222', '#FF4500', '#FFA500', '#FFD700'],
      name: 'Phoenix Flame',
      tags: ['mythology', 'firebird', 'immortal', 'rebirth', 'eternal']
    },
    {
      colors: ['#006400', '#228B22', '#32CD32', '#90EE90', '#98FB98'],
      name: 'Celtic Grove',
      tags: ['mythology', 'druid', 'nature', 'sacred', 'magical']
    },
    {
      colors: ['#4A0404', '#800000', '#8B4513', '#CD853F', '#DEB887'],
      name: 'Minotaur Labyrinth',
      tags: ['mythology', 'crete', 'maze', 'bronze', 'legendary']
    },
    {
      colors: ['#191970', '#000080', '#0000CD', '#4169E1', '#1E90FF'],
      name: 'Atlantis Deep',
      tags: ['mythology', 'underwater', 'lost city', 'oceanic', 'mysterious']
    },
    {
      colors: ['#800080', '#8B008B', '#9400D3', '#9932CC', '#BA55D3'],
      name: 'Oracle Vision',
      tags: ['mythology', 'prophecy', 'divine', 'wisdom', 'mystical']
    },
    {
      colors: ['#DAA520', '#CD853F', '#D2691E', '#8B4513', '#654321'],
      name: 'Midas Touch',
      tags: ['mythology', 'gold', 'wealth', 'transformation', 'curse']
    },
    {
      colors: ['#2F4F4F', '#4B0082', '#483D8B', '#191970', '#000080'],
      name: 'Hades Realm',
      tags: ['mythology', 'underworld', 'darkness', 'power', 'depth']
    },
    {
      colors: ['#8B4513', '#A0522D', '#6B4423', '#8E593C', '#B87A52'],
      name: 'Trojan Timber',
      tags: ['mythology', 'war', 'wooden horse', 'strategy', 'legendary']
    },
    {
      colors: ['#FFD700', '#FFA500', '#FF8C00', '#FF7F50', '#FF6347'],
      name: 'Dragon Scale',
      tags: ['mythology', 'creature', 'beast', 'power', 'mythical']
    }
    ],

   'Popular Beverages': [
    {
      colors: ['#3C2F2F', '#6F4E37', '#A0522D', '#C6A664', '#FFF8DC'],
      name: 'Espresso Intensity',
      tags: ['coffee', 'dark', 'bold', 'warm', 'intense']
    },
    {
      colors: ['#F5F5DC', '#D2B48C', '#C5A880', '#8B4513', '#6F4E37'],
      name: 'Latte Cream',
      tags: ['coffee', 'milky', 'soft', 'warm', 'creamy']
    },
    {
      colors: ['#FFF8E7', '#FFE4C4', '#D2B48C', '#8B4513', '#4B3029'],
      name: 'Cappuccino Foam',
      tags: ['coffee', 'frothy', 'light', 'warm', 'soft']
    },
    {
      colors: ['#6F4C3E', '#8B5A2B', '#A0522D', '#D2B48C', '#F5F5DC'],
      name: 'Traditional Brew',
      tags: ['turkish coffee', 'brown', 'rich', 'bold', 'classic']
    },
    {
      colors: ['#A8D5BA', '#98FB98', '#90EE90', '#6B8E23', '#556B2F'],
      name: 'Green Tea Serenity',
      tags: ['tea', 'green', 'herbal', 'calm', 'refreshing']
    },
    {
      colors: ['#D2B48C', '#CDAF95', '#A0522D', '#8B4513', '#6F4E37'],
      name: 'Chai Spice',
      tags: ['tea', 'spicy', 'warm', 'aromatic', 'cozy']
    },
    {
      colors: ['#3B2F2F', '#6F4E37', '#8B4513', '#CDAF95', '#EEE8AA'],
      name: 'Black Tea Bold',
      tags: ['tea', 'black', 'strong', 'warm', 'classic']
    },
    {
      colors: ['#8B0000', '#B22222', '#CD5C5C', '#FFC0CB', '#F5F5F5'],
      name: 'Wine Elegance',
      tags: ['alcohol', 'wine', 'red', 'classic', 'luxurious']
    },
{
  colors: ['#D2691E', '#B8860B', '#DAA520', '#F0E68C', '#FFFACD'],
  name: 'Whiskey Depth',
  tags: ['alcohol', 'whiskey', 'amber', 'rich', 'bold']
},
{
  colors: ['#FFD700', '#F9A602', '#DAA520', '#8B4513', '#3B2F2F'],
  name: 'Beer Golden Hour',
  tags: ['alcohol', 'beer', 'gold', 'light','dark', 'refreshing']
},
    {
      colors: ['#3A3A3A', '#6B6B6B', '#D50000', '#FFAB00', '#FFFFFF'],
      name: 'Cola Classic',
      tags: ['soft drink', 'cola', 'dark', 'classic', 'refreshing']
    },
    {
      colors: ['#FFF44F', '#FFD700', '#F5F5DC', '#C8E4C5', '#8FBC8F'],
      name: 'Lemon Soda Zest',
      tags: ['soft drink', 'lemon', 'yellow', 'bright', 'refreshing']
    },
    {
      colors: ['#98FB98', '#00FF7F', '#32CD32', '#8FBC8F', '#F5FFFA'],
      name: 'Mojito Mint',
      tags: ['cocktail', 'mint', 'fresh', 'green', 'cool']
    },
    {
      colors: ['#D2B48C', '#CDAF95', '#A0522D', '#FFF8E7', '#FFFFFF'],
      name: 'Marshmallow Cocoa',
      tags: ['hot drink', 'chocolate', 'marshmallow', 'sweet', 'cozy']
    },
        {
      colors: ['#FFB6C1', '#FFA07A', '#FFD700', '#ADFF2F', '#32CD32'],
      name: 'Summer Smoothies',
      tags: ['beverages', 'summer', 'fruit', 'bright', 'refreshing']
    },
    {
      colors: ['#8B4513', '#D2691E', '#DEB887', '#F4A460', '#A0522D'],
      name: 'Autumn Brews',
      tags: ['beverages', 'autumn', 'warm', 'earthy', 'coffee']
    },
    {
      colors: ['#8B0000', '#A52A2A', '#D2691E', '#DEB887', '#FFFFFF'],
      name: 'Winter Cocoa',
      tags: ['beverages', 'winter', 'warm', 'cozy', 'chocolate']
    },
    {
      "colors": ['#6F4C3E', '#C2B280', '#D8BFD8', '#FFDEAD', '#FFE4B5'],
      "name": 'Coffee Break',
      "tags": ['café', 'mocha', 'warm', 'earthy', 'cozy']
    },
    {
      "colors": ['#4B3832', '#854442', '#BE9B7B', '#E4D4C8', '#D3C1B6'],
      "name": 'Espresso Dreams',
      "tags": ['coffee', 'artisan', 'roasted', 'rich', 'aromatic']
    },
    {
      "colors": ['#7B3F00', '#A0522D', '#BC8F8F', '#DDC3A5', '#E6CCAB'],
      "name": 'Latte Art',
      "tags": ['barista', 'cream', 'smooth', 'beverage', 'comfort']
    }
    ],

  'Whimsical': [
    {
      "colors": ['#FFB3BA', '#FF677D', '#D4A5A5', '#392F5A', '#F0E6F6'],
      "name": 'Dreamy Pastels',
      "tags": ['whimsical', 'playful', 'soft', 'fantasy', 'light']
    },
    {
      "colors": ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1'],
      "name": 'Charming Whimsy',
      "tags": ['whimsical', 'colorful', 'joyful', 'fun', 'creative']
    },
    {
      "colors": ['#FFB2EF', '#B28DFF', '#97DFFF', '#AFFFD5', '#FFF89A'],
      "name": 'Fairy Garden',
      "tags": ['magical', 'enchanted', 'dreamy', 'fairy tale', 'wonderland']
    },
    {
      "colors": ['#FF9ECD', '#B39EB5', '#88C9A1', '#FFE5A5', '#FFC4E1'],
      "name": 'Candy Dreams',
      "tags": ['sweet', 'candy', 'pastel', 'childlike', 'playful']
    },
    {
      "colors": ['#E7A9FF', '#94DAFF', '#B6FFEA', '#FFF5BA', '#FFC1E3'],
      "name": 'Unicorn Magic',
      "tags": ['fantasy', 'rainbow', 'mystical', 'imagination', 'magic']
    }
  ],

  'Radiant': [
    {
      "colors": ['#FFBF00', '#FF8000', '#FF4F00', '#FF1C00', '#FF007F'],
      "name": 'Sunset Radiance',
      "tags": ['radiant', 'warm', 'sunset', 'energy', 'bright']
    },
    {
      "colors": ['#FF6347', '#FF4500', '#FFD700', '#FF8C00', '#FFA500'],
      "name": 'Golden Glow',
      "tags": ['radiant', 'gold', 'warmth', 'vibrant', 'cheerful']
    },
    {
      "colors": ['#FFE135', '#FFCC00', '#FFB300', '#FFA000', '#FF8C00'],
      "name": 'Solar Flare',
      "tags": ['sun', 'brilliant', 'luminous', 'glowing', 'intense']
    },
    {
      "colors": ['#FF3366', '#FF6633', '#FFCC33', '#FFFF66', '#FFFF99'],
      "name": 'Dawn Light',
      "tags": ['morning', 'daybreak', 'shine', 'illuminated', 'fresh']
    },
    {
      "colors": ['#FF1493', '#FF69B4', '#FFB6C1', '#FFC0CB', '#FFDAB9'],
      "name": 'Ruby Shine',
      "tags": ['jewel', 'sparkle', 'glamour', 'dazzling', 'precious']
    }
  ],

  'Euphoria': [
    {
      colors: ['#FF6F61', '#FF9A00', '#FFCC00', '#FFD700', '#FF4500'],
      name: 'Joyful Burst',
      tags: ['euphoria', 'vibrant', 'celebration', 'energy', 'bright']
    },
    {
      colors: ['#FF1493', '#FF69B4', '#FF00FF', '#8A2BE2', '#9400D3'],
      name: 'Electric Dreams',
      tags: ['euphoria', 'neon', 'ecstatic', 'psychedelic', 'intense']
    },
    {
      colors: ['#FFD700', '#FFA500', '#FF4500', '#FF1493', '#9370DB'],
      name: 'Blissful Glow',
      tags: ['euphoria', 'radiant', 'blissful', 'uplifting', 'magical']
    },
    {
      colors: ['#FF00BF', '#FF40FF', '#BF00FF', '#7F00FF', '#4000FF'],
      name: 'Euphoric Dream',
      tags: ['euphoria', 'fantasy world', 'emotional high', 'peak joy', 'blissful moment']
    },
    {
      colors: ['#FF0F7B', '#FF3D68', '#FF6B55', '#FF9942', '#FFC72F'],
      name: 'Joy Explosion',
      tags: ['euphoria', 'happiness burst', 'ecstatic flow', 'pure delight', 'peak experience']
    },
    {
      colors: ['#FC00FF', '#00DBDE', '#FC00FF', '#00DBDE', '#FC00FF'],
      name: 'Euphoric Wave',
      tags: ['euphoria', 'emotional surge', 'peak feeling', 'rapture flow', 'bliss wave']
    }
  ],
  
  'Retro & Vintage': [
    {
      colors: ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1'],
      name: 'Vintage Vibes',
      tags: ['retro', 'vintage', 'colorful', 'nostalgic', 'playful']
    },
    {
      colors: ['#FF69B4', '#FFD700', '#98FB98', '#40E0D0', '#DDA0DD'],
      name: 'Disco Dreams',
      tags: ['retro', 'disco', 'funky', 'groovy', 'neon']
    },
    {
      colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'],
      name: 'Diner Days',
      tags: ['retro', 'fifties', 'americana', 'classic', 'cheerful']
    },
    {
      colors: ['#F4A460', '#CD5C5C', '#8B4513', '#DEB887', '#5F9EA0'],
      name: 'Retro Vibes',
      tags: ['vintage', 'retro', 'classic', 'earthy', 'trendy']
    },
    {
      colors: ['#A0522D', '#D2B48C', '#DEB887', '#B8860B', '#6B4226'],
      name: 'Rustic Charm',
      tags: ['vintage', 'brown', 'natural', 'earthy', 'warm']
    },
    {
      colors: ['#7B7D7D', '#626567', '#484848', '#2C3E50', '#95A5A6'],
      name: 'Old Film',
      tags: ['vintage', 'gray', 'classic', 'retro', 'timeless']
    },
    {
      colors: ['#E8846B', '#D46F4D', '#BC5B2C', '#A54716', '#8E3200'],
      name: 'Vintage Copper',
      tags: ['retro', 'metallic shine', 'antique finish', 'warm metal', 'aged patina']
    },
    {
      colors: ['#C9A959', '#B39147', '#9C7935', '#866122', '#704910'],
      name: 'Old Brass',
      tags: ['vintage', 'hardware', 'weathered look', 'traditional', 'decorative']
    },
    {
      colors: ['#ADB6C4', '#899AAF', '#657F9A', '#416585', '#1D4B70'],
      name: 'Retro Denim',
      tags: ['retro', 'faded jeans', 'workwear', 'americana', 'textile']
    },
    {
      colors: ['#FFB59C', '#FF9B7D', '#FF815E', '#FF673F', '#FF4D20'],
      name: 'Vintage Coral',
      tags: ['vintage', 'peachy tone', 'sun faded', 'retro decor', 'nostalgic']
    }
  ],

  'Vibrant Energy': [
    {
      "colors": ['#FF5733', '#FFC300', '#C70039', '#900C3F', '#581845'],
      "name": 'Fiery Fiesta',
      "tags": ['bold', 'bright', 'vibrant', 'colorful', 'dynamic']
    },
    {
      "colors": ['#FF1E1E', '#FF8C00', '#FFDD00', '#00FF00', '#00FFFF'],
      "name": 'Neon Pulse',
      "tags": ['neon', 'energetic', 'vivid', 'electric', 'modern']
    },
    {
      "colors": ['#FF0066', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'],
      "name": 'Summer Splash',
      "tags": ['fresh', 'lively', 'cheerful', 'playful', 'bright']
    },
    {
      "colors": ['#FF5733', '#FFBD33', '#FFC300', '#DAF7A6', '#FF6F61'],
      "name": 'Festival of Colors',
      "tags": ['vibrant', 'celebration', 'energy', 'bright', 'colorful']
    },
    {
      "colors": ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1'],
      "name": 'Color Pop',
      "tags": ['vibrant', 'bold', 'playful', 'lively', 'dynamic']
    },
    {
      "colors": ['#FF1E8F', '#FF8E1E', '#1EFF8E', '#8E1EFF', '#FFE81E'],
      "name": 'Neon Burst',
      "tags": ['electric', 'intense', 'energetic', 'radiant', 'vivid']
    },
    {
      "colors": ['#FF0055', '#FF7700', '#AAFF00', '#00FFAA', '#AA00FF'],
      "name": 'Electric Dreams',
      "tags": ['futuristic', 'bold', 'striking', 'powerful', 'luminous']
    },
    {
      "colors": ['#FF3366', '#33FF66', '#6633FF', '#FF9933', '#33FFCC'],
      "name": 'Rainbow Rush',
      "tags": ['spectrum', 'diverse', 'spirited', 'animated', 'exciting']
    }
  ],
  
  'Tech Noir': [
    {
      "colors": ['#0F0F0F', '#212121', '#424242', '#757575', '#BDBDBD'],
      "name": 'Futuristic Shadows',
      "tags": ['tech', 'noir', 'dark', 'modern', 'sleek']
    },
    {
      "colors": ['#1A1A1D', '#4E4E50', '#6F2232', '#950740', '#C3073F'],
      "name": 'Cyberpunk Night',
      "tags": ['cyberpunk', 'neon', 'futuristic', 'digital', 'urban']
    },
    {
      "colors": ['#2C3531', '#116466', '#2C4A52', '#537A5A', '#9DC5BB'],
      "name": 'Digital Dawn',
      "tags": ['sci-fi', 'minimal', 'industrial', 'innovative', 'future']
    }
  ],

  'Video Games': [
    {
      colors: ['#FF4D4D', '#FFB347', '#98E4FF', '#7EB356', '#8B4C70'],
      name: 'Mario Universe',
      tags: ['nintendo', 'platformer', 'iconic', 'retro gaming', 'mushroom kingdom']
    },
    {
      colors: ['#171F1B', '#4A7856', '#FF6B35', '#2B50AA', '#CDC5B4'],
      name: 'The Last Guardian',
      tags: ['atmospheric', 'mystical creature', 'companionship', 'ancient ruins', 'emotional journey']
    },
    {
      colors: ['#2B1B17', '#8B0000', '#E5BE01', '#435055', '#DAA520'],
      name: 'Red Dead World',
      tags: ['western', 'outlaws', 'frontier', 'horseback', 'gunslinger']
    },
    {
      colors: ['#4A0404', '#636363', '#A020F0', '#FFD700', '#C0C0C0'],
      name: 'GTA V',
      tags: ['action', 'crime', 'los angeles', 'urban', 'sandbox']
    },
    {
      colors: ['#8B4513', '#DAA520', '#FF4500', '#4B0082', '#1E90FF'],
      name: 'GTA San Andreas',
      tags: ['gangster', 'california', 'nineties', 'street life', 'grove']
    },
    {
      colors: ['#FF69B4', '#00CED1', '#FF6347', '#4682B4', '#DDA0DD'],
      name: 'GTA Vice City',
      tags: ['eighties', 'miami', 'neon', 'beach', 'synthwave']
    },
    {
      colors: ['#8B4513', '#CD853F', '#A0522D', '#FFD700', '#556B2F'],
      name: 'Red Dead 2',
      tags: ['wild west', 'historical', 'detailed', 'realistic', 'adventure']
    },
    {
      colors: ['#228B22', '#32CD32', '#90EE90', '#98FB98', '#006400'],
      name: 'FIFA 23',
      tags: ['football', 'sports', 'competitive', 'stadium', 'tournament']
    },
    {
      colors: ['#483D8B', '#9370DB', '#B8860B', '#FFB6C1', '#00CED1'],
      name: 'Final Fantasy VII',
      tags: ['rpg', 'cyberpunk', 'dystopian', 'epic', 'story rich']
    },
    {
      colors: ['#556B2F', '#8B4513', '#A0522D', '#CD853F', '#DAA520'],
      name: 'The Last of Us',
      tags: ['post apocalyptic', 'survival', 'emotional', 'cinematic', 'dramatic']
    },
    {
      colors: ['#4B0082', '#8A2BE2', '#483D8B', '#E6E6FA', '#FFD700'],
      name: 'The Elder Scrolls',
      tags: ['fantasy', 'open world', 'dragons', 'magic', 'medieval']
    },
    {
      colors: ['#2F4F4F', '#808080', '#CD853F', '#8B4513', '#A0522D'],
      name: 'Metal Gear Solid',
      tags: ['stealth', 'military', 'tactical', 'espionage', 'cinematic']
    },
    {
      colors: ['#FF4500', '#FFD700', '#FF6347', '#00FF7F', '#4169E1'],
      name: 'Super Mario Odyssey',
      tags: ['platformer', 'colorful', 'adventure', 'nintendo', 'family']
    },
    {
      colors: ['#1E90FF', '#00BFFF', '#87CEEB', '#B0E0E6', '#F0F8FF'],
      name: 'Sonic Frontiers',
      tags: ['fast paced', 'adventure', 'open zone', 'rings', 'speed']
    },
    {
      colors: ['#2F4F4F', '#8B0000', '#DAA520', '#CD853F', '#D2691E'],
      name: 'Assassins Creed',
      tags: ['historical', 'stealth', 'action', 'parkour', 'adventure']
    },
    {
      colors: ['#4B0082', '#9400D3', '#8A2BE2', '#9370DB', '#E6E6FA'],
      name: 'Elden Ring',
      tags: ['souls like', 'fantasy', 'challenging', 'open world', 'mythology']
    },
    {
      colors: ['#1E3A8A', '#9333EA', '#FACC15', '#14B8A6', '#E11D48'],
      name: 'Pixel Odyssey',
      tags: ['retro', 'pixel art', 'arcade', 'adventure', 'nostalgia', 'video game worlds']
    },
    {
      colors: ['#343A40', '#FFD700', '#6C757D', '#007BFF', '#495057'],
      name: 'Cyber Realm',
      tags: ['cyberpunk', 'neon', 'tech', 'future', 'dystopia', 'video game worlds']
    },
    {
      colors: ['#2F4F4F', '#556B2F', '#8B4513', '#A52A2A', '#696969'],
      name: 'Fantasy Dungeon',
      tags: ['fantasy', 'medieval', 'quest', 'magic', 'mystery', 'video game worlds']
    },
    {
      colors: ['#9146FF', '#F40075', '#00FF00', '#FF4D4D', '#1E90FF'],
      name: 'Streaming Setup',
      tags: ['gaming setup', 'streaming room', 'rgb lights', 'gamer', 'battlestation', 'video game worlds']
    },
    {
      colors: ['#50C878', '#4B0082', '#FF69B4', '#00CED1', '#FFD700'],
      name: 'Arcade Vibes',
      tags: ['retro gaming', 'arcade machine', 'pixel art', 'gameroom', 'classic games', 'video game worlds']
    },
    {
      colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'],
      name: 'Gaming RGB',
      tags: ['rgb gaming', 'gaming pc', 'gaming keyboard', 'setup', 'battlerig', 'video game worlds']
    }
  ],
  
  'Cyberpunk': [
      {
        colors: ['#FF00E4', '#00FFD1', '#7B00FF', '#FF2A6D', '#05FFA1'],
        name: 'Neon Streets',
        tags: ['cyberpunk', 'futuristic', 'neon lights', 'metropolis', 'electric']
      },
      {
        colors: ['#14F195', '#D31AFD', '#00FFBB', '#B537F2', '#3DFFC5'],
        name: 'Digital Dreams',
        tags: ['cyberpunk', 'virtual', 'synthetic', 'hologram', 'cyberspace']
      },
      {
        colors: ['#FF124F', '#7A04EB', '#FE75FE', '#05FFC7', '#C729FF'],
        name: 'Cyber Matrix',
        tags: ['cyberpunk', 'matrix', 'digital world', 'synthwave', 'blockchain']
      },
      {
        colors: ['#FF00FF', '#00FF00', '#00FFFF', '#FF0000', '#FFFF00'],
        name: 'Hacker Paradise',
        tags: ['cyberpunk', 'code', 'matrix', 'digital', 'underground']
      },
      {
        colors: ['#9B4DCA', '#FF1493', '#00FFFF', '#7FFF00', '#FF4500'],
        name: 'Neural Network',
        tags: ['cyberpunk', 'AI', 'digital brain', 'synthetic', 'data flow']
      },
      {
        colors: ['#FF355E', '#FF00CC', '#B300FF', '#6600FF', '#0000FF'],
        name: 'Virtual Reality',
        tags: ['cyberpunk', 'VR', 'digital world', 'simulation', 'immersive']
      },
      {
        colors: ['#50BFE6', '#FF00FF', '#FF0066', '#FF00CC', '#CC00FF'],
        name: 'Cyber Grid',
        tags: ['cyberpunk', 'network', 'system', 'digital framework', 'matrix']
      },
      {
        colors: ['#FF71CE', '#01CDFE', '#05FFA1', '#B967FF', '#FFFB96'],
        name: 'Synthwave Dream',
        tags: ['cyberpunk', 'retro future', '80s', 'digital sunset', 'neon wave']
      }
    ],

    'Biodiversity': [
      {
        colors: ['#32612D', '#4F7942', '#8FBC8F', '#98FB98', '#90EE90'],
        name: 'Rainforest Life',
        tags: ['biodiversity', 'ecosystem', 'habitat', 'species', 'conservation']
      },
      {
        colors: ['#FF9A00', '#FF7B00', '#FFA500', '#FF8C00', '#FFB347'],
        name: 'Savanna Dawn',
        tags: ['biodiversity', 'wildlife', 'grassland', 'safari', 'expedition']
      },
      {
        colors: ['#40826D', '#2F4F4F', '#5F9EA0', '#008B8B', '#20B2AA'],
        name: 'Coral Depths',
        tags: ['biodiversity', 'marine life', 'reef', 'aquatic', 'underwater']
      },
      {
        colors: ['#4D774E', '#3A5F3B', '#274728', '#142E15', '#011502'],
        name: 'Forest Canopy',
        tags: ['biodiversity', 'tree species', 'woodland life', 'evergreen', 'native flora']
      },
      {
        colors: ['#9ED0E6', '#7BB8D4', '#58A0C2', '#3588B0', '#12709E'],
        name: 'River Ecosystem',
        tags: ['biodiversity', 'freshwater', 'aquatic life', 'stream habitat', 'water flow']
      },
      {
        colors: ['#E6B39A', '#D49178', '#C26F56', '#B04D34', '#9E2B12'],
        name: 'Red Desert Life',
        tags: ['biodiversity', 'arid zone', 'desert fauna', 'sand ecology', 'heat adapted']
      },
      {
        colors: ['#B8E6B3', '#95D38E', '#72C069', '#4FAD44', '#2C9A1F'],
        name: 'Grassland Species',
        tags: ['biodiversity', 'prairie life', 'meadow fauna', 'grazing zone', 'open plains']
      }
    ],

    'Quantum': [
      {
        colors: ['#7400B8', '#5E60CE', '#4EA8DE', '#48BFE3', '#56CFE1'],
        name: 'Wave Function',
        tags: ['quantum', 'particle', 'superposition', 'physics', 'wave particle']
      },
      {
        colors: ['#2D00F7', '#6A00F4', '#8900F2', '#A100F2', '#B100E8'],
        name: 'Quantum Field',
        tags: ['quantum', 'entanglement', 'probability', 'quantum state', 'measurement']
      },
      {
        colors: ['#240046', '#3C096C', '#5A189A', '#7B2CBF', '#9D4EDD'],
        name: 'String Theory',
        tags: ['quantum', 'multiverse', 'dimension', 'quantum foam', 'uncertainty']
      }
    ],

    'Modern Brands': [
      {
        colors: ['#00A3E0', '#FF9900', '#7AB800', '#EB4B4B', '#A100FF'],
        name: 'Tech Giants',
        tags: ['technology', 'innovation', 'startup', 'corporate', 'digital']
      },
      {
        colors: ['#FF385C', '#00D1C1', '#7D4CDB', '#6772E5', '#36B37E'],
        name: 'Unicorn Startups',
        tags: ['airbnb', 'modern', 'disruption', 'innovative', 'billion dollar']
      },
      {
        colors: ['#FF0081', '#1ED760', '#FF8C00', '#00C4CC', '#EA4335'],
        name: 'Digital Services',
        tags: ['streaming', 'subscription', 'platform', 'service', 'online']
      },
      {
        colors: ['#1DB9B2', '#FF5E62', '#34D1BF', '#F7E8D0', '#68B0AB'],
        name: 'Digital Finance',
        tags: ['modern brands', 'fintech', 'cryptocurrency', 'banking app', 'wealth tech']
      },
      {
        colors: ['#7C72FF', '#3DEFE9', '#B6B4FF', '#FF6B8B', '#FFC7D1'],
        name: 'Social Shopping',
        tags: ['modern brands', 'e-commerce', 'marketplace', 'shopping app', 'digital retail']
      },
      {
        colors: ['#4DE8C2', '#FF4B8C', '#45D0FD', '#FED766', '#2AB7CA'],
        name: 'Wellness Tech',
        tags: ['modern brands', 'health app', 'meditation', 'fitness tech', 'mindfulness']
      },
      {
        colors: ['#FF5C77', '#FFB547', '#5CE1E6', '#51CF66', '#845EF7'],
        name: 'Cloud Services',
        tags: ['modern brands', 'saas platform', 'cloud computing', 'enterprise tech', 'digital solution']
      }
    ],
  
    'Fashion Trends': [
      {
        colors: ['#FF6B6C', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'],
        name: 'Summer Collection',
        tags: ['streetwear', 'casual', 'seasonal', 'trendy', 'youth']
      },
      {
        colors: ['#2D3436', '#636E72', '#B2BEC3', '#DFE6E9', '#576574'],
        name: 'Minimalist Style',
        tags: ['minimalism', 'monochrome', 'basics', 'essential', 'timeless']
      },
      {
        colors: ['#D4AF37', '#CFB53B', '#C5A432', '#B8860B', '#A67C00'],
        name: 'Luxury Fashion',
        tags: ['premium', 'designer', 'exclusive', 'haute couture', 'elegant']
      },
      {
        colors: ['#FFDFD3', '#FEC8D8', '#D291BC', '#9575CD', '#70587C'],
        name: 'Pastel Chic',
        tags: ['pastel', 'fashion', 'minimal', 'elegance', 'soft']
      },
      {
        colors: ['#0F4C81', '#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9'],
        name: 'Runway Vibes',
        tags: ['runway', 'bold', 'colorful', 'statement', 'trend']
      },
      {
        colors: ['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51'],
        name: 'Earthly Layers',
        tags: ['earth tone', 'neutral', 'layers', 'organic', 'sustainable']
      }
    ],

    'Art Movements': [
      {
        colors: ['#E3B587', '#D95D39', '#262104', '#4E6E5D', '#4D4847'],
        name: 'Baroque Grandeur',
        tags: ['classical art', 'renaissance', 'dramatic', 'ornate', 'masterpiece']
      },
      {
        colors: ['#05B2DC', '#7B287D', '#EE6C4D', '#F8FF38', '#1B998B'],
        name: 'Pop Art Fusion',
        tags: ['contemporary', 'warhol style', 'retro pop', 'iconic', 'bold design']
      },
      {
        colors: ['#2D2D2A', '#4C4C47', '#848FA5', '#C14953', '#E5DCC5'],
        name: 'Abstract Expression',
        tags: ['modernist', 'avant garde', 'experimental', 'emotional', 'dynamic art']
      },
      {
        colors: ['#FF3EA5', '#4CEA9F', '#F9F002', '#242858', '#E93D82'],
        name: 'Neo Memphis',
        tags: ['art movements', 'postmodern', 'bold geometry', 'playful pattern', 'radical design']
      },
      {
        colors: ['#080808', '#1A1A1A', '#A9A9A9', '#D3D3D3', '#FFFFFF'],
        name: 'Suprematist Space',
        tags: ['art movements', 'pure abstraction', 'geometric supremacy', 'non objective', 'spatial feeling']
      },
      {
        colors: ['#8A9A5B', '#C4B454', '#D4AF37', '#614E1A', '#3C2F2F'],
        name: 'Byzantine Mosaic',
        tags: ['art movements', 'religious art', 'golden icons', 'medieval style', 'decorative heritage']
      }
    ],
  
    'AI & Digital Art': [
      {
        colors: ['#FF61D8', '#00A3FF', '#5EFF6C', '#FFE600', '#FF0F7B'],
        name: 'Vaporwave Dreams',
        tags: ['synthwave', 'retrowave', 'aesthetic', 'digital culture', 'neo retro']
      },
      {
        colors: ['#390099', '#9E0059', '#FF0054', '#FF5400', '#FFBD00'],
        name: 'Glitch Paradise',
        tags: ['distortion', 'cyber art', 'tech aesthetic', 'digital decay', 'data moshing']
      },
      {
        colors: ['#00FFF5', '#00FF88', '#4DFF00', '#FBFF00', '#7122FA'],
        name: 'NFT Universe',
        tags: ['blockchain art', 'crypto design', 'metaverse', 'digital collectible', 'web3']
      },
      {
        colors: ['#FF0099', '#FF66CC', '#FF99FF', '#FF00FF', '#CC00FF'],
        name: 'Digital Bubblegum',
        tags: ['digital art', 'candy pixels', 'sweet tech', 'pixel perfect', 'cyber cute', 'ai']
      },
      {
        colors: ['#00FFFF', '#1EF7D0', '#2FE4C0', '#3FD1B0', '#4FBEA0'],
        name: 'Hologram Pulse',
        tags: ['digital art', 'future glow', 'cyber stream', 'data flow', 'virtual light']
      },
      {
        colors: ['#FF3300', '#FF6600', '#FF9900', '#FFCC00', '#FFFF00'],
        name: 'Binary Sunrise',
        tags: ['digital art', 'code morning', 'pixel dawn', 'digital horizon', 'synthetic sun']
      },
      {
        colors: ['#00FF7F', '#00CED1', '#20B2AA', '#4682B4', '#1E90FF'],
        name: 'Techno Vibe',
        tags: ['futuristic', 'modern', 'tech', 'blue', 'innovative']
      },
      {
        colors: ['#FF00FF', '#00FFFF', '#FF1493', '#7B68EE', '#4169E1'],
        name: 'Neon Pulse',
        tags: ['futuristic', 'digital', 'neon', 'cyber', 'luminous']
      },
      {
        colors: ['#50C878', '#40E0D0', '#48D1CC', '#4682B4', '#5F9EA0'],
        name: 'Hologram Wave',
        tags: ['futuristic', 'holographic', 'geometric', 'synthetic', 'advanced']
      },
      {
        colors: ['#1F2937', '#4B5563', '#9CA3AF', '#D1D5DB', '#E5E7EB'],
        name: 'Modern Tech',
        tags: ['digital', 'modern', 'neutral', 'sleek', 'technology']
      },
      {
        colors: ['#00FFFF', '#FF00FF', '#00FF00', '#FF4500', '#FFD700'],
        name: 'Gaming Neon',
        tags: ['digital', 'gaming', 'neon', 'bright', 'vibrant']
      },
      {
        colors: ['#FFFFFF', '#F5F5F5', '#CCCCCC', '#999999', '#333333'],
        name: 'Minimal UI',
        tags: ['digital', 'minimal', 'neutral', 'modern', 'clean']
      },
      {
        colors: ['#2D00F7', '#6A00F4', '#8900F2', '#A100F2', '#B100E8'],
        name: 'Metaverse Portal',
        tags: ['digital trends', 'virtual reality', 'cyber portal', 'digital dimension', 'tech future', 'ai']
      },
      {
        colors: ['#00FF9F', '#00B8FF', '#001BFF', '#BD00FF', '#FF0099'],
        name: 'Web3 Wave',
        tags: ['digital trends', 'blockchain era', 'crypto aesthetic', 'defi design', 'token art', 'ai']
      },
      {
        colors: ['#FF3366', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'],
        name: 'AI Interface',
        tags: ['digital trends', 'machine learning', 'smart design', 'neural style', 'data flow']
      },
            {
        colors: ['#00D4FF', '#090088', '#6C0094', '#FF0077', '#590696'],
        name: 'AI Revolution',
        tags: ['artificial intelligence', 'machine learning', 'neural network', 'deep learning', 'future tech', 'emerging tech', 'ai']
      },
      {
        colors: ['#00FFA3', '#DC1FFF', '#00F0FF', '#00B8FF', '#0017FF'],
        name: 'Quantum Computing',
        tags: ['quantum tech', 'superposition', 'quantum bits', 'computing future', 'quantum supremacy', 'emerging tech', 'ai']
      },
      {
        colors: ['#F71735', '#FF9F1C', '#DBF4A7', '#0D5C63', '#247B7B'],
        name: 'Biotech Innovation',
        tags: ['biotechnology', 'genetic engineering', 'synthetic biology', 'biodesign', 'life science', 'emerging tech', 'ai']
      },
      {
        colors: ['#2C3E50', '#E74C3C', '#ECF0F1', '#3498DB', '#2ECC71'],
        name: 'Modern UI',
        tags: ['user interface', 'web design', 'frontend', 'clean design', 'responsive']
      },
      {
        colors: ['#1ABC9C', '#16A085', '#2980B9', '#8E44AD', '#2C3E50'],
        name: 'Flat Design',
        tags: ['flat ui', 'minimal design', 'interface', 'modern web', 'simplicity', 'web design']
      },
      {
        colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'],
        name: 'Creative Portfolio',
        tags: ['portfolio', 'creative design', 'showcase', 'artist website', 'gallery', 'web design']
      }
    ],
  
    'Weather Moods': [
      {
        colors: ['#1A1A1A', '#616161', '#7B89A8', '#AFC1D6', '#F2F2F2'],
        name: 'Stormy Weather',
        tags: ['rainy day', 'thunderstorm', 'moody sky', 'weather theme', 'cloudy']
      },
      {
        colors: ['#FF9E5C', '#FF7A3D', '#E85D04', '#DC2F02', '#D00000'],
        name: 'Heat Wave',
        tags: ['summer heat', 'temperature', 'desert sun', 'hot weather', 'climate']
      },
      {
        colors: ['#FFFFFF', '#E3E3E3', '#C9CCD1', '#93A5CF', '#6B7B8E'],
        name: 'Foggy Morning',
        tags: ['misty', 'early morning', 'peaceful', 'autumn fog', 'atmospheric']
      },
      {
        colors: ['#37474F', '#546E7A', '#78909C', '#90A4AE', '#B0BEC5'],
        name: 'Storm Warning',
        tags: ['approaching storm', 'dark clouds', 'turbulent sky', 'weather alert', 'wind']
      },
      {
        colors: ['#E3F2FD', '#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5'],
        name: 'Morning Drizzle',
        tags: ['light rain', 'gentle shower', 'spring weather', 'wet morning', 'peaceful']
      },
      {
        colors: ['#FFE0B2', '#FFCC80', '#FFB74D', '#FFA726', '#FF9800'],
        name: 'Desert Wind',
        tags: ['sandstorm', 'arid climate', 'dry heat', 'dusty air', 'harsh weather']
      },
      {
        colors: ['#B3E5FC', '#81D4FA', '#4FC3F7', '#29B6F6', '#03A9F4'],
        name: 'Coastal Breeze',
        tags: ['sea wind', 'ocean air', 'fresh gust', 'maritime weather', 'salty breeze']
      },
      {
        colors: ['#FFF9C4', '#FFF59D', '#FFF176', '#FFEE58', '#FFEB3B'],
        name: 'Summer Haze',
        tags: ['humid day', 'sunshine', 'warm weather', 'bright sky', 'tropical heat']
      }
    ],
  
    'Wedding Themes': [
      {
        colors: ['#D8E2DC', '#FFE5D9', '#FFCAD4', '#F4ACB7', '#9D8189'],
        name: 'Modern Romance',
        tags: ['bridal', 'wedding palette', 'romantic theme', 'celebration', 'elegant wedding']
      },
      {
        colors: ['#2C5530', '#497959', '#7EA172', '#C6DAB7', '#E6EDC0'],
        name: 'Garden Wedding',
        tags: ['outdoor wedding', 'nature theme', 'botanical', 'spring wedding', 'floral']
      },
      {
        colors: ['#B76E79', '#FF9E9E', '#FFB5B5', '#FFD1D1', '#FFF0F0'],
        name: 'Rose Romance',
        tags: ['pink wedding', 'romantic theme', 'soft palette', 'love', 'wedding decor']
      },
      {
        colors: ['#F5E6E8', '#D5C6E0', '#AAA1C8', '#967AA1', '#192A51'],
        name: 'Twilight Vows',
        tags: ['evening ceremony', 'romantic dusk', 'starlight wedding', 'elegant night', 'moonlit']
      },
      {
        colors: ['#F7CACA', '#E5B3B3', '#D49999', '#C27F7F', '#B06666'],
        name: 'Dusty Rose Dream',
        tags: ['vintage romance', 'blush theme', 'rustic charm', 'soft glamour', 'timeless']
      },
      {
        colors: ['#FDEBD3', '#FFB385', '#FF8C61', '#DE6B48', '#8E4A3D'],
        name: 'Sunset Celebration',
        tags: ['golden hour', 'warm tones', 'desert wedding', 'sunset glow', 'ambient']
      },
      {
        colors: ['#264E70', '#679186', '#BFBAAA', '#FDF6E3', '#FF8C61'],
        name: 'Coastal Ceremony',
        tags: ['beach wedding', 'ocean theme', 'seaside celebration', 'maritime', 'coastal']
      },
      {
        colors: ['#2D3047', '#93B7BE', '#E0CA9', '#A799B7', '#048BA8'],
        name: 'Winter Wonderland',
        tags: ['ice palace', 'frost theme', 'winter ceremony', 'snow white', 'crystal']
      }
    ],
  
    'Product Design': [
      {
        colors: ['#2D3047', '#419D78', '#E0A458', '#FFD275', '#FFEEAD'],
        name: 'Eco Packaging',
        tags: ['sustainable', 'eco friendly', 'organic product', 'natural brand', 'packaging']
      },
      {
        colors: ['#05668D', '#028090', '#00A896', '#02C39A', '#F0F3BD'],
        name: 'Tech Product',
        tags: ['gadget design', 'modern product', 'tech brand', 'innovation', 'sleek']
      },
      {
        colors: ['#FFA69E', '#FF7E6B', '#8C5E58', '#A5978B', '#4A4238'],
        name: 'Luxury Brand',
        tags: ['premium design', 'high end', 'exclusive', 'sophisticated', 'brand identity']
      }
    ],
  
    'Architectural Styles': [
      {
        colors: ['#CAD2C5', '#84A98C', '#52796F', '#354F52', '#2F3E46'],
        name: 'Modern Industrial',
        tags: ['industrial design', 'modern architecture', 'urban style', 'contemporary', 'minimalist']
      },
      {
        colors: ['#F5E6CA', '#E8B298', '#D67D3E', '#9C4A1A', '#5A4434'],
        name: 'Mediterranean',
        tags: ['villa design', 'terracotta', 'tuscan', 'european style', 'warm stone']
      },
      {
        colors: ['#FFFFFF', '#F5F5F5', '#E8E9E9', '#DAE1E7', '#C4C9CE'],
        name: 'Scandinavian',
        tags: ['nordic design', 'minimal', 'modern living', 'hygge', 'light wood']
      },
      {
        colors: ['#7D4427', '#B87333', '#CD7F32', '#B8860B', '#DAA520'],
        name: 'Art Deco Lines',
        tags: ['architectural styles', 'geometric pattern', 'luxurious detail', 'golden age', 'symmetrical']
      },
      {
        colors: ['#435055', '#596569', '#7D9AA8', '#8BA6B5', '#B5CBD6'],
        name: 'Brutalist Form',
        tags: ['architectural styles', 'raw concrete', 'monolithic', 'unadorned', 'structural']
      },
      {
        colors: ['#2D5A27', '#507255', '#77937F', '#A5B5AA', '#D4DCD6'],
        name: 'Organic Architecture',
        tags: ['architectural styles', 'nature inspired', 'flowing form', 'biomorphic', 'harmonious']
      },
      {
        colors: ['#DACEC4', '#AEA69F', '#8C857B', '#5E5853', '#2D2926'],
        name: 'Japandi Zen',
        tags: ['minimalistic', 'scandinavian', 'japanese style', 'peaceful', 'functional', 'interior design']
      },
      {
        colors: ['#98B4AA', '#EEE4D1', '#B4C4B0', '#628281', '#1A3C40'],
        name: 'Biophilic Living',
        tags: ['eco friendly', 'natural design', 'sustainable', 'organic shape', 'wellness', 'interior design']
      },
      {
        colors: ['#CB997E', '#DDBEA9', '#A5A58D', '#B7B7A4', '#6B705C'],
        name: 'Desert Modern',
        tags: ['southwestern', 'earth tones', 'bohemian', 'texture rich', 'warm minimal', 'interior design']
      }
    ],

  'Mythical Creatures': [
    {
      colors: ['#FF4500', '#FF8C00', '#FFD700', '#8B0000', '#A52A2A'],
      name: 'Dragon Flames',
      tags: ['dragon', 'fire', 'mythical', 'inferno', 'legend']
    },
    {
      colors: ['#00CED1', '#20B2AA', '#5F9EA0', '#4682B4', '#6A5ACD'],
      name: 'Mermaid Lagoon',
      tags: ['mermaid', 'ocean', 'myth', 'serenity', 'waves']
    },
    {
      colors: ['#8FBC8F', '#3CB371', '#2E8B57', '#006400', '#228B22'],
      name: 'Forest Spirit',
      tags: ['forest', 'nature', 'spirit', 'magic', 'mythical']
    },
    {
      colors: ['#D4AF37', '#C0B283', '#DCD0C0', '#A39171', '#846C5B'],
      name: 'Griffin Glory',
      tags: ['mythical creatures', 'majestic beast', 'golden feathers', 'royal guard', 'noble spirit']
    },
    {
      colors: ['#72B01D', '#3F7D20', '#454B1B', '#1B1C18', '#98CE00'],
      name: 'Basilisk Scale',
      tags: ['mythical creatures', 'serpent king', 'deadly gaze', 'reptilian', 'forest dweller']
    },
    {
      colors: ['#89ABE3', '#BEE3FF', '#D3F3FF', '#E8F9FF', '#FCF9FF'],
      name: 'Unicorn Dream',
      tags: ['mythical creatures', 'pure']
    }
  ],

  'Modern Art Styles': [
    {
      colors: ['#FF1493', '#FF69B4', '#FFD700', '#FF4500', '#800080'],
      name: 'Pop Art Extravaganza',
      tags: ['pop art', 'bold', 'vibrant', 'modern', 'colorful']
    },
    {
      colors: ['#F5F5DC', '#E0E0E0', '#B0B0B0', '#808080', '#2F4F4F'],
      name: 'Minimalist Calm',
      tags: ['minimalism', 'calm', 'neutral', 'modern', 'design']
    },
    {
      colors: ['#1E90FF', '#00CED1', '#20B2AA', '#FF6347', '#FFD700'],
      name: 'Abstract Energy',
      tags: ['abstract', 'dynamic', 'modern', 'art', 'energy']
    },
    {
      colors: ['#FF206E', '#41EAD4', '#FBFF12', '#FF84E8', '#71DFE7'],
      name: 'Neo Pop',
      tags: ['modern art', 'contemporary', 'bold colors', 'graphic', 'pop culture']
    },
    {
      colors: ['#E0E0E0', '#C8C8C8', '#BFBFBF', '#A6A6A6', '#8C8C8C'],
      name: 'Concrete Art',
      tags: ['modern art', 'brutalism', 'geometric', 'minimal', 'structural']
    },
    {
      colors: ['#FFB0CD', '#FF87AB', '#FFA07A', '#98FB98', '#87CEEB'],
      name: 'Digital Pastels',
      tags: ['modern art', 'digital', 'soft palette', 'contemporary', 'gentle']
    },
    {
      colors: ['#00A878', '#D8F1A0', '#F3C178', '#FE5E41', '#0B0500'],
      name: 'Bio Art',
      tags: ['modern art', 'organic', 'natural', 'living', 'environmental']
    },
    {
      colors: ['#3D315B', '#444B6E', '#708B75', '#9AB87A', '#F8F991'],
      name: 'Digital Wave',
      tags: ['modern art', 'technology', 'generative', 'algorithmic', 'computational']
    }
  ],
  'Social Media Trends': [
    {
      colors: ['#FF3366', '#405DE6', '#5851DB', '#833AB4', '#C13584'],
      name: 'Instagram Story',
      tags: ['reels', 'stories', 'influencer', 'filters', 'content creation']
    },
    {
      colors: ['#00F2EA', '#FF0050', '#000000', '#FFFFFF', '#25F4EE'],
      name: 'TikTok Viral',
      tags: ['trending', 'challenge', 'dance trends', 'short form', 'viral content']
    },
    {
      colors: ['#1DA1F2', '#14171A', '#657786', '#AAB8C2', '#E1E8ED'],
      name: 'Twitter Space',
      tags: ['microblogging', 'threads', 'spaces', 'social discourse', 'trending topics']
    },
    {
      colors: ['#4267B2', '#898F9C', '#385898', '#1877F2', '#E7F3FF'],
      name: 'Meta Universe',
      tags: ['virtual reality', 'social connection', 'digital presence', 'networking', 'community']
    },
    {
      colors: ['#FF4500', '#FF8717', '#FFFFFF', '#0079D3', '#1A1A1B'],
      name: 'Reddit Vibes',
      tags: ['subreddit', 'karma', 'awards', 'community driven', 'discussion forum']
    },
    {
      colors: ['#FF4B4B', '#2D3250', '#7077A1', '#F6B17A', '#2C5530'],
      name: 'Youtube Studio',
      tags: ['video content', 'channel art', 'thumbnail design', 'creator studio', 'streaming']
    },
    {
      colors: ['#7371FC', '#FDEFF4', '#3D3B40', '#C1AEFC', '#772D8B'],
      name: 'Podcast Aesthetic',
      tags: ['audio brand', 'broadcast design', 'podcast cover', 'sound identity', 'radio visual', 'content creation']
    },
    {
      colors: ['#2CD2E1', '#243665', '#FF8427', '#FFB800', '#37AA9C'],
      name: 'Blog Identity',
      tags: ['editorial design', 'blog aesthetic', 'content palette', 'website theme', 'digital publishing']
    }
  ],
  'Music Genres': [
    {
      colors: ['#FF0039', '#590202', '#B30000', '#FF4D4D', '#FFB3B3'],
      name: 'Rock Revolution',
      tags: ['rock music', 'guitar', 'alternative', 'classic rock', 'band']
    },
    {
      colors: ['#2E0854', '#662D91', '#8B008B', '#CC00CC', '#FF00FF'],
      name: 'Electronic Beat',
      tags: ['electronic', 'synth', 'edm', 'techno', 'dance']
    },
    {
      colors: ['#191414', '#1DB954', '#121212', '#282828', '#404040'],
      name: 'Hip Hop Flow',
      tags: ['hip hop', 'rap', 'urban', 'beats', 'rhythm']
    },
    {
      colors: ['#4B0082', '#0000CD', '#000080', '#191970', '#483D8B'],
      name: 'Jazz Blues',
      tags: ['jazz', 'blues', 'saxophone', 'soul', 'classic']
    },
    {
      colors: ['#8B4513', '#D2691E', '#CD853F', '#DEB887', '#F4A460'],
      name: 'Country Roads',
      tags: ['country', 'folk', 'acoustic', 'traditional', 'americana']
    },
    {
      colors: ['#FF4365', '#8B1E3F', '#3C1742', '#50123C', '#291528'],
      name: 'Metal Storm',
      tags: ['music genres', 'heavy metal', 'headbanging', 'power chords', 'mosh pit']
    },
    {
      colors: ['#45B7D1', '#89D7E8', '#B5E2FF', '#DCF3FF', '#E8F9FF'],
      name: 'Ambient Flow',
      tags: ['music genres', 'atmospheric', 'soundscape', 'meditative', 'ethereal sound']
    },
    {
      colors: ['#FFB941', '#FF9827', '#F67E7D', '#843B62', '#621940'],
      name: 'Latin Groove',
      tags: ['music genres', 'salsa rhythm', 'tropical beat', 'dance fusion', 'percussion']
    },
    {
      colors: ['#84DCC6', '#FFA69E', '#FF686B', '#A5FFD6', '#FFF7F8'],
      name: 'Indie Wave',
      tags: ['music genres', 'alternative sound', 'underground', 'indie rock', 'garage band']
    }
  ],
  'Blockchain': [
    {
      colors: ['#FF9900', '#F7931A', '#4A90E2', '#627EEA', '#23292F'],
      name: 'Bitcoin Core',
      tags: ['bitcoin', 'btc', 'cryptocurrency', 'orange coin', 'digital gold']
    },
    {
      colors: ['#627EEA', '#3C3C3D', '#454A75', '#7A8FE8', '#8A92B2'],
      name: 'Ethereum World',
      tags: ['ethereum', 'eth', 'smart contracts', 'dapps', 'defi']
    },
    {
      colors: ['#1B2631', '#2C3E50', '#34495E', '#5D6D7E', '#85929E'],
      name: 'Smart Contract',
      tags: ['code', 'automation', 'blockchain logic', 'development', 'web3']
    },
    {
      colors: ['#345D9D', '#A9A9A9', '#D3D3D3', '#C0C0C0', '#6E7681'],
      name: 'Litecoin Speed',
      tags: ['litecoin', 'ltc', 'payments', 'fast', 'silver']
    },
    {
      colors: ['#E84142', '#FF3B30', '#FF6B6B', '#FFB4B4', '#FFCDD2'],
      name: 'Cardano Hub',
      tags: ['cardano', 'ada', 'proof of stake', 'blockchain', 'research']
    },
    {
      colors: ['#FFE04E', '#FFC800', '#F2A900', '#E6B800', '#FFCB00'],
      name: 'Dogecoin Fun',
      tags: ['doge', 'meme coin', 'community', 'fun', 'crypto']
    },
    {
      colors: ['#2E8B57', '#3CB371', '#90EE90', '#98FB98', '#006400'],
      name: 'Green Blockchain',
      tags: ['sustainable', 'eco friendly', 'clean energy', 'carbon neutral', 'green tech']
    },
    {
      colors: ['#0052FF', '#1652F0', '#0A46E4', '#2775CA', '#0033FF'],
      name: 'Digital Identity',
      tags: ['identity', 'verification', 'security', 'privacy', 'blockchain id']
    },
    {
      colors: ['#16C784', '#00FF88', '#1CD8D2', '#93EDC7', '#1FA2FF'],
      name: 'DeFi Yield',
      tags: ['defi', 'yield farming', 'liquidity', 'staking', 'pools']
    },
    {
      colors: ['#FF4B2B', '#FF416C', '#853E3E', '#C06C84', '#6C5B7B'],
      name: 'Supply Chain',
      tags: ['logistics', 'tracking', 'transparency', 'inventory', 'blockchain supply']
    },
    {
      colors: ['#4B0082', '#8A2BE2', '#9932CC', '#BA55D3', '#E6E6FA'],
      name: 'NFT Gallery',
      tags: ['digital art', 'collectibles', 'nft marketplace', 'creators', 'ownership']
    },
    {
      colors: ['#2C3E50', '#34495E', '#95A5A6', '#BDC3C7', '#ECF0F1'],
      name: 'Blockchain Game',
      tags: ['gaming', 'play to earn', 'metaverse', 'virtual assets', 'gamefi']
    }
  ],
  'Anime Themes': [
    {
      colors: ['#FF69B4', '#F8C8DC', '#FFB7C5', '#FF1493', '#FF91AF'],
      name: 'Magical Girl',
      tags: ['sailor moon', 'mahou shoujo', 'sparkle', 'kawaii', 'transformation']
    },
    {
      colors: ['#FF4D4D', '#FF0000', '#8B0000', '#DC143C', '#FFE4E1'],
      name: 'Shonen Battle',
      tags: ['dragon ball', 'naruto', 'action', 'fighting', 'power up']
    },
    {
      colors: ['#483D8B', '#6A5ACD', '#7B68EE', '#9370DB', '#E6E6FA'],
      name: 'Ghost in Shell',
      tags: ['cyberpunk', 'sci fi', 'futuristic', 'cyber noir', 'technology']
    },
    {
      colors: ['#98FB98', '#90EE90', '#3CB371', '#2E8B57', '#006400'],
      name: 'Ghibli Nature',
      tags: ['studio ghibli', 'totoro', 'forest spirit', 'natural', 'peaceful']
    },
    {
      colors: ['#FF8C00', '#FFA500', '#FFD700', '#FFFF00', '#F0E68C'],
      name: 'Super Saiyan',
      tags: ['dragon ball z', 'power level', 'aura', 'energy', 'transformation']
    },
    {
      colors: ['#000000', '#DC143C', '#8B0000', '#4B0082', '#2F4F4F'],
      name: 'Dark Titan',
      tags: ['attack on titan', 'dark fantasy', 'dystopian', 'brutal', 'survival']
    },
    {
      colors: ['#FF69B4', '#FFB6C1', '#FFC0CB', '#FF1493', '#DB7093'],
      name: 'Sakura Spring',
      tags: ['cherry blossom', 'romance', 'slice of life', 'school', 'peaceful']
    },
    {
      colors: ['#4169E1', '#1E90FF', '#00BFFF', '#87CEEB', '#B0E0E6'],
      name: 'Your Name Sky',
      tags: ['makoto shinkai', 'sky scenery', 'emotional', 'romantic', 'destiny']
    },
    {
      colors: ['#FFD700', '#FFA500', '#FF8C00', '#FF7F50', '#FF6347'],
      name: 'Demon Slayer',
      tags: ['breathing style', 'sword art', 'supernatural', 'action', 'traditional']
    },
    {
      colors: ['#800080', '#9370DB', '#BA55D3', '#FF00FF', '#FF69B4'],
      name: 'Eva Unit 01',
      tags: ['evangelion', 'mecha', 'psychological', 'apocalyptic', 'deep']
    }
  ],
  'Famous Paintings': [
    {
      colors: ['#794D3E', '#DBC5B5', '#2C231F', '#483732', '#8E766C'],
      name: 'Mona Lisa',
      tags: ['da vinci', 'renaissance', 'portrait', 'iconic', 'mysterious']
    },
    {
      colors: ['#ED4B23', '#F4AB3D', '#7A3232', '#31445E', '#000000'],
      name: 'The Scream',
      tags: ['munch', 'expressionism', 'anxiety', 'dramatic', 'emotional']
    },
    {
      colors: ['#72A8BC', '#97C4D1', '#4E7F8F', '#B6D4DC', '#265F71'],
      name: 'Water Lilies',
      tags: ['monet', 'impressionism', 'garden', 'nature', 'reflection']
    },
    {
      colors: ['#15232B', '#D6A355', '#7A6030', '#EACCA3', '#2E1810'],
      name: 'Girl with Pearl',
      tags: ['vermeer', 'dutch golden age', 'portrait', 'classic', 'light']
  },
    {
      colors: ['#011F4B', '#03396C', '#005B96', '#6497B1', '#FFFFFF'],
      name: 'Great Wave',
      tags: ['hokusai', 'japanese art', 'woodblock', 'ocean', 'iconic']
    },
    {
      colors: ['#B8A088', '#4D4439', '#CEB195', '#8B7355', '#2C241F'],
      name: 'Persistence of Memory',
      tags: ['dali', 'surrealism', 'melting clocks', 'dreamlike', 'desert']
    },
    {
      colors: ['#F9DFD1', '#D4A99F', '#8B1E09', '#E8C4B8', '#956A5D'],
      name: 'Birth of Venus',
      tags: ['botticelli', 'renaissance', 'mythology', 'beauty', 'classical']
    },
    {
      colors: ['#FFB30F', '#FFC928', '#B88A44', '#FFD93D', '#A4892B'],
      name: 'Sunflowers',
      tags: ['van gogh', 'still life', 'yellow', 'floral', 'vibrant']
    },
    {
      colors: ['#2B2B2B', '#404040', '#595959', '#1A1A1A', '#727272'],
      name: 'Guernica',
      tags: ['picasso', 'cubism', 'war', 'monochrome', 'powerful']
    }
  ],
  'Street Foods': [
    {
      colors: ['#E31837', '#FFB627', '#2D9B63', '#FFFFFF', '#313715'],
      name: 'Taco Truck',
      tags: ['mexican street food', 'salsa', 'fresh', 'spicy', 'authentic']
    },
    {
      colors: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#2C2C54', '#95E1D3'],
      name: 'Bangkok Market',
      tags: ['thai street food', 'night market', 'noodles', 'vibrant', 'exotic']
    },
    {
      colors: ['#F2D03B', '#DB3A34', '#084C61', '#FFC857', '#323031'],
      name: 'NYC Hot Dog',
      tags: ['american street food', 'city life', 'classic', 'urban', 'fast food']
    },
    {
      colors: ['#8B2500', '#C35831', '#F4D03F', '#686D2C', '#4A3C32'],
      name: 'Mediterranean Kebab',
      tags: ['turkish food', 'grilled', 'savory', 'aromatic', 'street vendor']
  },
    {
      colors: ['#2B2D42', '#EF233C', '#D80032', '#F8E9E9', '#EDF2F4'],
      name: 'Tokyo Ramen',
      tags: ['japanese street food', 'noodle soup', 'umami', 'cozy', 'late night']
    },
    {
      colors: ['#DAA03D', '#616247', '#A7414A', '#282B28', '#6E8894'],
      name: 'Mumbai Chaat',
      tags: ['indian street food', 'spicy snacks', 'tangy', 'colorful', 'flavorful']
    },
    {
      colors: ['#C6AD8F', '#4B4237', '#7D8471', '#8DB580', '#E6BEAE'],
      name: 'Falafel Stand',
      tags: ['middle eastern', 'vegetarian', 'crispy', 'herbs', 'street classic']
    },
    {
      colors: ['#5C4B51', '#8CBEB2', '#F2EBBF', '#F3B562', '#F06060'],
      name: 'Berlin Currywurst',
      tags: ['german street food', 'sausage', 'curry sauce', 'comfort food', 'traditional']
    }
  ],
  'NBA Teams': [
    {
      colors: ['#CE1141', '#000000', '#FFFFFF', '#BC1141', '#940C30'],
      name: 'Windy City Bulls',
      tags: ['chicago bulls', 'michael jordan', 'windy city', 'legendary', 'dynasty']
    },
    {
      colors: ['#552583', '#FDB927', '#FFFFFF', '#722BAE', '#492667'],
      name: 'Hollywood Lakers',
      tags: ['la lakers', 'showtime', 'hollywood', 'championships', 'purple gold']
    },
    {
      colors: ['#006BB6', '#F58426', '#007AC1', '#F58426', '#FFFFFF'],
      name: 'Big Apple Squad',
      tags: ['ny knicks', 'madison square', 'big apple', 'classic', 'manhattan']
    },
    {
      colors: ['#007A33', '#BA9653', '#FFFFFF', '#008348', '#005737'],
      name: 'Garden Pride',
      tags: ['boston celtics', 'tradition', 'irish', 'parquet', 'dynasty']
    },
    {
      colors: ['#1D428A', '#FFC72C', '#FFFFFF', '#2A5CAA', '#FDB927'],
      name: 'Bay Bombers',
      tags: ['golden state warriors', 'splash brothers', 'bay area', 'dynasty', 'modern']
    },
    {
      colors: ['#98002E', '#F9A01B', '#FFFFFF', '#000000', '#B4975A'],
      name: 'South Beach Heat',
      tags: ['miami heat', 'vice city', 'championship', 'culture', 'wade county']
    },
    {
      colors: ['#00471B', '#EEE1C6', '#0077C0', '#FFFFFF', '#00471B'],
      name: 'Cream City Deer',
      tags: ['milwaukee bucks', 'fear the deer', 'cream city', 'giannis', 'champions']
    },
    {
      colors: ['#006BB6', '#ED174C', '#FFFFFF', '#002B5C', '#BB9754'],
      name: 'Liberty Squad',
      tags: ['philadelphia 76ers', 'process', 'liberty bell', 'historic', 'philly']
    },
    {
      colors: ['#E03A3E', '#C1D32F', '#FFFFFF', '#BA2D3A', '#A1B229'],
      name: 'Peachtree Birds',
      tags: ['atlanta hawks', 'highlight factory', 'peachtree', 'soaring', 'southern']
    },
    {
      colors: ['#5A2D81', '#63727A', '#FFFFFF', '#542582', '#000000'],
      name: 'Capital Royalty',
      tags: ['sacramento kings', 'royalty', 'capital', 'purple', 'california']
    }
  ],
  'Tech Workspace': [
    {
      colors: ['#181818', '#3B4252', '#88C0D0', '#4C566A', '#D8DEE9'],
      name: 'Dark Mode Dev',
      tags: ['coding setup', 'minimal', 'programmer', 'dark theme', 'focused']
    },
    {
      colors: ['#FF61D8', '#00A3FF', '#5EFF6C', '#FFE600', '#FF0F7B'],
      name: 'RGB Battlestation',
      tags: ['gaming setup', 'rgb lights', 'streaming room', 'gamer aesthetic', 'custom pc']
    },
    {
      colors: ['#FFFFFF', '#F5F5F5', '#E0E0E0', '#BDBDBD', '#9E9E9E'],
      name: 'Clean Workspace',
      tags: ['minimalist', 'apple setup', 'productivity', 'clean desk', 'organized']
    },
    {
      colors: ['#2D3436', '#636E72', '#B2BEC3', '#DFE6E9', '#81ECEC'],
      name: 'Creative Studio',
      tags: ['design workspace', 'content creation', 'artist setup', 'dual monitor', 'creative']
    },
    {
      colors: ['#1B1B1D', '#4E4E50', '#950740', '#C3073F', '#6F2232'],
      name: 'Night Coder',
      tags: ['late night', 'coding cave', 'programming', 'hacker aesthetic', 'productive']
    },
    {
      colors: ['#DAE1E7', '#A3B1C6', '#7C8B9E', '#557396', '#3F5872'],
      name: 'Office Pro',
      tags: ['professional', 'work from home', 'business setup', 'ergonomic', 'corporate']
    },
    {
      colors: ['#7400B8', '#6930C3', '#5E60CE', '#5390D9', '#4EA8DE'],
      name: 'Digital Artist',
      tags: ['art station', 'digital drawing', 'creative workspace', 'tablet setup', 'illustration']
    },
    {
      colors: ['#2E1114', '#501B1D', '#64485C', '#83677B', '#ADADAD'],
      name: 'Vintage Tech',
      tags: ['retro setup', 'mechanical keyboard', 'old school', 'classic', 'nostalgia']
    },
    {
      colors: ['#FF3366', '#33CCFF', '#33FF99', '#FFCC33', '#FF99CC'],
      name: 'Generative Flow',
      tags: ['processing', 'algorithmic art', 'code based', 'parametric', 'creative tech', 'creative coding']
    },
    {
      colors: ['#1A1A1D', '#4E4E50', '#950740', '#C3073F', '#6F2232'],
      name: 'Data Visualization',
      tags: ['infographic', 'data art', 'analytics', 'information design', 'visual data', 'creative coding']
    },
    {
      colors: ['#08F7FE', '#09FBD3', '#FE53BB', '#F5D300', '#7122FA'],
      name: 'Interactive Canvas',
      tags: ['reactive art', 'user experience', 'motion graphics', 'digital interaction', 'responsive design', 'creative coding']
    }
  ],
  'Car Brands': [
    {
      colors: ['#CC0000', '#1C1C1C', '#404040', '#8C8C8C', '#FFFFFF'],
      name: 'Premium Sport',
      tags: ['car brands', 'luxury performance', 'aerodynamic', 'track ready', 'elite']
    },
    {
      colors: ['#003366', '#0055A4', '#8B0000', '#FFFFFF', '#C0C0C0'], 
      name: 'Executive Sedan',
      tags: ['car brands', 'business class', 'sophisticated', 'comfort driven', 'prestigious']
    },
    {
      colors: ['#00FF00', '#333333', '#666666', '#999999', '#CCCCCC'],
      name: 'Electric Future',
      tags: ['car brands', 'eco mobility', 'sustainable tech', 'zero emission', 'innovation']
    },
    {
      colors: ['#FFD700', '#000000', '#1A1A1A', '#4D4D4D', '#808080'],
      name: 'Luxury Legend',
      tags: ['car brands', 'heritage design', 'craftsmanship', 'exclusive build', 'timeless']
    },
    {
      colors: ['#FF4400', '#1E1E1E', '#3D3D3D', '#5C5C5C', '#7A7A7A'],
      name: 'Race Heritage',
      tags: ['car brands', 'motorsport dna', 'track inspired', 'performance bred', 'speed']
    },
    {
      colors: ['#006600', '#1A331A', '#336633', '#4D994D', '#66CC66'],
      name: 'Eco Harmony',
      tags: ['car brands', 'green tech', 'nature inspired', 'clean energy', 'environmental']
    },
    {
      colors: ['#0066CC', '#003366', '#336699', '#6699CC', '#99CCFF'],
      name: 'Nordic Design',
      tags: ['car brands', 'scandinavian', 'minimalist auto', 'pure form', 'clarity']
    },
    {
      colors: ['#990000', '#660000', '#CC0000', '#FF0000', '#FF3333'],
      name: 'Italian Passion',
      tags: ['car brands', 'mediterranean', 'racing spirit', 'emotional design', 'dynamic']
    },
    {
      colors: ['#000066', '#000099', '#0000CC', '#0000FF', '#3333FF'],
      name: 'German Precision',
      tags: ['car brands', 'engineered', 'technical excellence', 'structured', 'methodical']
    },
    {
      colors: ['#663300', '#804000', '#994D00', '#B35900', '#CC6600'],
      name: 'British Heritage',
      tags: ['car brands', 'traditional craft', 'bespoke luxury', 'historical', 'refined']
    }
  ],
  'Artisan Crafts': [
    {
      colors: ['#8B4513', '#A0522D', '#CD853F', '#DEB887', '#F5DEB3'],
      name: 'Pottery Studio',
      tags: ['artisan crafts', 'ceramics', 'wheel thrown', 'earthenware', 'handmade']
    },
    {
      colors: ['#4A4A4A', '#6B6B6B', '#8C8C8C', '#ADADAD', '#CECECE'],
      name: 'Metalwork Shop',
      tags: ['artisan crafts', 'forge work', 'blacksmithing', 'hammered', 'metallic']
    },
    {
      colors: ['#722F37', '#9B4B4B', '#C46B5D', '#E18A70', '#FFAA82'],
      name: 'Leather Workshop',
      tags: ['artisan crafts', 'tannery', 'tooled leather', 'saddlery', 'handstitched']
    },
    {
      colors: ['#1B4D3E', '#226F54', '#2F946A', '#3CB880', '#4FDB96'],
      name: 'Glass Blowing',
      tags: ['artisan crafts', 'molten glass', 'blown art', 'transparent', 'luminous']
    },
    {
      colors: ['#BE9B7B', '#D4B59D', '#E9CFBE', '#FFE9E0', '#FFF4ED'],
      name: 'Weaving Loom',
      tags: ['artisan crafts', 'textile art', 'fiber craft', 'traditional weave', 'threadwork']
    },
    {
      colors: ['#4A0404', '#800000', '#B22222', '#DC143C', '#FF0000'],
      name: 'Wood Carving',
      tags: ['artisan crafts', 'woodwork', 'carved detail', 'grain texture', 'sculpted']
    },
    {
      colors: ['#FFB6C1', '#FF69B4', '#FF1493', '#DB7093', '#C71585'],
      name: 'Paper Arts',
      tags: ['artisan crafts', 'origami', 'handmade paper', 'folded art', 'delicate']
    },
    {
      colors: ['#DAA520', '#B8860B', '#CD853F', '#D2691E', '#8B4513'],
      name: 'Jewelry Forge',
      tags: ['artisan crafts', 'metalsmith', 'precious metals', 'gemwork', 'handcrafted']
    },
    {
      colors: ['#006400', '#228B22', '#32CD32', '#90EE90', '#98FB98'],
      name: 'Bamboo Craft',
      tags: ['artisan crafts', 'sustainable', 'eco friendly', 'natural material', 'woven']
    },
    {
      colors: ['#483D8B', '#6A5ACD', '#7B68EE', '#9370DB', '#8A2BE2'],
      name: 'Mosaic Art',
      tags: ['artisan crafts', 'tessellation', 'tile work', 'geometric pattern', 'inlaid']
    }
  ],
  'Botanical Gardens': [
    {
      colors: ['#90EE90', '#98FB98', '#32CD32', '#228B22', '#006400'],
      name: 'Tropical House',
      tags: ['botanical gardens', 'humid climate', 'exotic plants', 'conservatory', 'lush']
    },
    {
      colors: ['#FF69B4', '#FFB6C1', '#FFC0CB', '#FFD700', '#98FB98'],
      name: 'Orchid Display',
      tags: ['botanical gardens', 'rare species', 'flowering', 'delicate bloom', 'exotic']
    },
    {
      colors: ['#2E8B57', '#3CB371', '#66CDAA', '#8FBC8F', '#98FB98'],
      name: 'Fern Valley',
      tags: ['botanical gardens', 'shade plants', 'prehistoric', 'woodland', 'verdant']
    },
    {
      colors: ['#8B4513', '#A0522D', '#6B8E23', '#556B2F', '#228B22'],
      name: 'Desert Garden',
      tags: ['botanical gardens', 'succulent', 'arid climate', 'xeriscaping', 'drought resistant']
    },
    {
      colors: ['#4B0082', '#8A2BE2', '#9932CC', '#9400D3', '#8B008B'],
      name: 'Night Garden',
      tags: ['botanical gardens', 'nocturnal plants', 'moon garden', 'evening bloom', 'fragrant']
    },
    {
      colors: ['#FF4500', '#FF6347', '#FF7F50', '#FF8C00', '#FFA500'],
      name: 'Autumn Walk',
      tags: ['botanical gardens', 'fall foliage', 'seasonal change', 'deciduous', 'colorful']
    },
    {
      colors: ['#FFF5EE', '#FFE4E1', '#FFF0F5', '#F0FFF0', '#F5FFFA'],
      name: 'White Garden',
      tags: ['botanical gardens', 'monochrome plants', 'pure palette', 'elegant design', 'serene']
    },
    {
      colors: ['#4169E1', '#1E90FF', '#00BFFF', '#87CEEB', '#B0E0E6'],
      name: 'Water Gardens',
      tags: ['botanical gardens', 'aquatic plants', 'pond life', 'reflective', 'peaceful']
    },
    {
      colors: ['#FF69B4', '#FF1493', '#C71585', '#DB7093', '#FFB6C1'],
      name: 'Rose Collection',
      tags: ['botanical gardens', 'heritage roses', 'fragrant garden', 'thorned beauty', 'romantic']
    }
  ]
  };
