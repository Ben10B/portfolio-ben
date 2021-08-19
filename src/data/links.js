export const DRAWER_LINKS = [
  {
    id: 'parallaxes',
    label: 'Parallax',
    icon: 'film',
    href: '/#parallaxes',
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
            value: 'PX-10',
            label: 'Dragon Stage'
          },
        ]
      }
    ]
  },
  {
    id: 'bgs',
    label: 'Backgrounds',
    icon: 'images',
    href: '/#bgs',
    lvl2: [
      {
        id: 'bg',
        value: 'BG-1',
        label: '1'
      },
      {
        id: 'bg',
        value: 'BG-2',
        label: '2'
      },
      {
        id: 'bg',
        value: 'BG-3',
        label: '3'
      }
    ]
  },
  {
    id: 'themes',
    label: 'Select Theme',
    icon: 'brush',
    href: '/#themes',
    lvl2: [
      {
        id: 'theme',
        label: 'Default',
        value: '1'
      },
      {
        id: 'theme',
        label: 'Different',
        value: '2'
      }
    ]
  },
  {
    id: 'close',
    label: 'Collapse',
    icon: 'times',
    href: '/#close'
  },
];