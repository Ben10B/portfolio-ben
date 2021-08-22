export const DRAWER_LINKS = [
  {
    id: 'themes',
    label: 'Select Theme',
    icon: 'adjust',
    href: '#themes',
    lvl2: [
      {
        id: 'theme',
        label: 'Dark',
        value: 'DARK'
      },
      {
        id: 'theme',
        label: 'Light',
        value: 'LIGHT'
      }
    ]
  },
  {
    id: 'bgs',
    label: 'Backgrounds',
    icon: 'image',
    href: '#bgs',
    lvl2: [
      {
        id: 'bg',
        value: 'BG-1',
        label: 'Default'
      },
      {
        id: 'bg',
        value: 'BG-2',
        label: 'Leaves'
      },
      {
        id: 'bg',
        value: 'BG-3',
        label: 'Wood'
      },
      {
        id: 'bg',
        value: 'BG-4',
        label: 'SSJ/SSB Goku'
      },
      {
        id: 'bg',
        value: 'BG-5',
        label: 'UI Goku'
      },
      {
        id: 'bg',
        value: 'BG-6',
        label: 'Orihime'
      },
      {
        id: 'bg',
        value: 'BG-7',
        label: 'Yoruichi'
      },
      {
        id: 'bg',
        value: 'BG-8',
        label: 'Fullbring Ichigo'
      }
    ]
  },
  {
    id: 'parallaxes',
    label: 'Parallax',
    icon: 'film',
    href: '#parallaxes',
    lvl3: true,
    lvl2: [
      {
        id: 'landings',
        label: 'Landing Section',
        value: 'landings',
        lvl3: [
          {
            id: 'landing',
            value: 'PX-1',
            label: 'Mountaintop (Day)'
          },
          {
            id: 'landing',
            value: 'PX-1B',
            label: 'Mountaintop (Night)'
          },
          {
            id: 'landing',
            value: 'NONE-L',
            label: 'None'
          }
        ]
      },
      {
        id: 'slideshows',
        label: 'Slideshow Section',
        value: 'slideshows',
        lvl3: [
          {
            id: 'slideshow',
            value: 'PX-2',
            label: 'Tree Base'
          },
          {
            id: 'slideshow',
            value: 'PX-3',
            label: 'Waterfall'
          },
          {
            id: 'slideshow',
            value: 'PX-4',
            label: 'Destroyed Bridge'
          },
          {
            id: 'slideshow',
            value: 'PX-5',
            label: 'Gas Station'
          },
          {
            id: 'slideshow',
            value: 'PX-7',
            label: 'Water Fountain'
          },
          {
            id: 'slideshow',
            value: 'PX-8',
            label: 'River'
          },
          {
            id: 'slideshow',
            value: 'PX-10',
            label: 'Dragon Stage'
          },
          {
            id: 'slideshow',
            value: 'NONE-S',
            label: 'None'
          }
        ]
      }
    ]
  },
  {
    id: 'audio',
    label: 'Music',
    icon: 'music',
    href: '#audio',
    lvl3: true,
    lvl2: [
      {
        id: 'songs',
        label: 'Songs',
        value: 'songs',
        lvl3: [
          {
            id: 'song',
            label: "Forgive Her",
            value: "Forgive Her"
          },
          {
            id: 'song',
            label: "Wolf's Milk",
            value: "Wolfs Milk"
          }
        ]
      },
      {
        id: 'controls',
        label: 'Controls',
        value: 'controls',
        lvl3: [
          {
            id: 'control',
            label: 'Show',
            value: 'show'
          },
          {
            id: 'control',
            label: 'Hide',
            value: 'hide'
          }
        ]
      }
    ]
  },
  {
    id: 'header',
    label: 'Header',
    icon: 'bars',
    href: '#header',
    lvl2: [
      {
        id: 'menu',
        value: '1m',
        label: 'Default'
      }
    ]
  },
  {
    id: 'close',
    label: 'Collapse',
    icon: 'times',
    href: '#close'
  },
];