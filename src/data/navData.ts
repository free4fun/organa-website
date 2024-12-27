export const mainNavData = [
    {
      label: 'Home',
      href: 'index.html',
      active: true,
      items: [
        {
          label: 'Landing Page',
          href: 'index.html'
        },
        {
          label: 'Demos',
          href: 'index.html#demos',
          badge: {
            text: 'hot',
            type: 'dark'
          }
        },
        {
          label: 'Classic',
          href: '#',
          items: [
            {
              label: 'Classic - Original',
              href: 'index-classic.html'
            },
            {
              label: 'Classic - Color',
              href: 'index-classic-color.html'
            },
            // ... resto de items clásicos
          ]
        },
        // ... resto de items del menú Home
      ]
    },
    {
      label: 'Elements',
      href: 'elements.html',
      megaMenu: [
        {
          title: 'Elements 1',
          items: [
            {
              label: 'Accordions',
              href: 'elements-accordions.html'
            },
            {
              label: 'Alerts',
              href: 'elements-alerts.html'
            },
            // ... resto de elementos de la primera columna
          ]
        },
        // ... resto de secciones del mega menú
      ]
    },
    // ... resto de items principales
  ];