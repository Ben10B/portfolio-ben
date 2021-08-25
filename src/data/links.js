export const DRAWER_LINKS = [
  {
    id: 'splashscreen',
    label: 'Splash Screen',
    icon: 'power-off',
    href: '#splashscreen',
    lvl2: [
      {
        id: 'showSplash',
        label: 'Show On Load',
        value: true
      },
      {
        id: 'showSplash',
        label: 'Enter On Load',
        value: false
      }
    ]
  },
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
        id: 'background',
        value: 'BG-1',
        label: 'Default'
      },
      {
        id: 'background',
        value: 'BG-2',
        label: 'Leaves'
      },
      {
        id: 'background',
        value: 'BG-3',
        label: 'Wood'
      },
      {
        id: 'background',
        value: 'BG-4',
        label: 'SSJ/SSB Goku'
      },
      {
        id: 'background',
        value: 'BG-5',
        label: 'UI Goku'
      },
      {
        id: 'background',
        value: 'BG-6',
        label: 'Orihime'
      },
      {
        id: 'background',
        value: 'BG-7',
        label: 'Yoruichi'
      },
      {
        id: 'background',
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
    lvl3: true,
    lvl2: [
      {
        id: 'styles',
        label: 'Styles',
        value: 'styles',
        lvl3: [
          {
            id: 'style',
            value: 'HEADER-1',
            label: 'Centered'
          },
          {
            id: 'style',
            value: 'HEADER-2',
            label: 'Left Aligned'
          },
          {
            id: 'style',
            value: 'HEADER-3',
            label: 'Right Aligned'
          },
          {
            id: 'style',
            value: 'HEADER-4',
            label: 'Space Around'
          },
          {
            id: 'style',
            value: 'HEADER-5',
            label: 'Space Between'
          },
          {
            id: 'style',
            value: 'HEADER-6',
            label: 'Space Evenly'
          }
        ]
      },
      {
        id: 'buttonsizes',
        label: 'Button Sizes',
        value: 'buttonsizes',
        lvl3: [
          {
            id: 'buttonsize',
            value: 'BUTTON-1',
            label: 'Default'
          },
          {
            id: 'buttonsize',
            value: 'BUTTON-2',
            label: 'Small'
          },
          {
            id: 'buttonsize',
            value: 'BUTTON-2W',
            label: 'Small & Wide'
          },
          {
            id: 'buttonsize',
            value: 'BUTTON-3',
            label: 'Big'
          },
          {
            id: 'buttonsize',
            value: 'BUTTON-3W',
            label: 'Big & Wide'
          }
        ]
      },
      {
        id: 'buttonstyles',
        label: 'Button Styles',
        value: 'buttonstyles',
        lvl3: [
          {
            id: 'buttonstyle',
            value: 'BTNSTYLE-1',
            label: 'Default'
          },
          {
            id: 'buttonstyle',
            value: 'BTNSTYLE-2',
            label: '2'
          },
          {
            id: 'buttonstyle',
            value: 'BTNSTYLE-3',
            label: '3'
          }
        ]
      }
    ]
  },
  {
    id: 'fightAnime',
    label: 'Fight Animation',
    icon: 'fist-raised',
    href: '#fightAnime',
    lvl2: [
      {
        id: 'fight',
        value: 'DEFAULT-FIGHT',
        label: 'Default'
      },
      {
        id: 'fight',
        value: 'IDLE-FIGHT',
        label: 'Idle'
      },
      {
        id: 'fight',
        value: 'TELEPORT-FIGHT',
        label: 'Teleport'
      },
      {
        id: 'fight',
        value: 'CORNER-FIGHT',
        label: 'Corners'
      },
      {
        id: 'fight',
        value: 'BORDER-FIGHT',
        label: 'Border'
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