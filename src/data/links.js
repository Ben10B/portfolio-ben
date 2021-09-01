export const DRAWER_LINKS = [
  {
    id: 'splashscreen',
    label: 'Splash Screen',
    icon: 'power-off',
    lvl2: [
      {
        id: 'showSplash',
        value: true,
        label: 'Show On Load'
      },
      {
        id: 'showSplash',
        value: false,
        label: 'Enter On Load'
      }
    ]
  },
  {
    id: 'themes',
    label: 'Select Theme',
    icon: 'adjust',
    lvl2: [
      {
        id: 'theme',
        value: 'DARK',
        label: 'Dark'
      },
      {
        id: 'theme',
        value: 'LIGHT',
        label: 'Light'
      }
    ]
  },
  {
    id: 'drawerButton',
    label: 'Drawer Button',
    icon: 'edit',
    lvl2: [
      {
        id: 'drawerBtn',
        value: '',
        label: 'Default'
      },
      {
        id: 'drawerBtn',
        value: 'TOP',
        label: 'Stick to Top'
      },
      {
        id: 'drawerBtn',
        value: 'MIDDLE',
        label: 'Stick to Middle'
      },
      {
        id: 'drawerBtn',
        value: 'BOTTOM',
        label: 'Stick to Bottom'
      },
    ]
  },
  {
    id: 'bgs',
    label: 'Backgrounds',
    icon: 'image',
    lvl2: [
      {
        id: 'background',
        value: 'BG-1',
        label: 'Prism'
      },
      {
        id: 'background',
        value: 'BG-2',
        label: 'Light Webb'
      },
      {
        id: 'background',
        value: 'BG-3',
        label: 'Dark Webb'
      },
      {
        id: 'background',
        value: 'BG-4',
        label: 'Shattered'
      },
      {
        id: 'background',
        value: 'BG-5',
        label: 'Stardust'
      },
      {
        id: 'background',
        value: 'BG-6',
        label: 'Congruent Pentagon'
      },
      {
        id: 'background',
        value: 'BG-7',
        label: 'Funky Lines'
      },
      {
        id: 'background',
        value: 'BG-8',
        label: 'Random Grey'
      },
      {
        id: 'background',
        value: 'BG-9',
        label: 'Hexellence'
      },
      {
        id: 'background',
        value: 'BG-10',
        label: 'Hexabump'
      },
      {
        id: 'background',
        value: 'BG-11',
        label: 'Small Steps'
      },
      {
        id: 'background',
        value: 'BG-12',
        label: 'Wild Oliva'
      },
      {
        id: 'background',
        value: 'BG-CHAR-1',
        label: 'UI Goku'
      },
      {
        id: 'background',
        value: 'BG-CHAR-2',
        label: 'Kid Goku'
      },
      {
        id: 'background',
        value: 'BG-CHAR-3',
        label: 'Orihime'
      },
      {
        id: 'background',
        value: 'BG-CHAR-4',
        label: 'Yoruichi'
      },
      {
        id: 'background',
        value: 'BG-CHAR-5',
        label: 'Fullbring Ichigo'
      }
    ]
  },
  {
    id: 'parallaxes',
    label: 'Parallax',
    icon: 'film',
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
            value: 'PX-11',
            label: 'Mary Crouch'
          },
          {
            id: 'landing',
            value: 'PX-12',
            label: 'Mary Stand'
          },
          {
            id: 'landing',
            value: 'PX-NONE-LANDING',
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
            value: 'PX-NONE-SLIDE',
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
    lvl3: true,
    lvl2: [
      {
        id: 'songs',
        value: 'songs',
        label: 'Songs',
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
        value: 'controls',
        label: 'Controls',
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
    lvl3: true,
    lvl2: [
      {
        id: 'styles',
        value: 'styles',
        label: 'Styles',
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
        value: 'buttonsizes',
        label: 'Button Sizes',
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
        value: 'buttonstyles',
        label: 'Button Styles',
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
    id: 'fight',
    label: 'Fight Animation',
    icon: 'fist-raised',
    lvl3: true,
    lvl2: [
      {
        id: 'choreography',
        value: 'choreography',
        label: 'Choreo',
        lvl3: [
          {
            id: 'choreo',
            value: 'DEFAULT-CHOREO',
            label: 'Default'
          },
          {
            id: 'choreo',
            value: 'DASH-CHOREO',
            label: 'Dash'
          }
        ]
      },
      {
        id: 'anime',
        value: 'anime',
        label: 'Animation',
        lvl3: [
          {
            id: 'animation',
            value: 'DEFAULT-FIGHT',
            label: 'Default'
          },
          {
            id: 'animation',
            value: 'IDLE-FIGHT',
            label: 'Idle'
          },
          {
            id: 'animation',
            value: 'TELEPORT-FIGHT',
            label: 'Teleport'
          },
          {
            id: 'animation',
            value: 'CORNER-FIGHT',
            label: 'Corners'
          },
          {
            id: 'animation',
            value: 'BORDER-FIGHT',
            label: 'Border'
          }
        ]
      }
    ]
  },
];